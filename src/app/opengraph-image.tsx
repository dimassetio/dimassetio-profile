/* eslint-disable @next/next/no-img-element */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Dimas Setio Muhammad — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const [portraitData, logoData] = await Promise.all([
    readFile(join(process.cwd(), "public", "my-photo.png")),
    readFile(join(process.cwd(), "src", "app", "logo.png")),
  ]);
  const portraitSrc = Uint8Array.from(portraitData).buffer;
  const logoSrc = Uint8Array.from(logoData).buffer;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        background: "#FFFDF8",
        color: "#172033",
        fontFamily: "Arial, sans-serif",
        padding: "64px 76px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex", position: "absolute", width: 500, height: 500, borderRadius: 250, right: -40, top: 70, background: "#DBEAFE" }} />
      {/* @ts-expect-error Satori accepts ArrayBuffer image sources at runtime. */}
      <img src={portraitSrc} alt="" width={430} height={573} style={{ position: "absolute", right: 20, bottom: -42, objectFit: "contain" }} />
      <div style={{ display: "flex", flexDirection: "column", width: 690 }}>
        {/* @ts-expect-error Satori accepts ArrayBuffer image sources at runtime. */}
        <img src={logoSrc} alt="" width={72} height={72} style={{ objectFit: "contain", marginBottom: 28 }} />
        <div style={{ display: "flex", fontSize: 64, lineHeight: 1.08, fontWeight: 700, letterSpacing: -2 }}>
          I build complete digital products.
        </div>
        <div style={{ display: "flex", fontSize: 26, lineHeight: 1.4, color: "#667085", marginTop: 28 }}>
          Full-stack developer · Web, mobile, backend &amp; integrations
        </div>
        <div style={{ display: "flex", alignItems: "center", fontSize: 20, marginTop: 42 }}>
          <span style={{ width: 12, height: 12, borderRadius: 999, background: "#22A06B", marginRight: 12 }} />
          Available for opportunities
        </div>
      </div>
      <div style={{ display: "flex", position: "absolute", width: 120, height: 12, borderRadius: 999, background: "#F59E0B", left: 76, bottom: 62 }} />
    </div>,
    size,
  );
}
