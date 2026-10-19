import { getJSON } from "../lib/http";

export async function handler18(id: string) {
  const res = await getJSON<{ name: string }>(`https://example.com/items/18/${id}`);
  return res.status === 200 ? res.body.name : null;
}
