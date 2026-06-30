"use client";

import { motion, useInView, useScroll, useTransform, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";

/* ─── Shared easing ─── */
export const easeOutQuart = [0.25, 1, 0.5, 1] as const;
export const springConfig = { type: "spring", stiffness: 300, damping: 30 } as const;
export const springBounce = { type: "spring", stiffness: 400, damping: 20 } as const;

/* ─── Variants ─── */
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeOutQuart },
  },
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.97, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: easeOutQuart },
  },
};

export const slideLeftVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: easeOutQuart },
  },
};

export const slideRightVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: easeOutQuart },
  },
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: easeOutQuart },
  },
};

/* ─── FadeUp component ─── */
interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}

export function FadeUp({ children, delay = 0, className, once = true }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: easeOutQuart, delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── BlurReveal component ─── */
export function BlurReveal({ children, delay = 0, className, once = true }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, filter: "blur(12px)", scale: 0.97 },
        visible: {
          opacity: 1,
          filter: "blur(0px)",
          scale: 1,
          transition: { duration: 0.75, ease: easeOutQuart, delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── StaggerGrid component ─── */
interface StaggerGridProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
}

export function StaggerGrid({ children, className, stagger = 0.08, once = true }: StaggerGridProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: 0.05 },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── StaggerItem ─── */
export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 28, scale: 0.97 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.5, ease: easeOutQuart },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Parallax wrapper ─── */
export function ParallaxWrapper({
  children,
  speed = 0.3,
  className,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  return (
    <div ref={ref} className={className} style={{ overflow: "hidden" }}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

/* ─── SlideIn from sides ─── */
export function SlideIn({
  children,
  direction = "left",
  delay = 0,
  className,
  once = true,
}: {
  children: ReactNode;
  direction?: "left" | "right";
  delay?: number;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, x: direction === "left" ? -50 : 50 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.65, ease: easeOutQuart, delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── ScaleIn ─── */
export function ScaleIn({
  children,
  delay = 0,
  className,
  once = true,
}: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={
        inView
          ? { opacity: 1, scale: 1, transition: { ...springBounce, delay } }
          : { opacity: 0, scale: 0.8 }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
