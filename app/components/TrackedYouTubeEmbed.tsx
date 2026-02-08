"use client";

import { useState, useCallback } from "react";
import { trackVideoPlay } from "../lib/analytics";

interface TrackedYouTubeEmbedProps {
  videoId: string;
  title: string;
  aspectRatio?: "video" | "short";
}

export default function TrackedYouTubeEmbed({ videoId, title, aspectRatio = "video" }: TrackedYouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = useCallback(() => {
    if (!isPlaying) {
      trackVideoPlay(title);
      setIsPlaying(true);
    }
  }, [isPlaying, title]);

  if (isPlaying) {
    return (
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
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
  );
}
