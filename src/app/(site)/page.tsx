// import Home from "@/components/Home";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "NextCommerce | Nextjs E-commerce template",
//   description: "This is Home for NextCommerce Template",
//   // other metadata
// };

// export default function HomePage() {
//   return (
//     <>
//       <Home />
//     </>
//   );
// }


import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imaxia Professional",
  description: "Welcome to Imaxia Professional - Premium Beauty & Skincare Products",
};

export default function HomePage() {
  return <Home />;
}