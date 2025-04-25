import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { getAverageColor } from "fast-average-color-node";

async function generateOgImage({
  title,
  shortDescription,
  image,
}: {
  title: string;
  shortDescription: string;
  image: string;
}) {
  const backgroundColor = await getAverageColor(image);

  const svg = await satori(
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 800,
        height: 420,
        background: `linear-gradient(to top right, ${backgroundColor.hex}E6, ${backgroundColor.hex}1A)`,
        color: backgroundColor.isDark ? "white" : "black",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        style={{ display: "flex", width: "90%", maxWidth: 800, paddingLeft: 6 }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
            paddingTop: 24,
            paddingRight: 40,
            paddingBottom: 24,
            paddingLeft: 0,
            color: backgroundColor.isDark ? "white" : "black",
          }}
        >
          <img
            src="http://localhost:5173/my-logo.svg"
            alt="My Logo"
            style={{
              alignSelf: "flex-start",
              height: 24,
              filter: backgroundColor.isDark ? "invert(0.8)" : "invert(0.4)",
            }}
          />
          <h1
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              flexGrow: 1,
              fontSize: 32,
              fontWeight: "600",
              marginTop: 20,
              lineHeight: "2.25rem",
              color: backgroundColor.isDark ? "white" : "black",
            }}
          >
            {title}
          </h1>
          <p
            style={{
              alignSelf: "flex-start",
              fontSize: 16,
              fontWeight: "400",
              color: backgroundColor.isDark ? "#dddddd" : "#636363",
            }}
          >
            {shortDescription}
          </p>
        </div>
        <img
          src={image}
          alt="OG Image"
          style={{ width: 350, height: 350, borderRadius: "1rem" }}
        />
      </div>
    </div>,
    {
      width: 800,
      height: 420,
      fonts: [
        {
          name: "Inter",
          data: await fetch(
            "https://cdn.jsdelivr.net/npm/@fontsource/inter/files/inter-latin-400-normal.woff"
          ).then((res) => res.arrayBuffer()),
          weight: 400,
          style: "normal",
        },
        {
          name: "Inter",
          data: await fetch(
            "https://cdn.jsdelivr.net/npm/@fontsource/inter/files/inter-latin-600-normal.woff"
          ).then((res) => res.arrayBuffer()),
          weight: 600,
          style: "normal",
        },
      ],
    }
  );

  const pngData = new Resvg(svg).render().asPng();
  return pngData;
}

export { generateOgImage };
