import { weeklyTotals } from "../reports/weekly";
import { Row } from "../reports/summary";

export function weeklyHandler(rows: Row[]) {
  return { weeks: weeklyTotals(rows) };
}
