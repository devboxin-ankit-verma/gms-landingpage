import { getLenis } from "./lenis-instance";

/** Fixed navbar height — keep section titles visible below header */
const NAV_OFFSET = -72;

export type ScrollToSectionOptions = {
  focusSelector?: string;
  onComplete?: () => void;
};

export function scrollToSection(
  sectionId: string,
  options?: ScrollToSectionOptions
) {
  const el = document.getElementById(sectionId);
  if (!el) return;

  const finish = () => {
    if (options?.focusSelector) {
      const focusEl = document.querySelector<HTMLElement>(options.focusSelector);
      focusEl?.focus({ preventScroll: true });
    }
    options?.onComplete?.();
  };

  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(el, {
      offset: NAV_OFFSET,
      duration: 1.1,
      onComplete: finish,
    });
    return;
  }

  const top = el.getBoundingClientRect().top + window.scrollY + NAV_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
  window.setTimeout(finish, 600);
}
