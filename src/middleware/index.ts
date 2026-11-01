// src/middleware/index.ts
// Runs on every request (dev server or SSR only, not on a static build):
//   1. Redirects HTTP -> HTTPS in production (skips localhost to avoid loops)
//   2. Attaches security response headers to every response

import { defineMiddleware } from "astro:middleware";

/** Hostnames considered local dev, never redirected to HTTPS */
const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "[::1]", "::1"]);

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  const isLocal = LOCAL_HOSTS.has(url.hostname);

  // HTTP -> HTTPS redirect (production only)
  if (!isLocal && url.protocol === "http:") {
    return Response.redirect(
      `https://${url.host}${url.pathname}${url.search}`,
      301
    );
  }

  // Pass through to the page or route
  const response = await next();
  const headers = response.headers;

  // Force HTTPS for 2 years, including subdomains.
  // "preload" is left out on purpose: it is very hard to undo.
  headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains"
  );

  // Prevent the page from being embedded in iframes (clickjacking)
  headers.set("X-Frame-Options", "DENY");

  // Prevent MIME-type sniffing
  headers.set("X-Content-Type-Options", "nosniff");

  // Minimal referrer info sent cross-origin
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  // Disable unused browser APIs
  headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=()"
  );

  // Content Security Policy
  headers.set(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data:",
      "media-src 'self'",
      "frame-src https://www.youtube-nocookie.com https://player.vimeo.com",
      "connect-src 'self'",
      "frame-ancestors 'none'",
    ].join("; ")
  );

  return response;
});