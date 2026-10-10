import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 256, height: 256 };
export const contentType = "image/png";

export default async function Icon() {
  const symbol = await readFile(join(process.cwd(), "public/images/symbol-white.png"));
  const src = `data:image/png;base64,${symbol.toString("base64")}`;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", background: "#0b0a08", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img src={src} width={120} height={156} />
      </div>
    ),
    size
  );
}
