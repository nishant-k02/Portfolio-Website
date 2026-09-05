import { useEffect } from "react";

/**
 * Adds the `in-view` class to any `.reveal` element as it enters the viewport.
 * Elements can stagger with `style={{ transitionDelay: "120ms" }}`.
 */
const useReveal = (deps = []) => {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.in-view)");
    if (!els.length) return;

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in-view"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useReveal;
