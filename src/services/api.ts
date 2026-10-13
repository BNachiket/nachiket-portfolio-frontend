
import type { ContactPayload, Portfolio } from "@/types";

// Read the backend URL from frontend/.env.local
const API_URL: string = (import.meta.env.VITE_API_URL ?? "").replace(/\/+$/, "");

/**
 * Loads portfolio content from the Spring Boot API.
 */
export async function fetchPortfolio(
  signal?: AbortSignal
): Promise<Portfolio> {
  if (!API_URL) {
    throw new Error("VITE_API_URL is not configured.");
  }

  const res = await fetch(`${API_URL}/api/portfolio`, { signal });

  if (!res.ok) {
    throw new Error(`The server responded with status ${res.status}.`);
  }

  return (await res.json()) as Portfolio;
}

/**
 * Sends a contact form submission to the Spring Boot API.
 */
export async function sendContact(
  payload: ContactPayload
): Promise<void> {
  if (!API_URL) {
    throw new Error("VITE_API_URL is not configured.");
  }

  const res = await fetch(`${API_URL}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
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
