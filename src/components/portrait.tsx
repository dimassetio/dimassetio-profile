import Image from "next/image";
import { Layers3 } from "lucide-react";

export function Portrait() {
  return (
    <div className="portrait-visual">
      <span className="portrait-accent" aria-hidden="true" />
      <Image
        src="/my-photo.png"
        alt="Dimas Setio Muhammad smiling with his arms crossed"
        width={1080}
        height={1350}
        preload
        sizes="(max-width: 767px) 90vw, (max-width: 1279px) 42vw, 500px"
      />
      <div className="portrait-label">
        <span className="portrait-label-icon">
          <Layers3 aria-hidden="true" />
        </span>
        <p>
          <strong>20+ products delivered</strong>
          <small>Web, mobile &amp; backend</small>
        </p>
      </div>
    </div>
  );
}
