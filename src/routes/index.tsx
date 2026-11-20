import { createFileRoute } from "@tanstack/react-router";

import { PortfolioPage } from "@/components/portfolio/portfolio-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gudipati Naga Nandini — Creative Developer" },
      {
        name: "description",
        content:
          "Meet Gudipati Naga Nandini, a web and Python developer blending analytical thinking with creative digital experiences in Vijayawada, India.",
      },
      { property: "og:title", content: "Gudipati Naga Nandini — Creative Developer" },
      {
        property: "og:description",
        content:
          "Web development, Python, and creative technology through an analytical and curious lens.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});