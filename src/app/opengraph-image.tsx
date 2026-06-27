import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: "#030712",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          fontWeight: "bold",
          border: "20px solid #111827",
        }}
      >
        <span style={{ color: "#3b82f6", fontSize: 96, marginBottom: 16 }}>APOS</span>
        <span style={{ fontSize: 28, color: "#9ca3af" }}>
          Athletic Performance Optimization System
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}
