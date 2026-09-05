import { useState } from "react";
import MeetingForm from "./MeetingForm";
import { EMAIL } from "../data/meeting";
import socialLinks from "../data/socials";



const contactInfo = [
  { icon: "mail", label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: "location_on", label: "Based in", value: "Chicago, IL · open to remote & relocation" },
  { icon: "schedule", label: "Response time", value: "Usually within a day" },
];

const MessageForm = () => (
  <form action="https://getform.io/f/allldxwa" method="POST">
    <div className="grid gap-4 md:grid-cols-2">
      <div>
        <label htmlFor="name" className="label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="name"
          required
          placeholder="Your name"
          className="text-field"
        />
      </div>
      <div>
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          required
          placeholder="you@example.com"
          className="text-field"
        />
      </div>
    </div>
    <div className="mt-4">
      <label htmlFor="message" className="label">
        Message
      </label>
      <textarea
        name="message"
        id="message"
        placeholder="Role, project or question"
        required
        className="text-field min-h-36 max-h-80 resize-y"
      ></textarea>
    </div>
    <button type="submit" className="btn btn-primary mt-6 w-full !max-w-full">
      Send message
      <span className="material-symbols-rounded">send</span>
    </button>
    <p className="mt-3 text-center text-xs text-ink-500 dark:text-ink-400">
      I typically reply within one business day.
    </p>
  </form>
);

const tabs = [
  { key: "meeting", label: "Request a meeting", icon: "calendar_month" },
  { key: "message", label: "Send a message", icon: "chat_bubble" },
];

const Contact = () => {
  const [tab, setTab] = useState("meeting");

  return (
    <section id="contact" className="section">
      <div
        className="blob -left-32 bottom-0 h-96 w-96 bg-violet-500/20"
        aria-hidden="true"
      />

      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="reveal flex flex-col">
            <span className="eyebrow">05 — Contact</span>
            <h2 className="headline-2 mt-4">
              Get in <span className="text-gradient">touch</span>
            </h2>
            <p className="lead mt-4 max-w-[42ch]">
              Open to software engineering, full-stack and AI roles where
              reliable systems drive measurable outcomes. Book a call or send a
              message below.
            </p>

            <ul className="mt-8 space-y-3">
              {contactInfo.map(({ icon, label, value, href }) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-ink-200/80 bg-white/70 text-brand-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-brand-300">
                    <span className="material-symbols-rounded text-[20px]">
                      {icon}
                    </span>
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wider text-ink-500 dark:text-ink-400">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="block truncate text-sm font-medium text-ink-900 hover:text-brand-600 dark:text-ink-50 dark:hover:text-brand-300"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-ink-900 dark:text-ink-50">
                        {value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-ink-200/80 bg-white/70 text-brand-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-brand-300">
                  <span className="material-symbols-rounded text-[20px]">
                    description
                  </span>
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wider text-ink-500 dark:text-ink-400">
                    Résumé
                  </p>
                  <a
                    href="/files/resume.pdf"
                    download
                    className="block text-sm font-medium text-ink-900 hover:text-brand-600 dark:text-ink-50 dark:hover:text-brand-300"
                  >
                    Download PDF
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-auto flex items-center gap-2 pt-10">
              {socialLinks.map(({ href, icon, alt }) => (
                <a
                  key={alt}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={alt}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-ink-200/80 bg-white/70 text-ink-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-ink-200 dark:hover:border-brand-400/50 dark:hover:text-brand-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div
            className="card reveal overflow-hidden"
            style={{ transitionDelay: "120ms" }}
          >
            <div
              className="grid grid-cols-2 border-b border-ink-200/70 bg-ink-50/60 p-1.5 dark:border-white/[0.06] dark:bg-white/[0.02]"
              role="tablist"
            >
              {tabs.map(({ key, label, icon }) => (
                <button
                  key={key}
                  role="tab"
                  aria-selected={tab === key}
                  onClick={() => setTab(key)}
                  className={`inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors ${
                    tab === key
                      ? "bg-white text-ink-900 shadow-card dark:bg-ink-900 dark:text-white"
                      : "text-ink-500 hover:text-ink-900 dark:text-ink-400 dark:hover:text-white"
                  }`}
                >
                  <span className="material-symbols-rounded text-[18px]">
                    {icon}
                  </span>
                  <span className="hidden sm:inline">{label}</span>
                  <span className="sm:hidden">
                    {key === "meeting" ? "Meeting" : "Message"}
                  </span>
                </button>
              ))}
            </div>
            <div className="p-6 sm:p-8">
              {tab === "meeting" ? <MeetingForm /> : <MessageForm />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
