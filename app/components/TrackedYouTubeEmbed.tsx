"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { trackVideoPlay } from "../lib/analytics";

interface TrackedYouTubeEmbedProps {
  videoId: string;
  title: string;
  aspectRatio?: "video" | "short";
  autoplay?: boolean;
}

export default function TrackedYouTubeEmbed({ videoId, title, aspectRatio = "video", autoplay = true }: TrackedYouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoplayTriggered, setAutoplayTriggered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const hasTracked = useRef(false);

  const handlePlay = useCallback(() => {
    if (!hasTracked.current) {
      trackVideoPlay(title, 'click');
      hasTracked.current = true;
    }
    setIsPlaying(true);
    setAutoplayTriggered(false);
  }, [title]);

  // Intersection Observer for autoplay on scroll
  useEffect(() => {
    if (isPlaying || !autoplay) return;

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isPlaying) {
          if (!hasTracked.current) {
            trackVideoPlay(title, 'autoplay');
            hasTracked.current = true;
          }
          setAutoplayTriggered(true);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isPlaying, title]);

  // Pause/play based on visibility when autoplaying
  useEffect(() => {
    if (!autoplayTriggered) return;

    const el = containerRef.current;
    const iframe = iframeRef.current;
    if (!el || !iframe) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const command = entry.isIntersecting ? "playVideo" : "pauseVideo";
        iframe.contentWindow?.postMessage(
          JSON.stringify({ event: "command", func: command, args: [] }),
          "*"
        );
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [autoplayTriggered]);

  // Autoplay state: muted video with click to unmute
  if (autoplayTriggered && !isPlaying) {
    return (
      <div ref={containerRef} className="relative w-full h-full">
        <iframe
          ref={iframeRef}
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&enablejsapi=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <button
          onClick={handlePlay}
          className="absolute bottom-3 right-3 bg-black/70 hover:bg-black/90 text-white text-xs px-3 py-1.5 rounded-full transition flex items-center gap-1.5"
          aria-label="Geluid aanzetten"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16.5 12A4.5 4.5 0 0014 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 003.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
          </svg>
          Geluid aan
        </button>
      </div>
    );
  }

  // Full playing state (with sound)
  if (isPlaying) {
    return (
      <div ref={containerRef} className="w-full h-full">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  // Default: thumbnail with play button
  return (
    <div ref={containerRef}>
      <button
        onClick={handlePlay}
        className="relative w-full h-full group cursor-pointer bg-black"
        aria-label={`Speel video: ${title}`}
      >
        <img
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition">
          <svg className="w-16 h-16 text-white opacity-90 group-hover:opacity-100 transition drop-shadow-lg" viewBox="0 0 68 48">
            <path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55C3.97 2.33 2.27 4.81 1.48 7.74.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="red"/>
            <path d="M45 24L27 14v20" fill="white"/>
          </svg>
        </div>
      </button>
    </div>
  );
}
