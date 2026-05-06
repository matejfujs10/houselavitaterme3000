// Vercel Node serverless function that wraps the TanStack Start SSR handler.
// The SSR bundle is produced by `vite build` into dist/server/index.mjs.
// @ts-expect-error - emitted at build time, no types
import ssrEntry from "../dist/server/index.mjs";

type FetchHandler = {
  fetch: (request: Request, env?: unknown, ctx?: unknown) => Promise<Response> | Response;
};

const handler = ssrEntry as FetchHandler;

export const config = {
  runtime: "nodejs",
};

export default async function vercelHandler(request: Request): Promise<Response> {
  return handler.fetch(request, {}, {});
}