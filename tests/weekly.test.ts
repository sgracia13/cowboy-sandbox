import { describe, expect, it } from "vitest";
import { weeklyTotals } from "../src/reports/weekly";

describe("weeklyTotals", () => {
  it("groups days into weeks", () => {
    const rows = [
      { day: "2026-10-12", count: 1 },
      { day: "2026-10-13", count: 2 },
      { day: "2026-10-19", count: 4 },
    ];
    expect(weeklyTotals(rows).map((w) => w.total)).toEqual([3, 4]);
  });
});
