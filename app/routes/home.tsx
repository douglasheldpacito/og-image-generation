import { useState } from "react";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Open Graph Image Generation App" },
    { name: "description", content: "Welcome to Open Graph Image Generation!" },
    { name: "og:title", content: "Open Graph Image Generation App" },
    {
      name: "og:description",
      content: "Welcome to Open Graph Image Generation!",
    },
    { name: "og:image", content: "http://localhost:5173/og/" },
    { name: "og:url", content: "http://localhost:5173/" },
    { name: "og:type", content: "website" },
    { name: "og:site_name", content: "Open Graph Image Generation" },
    { name: "og:locale", content: "en_US" },
  ];
}

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-lg font-semibold">
        Welcome to Open Graph Image Generation
      </h1>

      <p>Image Generated Example</p>
      <div className="relative w-[800px] h-[420px] rounded-lg overflow-hidden">
        {loading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        <img
          src="http://localhost:5173/og/"
          alt="Open Graph Image Generation"
          onLoad={() => setLoading(false)}
          onError={() => setLoading(false)}
        />
      </div>
      <a
        className="decoration-auto underline underline-offset-4 hover:text-blue-600"
        href="https://ogp.me/"
        target="_blank"
        rel="noreferrer noopener"
      >
        Learn more about Open Graph
      </a>
    </div>
  );
}
