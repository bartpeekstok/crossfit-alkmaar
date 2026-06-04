"use client";

import { useState } from "react";

type Props = {
  videoId: string;
  alt: string;
};

export default function YouTubeEmbed({ videoId, alt }: Props) {
  const [playing, setPlaying] = useState(false);
  if (playing) {
    return (
      <iframe
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0, border: 0 }}
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&playsinline=1&rel=0&modestbranding=1`}
        title="CrossFit Alkmaar"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />
    );
  }
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt={alt}
        onClick={() => setPlaying(true)}
      />
      <div className="play" onClick={() => setPlaying(true)}>
        <span>
          <svg viewBox="0 0 24 24" fill="#0B0F1E">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </div>
    </>
  );
}
