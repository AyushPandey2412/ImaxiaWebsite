// import React from "react";
// import ShopDetails from "@/components/ShopDetails";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Shop Details Page | NextCommerce Nextjs E-commerce template",
//   description: "This is Shop Details Page for NextCommerce Template",
//   // other metadata
// };

// const ShopDetailsPage = () => {
//   return (
//     <main>
//       <ShopDetails />
//     </main>
//   );
// };

// export default ShopDetailsPage;




// app/products/[id]/page.tsx
import { notFound } from "next/navigation";
import shopData from "@/components/Shop/shopData";
import ShopDetails from "@/components/ShopDetails";

// Generate static params for all products (optional but good for SSG)
export async function generateStaticParams() {
  return shopData.map((product) => ({
    id: String(product.id),
  }));
}

// Generate metadata per product
export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = shopData.find((p) => p.id === Number(params.id));
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.title,
    description: `Buy ${product.title} - $${product.discountedPrice}`,
  };
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = shopData.find((p) => p.id === Number(params.id));

  // If no product found, show Next.js 404
  if (!product) {
    notFound();
  }

  return <ShopDetails product={product} />;
}