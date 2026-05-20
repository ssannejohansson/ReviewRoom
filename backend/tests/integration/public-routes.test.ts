import { describe, expect, it, vi } from "vitest";
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
      findUnique: vi.fn(),
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
  TESTS — PUBLIC ROUTES
--------------------------------------------- */
describe("GET /shows (Public Routes)", () => {
  it("should return 200 and an array of TV shows", async () => {
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
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(Array.isArray(data)).toBe(true);

    server.close();
  });

  it("should return 404 for an unknown TV show ID", async () => {
    vi.mocked(prisma.show.findUnique).mockResolvedValueOnce(null);

    const server = createServer(app);
    server.listen(0);
    await once(server, "listening");

    const address = server.address();
    if (!address || typeof address === "string") {
      server.close();
      throw new Error("Test server did not start correctly");
    }

    const response = await fetch(
      `http://127.0.0.1:${address.port}/shows/nonexistent-id`,
    );

    expect(response.status).toBe(404);

    server.close();
  });
});
