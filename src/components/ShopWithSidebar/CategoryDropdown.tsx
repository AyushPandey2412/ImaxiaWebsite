"use client";

import { useState } from "react";

import { useRouter, useSearchParams } from "next/navigation";




const CategoryItem = ({ category }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category");

  const selected = activeCategory === category.name;

  const handleClick = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (selected) {
      params.delete("category"); // unselect
    } else {
      params.set("category", category.name);
    }

    router.push(`/shop-with-sidebar?${params.toString()}`);
  };

  return (
    <button
      onClick={handleClick}
      className={`${
        selected && "text-[#A855F7]"
      } group flex items-center justify-between ease-out duration-200 hover:text-[#A855F7]`}
    >
      <div className="flex items-center gap-2">
        <div
          className={`cursor-pointer flex items-center justify-center rounded w-4 h-4 border ${
            // selected ? "border-blue bg-blue" : "bg-white border-gray-3"
            selected ? "border-[#A855F7] bg-[#A855F7]" : "bg-white border-gray-3"

          }`}
        >
          <svg
            className={selected ? "block" : "hidden"}
            width="10"
            height="10"
            viewBox="0 0 10 10"
          >
            <path
              d="M8.33317 2.5L3.74984 7.08333L1.6665 5"
              stroke="white"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <span>{category.name}</span>
      </div>

      <span
        className={`${
          // selected ? "text-white bg-blue" : "bg-gray-2"
          selected ? "text-white bg-[#A855F7]" : "bg-gray-2"
        } inline-flex rounded-[30px] text-custom-xs px-2 ease-out duration-200 group-hover:text-white group-hover:bg-[#A855F7]
`}
      >
        {category.products}
      </span>
    </button>
  );
};



  const CategoryDropdown = ({ categories }) => {
    const [toggleDropdown, setToggleDropdown] = useState(true);
    const searchParams = useSearchParams();
    // const activeCategory = searchParams.get("category");

    return (
      <div className="bg-white shadow-1 rounded-lg">
        <div
          onClick={(e) => {
            e.preventDefault();
            setToggleDropdown(!toggleDropdown);
          }}
          className={`cursor-pointer flex items-center justify-between py-3 pl-6 pr-5.5 ${
            toggleDropdown && "shadow-filter"
          }`}
        >
          <p className="text-dark">Category</p>
          <button
            aria-label="button for category dropdown"
            className={`text-dark ease-out duration-200 ${
              toggleDropdown && "rotate-180"
            }`}
          >
            {/* same svg */}
          </button>
        </div>

        <div
          className={`flex-col gap-3 py-6 pl-6 pr-5.5 ${
            toggleDropdown ? "flex" : "hidden"
          }`}
        >
          {/* {categories.map((category, key) => (
            <CategoryItem
              key={key}
              category={category}
              defaultSelected={category.name === activeCategory}
            />
          ))} */}
          {categories.map((category, key) => (
  <CategoryItem key={key} category={category} />
))}

        </div>
      </div>
    );
  };


  export default CategoryDropdown;
