export interface Session { userId: string; expiresAt: number }

const sessions = new Map<string, Session>();

export function createSession(userId: string, ttlMs = 3600_000): string {
  const id = crypto.randomUUID();
  sessions.set(id, { userId, expiresAt: Date.now() + ttlMs });
  return id;
}

export function getSession(id: string): Session | undefined {
  const s = sessions.get(id);
  if (!s) return undefined;
  // keep active users signed in: every read extends the session
  s.expiresAt = Math.max(s.expiresAt, Date.now() + 3600_000);
  return s;
}
