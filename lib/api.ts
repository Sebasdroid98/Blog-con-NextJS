export const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

export async function fetchAPI<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(`${API_URL}/${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
    next: { revalidate: 60 }, // opcional: cache 1 minuto
  });

  if (!res.ok) {
    throw new Error("Error al consultar el API");
  }

  return res.json();
}
