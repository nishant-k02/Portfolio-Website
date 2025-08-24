import React from "react";
import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Education",
    href: "#education",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Projects",
    href: "#work",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://www.github.com/nishant-k02",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nishant-khandhar",
  },
  {
    label: "Twitter X",
    href: "https://x.com/nishantsk2002",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/nishant_k02",
  },
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
              Let&apos;s work together today!
            </h2>
            <ButtonPrimary
              href={"mailto:nishantkhandhar.us@gmail.com"}
              label="Start Project"
              icon={"chevron_right"}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2 text-zinc-700 dark:text-zinc-300 font-medium">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-600 dark:text-zinc-400 py-1 transition-colors hover:text-zinc-900 dark:hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 text-zinc-700 dark:text-zinc-300 font-medium">Socials</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-600 dark:text-zinc-400 py-1 transition-colors hover:text-zinc-900 dark:hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="/" className="">
            <img 
              src="/images/logo.svg" 
              width={40} 
              height={40} 
              alt="Logo"
              className="brightness-0 dark:brightness-100 transition-all duration-300"
            />
          </a>
          <p className="text-zinc-600 dark:text-zinc-500 text-sm">
            &copy; 2025 <span className="text-zinc-900 dark:text-zinc-200 font-medium">Nishant Khandhar</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
