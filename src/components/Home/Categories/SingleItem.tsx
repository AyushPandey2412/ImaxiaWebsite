// import { Category } from "@/types/category";
// import React from "react";
// import Image from "next/image";

// const SingleItem = ({ item }: { item: Category }) => {
//   return (
//     <a href="#" className="group flex flex-col items-center">
//       <div className="max-w-[130px] w-full bg-[#F2F3F8] h-32.5 rounded-full flex items-center justify-center mb-4">
//         <Image src={item.img} alt="Category" width={82} height={62} />
//       </div>

//       <div className="flex justify-center">
//         <h3 className="inline-block font-medium text-center text-dark bg-gradient-to-r from-blue to-blue bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px] group-hover:text-blue">
//           {item.title}
//         </h3>
//       </div>
//     </a>
//   );
// };

// export default SingleItem;

import { Category } from "@/types/category";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const SingleItem = ({ item }: { item: Category }) => {
  // Use URLSearchParams to encode the category, matching how the sidebar builds URLs.
  // This ensures both entry points produce identical query strings (e.g. "Hair+care")
  // so activeCategory === name comparisons always work correctly.
  const params = new URLSearchParams({ category: item.title });

  return (
    <Link
      href={`/shop-with-sidebar?${params.toString()}`}
      className="group flex flex-col items-center"
    >
      <div className="max-w-[130px] w-full bg-[#F2F3F8] h-32.5 rounded-full flex items-center justify-center mb-4">
        <Image src={item.img} alt="Category" width={82} height={62} />
      </div>

      <div className="flex justify-center">
       <h3 className="inline-block font-medium text-center text-dark bg-gradient-to-r from-[#7C3AED] to-[#7C3AED] bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px] group-hover:text-[#7C3AED]">
  {item.title}
</h3>
      </div>
    </Link>
  );
};

export default SingleItem;