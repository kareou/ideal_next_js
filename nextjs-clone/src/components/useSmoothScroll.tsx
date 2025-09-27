// "use client";
// import { useEffect } from "react";
// import Lenis from "@studio-freight/lenis";

// export default function useSmoothScroll() {
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       easing: (t: number) => 1 - Math.pow(1 - t, 3),
//       smoothWheel: true,
//       smoothTouch: true,
//     } as any);

//     let rafId: number;

//     const raf = (time: number) => {
//       lenis.raf(time);
//       rafId = requestAnimationFrame(raf);
//     };

//     rafId = requestAnimationFrame(raf);

//     return () => {
//       cancelAnimationFrame(rafId);
//       lenis.destroy();
//     };
//   }, []);
// }


// "use client";

// import { useEffect } from "react";
// import Lenis from "@studio-freight/lenis";

// export default function useSmoothScroll() {
//   useEffect(() => {
//     // Select the main scrollable container (body by default)
//     const wrapper = document.querySelector("body");

//     if (!wrapper) return;

//     const lenis = new Lenis({
//       wrapper: wrapper,         // element that scrolls
//       content: wrapper,         // content inside wrapper
//       duration: 1.2,
//       easing: (t: number) => 1 - Math.pow(1 - t, 3),
//       smoothWheel: true,
//       smoothTouch: true,
//       normalizeWheel: true,
//     } as any);

//     // Exclude navbar or dropdown scroll
//     const excludeSelectors = [".navbar", ".dropdown"];

//     excludeSelectors.forEach((selector) => {
//       document.querySelectorAll(selector).forEach((el) => {
//         el.addEventListener(
//           "wheel",
//           (e) => e.stopPropagation(),
//           { passive: false }
//         );
//       });
//     });

//     // Animation frame loop
//     let rafId: number;
//     const raf = (time: number) => {
//       lenis.raf(time);
//       rafId = requestAnimationFrame(raf);
//     };
//     rafId = requestAnimationFrame(raf);

//     // Cleanup
//     return () => {
//       cancelAnimationFrame(rafId);
//       lenis.destroy();
//     };
//   }, []);
// }

"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function useSmoothScroll() {
  useEffect(() => {
    // Select the main scrollable container (body by default)
    const wrapper = document.querySelector("body");

    if (!wrapper) return;

    const lenis = new Lenis({
      wrapper: wrapper,         // element that scrolls
      content: wrapper,         // content inside wrapper
      duration: 1.2,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      smoothTouch: true,
      normalizeWheel: true,
    } as any);

    // Exclude navbar dropdown scroll - updated selectors to match your navbar
    const excludeSelectors = [
      "nav",                                    // entire navbar
      ".max-h-64.overflow-y-auto",             // services dropdown container
      ".absolute.top-full",                    // dropdown positioning
      ".flex.flex-col.w-full.px-6",           // mobile services dropdown
      ".shadow-md.rounded-b-xl",               // mobile menu container
    ];

    const setupExclusions = () => {
      excludeSelectors.forEach((selector) => {
        document.querySelectorAll(selector).forEach((el) => {
          // Remove existing listeners first
          el.removeEventListener("wheel", handleWheelStop);
          el.removeEventListener("touchstart", handleTouchStop);
          el.removeEventListener("touchmove", handleTouchStop);
          
          // Add new listeners
          el.addEventListener("wheel", handleWheelStop, { passive: false });
          el.addEventListener("touchstart", handleTouchStop, { passive: false });
          el.addEventListener("touchmove", handleTouchStop, { passive: false });
        });
      });
    };

    const handleWheelStop = (e: Event) => {
      e.stopPropagation();
      // Also prevent Lenis from handling this event
      (e as any).lenis = false;
    };

    const handleTouchStop = (e: Event) => {
      e.stopPropagation();
      (e as any).lenis = false;
    };

    // Initial setup
    setupExclusions();

    // Re-setup when DOM changes (for dynamically shown dropdowns)
    const observer = new MutationObserver(() => {
      setupExclusions();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class']
    });

    // Animation frame loop
    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Cleanup
    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      lenis.destroy();
    };
  }, []);
}