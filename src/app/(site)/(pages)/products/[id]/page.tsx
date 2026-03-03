// src/app/(site)/(pages)/products/[id]/page.tsx

import { notFound } from "next/navigation";
import shopData from "@/components/Shop/shopData";

// ─── PICK THE CORRECT IMPORT BASED ON YOUR FOLDER ───────────────────
// Check your components folder and use whichever matches:
//
// If you have:  components/ShopDetails/ShopDetails.tsx
import ShopDetails from "@/components/ShopDetails";
//
// If you have:  components/ShopDetails/index.tsx
// import ShopDetails from "@/components/ShopDetails";
//
// If you have:  components/ShopDetails.tsx  (single file)
// import ShopDetails from "@/components/ShopDetails";
// ─────────────────────────────────────────────────────────────────────

type Props = {
  params: Promise<{ id: string }> | { id: string };
};

export async function generateStaticParams() {
  return shopData.map((product) => ({
    id: String(product.id),
  }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await Promise.resolve(params);
  const product = shopData.find((p) => p.id === Number(id));
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.title} | Imaxia Professional`,
    description: `Buy ${product.title} for $${product.discountedPrice}`,
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await Promise.resolve(params);
  const product = shopData.find((p) => p.id === Number(id));

  if (!product) notFound();

  return <ShopDetails product={product!} />;
}