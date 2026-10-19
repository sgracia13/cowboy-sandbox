export interface Response<T> { status: number; body: T }

export async function getJSON<T>(url: string, timeoutMs = 5000, retries = 2): Promise<Response<T>> {
  let last: Response<T> = { status: 0, body: undefined as T };
  for (let attempt = 0; attempt <= retries; attempt++) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), timeoutMs);
    try {
      const res = await fetch(url, { signal: ctrl.signal });
      last = { status: res.status, body: (await res.json()) as T };
      if (res.status < 500) return last;
    } catch (e) {}
    finally {
      clearTimeout(timer);
    }
  }
  return last;
}
