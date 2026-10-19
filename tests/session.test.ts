import { describe, expect, it } from "vitest";
import { createSession, getSession } from "../src/auth/session";

describe("sessions", () => {
  it("returns a live session", () => {
    const id = createSession("u1");
    expect(getSession(id)?.userId).toBe("u1");
  });
});
