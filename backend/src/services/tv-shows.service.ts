import { prisma } from "../lib/prisma.js";

/* -----------------------
TYPES - SERVICE INPUTS
----------------------- */
interface CreateShowInput {
  title: string;
  description: string;
  genre: string;
  year: number;
  imageUrl: string;
  createdBy: string;
}

interface AddReviewInput {
  title?: string;
  rating: number;
  comment: string;
  author: string;
}

/* -----------------------
SERVICE METHODS
----------------------- */

// Returns all shows
export const getAllShows = () =>
  prisma.show.findMany({
    include: { reviews: true },
    orderBy: { createdAt: "desc" },
  });

// Returns a single show by id, or null if not found
export const getShowById = (id: string) =>
  prisma.show.findUnique({
    where: { id },
    include: { reviews: true },
  });

// Creates a new show and adds it to the database
export const createShow = (input: CreateShowInput) =>
  prisma.show.create({
    data: {
      title: input.title,
      description: input.description,
      genre: input.genre,
      year: input.year,
      imageUrl: input.imageUrl || "https://placehold.co/500x750?text=No+Image",
      createdBy: input.createdBy,
    },
    include: { reviews: true },
  });

// Adds a review to a show — returns the review or null if show not found
export const addReview = async (showId: string, input: AddReviewInput) => {
  const show = await prisma.show.findUnique({ where: { id: showId } });
  if (!show) return null;

  return prisma.review.create({
    data: {
      title: input.title,
      author: input.author,
      rating: input.rating,
      comment: input.comment,
      showId,
    },
  });
};
