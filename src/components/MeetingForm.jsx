import { useMemo, useState } from "react";
import {
  BOOKING_URL,
  VIDEO_LINK,
  EMAIL,
  HOST_NAME,
  HOST_TIMEZONE,
  HOST_TIMEZONE_LABEL,
  WORK_START,
  WORK_END,
  SLOT_MINUTES,
  MEETING_MINUTES,
  MIN_DAYS_AHEAD,
  MAX_DAYS_AHEAD,
  FORM_ENDPOINT,
} from "../data/meeting";
import {
  zonedToUtc,
  localTimeZone,
  formatInZone,
  shortZoneName,
  googleCalendarUrl,
  outlookCalendarUrl,
  buildICS,
  downloadICS,
} from "../utils/calendar";

/* ── helpers ─────────────────────────────────────────────────────────── */

/** Local calendar date as YYYY-MM-DD (toISOString would shift by the UTC offset). */
const toISODate = (d) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

const dateBounds = () => {
  const min = new Date();
  min.setDate(min.getDate() + MIN_DAYS_AHEAD);
  const max = new Date();
  max.setDate(max.getDate() + MAX_DAYS_AHEAD);
  return { min: toISODate(min), max: toISODate(max) };
};

const buildSlots = () => {
  const [sh, sm] = WORK_START.split(":").map(Number);
  const [eh, em] = WORK_END.split(":").map(Number);
  const slots = [];
  for (
    let t = sh * 60 + sm;
    t + MEETING_MINUTES <= eh * 60 + em;
    t += SLOT_MINUTES
  ) {
    slots.push(
      `${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`,
    );
  }
  return slots;
};

const isWeekend = (isoDate) => {
  const [y, m, d] = isoDate.split("-").map(Number);
  const day = new Date(Date.UTC(y, m - 1, d)).getUTCDay();
  return day === 0 || day === 6;
};

/**
 * Google appointment-schedule pages only render inside an iframe when
 * `gv=true` is present; Cal.com and Calendly embed as-is.
 */
const toEmbedUrl = (url) => {
  try {
    const u = new URL(url);
    if (u.hostname.endsWith("calendar.google.com")) {
      // "/u/0/" is the signed-in owner's view and refuses to be framed.
      u.pathname = u.pathname.replace(/\/u\/\d+\//, "/");
      u.searchParams.set("gv", "true");
    }
    return u.toString();
  } catch {
    return url;
  }
};

/** A fresh, unguessable Jitsi room when no permanent link is configured. */
const makeVideoLink = (guestName) => {
  if (VIDEO_LINK) return VIDEO_LINK;
  const slug = String(guestName || "guest")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 24);
  const token =
    typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID().replace(/-/g, "").slice(0, 12)
      : Math.random().toString(36).slice(2, 14);
  return `https://meet.jit.si/nishant-${slug || "guest"}-${token}`;
};

const nextWeekday = () => {
  const d = new Date();
  d.setDate(d.getDate() + MIN_DAYS_AHEAD);
  while (d.getDay() === 0 || d.getDay() === 6) d.setDate(d.getDate() + 1);
  return toISODate(d);
};

/* ── component ───────────────────────────────────────────────────────── */

const MeetingForm = () => {
  const bounds = useMemo(dateBounds, []);
  const slots = useMemo(buildSlots, []);
  const visitorZone = useMemo(localTimeZone, []);

  const [date, setDate] = useState(nextWeekday);
  const [slot, setSlot] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    purpose: "",
    notes: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | done | error
  const [booked, setBooked] = useState(null);
  const [copied, setCopied] = useState(false);
  const [embedFailed, setEmbedFailed] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const weekend = date ? isWeekend(date) : false;
  const differentZone = visitorZone && visitorZone !== HOST_TIMEZONE;

  const slotTimes = useMemo(() => {
    if (!date || weekend) return [];
    return slots.map((time) => {
      const start = zonedToUtc(date, time, HOST_TIMEZONE);
      return {
        time,
        start,
        host: formatInZone(start, HOST_TIMEZONE, {
          hour: "numeric",
          minute: "2-digit",
        }),
        local: formatInZone(start, visitorZone, {
          hour: "numeric",
          minute: "2-digit",
        }),
      };
    });
  }, [date, weekend, slots, visitorZone]);

  const buildEvent = (videoLink) => {
    const start = zonedToUtc(date, slot, HOST_TIMEZONE);
    const end = new Date(start.getTime() + MEETING_MINUTES * 60000);
    const title = `${form.purpose || "Intro call"} — ${form.name} & ${HOST_NAME}`;
    const details =
      `${MEETING_MINUTES}-minute call requested via nishantkhandhar.com\n\n` +
      `Join: ${videoLink}\n\n` +
      `Guest: ${form.name} (${form.email})\n` +
      `Topic: ${form.purpose}\n` +
      (form.notes ? `Notes: ${form.notes}\n` : "") +
      `\nThis time is a request until ${HOST_NAME} confirms by email.`;
    return { start, end, title, details };
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!slot) return;

    const videoLink = makeVideoLink(form.name);
    const { start, end, title, details } = buildEvent(videoLink);
    const gcal = googleCalendarUrl({ title, details, start, end, location: videoLink });
    const outlook = outlookCalendarUrl({ title, details, start, end, location: videoLink });
    const ics = buildICS({
      title,
      details,
      start,
      end,
      organizerEmail: EMAIL,
      attendeeEmail: form.email,
      location: videoLink,
    });

    const humanTime = `${formatInZone(start, HOST_TIMEZONE, {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    })} ${shortZoneName(start, HOST_TIMEZONE)}`;

    setStatus("sending");

    const payload = new FormData();
    payload.append("name", form.name);
    payload.append("email", form.email);
    payload.append("subject", `Meeting request — ${form.purpose}`);
    payload.append("purpose", form.purpose);
    payload.append("requested_time", humanTime);
    payload.append("requested_time_utc", start.toISOString());
    payload.append("guest_timezone", visitorZone);
    payload.append("notes", form.notes);
    payload.append("meeting_link", videoLink);
    payload.append("add_to_google_calendar", gcal);
    payload.append(
      "message",
      `${form.name} (${form.email}) requested a ${MEETING_MINUTES}-minute call.\n\n` +
        `When: ${humanTime}\nTopic: ${form.purpose}\n` +
        (form.notes ? `Notes: ${form.notes}\n` : "") +
        `Guest timezone: ${visitorZone}\n\n` +
        `Join link: ${videoLink}\nAdd to your calendar: ${gcal}`,
    );

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Request failed");
      setBooked({ humanTime, start, gcal, outlook, ics, videoLink });
      setStatus("done");
    } catch {
      // Fall back to email so the request still reaches Nishant.
      const body = encodeURIComponent(
        `Hi ${HOST_NAME},\n\nI'd like to book a ${MEETING_MINUTES}-minute call.\n\n` +
          `Name: ${form.name}\nEmail: ${form.email}\nTopic: ${form.purpose}\n` +
          `When: ${humanTime}\n${form.notes ? `Notes: ${form.notes}\n` : ""}` +
          `\nJoin link: ${videoLink}\nAdd to calendar: ${gcal}\n`,
      );
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
        `Meeting request — ${form.purpose}`,
      )}&body=${body}`;
      setBooked({ humanTime, start, gcal, outlook, ics, videoLink });
      setStatus("done");
    }
  };

  /* ── external scheduler ────────────────────────────────────────────── */
  if (BOOKING_URL) {
    return (
      <div>
        <div className="mb-4 flex items-start gap-3 rounded-2xl border border-emerald-300/60 bg-emerald-50/70 p-4 dark:border-emerald-400/20 dark:bg-emerald-400/10">
          <span className="material-symbols-rounded text-[22px] text-emerald-600 dark:text-emerald-300">
            event_available
          </span>
          <div>
            <p className="text-sm font-semibold">Pick a time that works</p>
            <p className="text-xs text-ink-600 dark:text-ink-300">
              Live availability from my calendar — booked instantly, with the
              invite and video link included.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-ink-200/70 bg-white dark:border-white/[0.06]">
          <iframe
            src={toEmbedUrl(BOOKING_URL)}
            title="Book a meeting"
            className="h-[640px] w-full"
            loading="lazy"
            onError={() => setEmbedFailed(true)}
          />
        </div>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn mt-4 w-full !max-w-full ${embedFailed ? "btn-primary" : "btn-outline"}`}
        >
          {embedFailed ? "Open the booking page" : "Trouble booking? Open in a new tab"}
          <span className="material-symbols-rounded">arrow_outward</span>
        </a>
      </div>
    );
  }

  /* ── confirmation ──────────────────────────────────────────────────── */
  if (status === "done" && booked) {
    return (
      <div className="text-center">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-gradient text-white shadow-glow-sm">
          <span className="material-symbols-rounded text-[28px]">
            event_available
          </span>
        </span>
        <h3 className="mt-4 font-display text-xl font-semibold">
          Request sent
        </h3>
        <p className="mx-auto mt-2 max-w-[42ch] text-sm text-ink-600 dark:text-ink-300">
          I&apos;ll confirm{" "}
          <span className="font-medium text-ink-900 dark:text-ink-50">
            {booked.humanTime}
          </span>{" "}
          by email shortly. Add it to your calendar so it&apos;s already there:
        </p>

        {differentZone && (
          <p className="mt-2 text-xs text-ink-500 dark:text-ink-400">
            That&apos;s{" "}
            {formatInZone(booked.start, visitorZone, {
              weekday: "short",
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit",
            })}{" "}
            {shortZoneName(booked.start, visitorZone)} your time.
          </p>
        )}

        <div className="mt-5 rounded-2xl border border-ink-200/70 bg-white/70 p-4 text-left dark:border-white/[0.06] dark:bg-white/[0.03]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-rounded text-[18px] text-brand-500">videocam</span>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500 dark:text-ink-400">
              Video call link
            </p>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <a
              href={booked.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-0 flex-1 truncate text-sm font-medium text-brand-600 underline decoration-brand-400/50 underline-offset-4 hover:text-brand-700 dark:text-brand-300 dark:hover:text-brand-200"
            >
              {booked.videoLink.replace(/^https?:\/\//, "")}
            </a>
            <button
              type="button"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(booked.videoLink);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                } catch {
                  /* clipboard unavailable — the link is visible above */
                }
              }}
              aria-label="Copy meeting link"
              className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-ink-200 text-ink-600 transition-colors hover:border-brand-300 hover:text-brand-600 dark:border-white/10 dark:text-ink-300 dark:hover:border-brand-400/50 dark:hover:text-brand-300"
            >
              <span className="material-symbols-rounded text-[16px]">{copied ? "check" : "content_copy"}</span>
            </button>
          </div>
          <p className="mt-2 text-xs text-ink-500 dark:text-ink-400">
            It&apos;s in the calendar entry too — no app or account needed to join.
          </p>
        </div>

        <div className="mt-4 grid gap-2 sm:grid-cols-3">
          <a
            href={booked.gcal}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline w-full !max-w-full"
          >
            Google
          </a>
          <a
            href={booked.outlook}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline w-full !max-w-full"
          >
            Outlook
          </a>
          <button
            type="button"
            onClick={() => downloadICS(booked.ics, "meeting-with-nishant.ics")}
            className="btn btn-outline w-full !max-w-full"
          >
            Apple / .ics
          </button>
        </div>

        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setBooked(null);
            setSlot("");
          }}
          className="mt-6 text-sm font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-300 dark:hover:text-brand-200"
        >
          Request another time
        </button>
      </div>
    );
  }

  /* ── booking form ──────────────────────────────────────────────────── */
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-5 flex items-start gap-3 rounded-2xl border border-emerald-300/60 bg-emerald-50/70 p-4 dark:border-emerald-400/20 dark:bg-emerald-400/10">
        <span className="material-symbols-rounded text-[22px] text-emerald-600 dark:text-emerald-300">
          event_available
        </span>
        <div>
          <p className="text-sm font-semibold">Recruiter &amp; intro calls</p>
          <p className="text-xs text-ink-600 dark:text-ink-300">
            Weekdays · {WORK_START.replace(":00", "")}:00 AM – 5:00 PM{" "}
            {HOST_TIMEZONE_LABEL} · {MEETING_MINUTES} min
          </p>
          <p className="mt-1 text-xs text-ink-500 dark:text-ink-400">
            Times aren&apos;t checked against my calendar yet — I&apos;ll confirm
            or offer the nearest free slot.
          </p>
        </div>
      </div>

      {/* Date */}
      <div>
        <label htmlFor="m-date" className="label">
          Pick a day
        </label>
        <input
          id="m-date"
          type="date"
          required
          min={bounds.min}
          max={bounds.max}
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            setSlot("");
          }}
          className="text-field"
        />
        {weekend && (
          <p className="mt-2 text-xs text-amber-600 dark:text-amber-400">
            That&apos;s a weekend - please pick a weekday.
          </p>
        )}
      </div>

      {/* Slots */}
      {!weekend && date && (
        <div className="mt-4">
          <div className="mb-2 flex items-baseline justify-between">
            <span className="label mb-0">Pick a time</span>
            <span className="text-[11px] text-ink-500 dark:text-ink-400">
              {differentZone
                ? `${HOST_TIMEZONE_LABEL} · your time`
                : HOST_TIMEZONE_LABEL}
            </span>
          </div>
          <div
            role="radiogroup"
            aria-label="Available times"
            className="grid max-h-56 grid-cols-2 gap-2 overflow-y-auto pr-1 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-ink-300 dark:scrollbar-thumb-ink-700 sm:grid-cols-3"
          >
            {slotTimes.map(({ time, host, local }) => {
              const active = slot === time;
              return (
                <button
                  key={time}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => setSlot(time)}
                  className={`rounded-xl border px-2 py-2 text-center transition-all ${
                    active
                      ? "border-transparent bg-brand-gradient text-white shadow-glow-sm"
                      : "border-ink-200 bg-white/60 text-ink-800 hover:-translate-y-0.5 hover:border-brand-300 dark:border-white/[0.06] dark:bg-white/[0.03] dark:text-ink-100 dark:hover:border-brand-400/40"
                  }`}
                >
                  <span className="block text-sm font-semibold">{host}</span>
                  {differentZone && (
                    <span
                      className={`block text-[10px] ${active ? "text-white/80" : "text-ink-500 dark:text-ink-400"}`}
                    >
                      {local} local
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Details */}
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="m-name" className="label">
            Name
          </label>
          <input
            id="m-name"
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Your name"
            autoComplete="name"
            className="text-field"
          />
        </div>
        <div>
          <label htmlFor="m-email" className="label">
            Work email
          </label>
          <input
            id="m-email"
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            placeholder="you@company.com"
            autoComplete="email"
            className="text-field"
          />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="m-purpose" className="label">
          What&apos;s it about?
        </label>
        <input
          id="m-purpose"
          required
          value={form.purpose}
          onChange={update("purpose")}
          placeholder="Role, team, or topic"
          className="text-field"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="m-notes" className="label">
          Anything else{" "}
          <span className="font-normal text-ink-400">(optional)</span>
        </label>
        <textarea
          id="m-notes"
          value={form.notes}
          onChange={update("notes")}
          placeholder="Links, context, questions…"
          className="text-field max-h-40 min-h-20 resize-y"
        />
      </div>

      <button
        type="submit"
        disabled={!slot || weekend || status === "sending"}
        className="btn btn-primary mt-6 w-full !max-w-full disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === "sending"
          ? "Sending…"
          : slot
            ? "Request this time"
            : "Pick a time above"}
        {status !== "sending" && (
          <span className="material-symbols-rounded">arrow_forward</span>
        )}
      </button>
      <p className="mt-3 text-center text-xs text-ink-500 dark:text-ink-400">
        You&apos;ll get a video call link and calendar invite right away — I confirm the slot by email.
      </p>
    </form>
  );
};

export default MeetingForm;
