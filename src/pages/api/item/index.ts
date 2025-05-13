import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      // Get all items with their categories
      const items = await prisma.item.findMany({
        include: {
          category: true,
        },
      });

      // Group items by category
      const itemsByCategory = items.reduce((acc, item) => {
        const categoryName = item.category.name;
        if (!acc[categoryName]) {
          acc[categoryName] = [];
        }
        acc[categoryName].push(item);
        return acc;
      }, {} as Record<string, typeof items>);

      return res.status(200).json(itemsByCategory);
    } catch (error) {
      console.error("Error fetching items:", error);
      return res.status(500).json({ error: "Failed to fetch items" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}