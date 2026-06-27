import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: "#030712",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          color: "#3b82f6",
          fontWeight: "bold",
          border: "1px solid rgba(59, 130, 246, 0.3)",
        }}
      >
        A
      </div>
    ),
    {
      ...size,
    }
  );
}
