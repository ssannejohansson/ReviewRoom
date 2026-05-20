import "dotenv/config";
import { prisma } from "../src/lib/prisma.js";
import { shows } from "../src/data.js";

const main = async () => {
    await prisma.review.deleteMany();
    await prisma.show.deleteMany();

    for (const show of shows) {
        await prisma.show.create({
            data: {
                title: show.title,
                description: show.description,
                genre: show.genre,
                year: show.year,
                imageUrl: show.imageUrl,
                createdBy: show.createdBy,
                createdAt: new Date(show.createdAt),
                reviews: {
                create: show.reviews.map((review) => ({
                    title: review.title,
                    author: review.author,
                    rating: review.rating,
                    comment: review.comment,
                    createdAt: new Date(review.createdAt),
            })),
            },
        },
        });
    }

    console.log("Seeded database successfully");
};

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
