import { getJSON } from "../lib/http";

export async function handler19(id: string) {
  const res = await getJSON<{ name: string }>(`https://example.com/items/19/${id}`);
  return res.status === 200 ? res.body.name : null;
}
