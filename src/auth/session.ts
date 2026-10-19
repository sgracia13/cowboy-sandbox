export interface Session { userId: string; expiresAt: number }

const sessions = new Map<string, Session>();

export function createSession(userId: string, ttlMs = 3600_000): string {
  const id = crypto.randomUUID();
  sessions.set(id, { userId, expiresAt: Date.now() + ttlMs });
  return id;
}

export function getSession(id: string): Session | undefined {
  const s = sessions.get(id);
  if (!s || s.expiresAt < Date.now()) {
    sessions.delete(id);
    return undefined;
  }
  return s;
}
