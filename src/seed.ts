import prisma from "./db";

const seedProducts = async () => {
  await prisma.product.deleteMany();

  await prisma.product.createMany({
    data: [
      {
        name: "Classic White Tee",
        price: 999,
        category: "men",
        sizes: ["S", "M", "L", "XL"],
        image:
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
        description: "A clean, minimal white tee for everyday wear.",
        tags: ["casual", "basic", "summer"],
      },
      {
        name: "Black Oversized Hoodie",
        price: 2499,
        category: "men",
        sizes: ["M", "L", "XL", "XXL"],
        image:
          "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500",
        description: "Stay cozy with this oversized black hoodie.",
        tags: ["hoodie", "winter", "oversized"],
      },
      {
        name: "Floral Summer Dress",
        price: 1799,
        category: "women",
        sizes: ["XS", "S", "M", "L"],
        image:
          "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500",
        description: "Light and breezy floral dress perfect for summers.",
        tags: ["dress", "summer", "floral"],
      },
      {
        name: "Women Crop Jacket",
        price: 2999,
        category: "women",
        sizes: ["S", "M", "L"],
        image:
          "https://images.unsplash.com/photo-1548126032-079a0fb0099d?w=500",
        description: "Stylish crop jacket for a bold look.",
        tags: ["jacket", "casual", "trendy"],
      },
      {
        name: "Leather Belt",
        price: 599,
        category: "accessories",
        sizes: ["M", "L", "XL"],
        image:
          "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=500",
        description: "Premium leather belt for all occasions.",
        tags: ["belt", "leather", "accessories"],
      },
      {
        name: "Canvas Tote Bag",
        price: 799,
        category: "accessories",
        sizes: ["M"],
        image:
          "https://images.unsplash.com/photo-1544816155-12df9643f363?w=500",
        description: "Minimalist canvas tote for daily use.",
        tags: ["bag", "tote", "casual"],
      },
    ],
  });

  console.log("✅ Products seeded successfully!");
  await prisma.$disconnect();
};

seedProducts();
