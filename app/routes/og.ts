import type { Route } from "./+types/og";
import { generateOgImage } from "~/components/generate-og-image";

const images = [
  "https://fastly.picsum.photos/id/857/800/800.jpg?hmac=BUGUS_K7Wesbr9xUV5ya8TfYHI04KBg_kWauQkuIgS0",
  "https://fastly.picsum.photos/id/835/800/800.jpg?hmac=PJZoPbB8PjU_6jPaR4U6KX7Mesx3F2_l-2tSCVeF2Cg",
  "https://fastly.picsum.photos/id/839/800/800.jpg?hmac=Rvd_0eo62Cj10Rsw4bxKOUjvU1qTc5fA6DfWEQ3cVSE",
  "https://fastly.picsum.photos/id/981/800/800.jpg?hmac=dL5YCGb-HqSsuYOPiCgADn_NjvaUsl6PJDR-FdSBvcU",
  "https://fastly.picsum.photos/id/34/3872/2592.jpg?hmac=4o5QGDd7eVRX8_ISsc5ZzGrHsFYDoanmcsz7kyu8A9A",
  "https://fastly.picsum.photos/id/102/4320/3240.jpg?hmac=ico2KysoswVG8E8r550V_afIWN963F6ygTVrqHeHeRc",
];
export async function loader({}: Route.LoaderArgs) {
  const pngData = await generateOgImage({
    title: "Find out how to generate an image for Open Graph.",
    shortDescription:
      "The Open Graph protocol enables any web page to become a rich object in a social graph.",
    image: images[Math.floor(Math.random() * images.length)],
  });

  return new Response(Buffer.from(pngData), {
    headers: {
      "Content-Type": "image/png",
    },
  });
}
