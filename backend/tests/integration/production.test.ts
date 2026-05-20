import { describe, it, expect, vi } from "vitest";
import { createServer } from "node:http";
import { once } from "node:events";
import { app } from "../../src/app.js";
import { prisma } from "../../src/lib/prisma.js";

/* ------------------------------------------
  MOCK FIREBASE ADMIN
--------------------------------------------- */
vi.mock("../../src/config/firebase.js", () => ({
  auth: {
    verifyIdToken: vi.fn(async (token: string) => {
      if (token === "valid-test-token") {
        return { uid: "user-123", email: "test@example.com" };
      }
      throw new Error("invalid token");
    }),
  },
}));

/* ------------------------------------------
  MOCK PRISMA
--------------------------------------------- */
vi.mock("../../src/lib/prisma.js", () => ({
  prisma: {
    show: {
      findMany: vi.fn(),
    },
    $disconnect: vi.fn(),
  },
}));

const mockShow = {
  id: "test-id-1",
  title: "Breaking Bad",
  description: "A chemistry teacher turns to crime.",
  genre: "Drama",
  year: 2008,
  imageUrl: "https://example.com/bb.jpg",
  createdAt: new Date(),
  createdBy: "seed",
  reviews: [],
};

/* ------------------------------------------
  TESTS — PRODUCTION-LIKE BEHAVIOUR
--------------------------------------------- */
describe("Production-like behaviour", () => {
  it("GET /shows returns the correct CORS header for the allowed origin", async () => {
    vi.mocked(prisma.show.findMany).mockResolvedValueOnce([mockShow] as any);

    const server = createServer(app);
    server.listen(0);
    await once(server, "listening");

    const address = server.address();
    if (!address || typeof address === "string") {
      server.close();
      throw new Error("Test server did not start correctly");
    }

    const response = await fetch(`http://127.0.0.1:${address.port}/shows`, {
      headers: { Origin: "http://localhost:5500" },
    });

    expect(response.headers.get("access-control-allow-origin")).toBe(
      "http://localhost:5500",
    );

    server.close();
  });

  it("GET /shows returns JSON content type", async () => {
    vi.mocked(prisma.show.findMany).mockResolvedValueOnce([mockShow] as any);

    const server = createServer(app);
    server.listen(0);
    await once(server, "listening");

    const address = server.address();
    if (!address || typeof address === "string") {
      server.close();
      throw new Error("Test server did not start correctly");
    }

    const response = await fetch(`http://127.0.0.1:${address.port}/shows`);

    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toContain("application/json");

    server.close();
  });
});
