import { useState, useEffect } from "react";

interface UseCountUpOptions {
  end: number;
  duration?: number;
  startOnInView?: boolean;
}

export const useCountUp = ({
  end,
  duration = 2,
  startOnInView = false,
}: UseCountUpOptions) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(!startOnInView);
  const frameRate = 1000 / 60;
  const totalFrames = Math.round((duration * 1000) / frameRate);
  const easeOutQuad = (t: number) => t * (2 - t);

  useEffect(() => {
    if (!hasStarted) return;

    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = easeOutQuad(frame / totalFrames);
      setCount(Math.round(end * progress));

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [end, totalFrames, hasStarted, frameRate]);

  const startCounting = () => {
    if (!hasStarted) {
      setHasStarted(true);
    }
  };

  return { count, startCounting };
};
