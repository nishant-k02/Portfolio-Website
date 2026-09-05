import { useState } from "react";
import MeetingForm from "./MeetingForm";
import { EMAIL } from "../data/meeting";

const socialLinks = [
  {
    href: "https://www.github.com/nishant-k02",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C6.48603 2 2 6.48604 2 12C2 17.514 6.48603 22 12 22C17.514 22 22 17.514 22 12C22 6.48604 17.514 2 12 2ZM12 3.5C16.7033 3.5 20.5 7.2967 20.5 12C20.5 15.8327 17.9785 19.0613 14.5 20.126V17.5684C14.5 16.6133 13.9497 15.7943 13.1543 15.3867C13.9276 15.2388 14.6457 14.9454 15.249 14.5309C15.8522 14.1165 16.3232 13.5929 16.6228 13.0037C16.9224 12.4145 17.0421 11.7765 16.9718 11.1429C16.9015 10.5093 16.6434 9.89818 16.2188 9.36035C16.4405 8.67771 16.6883 7.48034 16.0996 6.53809C14.9647 6.53809 14.2323 7.31604 13.8828 7.7998C13.2853 7.60352 12.6459 7.5017 12 7.5C11.3537 7.50057 10.7136 7.60139 10.1152 7.79688C9.76487 7.31289 9.03311 6.53809 7.90039 6.53809C7.22486 7.61941 7.64246 8.78228 7.86621 9.25684C7.41288 9.79235 7.12862 10.4078 7.03781 11.0505C6.94699 11.6931 7.05233 12.3438 7.34478 12.9468C7.63723 13.5498 8.10809 14.087 8.71698 14.5124C9.32587 14.9379 10.0546 15.2389 10.8408 15.3896C10.1877 15.7262 9.69864 16.337 9.54883 17.0781H8.8916C8.2431 17.0781 7.99112 16.8146 7.64062 16.3701C7.29463 15.9256 6.92259 15.6269 6.47559 15.5029C6.23459 15.4774 6.07223 15.6607 6.28223 15.8232C6.99173 16.3062 7.0407 17.0968 7.3252 17.6143C7.5842 18.0803 8.11484 18.5 8.71484 18.5H9.5V20.126C6.02153 19.0613 3.5 15.8327 3.5 12C3.5 7.2967 7.29669 3.5 12 3.5Z"
          fill="currentColor"
        />
      </svg>
    ),
    alt: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/nishant-khandhar",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.75 3C4.24011 3 3 4.24011 3 5.75V18.25C3 19.7599 4.24011 21 5.75 21H18.25C19.7599 21 21 19.7599 21 18.25V5.75C21 4.24011 19.7599 3 18.25 3H5.75ZM5.75 4.5H18.25C18.9491 4.5 19.5 5.05089 19.5 5.75V18.25C19.5 18.9491 18.9491 19.5 18.25 19.5H5.75C5.05089 19.5 4.5 18.9491 4.5 18.25V5.75C4.5 5.05089 5.05089 4.5 5.75 4.5ZM7.75 6.5C7.41848 6.5 7.10054 6.6317 6.86612 6.86612C6.6317 7.10054 6.5 7.41848 6.5 7.75C6.5 8.08152 6.6317 8.39946 6.86612 8.63388C7.10054 8.8683 7.41848 9 7.75 9C8.08152 9 8.39946 8.8683 8.63388 8.63388C8.8683 8.39946 9 8.08152 9 7.75C9 7.41848 8.8683 7.10054 8.63388 6.86612C8.39946 6.6317 8.08152 6.5 7.75 6.5ZM7 10C6.7235 10 6.5 10.2235 6.5 10.5V17C6.5 17.2765 6.7235 17.5 7 17.5H8.5C8.7765 17.5 9 17.2765 9 17V10.5C9 10.2235 8.7765 10 8.5 10H7ZM10.5 10C10.2235 10 10 10.2235 10 10.5V17C10 17.2765 10.2235 17.5 10.5 17.5H12C12.2765 17.5 12.5 17.2765 12.5 17V13.25C12.5 12.5605 13.0605 12 13.75 12C14.4395 12 15 12.5605 15 13.25V17C15 17.2765 15.2235 17.5 15.5 17.5H17C17.2765 17.5 17.5 17.2765 17.5 17V13C17.5 11.3455 16.1545 10 14.5 10C13.731 10 13.0315 10.293 12.5 10.7705V10.5C12.5 10.2235 12.2765 10 12 10H10.5Z"
          fill="currentColor"
        />
      </svg>
    ),
    alt: "LinkedIn",
  },
  {
    href: "https://x.com/nishantsk2002",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.25 3C4.46403 3 3 4.46403 3 6.25V17.75C3 19.536 4.46403 21 6.25 21H17.75C19.536 21 21 19.536 21 17.75V6.25C21 4.46403 19.536 3 17.75 3H6.25ZM6.25 4.5H17.75C18.725 4.5 19.5 5.27497 19.5 6.25V17.75C19.5 18.725 18.725 19.5 17.75 19.5H6.25C5.27497 19.5 4.5 18.725 4.5 17.75V6.25C4.5 5.27497 5.27497 4.5 6.25 4.5ZM6.91406 7L10.7822 12.5283L6.91113 17H7.93262L11.2344 13.1758L13.9102 17H17.1289L13.0127 11.1172L16.5684 7H15.5684L12.5615 10.4717L10.1328 7H6.91406ZM8.46777 7.84766H9.74902L15.5752 16.1523H14.2939L8.46777 7.84766Z"
          fill="currentColor"
        />
      </svg>
    ),
    alt: "Twitter X",
  },
  {
    href: "https://www.instagram.com/nishant_k02",
    icon: (
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.75 2.5C5.58319 2.5 3 5.08319 3 8.25V15.75C3 18.9164 5.5831 21.5 8.75 21.5H16.25C19.4165 21.5 22 18.9165 22 15.75V8.25C22 5.0831 19.4164 2.5 16.25 2.5H8.75ZM8.75 4H16.25C18.6056 4 20.5 5.8939 20.5 8.25V15.75C20.5 18.1055 18.6055 20 16.25 20H8.75C6.3939 20 4.5 18.1056 4.5 15.75V8.25C4.5 5.89381 6.39381 4 8.75 4ZM17.5 6C16.9475 6 16.5 6.4475 16.5 7C16.5 7.5525 16.9475 8 17.5 8C18.0525 8 18.5 7.5525 18.5 7C18.5 6.4475 18.0525 6 17.5 6ZM12.5 7C9.74759 7 7.5 9.24759 7.5 12C7.5 14.7524 9.74759 17 12.5 17C15.2524 17 17.5 14.7524 17.5 12C17.5 9.24759 15.2524 7 12.5 7ZM12.5 8.5C14.4416 8.5 16 10.0584 16 12C16 13.9416 14.4416 15.5 12.5 15.5C10.5584 15.5 9 13.9416 9 12C9 10.0584 10.5584 8.5 12.5 8.5Z"
          fill="currentColor"
        />
      </svg>
    ),
    alt: "Instagram",
  },
];

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
        placeholder="Tell me about your project or role…"
        required
        className="text-field min-h-36 max-h-80 resize-y"
      ></textarea>
    </div>
    <button type="submit" className="btn btn-primary mt-6 w-full !max-w-full">
      Send message
      <span className="material-symbols-rounded">send</span>
    </button>
    <p className="mt-3 text-center text-xs text-ink-500 dark:text-ink-400">
      I&apos;ll get back to you as soon as I can.
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
              Let&apos;s build something{" "}
              <span className="text-gradient">together</span>
            </h2>
            <p className="lead mt-4 max-w-[42ch]">
              I&apos;m interested in software engineering, full-stack and AI
              roles where reliable systems change real outcomes. Book a call or
              drop me a note.
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
