import type { ContactPayload, Portfolio } from "@/types";

// Set VITE_API_URL in .env.local or Vercel environment variables.
const API_URL: string = (
  (import.meta.env.VITE_API_URL as string | undefined) ??
  "https://nachiket-portfolio-backend.onrender.com"
).replace(/\/+$/, "");

/** Loads portfolio content from the Spring Boot API. */
export async function fetchPortfolio(
  signal?: AbortSignal
): Promise<Portfolio> {
  const res = await fetch(`${API_URL}/api/portfolio`, { signal });

  if (!res.ok) {
    throw new Error(`The server responded with status ${res.status}.`);
  }

  return (await res.json()) as Portfolio;
}

export async function sendContact(
  payload: ContactPayload
): Promise<void> {
  const res = await fetch(`${API_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    let detail = "Could not send your message. Please try again.";

    try {
      const body = await res.json();
      const first = body?.errors
        ? Object.values(body.errors)[0]
        : null;

      if (typeof first === "string") {
        detail = first;
      }
    } catch {
      // Ignore non-JSON error responses.
    }

    throw new Error(detail);
  }
}