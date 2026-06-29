import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import logoImage from "../assets/narpavi-logo.jpeg";

const LOGO_URL = logoImage;

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "geo.region", content: "IN-TN" },
      { name: "geo.placename", content: "Madurai" },
      { name: "geo.position", content: "9.9252;78.1198" },
      { title: "Narpavi Mehandi & Makeup | Best Beautician in Madurai, Tamil Nadu" },
      { name: "description", content: "Narpavi Mehandi & Makeup is a trusted beautician and parlour in Madurai for bridal makeup, HD makeup, mehandi art, parlour services, and beauty classes across Tamil Nadu." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Narpavi Mehandi & Makeup | Best Beautician in Madurai" },
      { property: "og:description", content: "Narpavi is a leading beautician in Madurai for bridal makeup, mehandi, HD makeup, parlour services, and beauty classes." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Narpavi Mehandi & Makeup" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Narpavi Mehandi & Makeup | Beautician in Madurai" },
      { name: "twitter:description", content: "Narpavi Mehandi & Makeup offers bridal makeup, mehandi, HD makeup, and parlour services in Madurai." },
      { property: "og:image", content: LOGO_URL },
      { name: "twitter:image", content: LOGO_URL },
      { name: "keywords", content: "narpavi, narpavi madurai, narpavi makeup, narpavi mehandi, bridal makeup Madurai, mehandi artist Madurai, beautician in Madurai, parlour services Madurai, beauty classes Tamil Nadu" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", type: "image/jpeg", href: logoImage },
      { rel: "apple-touch-icon", href: logoImage },
      { rel: "canonical", href: "https://narpavibridal.in/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Quicksand:wght@300;400;500;600&display=swap",
      },
    ],
    script: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: "Narpavi Mehandi & Makeup",
          alternateName: ["Narpavi", "Narpavi Makeup", "Narpavi Mehandi", "Narpavi Bridal"],
          description: "Narpavi Mehandi & Makeup is a trusted beautician and parlour in Madurai offering bridal makeup, HD makeup, mehandi art, parlour services, and beauty classes across Tamil Nadu.",
          image: LOGO_URL,
          telephone: "+918667767006",
          url: "https://narpavibridal.in",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Madurai",
            addressRegion: "Tamil Nadu",
            addressCountry: "IN",
          },
          areaServed: ["Madurai", "Tamil Nadu", "South India"],
          openingHours: "Mo-Su 09:00-20:00",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
