
// // src/types/product.ts
// export type Product = {
//   id: number;
//   title: string;
//   description: string; // ✅ add this
//   category: string;
//   reviews: number;
//   price: number;
//   discountedPrice: number;
//   imgs: {
//     thumbnails: string[];
//     previews: string[];
//   };
// };



// src/types/product.ts
export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  reviews: number;
  price: number;
  discountedPrice: number;
  imgs: {
    thumbnails: string[];
    previews: string[];
  };
  longDescription?: string;
  keyBenefits?: string[];
  keyIngredients?: string[];
  availableSizes?: string[];
  suitableFor?: string;
  usage?: string;
  tag?: string;
};