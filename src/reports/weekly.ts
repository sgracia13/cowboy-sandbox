import { Row, total } from "./summary";

export interface Week { start: string; rows: Row[] }

// Group daily rows into Monday-based weeks.
export function byWeek(rows: Row[]): Week[] {
  const weeks: Week[] = [];
  let current: Week | undefined;
  for (const r of rows) {
    const d = new Date(r.day);
    const monday = new Date(d);
    monday.setDate(d.getDate() - ((d.getDay() + 6) % 7));
    const start = monday.toISOString().slice(0, 10);
    if (!current || current.start !== start) {
      current = { start, rows: [] };
      weeks.push(current);
    }
    current.rows.push(r);
  }
  return weeks;
}

export function weeklyTotals(rows: Row[]): { start: string; total: number }[] {
  return byWeek(rows).map((w) => ({ start: w.start, total: total(w.rows) }));
}

export function busiestWeek(rows: Row[]): string | undefined {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const sorted = weeklyTotals(rows).sort((a, b) => b.total - a.total);
  return sorted.length ? sorted[0]!.start : undefined;
}
