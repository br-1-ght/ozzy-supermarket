import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Toaster } from "sonner";
import { CartProvider } from "@/hooks/useCart";
import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { Shop } from "@/components/site/Shop";
import { About } from "@/components/site/About";
import { Location } from "@/components/site/Location";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { CartDrawer } from "@/components/site/CartDrawer";
import { FloatingGift } from "@/components/site/FloatingGift";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Ozzyy Superstores | Shop Groceries, Drinks & Household Essentials Online in Lagos",
      },
      {
        name: "description",
        content:
          "Ozzyy Superstores — your trusted neighborhood supermarket in Lagos. Shop drinks, pastries, baby items, bread, dairy, snacks & household essentials online. Fast delivery, great prices.",
      },
      {
        name: "keywords",
        content:
          "Ozzyy Superstores, Lagos supermarket, online grocery Lagos, buy drinks Nigeria, baby items Lagos, bread Lagos, household essentials Nigeria",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content: "Ozzyy Superstores | Your Trusted Neighborhood Supermarket",
      },
      {
        property: "og:description",
        content:
          "Shop quality drinks, pastries, baby items, bread, dairy & household essentials online. Delivered fast across Lagos.",
      },
      { property: "og:site_name", content: "Ozzyy Superstores" },
      { property: "og:locale", content: "en_NG" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Ozzyy Superstores | Shop Online, Delivered Fast",
      },
      {
        name: "twitter:description",
        content:
          "Your trusted neighborhood supermarket. Quality products, great prices, fast service.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GroceryStore",
          name: "Ozzyy Superstores",
          description:
            "Your trusted neighborhood supermarket in Lagos, Nigeria — quality products, great prices, fast service.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Lagos",
            addressCountry: "NG",
          },
          sameAs: [
            "https://www.instagram.com/ozzyy_superstores",
            "https://maps.app.goo.gl/78qetMpA7azy9Fwj9",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [search, setSearch] = useState("");

  return (
    <CartProvider>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-brand text-white px-4 py-2 rounded z-[100]"
      >
        Skip to content
      </a>
      <AnnouncementBar />
      <Navbar search={search} onSearch={setSearch} />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <Shop search={search} />
        <About />
        <Location />
        <Contact />
      </main>
      <Footer />
      <CartDrawer />
      <FloatingWhatsApp />
      <FloatingGift />
      <Toaster position="bottom-center" richColors />
    </CartProvider>
  );
}
