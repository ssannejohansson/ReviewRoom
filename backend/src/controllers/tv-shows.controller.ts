import { Request, Response } from "express";
import {
  getAllShows,
  getShowById,
  createShow,
  addReview,
} from "../services/tv-shows.service.js";

/* -----------------------
GET ALL SHOWS
Public - no auth required
----------------------- */
export const getShows = async (req: Request, res: Response): Promise<void> => {
  const shows = await getAllShows();
  res.status(200).json(shows);
};

/* -----------------------
GET SHOW BY ID
Public - no auth required
----------------------- */
export const getShow = async (req: Request, res: Response): Promise<void> => {
  const show = await getShowById(req.params.id);

  if (!show) {
    res.status(404).json({ error: "Show not found" });
    return;
  }

  res.status(200).json(show);
};

/* -----------------------
CREATE SHOW
Protected - requires valid firebase token
----------------------- */
export const postShow = async (req: Request, res: Response): Promise<void> => {
  const { title, description, genre, year, imageUrl } = req.body;
  const user = (req as any).user;

  if (!title || !description || !genre || !year) {
    res
      .status(400)
      .json({ error: "title, description, genre, and year are required" });
    return;
  }

  const newShow = await createShow({
    title,
    description,
    genre,
    year: Number(year),
    imageUrl,
    createdBy: user.uid,
  });

  res.status(201).json(newShow);
};

/* -----------------------
ADD REVIEW
Protected - requires valid firebase token
----------------------- */
export const postReview = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { title, rating, comment } = req.body;
  const user = (req as any).user;

  if (!rating || !comment) {
    res.status(400).json({ error: "rating and comment are required" });
    return;
  }

  const review = await addReview(req.params.id, {
    title,
    rating: Number(rating),
    comment,
    author: user.email || user.uid,
  });

  if (!review) {
    res.status(404).json({ error: "Show not found" });
    return;
  }

  res.status(201).json(review);
};

/* -----------------------
GET PROFILE
Protected - requires valid firebase token
----------------------- */
export const getProfile = (req: Request, res: Response): void => {
  const user = (req as any).user;
  res.status(200).json({ uid: user.uid, email: user.email });
};
