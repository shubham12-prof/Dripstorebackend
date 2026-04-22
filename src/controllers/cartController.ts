import { Request, Response } from "express";
import prisma from "../db";
import { AuthRequest } from "../middleware/authMiddleware";

export const getCart = async (req: AuthRequest, res: Response) => {
  try {
    const cartItems = await prisma.cartItem.findMany({
      where: { userId: req.userId },
      include: { product: true },
    });
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const addToCart = async (req: AuthRequest, res: Response) => {
  try {
    const { productId, size, quantity } = req.body;

    const existing = await prisma.cartItem.findFirst({
      where: { userId: req.userId, productId, size },
    });

    if (existing) {
      const updated = await prisma.cartItem.update({
        where: { id: existing.id },
        data: { quantity: existing.quantity + quantity },
      });
      res.json(updated);
      return;
    }

    const cartItem = await prisma.cartItem.create({
      data: {
        userId: req.userId!,
        productId,
        size,
        quantity,
      },
    });

    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const removeFromCart = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params as { id: string };

    await prisma.cartItem.delete({
      where: { id },
    });

    res.json({ message: "Item removed from cart" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const clearCart = async (req: AuthRequest, res: Response) => {
  try {
    await prisma.cartItem.deleteMany({
      where: { userId: req.userId },
    });

    res.json({ message: "Cart cleared" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
