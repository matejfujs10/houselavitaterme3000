// Vercel Node serverless function entry that proxies to the TanStack Start SSR handler.
// The SSR bundle is emitted to dist/server/index.mjs by `vite build` and bundled
// alongside this function by Vercel.
import type { IncomingMessage, ServerResponse } from "node:http";
// @ts-expect-error - built artifact, no types
import ssrEntry from "../dist/server/index.mjs";

function buildRequest(req: IncomingMessage): Request {
  const host = req.headers["host"] ?? "localhost";
  const proto =
    (req.headers["x-forwarded-proto"] as string | undefined) ?? "https";
  const url = new URL(req.url ?? "/", `${proto}://${host}`);

  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (value === undefined) continue;
    if (Array.isArray(value)) {
      for (const v of value) headers.append(key, v);
    } else {
      headers.set(key, value as string);
    }
  }

  const method = req.method ?? "GET";
  const hasBody = method !== "GET" && method !== "HEAD";

  return new Request(url.toString(), {
    method,
    headers,
    body: hasBody ? (req as unknown as ReadableStream) : undefined,
    // @ts-expect-error - Node fetch requires duplex when streaming a body
    duplex: hasBody ? "half" : undefined,
  });
}

async function sendResponse(
  webRes: Response,
  res: ServerResponse,
): Promise<void> {
  res.statusCode = webRes.status;
  webRes.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });

  if (!webRes.body) {
    res.end();
    return;
  }

  const reader = webRes.body.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      res.write(value);
    }
  } finally {
    res.end();
  }
}

export default async function handler(
  req: IncomingMessage,
  res: ServerResponse,
): Promise<void> {
  try {
    const request = buildRequest(req);
    const response = await (ssrEntry as { fetch: (req: Request) => Promise<Response> }).fetch(request);
    await sendResponse(response, res);
  } catch (error) {
    console.error("SSR handler error:", error);
    if (!res.headersSent) {
      res.statusCode = 500;
      res.setHeader("content-type", "text/plain; charset=utf-8");
    }
    res.end("Internal Server Error");
  }
}