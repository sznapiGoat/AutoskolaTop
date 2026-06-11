"use client";

import { useEffect, useRef } from "react";
import {
  useInView,
  useMotionValue,
  useTransform,
  animate,
  motion,
} from "framer-motion";

type AnimatedCounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
};

function formatCzech(n: number) {
  return new Intl.NumberFormat("cs-CZ").format(Math.round(n));
}

export default function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 1.2,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const display = useTransform(
    motionValue,
    (latest) => `${prefix}${formatCzech(latest)}${suffix}`
  );

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, motionValue, value, duration]);

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
    </span>
  );
}
