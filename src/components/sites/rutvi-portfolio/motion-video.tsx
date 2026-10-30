"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./motion-video.module.css";

type MotionVideoProps = {
  src: string;
  poster: string;
  label: string;
  aspectRatio?: string;
  className?: string;
  videoClassName?: string;
  controls?: boolean;
  autoPlay?: boolean;
  decorative?: boolean;
  reducedMotionControl?: boolean;
};

export function MotionVideo({
  src,
  poster,
  label,
  aspectRatio,
  className,
  videoClassName,
  controls = true,
  autoPlay = false,
  decorative = false,
  reducedMotionControl = false,
}: MotionVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const playIfVisible = () => {
      if (!autoPlay || preference.matches) return;
      const bounds = video.getBoundingClientRect();
      if (bounds.top < window.innerHeight && bounds.bottom > 0) {
        void video.play().catch(() => {});
      }
    };
    const handlePreferenceChange = () => {
      setPrefersReducedMotion(preference.matches);
      if (preference.matches) {
        video.pause();
      } else {
        playIfVisible();
      }
    };

    setPrefersReducedMotion(preference.matches);
    preference.addEventListener("change", handlePreferenceChange);
    const observer = autoPlay
      ? new IntersectionObserver(([entry]) => {
          if (!entry.isIntersecting) {
            video.pause();
          } else if (!preference.matches) {
            void video.play().catch(() => {});
          }
        }, { threshold: 0.15 })
      : null;
    observer?.observe(video);

    return () => {
      preference.removeEventListener("change", handlePreferenceChange);
      observer?.disconnect();
    };
  }, [autoPlay]);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  return (
    <div
      className={[styles.frame, className].filter(Boolean).join(" ")}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      <video
        ref={videoRef}
        className={[styles.video, videoClassName].filter(Boolean).join(" ")}
        src={src}
        poster={poster}
        aria-label={label}
        aria-hidden={decorative || undefined}
        controls={controls}
        muted
        loop
        playsInline
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      {reducedMotionControl && prefersReducedMotion && (
        <button
          className={styles.reducedMotionControl}
          type="button"
          aria-label={isPlaying ? "Pause background video" : "Play background video"}
          aria-pressed={isPlaying}
          onClick={togglePlayback}
        >
          {isPlaying ? "Pause background video" : "Play background video"}
        </button>
      )}
    </div>
  );
}
