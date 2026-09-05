/**
 * Timezone-safe calendar helpers.
 *
 * Slots are chosen as wall-clock times in the host's timezone (Central),
 * then converted to a real UTC instant so Google / Outlook / .ics all
 * land on the same moment regardless of where the visitor is.
 */

/** Milliseconds a timezone is offset from UTC at a given instant. */
const tzOffsetMs = (date, timeZone) => {
  const dtf = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const parts = Object.fromEntries(dtf.formatToParts(date).map((p) => [p.type, p.value]));
  const asUTC = Date.UTC(
    Number(parts.year),
    Number(parts.month) - 1,
    Number(parts.day),
    Number(parts.hour) % 24,
    Number(parts.minute),
    Number(parts.second),
  );
  return asUTC - date.getTime();
};

/** "2026-09-10" + "14:30" in `timeZone` -> the matching UTC Date. */
export const zonedToUtc = (dateStr, timeStr, timeZone) => {
  const [y, m, d] = dateStr.split("-").map(Number);
  const [hh, mm] = timeStr.split(":").map(Number);
  const naive = Date.UTC(y, m - 1, d, hh, mm, 0);
  let utc = naive;
  // Two passes settle DST boundaries.
  for (let i = 0; i < 2; i += 1) {
    utc = naive - tzOffsetMs(new Date(utc), timeZone);
  }
  return new Date(utc);
};

export const localTimeZone = () => {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
    return "UTC";
  }
};

export const formatInZone = (date, timeZone, opts = {}) =>
  new Intl.DateTimeFormat("en-US", { timeZone, ...opts }).format(date);

export const shortZoneName = (date, timeZone) => {
  const part = new Intl.DateTimeFormat("en-US", { timeZone, timeZoneName: "short" })
    .formatToParts(date)
    .find((p) => p.type === "timeZoneName");
  return part ? part.value : timeZone;
};

/** 20260910T143000Z */
const toICSStamp = (date) => date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

const escapeICS = (s) => String(s).replace(/([,;\\])/g, "\\$1").replace(/\n/g, "\\n");

/** RFC 5545 §3.1: content lines must be folded at 75 octets. */
const foldICSLine = (line) => {
  const enc = new TextEncoder();
  if (enc.encode(line).length <= 75) return line;
  const out = [];
  let cur = "";
  let bytes = 0;
  for (const ch of line) {
    const size = enc.encode(ch).length;
    // continuation lines start with a space, which costs one octet
    if (bytes + size > (out.length === 0 ? 75 : 74)) {
      out.push(cur);
      cur = "";
      bytes = 0;
    }
    cur += ch;
    bytes += size;
  }
  if (cur) out.push(cur);
  return out.join("\r\n ");
};

export const googleCalendarUrl = ({ title, details, start, end, location = "" }) => {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${toICSStamp(start)}/${toICSStamp(end)}`,
    details,
    location,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

export const outlookCalendarUrl = ({ title, details, start, end, location = "" }) => {
  const params = new URLSearchParams({
    path: "/calendar/action/compose",
    rru: "addevent",
    subject: title,
    body: details,
    startdt: start.toISOString(),
    enddt: end.toISOString(),
    location,
  });
  return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`;
};

export const buildICS = ({
  title,
  details,
  start,
  end,
  organizerEmail,
  attendeeEmail,
  location = "",
}) =>
  [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//nishant-khandhar//Meeting Request//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:REQUEST",
    "BEGIN:VEVENT",
    `UID:${toICSStamp(start)}-${Math.random().toString(36).slice(2)}@nishant-khandhar`,
    `DTSTAMP:${toICSStamp(new Date())}`,
    `DTSTART:${toICSStamp(start)}`,
    `DTEND:${toICSStamp(end)}`,
    `SUMMARY:${escapeICS(title)}`,
    `DESCRIPTION:${escapeICS(details)}`,
    location ? `LOCATION:${escapeICS(location)}` : "",
    `ORGANIZER;CN=Nishant Khandhar:mailto:${organizerEmail}`,
    attendeeEmail
      ? `ATTENDEE;CUTYPE=INDIVIDUAL;ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;RSVP=TRUE:mailto:${attendeeEmail}`
      : "",
    "STATUS:TENTATIVE",
    "END:VEVENT",
    "END:VCALENDAR",
  ]
    .filter(Boolean)
    .map(foldICSLine)
    .join("\r\n");

export const downloadICS = (ics, filename = "meeting.ics") => {
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
};
