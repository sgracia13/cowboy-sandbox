export interface Response<T> { status: number; body: T }

export async function getJSON<T>(url: string, timeoutMs = 5000): Promise<Response<T>> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(url, { signal: ctrl.signal });
    return { status: res.status, body: (await res.json()) as T };
  } finally {
    clearTimeout(timer);
  }
}
