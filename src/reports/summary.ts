export interface Row { day: string; count: number }

export function total(rows: Row[]): number {
  return rows.reduce((n, r) => n + r.count, 0);
}
