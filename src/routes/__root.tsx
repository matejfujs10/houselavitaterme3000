import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { I18nProvider } from "@/components/I18nProvider";

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

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "House LA VITA · Terme 3000 Moravske Toplice — do 30% ceneje" },
      { name: "description", content: "Premium počitniška hiška za 2–6 oseb tik ob Termah 3000. Vključene kopalne karte, kolesa in popolna zasebnost. Rezervirajte zdaj." },
      { name: "author", content: "Hiška LA VITA" },
      { property: "og:title", content: "House LA VITA · Terme 3000 Moravske Toplice — do 30% ceneje" },
      { property: "og:description", content: "Premium počitniška hiška za 2–6 oseb tik ob Termah 3000. Vključene kopalne karte, kolesa in popolna zasebnost. Rezervirajte zdaj." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "House LA VITA · Terme 3000 Moravske Toplice — do 30% ceneje" },
      { name: "twitter:description", content: "Premium počitniška hiška za 2–6 oseb tik ob Termah 3000. Vključene kopalne karte, kolesa in popolna zasebnost. Rezervirajte zdaj." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/laTvyULOLRSQ9fwirhVawQymjvw1/social-images/social-1776890202686-La_Vita_Kamp_Terme_3000_Moravske_Toplice.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/laTvyULOLRSQ9fwirhVawQymjvw1/social-images/social-1776890202686-La_Vita_Kamp_Terme_3000_Moravske_Toplice.webp" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
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
  return (
    <I18nProvider>
      <Outlet />
    </I18nProvider>
  );
}
