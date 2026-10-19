import { getJSON } from "../lib/http";

export async function handler16(id: string) {
  const res = await getJSON<{ name: string }>(`https://example.com/items/16/${id}`);
  return res.status === 200 ? res.body.name : null;
}
