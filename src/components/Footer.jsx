import { ButtonPrimary } from "./Button";

const sitemap = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#education-experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "GitHub", href: "https://www.github.com/nishant-k02" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nishant-khandhar" },
  { label: "Twitter X", href: "https://x.com/nishantsk2002" },
  { label: "Instagram", href: "https://www.instagram.com/nishant_k02" },
];

const Footer = () => {
  return (
    <footer className="relative pt-16 lg:pt-24">
      <div className="container">
        {/* CTA */}
        <div className="card relative overflow-hidden p-8 sm:p-12">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-gradient opacity-30 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-violet-500/30 blur-3xl" aria-hidden="true" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <span className="eyebrow">Open to opportunities</span>
              <h2 className="headline-1 mt-4 !text-4xl lg:!text-5xl">
                Let&apos;s work <span className="text-gradient">together</span> today!
              </h2>
              <p className="lead mt-4 max-w-[46ch]">
                Have a role, a product idea or a problem worth solving? I&apos;d
                love to hear about it.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <ButtonPrimary
                href="mailto:nishantkhandhar.us@gmail.com"
                label="Start a Project"
                icon="chevron_right"
              />
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <a href="#home" className="flex items-center gap-3">
              <img
                src="/images/logo.svg"
                width={36}
                height={36}
                alt="Logo"
                className="brightness-0 transition-all duration-300 dark:brightness-100"
              />
              <span className="font-display text-lg font-semibold tracking-tight">
                Nishant Khandhar
              </span>
            </a>
            <p className="mt-4 max-w-[36ch] text-sm leading-relaxed text-ink-600 dark:text-ink-300">
              Software Engineer building full‑stack products and AI‑driven
              systems. Based in Chicago, IL.
            </p>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-400">
              Sitemap
            </p>
            <ul className="space-y-2">
              {sitemap.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-ink-700 transition-colors hover:text-brand-600 dark:text-ink-200 dark:hover:text-brand-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-400">
              Socials
            </p>
            <ul className="space-y-2">
              {socials.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-ink-700 transition-colors hover:text-brand-600 dark:text-ink-200 dark:hover:text-brand-300"
                  >
                    {label}
                    <span className="material-symbols-rounded text-[14px]">arrow_outward</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="divider" />
        <div className="flex flex-col items-center justify-between gap-3 py-6 pb-20 text-xs text-ink-500 dark:text-ink-400 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-medium text-ink-800 dark:text-ink-100">Nishant Khandhar</span>. All
            rights reserved.
          </p>
          <p>Built with React, Vite &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
