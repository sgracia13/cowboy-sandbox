import { describe, expect, it } from "vitest";
import { total } from "../src/reports/summary";

describe("total", () => {
  it("adds counts", () => {
    expect(total([{ day: "mon", count: 2 }, { day: "tue", count: 3 }])).toBe(5);
  });
  it("is zero for no rows", () => {
    expect(total([])).toBe(0);
  });
});
