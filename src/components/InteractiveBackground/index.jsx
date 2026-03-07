import { useEffect } from "react";

const filingCount = 160;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const filings = Array.from({ length: filingCount }, (_, index) => {
  const cols = 16;
  const rows = 10;
  const col = index % cols;
  const row = Math.floor(index / cols);

  // Deterministic micro-jitter keeps the field organic without randomness per render.
  const jitterX = Math.sin(index * 12.9898) * 2.2;
  const jitterY = Math.cos(index * 8.233) * 2.4;

  return {
    id: index,
    x: clamp(((col + 0.5) / cols) * 100 + jitterX, 2, 98),
    y: clamp(((row + 0.5) / rows) * 100 + jitterY, 3, 97),
    length: 8 + (index % 6),
  };
});

const InteractiveBackground = () => {
  useEffect(() => {
    const root = document.documentElement;
    const filingElements = Array.from(
      document.querySelectorAll(".interactive-bg__filing"),
    );

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let frameId;

    const updateMagneticField = () => {
      // Smooth interpolation avoids jitter and keeps motion premium.
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      root.style.setProperty("--pointer-x", `${currentX}px`);
      root.style.setProperty("--pointer-y", `${currentY}px`);

      const radius = Math.min(window.innerWidth, window.innerHeight) * 0.32;

      filingElements.forEach((element) => {
        const baseXPct = Number(element.dataset.baseX || 0);
        const baseYPct = Number(element.dataset.baseY || 0);
        const baseX = (baseXPct / 100) * window.innerWidth;
        const baseY = (baseYPct / 100) * window.innerHeight;

        const dx = currentX - baseX;
        const dy = currentY - baseY;
        const distance = Math.hypot(dx, dy) || 1;
        const pull = Math.max(0, 1 - distance / radius);
        const easedPull = pull * pull;

        const travel = easedPull * 28;
        const translateX = (dx / distance) * travel;
        const translateY = (dy / distance) * travel;
        const rotation = (Math.atan2(dy, dx) * 180) / Math.PI;

        element.style.setProperty("--tx", `${translateX.toFixed(2)}px`);
        element.style.setProperty("--ty", `${translateY.toFixed(2)}px`);
        element.style.setProperty("--rot", `${rotation.toFixed(2)}deg`);
        element.style.setProperty("--pull", easedPull.toFixed(3));
      });

      frameId = window.requestAnimationFrame(updateMagneticField);
    };

    const handlePointerMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const handlePointerLeave = () => {
      targetX = window.innerWidth / 2;
      targetY = window.innerHeight / 2;
    };

    root.style.setProperty("--pointer-x", `${targetX}px`);
    root.style.setProperty("--pointer-y", `${targetY}px`);

    frameId = window.requestAnimationFrame(updateMagneticField);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    const handleResize = () => {
      targetX = window.innerWidth / 2;
      targetY = window.innerHeight / 2;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="interactive-bg fixed inset-0 pointer-events-none z-0"
    >
      <div className="interactive-bg__orb interactive-bg__orb--one" />
      <div className="interactive-bg__orb interactive-bg__orb--two" />
      <div className="interactive-bg__orb interactive-bg__orb--three" />
      <div className="interactive-bg__mesh" />
      <div className="interactive-bg__filings">
        {filings.map((filing) => (
          <span
            key={filing.id}
            className="interactive-bg__filing"
            data-base-x={filing.x}
            data-base-y={filing.y}
            style={{
              left: `${filing.x}%`,
              top: `${filing.y}%`,
              width: `${filing.length}px`,
            }}
          />
        ))}
      </div>
      <div className="interactive-bg__spotlight" />
    </div>
  );
};

export default InteractiveBackground;
