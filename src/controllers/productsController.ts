import { Request, Response } from "express";
import prisma from "../db";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { category } = req.query;

    const products = await prisma.product.findMany({
      where: category ? { category: category as string } : undefined,
    });

    res.json(products);
  } catch (error: any) {
    console.error("Products error full:", error?.message, error?.stack);
    res.status(500).json({
      message: "Server error",
      error: error?.message || "Unknown error",
      stack: error?.stack || "No stack",
    });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const product = await prisma.product.findUnique({
      where: { id: Number(id) },
    });

    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
