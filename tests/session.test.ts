import { describe, expect, it } from "vitest";
import { createSession, getSession } from "../src/auth/session";

describe("sessions", () => {
  it("returns a live session", () => {
    const id = createSession("u1");
    expect(getSession(id)?.userId).toBe("u1");
  });
  it("drops an expired session", () => {
    const id = createSession("u2", -1);
    expect(getSession(id)).toBeUndefined();
  });
});
