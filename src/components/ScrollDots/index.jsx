import { motion as Motion } from "framer-motion";
import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const DOT_SIZE = 12;
const DOT_GAP = 18;
const WRAP_PADDING = 14;
const TRACK_TOP = WRAP_PADDING + DOT_SIZE / 2;
const STEP = DOT_SIZE + DOT_GAP;

export default function ScrollDots() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    let frameId;

    const updateActiveSection = () => {
      const probeY = window.innerHeight * 0.45;
      let closestId = sections[0].id;
      let closestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (!element) return;
        const rect = element.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const distance = Math.abs(center - probeY);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestId = section.id;
        }
      });

      setActive((prev) => (prev === closestId ? prev : closestId));
    };

    const onScrollOrResize = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(() => {
        updateActiveSection();
        frameId = undefined;
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const navOffset = 96;
    const top =
      element.getBoundingClientRect().top + window.scrollY - navOffset;

    setActive(id);
    window.scrollTo({ top, behavior: "smooth" });
    window.history.replaceState(null, "", `#${id}`);
  };

  const activeIndex = Math.max(
    0,
    sections.findIndex((section) => section.id === active),
  );

  const activeY = TRACK_TOP + activeIndex * STEP;
  const filledLineHeight = activeY;

  return (
    <div className="fixed right-6 lg:right-10 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center pointer-events-none">
      <Motion.div
        className="relative flex flex-col items-center pointer-events-auto"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, delay: 0.25 }}
      >
        <div
          className="relative flex flex-col items-center rounded-full border border-gray-200/70 dark:border-gray-700/70 bg-white/55 dark:bg-gray-900/50 backdrop-blur-sm px-3 shadow-lg"
          style={{
            paddingTop: `${WRAP_PADDING}px`,
            paddingBottom: `${WRAP_PADDING}px`,
            gap: `${DOT_GAP}px`,
          }}
        >
          {/* Gray background track */}
          <div
            className="absolute w-0.5 bg-gray-200/80 dark:bg-gray-700/80 rounded-full"
            style={{
              top: `${TRACK_TOP}px`,
              bottom: `${TRACK_TOP}px`,
            }}
          />

          {/* Blue filling line */}
          <Motion.div
            className="absolute w-0.5 bg--to-b from-blue-500 to-blue-400 rounded-full origin-top shadow-[0_0_12px_#3b82f6aa]"
            style={{
              top: `${TRACK_TOP}px`,
            }}
            animate={{
              height: filledLineHeight,
            }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 26,
            }}
          />

          {/* Dots */}
          {sections.map((section, index) => {
            const isActive = section.id === active;
            const isPast = index < activeIndex;

            return (
              <Motion.button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className="group relative outline-none focus-visible:ring-2 focus-visible:ring-blue-500/80 rounded-full"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.92 }}
                aria-label={`Go to ${section.label}`}
                aria-current={isActive ? "true" : undefined}
              >
                <div className="relative flex h-5 w-5 items-center justify-center">
                  {isActive && (
                    <Motion.div
                      className="absolute inset-0 rounded-full border-2 border-blue-500/60"
                      initial={{ scale: 0.9, opacity: 0.7 }}
                      animate={{ scale: 2.0, opacity: 0 }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    />
                  )}

                  <Motion.div
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-blue-500 shadow-[0_0_14px_#3b82f6cc]"
                        : isPast
                          ? "bg-gray-400 dark:bg-gray-600"
                          : "bg-gray-300 dark:bg-gray-700 group-hover:bg-gray-400 dark:group-hover:bg-gray-500"
                    }`}
                    animate={{
                      scale: isActive ? 1.35 : 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  />
                </div>

                <Motion.span
                  className="absolute right-full mr-5 px-3 py-1.5 text-sm font-medium bg-gray-900/95 dark:bg-white/95 text-white dark:text-gray-900 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap"
                  initial={{ x: -8, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.18 }}
                >
                  {section.label}
                  <div className="absolute top-1/2 -right-1.5 w-3 h-3 bg-gray-900/95 dark:bg-white/95 rotate-45 -translate-y-1/2" />
                </Motion.span>
              </Motion.button>
            );
          })}
        </div>
      </Motion.div>
    </div>
  );
}
