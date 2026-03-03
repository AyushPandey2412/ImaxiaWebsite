  // "use client";
  // import React, { useState, useEffect } from "react";
  // import Breadcrumb from "../Common/Breadcrumb";
  // import CustomSelect from "./CustomSelect";
  // import CategoryDropdown from "./CategoryDropdown";
  // import GenderDropdown from "./GenderDropdown";
  // import SizeDropdown from "./SizeDropdown";
  // import ColorsDropdwon from "./ColorsDropdwon";
  // // import PriceDropdown from "./PriceDropdown";
  // import shopData from "../Shop/shopData";
  // import SingleGridItem from "../Shop/SingleGridItem";
  // import SingleListItem from "../Shop/SingleListItem";
  // import { useSearchParams } from "next/navigation";

  // export type Product = {
  //   id: number;
  //   title: string;
  //   reviews: number;
  //   price: number;
  //   discountedPrice: number;
  //   imgs: {
  //     thumbnails: string[];
  //     previews: string[];
  //   };
  //   category: string;  
  // };

  // const ShopWithSidebar = () => {
  //   const [productStyle, setProductStyle] = useState("grid");
  //   const [productSidebar, setProductSidebar] = useState(false);
  //   const [stickyMenu, setStickyMenu] = useState(false);
  //   const searchParams = useSearchParams();
  // const activeCategory = searchParams.get("category");
  // const min = Number(searchParams.get("min") ?? 0);
  // const max = Number(searchParams.get("max") ?? Infinity);
  // const ITEMS_PER_PAGE = 10;
  // const [page, setPage] = useState(1);




  //   const handleStickyMenu = () => {
  //     if (window.scrollY >= 80) {
  //       setStickyMenu(true);
  //     } else {
  //       setStickyMenu(false);
  //     }
  //   };

  //   const options = [
  //     { label: "Latest Products", value: "0" },
  //     { label: "Best Selling", value: "1" },
  //     { label: "Old Products", value: "2" },
  //   ];

  //   const categories = [
  //     {
  //       name: "Televisions",
  //       products: 10,
  //       isRefined: true,
  //     },
  //     {
  //       name: "Laptop & PC",
  //       products: 12,
  //       isRefined: false,
  //     },
  //     {
  //       name: "Monitor",
  //       products: 30,
  //       isRefined: false,
  //     },
  //     {
  //       name: "UPS",
  //       products: 23,
  //       isRefined: false,
  //     },
  //     {
  //       name: "Phone",
  //       products: 10,
  //       isRefined: false,
  //     },
  //     {
  //       name: "Watch",
  //       products: 13,
  //       isRefined: false,
  //     },
  //   ];



  //   useEffect(() => {
  //     window.addEventListener("scroll", handleStickyMenu);

  //     // closing sidebar while clicking outside
  //     function handleClickOutside(event) {
  //       if (!event.target.closest(".sidebar-content")) {
  //         setProductSidebar(false);
  //       }
  //     }

  //     if (productSidebar) {
  //       document.addEventListener("mousedown", handleClickOutside);
  //     }

  //     return () => {
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   });

  //   // const filteredProducts = activeCategory
  //   // ? shopData.filter((p) => p.category === activeCategory)
  //   // : shopData;


  //   const filteredProducts = shopData.filter((p) => {
  //   const inCategory = activeCategory ? p.category === activeCategory : true;
  //   const inPrice = p.discountedPrice >= min && p.discountedPrice <= max;
  //   return inCategory && inPrice;
  // });


  // const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  // const paginatedProducts = filteredProducts.slice(
  //   (page - 1) * ITEMS_PER_PAGE,
  //   page * ITEMS_PER_PAGE
  // );



  //   return (
  //     <>
  //       <Breadcrumb
  //         title={"Explore All Products"}
  //         pages={["shop", "/"]}
  //       />
  //       {/* <section className="overflow-hidden relative pb-20 pt-5 lg:pt-20 xl:pt-28 bg-[#f3f4f6]"> */}
  //       <section className="overflow-hidden relative pb-20 pt-3 lg:pt-6 xl:pt-8 bg-[#f3f4f6]">

  //     {/* <section className="overflow-hidden relative pb-20 bg-[#f3f4f6] pt-28 sm:pt-32 lg:pt-20 xl:pt-24"> */}


  //         <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
  //           <div className="flex gap-7.5">
  //             {/* <!-- Sidebar Start --> */}
  //             <div
  //               className={`sidebar-content fixed xl:z-1 z-9999 left-0 top-0 xl:translate-x-0 xl:static max-w-[310px] xl:max-w-[270px] w-full ease-out duration-200 ${
  //                 productSidebar
  //                   ? "translate-x-0 bg-white p-5 h-screen overflow-y-auto"
  //                   : "-translate-x-full"
  //               }`}
  //             >
  //               <button
  //                 onClick={() => setProductSidebar(!productSidebar)}
  //                 aria-label="button for product sidebar toggle"
  //                 className={`xl:hidden absolute -right-12.5 sm:-right-8 flex items-center justify-center w-8 h-8 rounded-md bg-white shadow-1 ${
  //                   stickyMenu
  //                     ? "lg:top-20 sm:top-34.5 top-35"
  //                     : "lg:top-24 sm:top-39 top-37"
  //                 }`}
  //               >
  //                 <svg
  //                   className="fill-current"
  //                   width="24"
  //                   height="24"
  //                   viewBox="0 0 24 24"
  //                   fill="none"
  //                   xmlns="http://www.w3.org/2000/svg"
  //                 >
  //                   <path
  //                     fillRule="evenodd"
  //                     clipRule="evenodd"
  //                     d="M10.0068 3.44714C10.3121 3.72703 10.3328 4.20146 10.0529 4.5068L5.70494 9.25H20C20.4142 9.25 20.75 9.58579 20.75 10C20.75 10.4142 20.4142 10.75 20 10.75H4.00002C3.70259 10.75 3.43327 10.5742 3.3135 10.302C3.19374 10.0298 3.24617 9.71246 3.44715 9.49321L8.94715 3.49321C9.22704 3.18787 9.70147 3.16724 10.0068 3.44714Z"
  //                     fill=""
  //                   />
  //                   <path
  //                     fillRule="evenodd"
  //                     clipRule="evenodd"
  //                     d="M20.6865 13.698C20.5668 13.4258 20.2974 13.25 20 13.25L4.00001 13.25C3.5858 13.25 3.25001 13.5858 3.25001 14C3.25001 14.4142 3.5858 14.75 4.00001 14.75L18.2951 14.75L13.9472 19.4932C13.6673 19.7985 13.6879 20.273 13.9932 20.5529C14.2986 20.8328 14.773 20.8121 15.0529 20.5068L20.5529 14.5068C20.7539 14.2876 20.8063 13.9703 20.6865 13.698Z"
  //                     fill=""
  //                   />
  //                 </svg>
  //               </button>

  //               <form onSubmit={(e) => e.preventDefault()}>
  //                 <div className="flex flex-col gap-6">
  //                   {/* <!-- filter box --> */}
  //                   <div className="bg-white shadow-1 rounded-lg py-4 px-5">
  //                     <div className="flex items-center justify-between">
  //                       <p>Filters:</p>
  //                       {/* <button className="text-blue">Clean All</button> */}
  //                     </div>
  //                   </div>

  //                   {/* <!-- category box --> */}
  //                   <CategoryDropdown categories={categories} />

  //                   {/* <!-- gender box --> */}
  //                   {/* // <!-- size box --> */}
  //                   {/* <SizeDropdown /> */}

  //                   {/* // <!-- color box --> */}
  //                   {/* <ColorsDropdwon /> */}

  //                   {/* // <!-- price range box --> */}
  //                   {/* <PriceDropdown /> */}
  //                 </div>
  //               </form>
  //             </div>
  //             {/* // <!-- Sidebar End --> */}

  //             {/* // <!-- Content Start --> */}
  //             <div className="xl:max-w-[870px] w-full">
  //               <div className="rounded-lg bg-white shadow-1 pl-3 pr-2.5 py-2.5 mb-6">
  //                 <div className="flex items-center justify-between">
  //                   {/* <!-- top bar left --> */}
  //                   <div className="flex flex-wrap items-center gap-4">
  //                     <CustomSelect options={options} />

  //                     <p>
  //                       {/* Showing <span className="text-dark">9 of 50</span>{" "}
  //                       Products */}
  //                       <p>
  //   Showing{" "}
  //   <span className="text-dark">
  //     {paginatedProducts.length} of {filteredProducts.length}
  //   </span>{" "}
  //   Products
  // </p>

  //                     </p>
  //                   </div>

  //                   {/* <!-- top bar right --> */}
  //                   <div className="flex items-center gap-2.5">
  //                     <button
  //                       onClick={() => setProductStyle("grid")}
  //                       aria-label="button for product grid tab"
  //                       className={`${
  //                         productStyle === "grid"
  //                           ? "bg-blue border-blue text-white"
  //                           : "text-dark bg-gray-1 border-gray-3"
  //                       } flex items-center justify-center w-10.5 h-9 rounded-[5px] border ease-out duration-200 hover:bg-blue hover:border-blue hover:text-white`}
  //                     >
  //                       <svg
  //                         className="fill-current"
  //                         width="18"
  //                         height="18"
  //                         viewBox="0 0 18 18"
  //                         fill="none"
  //                         xmlns="http://www.w3.org/2000/svg"
  //                       >
  //                         <path
  //                           fillRule="evenodd"
  //                           clipRule="evenodd"
  //                           d="M4.836 1.3125C4.16215 1.31248 3.60022 1.31246 3.15414 1.37244C2.6833 1.43574 2.2582 1.57499 1.91659 1.91659C1.57499 2.2582 1.43574 2.6833 1.37244 3.15414C1.31246 3.60022 1.31248 4.16213 1.3125 4.83598V4.914C1.31248 5.58785 1.31246 6.14978 1.37244 6.59586C1.43574 7.06671 1.57499 7.49181 1.91659 7.83341C2.2582 8.17501 2.6833 8.31427 3.15414 8.37757C3.60022 8.43754 4.16213 8.43752 4.83598 8.4375H4.914C5.58785 8.43752 6.14978 8.43754 6.59586 8.37757C7.06671 8.31427 7.49181 8.17501 7.83341 7.83341C8.17501 7.49181 8.31427 7.06671 8.37757 6.59586C8.43754 6.14978 8.43752 5.58787 8.4375 4.91402V4.83601C8.43752 4.16216 8.43754 3.60022 8.37757 3.15414C8.31427 2.6833 8.17501 2.2582 7.83341 1.91659C7.49181 1.57499 7.06671 1.43574 6.59586 1.37244C6.14978 1.31246 5.58787 1.31248 4.91402 1.3125H4.836ZM2.71209 2.71209C2.80983 2.61435 2.95795 2.53394 3.30405 2.4874C3.66632 2.4387 4.15199 2.4375 4.875 2.4375C5.59801 2.4375 6.08368 2.4387 6.44596 2.4874C6.79205 2.53394 6.94018 2.61435 7.03791 2.71209C7.13565 2.80983 7.21607 2.95795 7.2626 3.30405C7.31131 3.66632 7.3125 4.15199 7.3125 4.875C7.3125 5.59801 7.31131 6.08368 7.2626 6.44596C7.21607 6.79205 7.13565 6.94018 7.03791 7.03791C6.94018 7.13565 6.79205 7.21607 6.44596 7.2626C6.08368 7.31131 5.59801 7.3125 4.875 7.3125C4.15199 7.3125 3.66632 7.31131 3.30405 7.2626C2.95795 7.21607 2.80983 7.13565 2.71209 7.03791C2.61435 6.94018 2.53394 6.79205 2.4874 6.44596C2.4387 6.08368 2.4375 5.59801 2.4375 4.875C2.4375 4.15199 2.4387 3.66632 2.4874 3.30405C2.53394 2.95795 2.61435 2.80983 2.71209 2.71209Z"
  //                           fill=""
  //                         />
  //                         <path
  //                           fillRule="evenodd"
  //                           clipRule="evenodd"
  //                           d="M13.086 9.5625C12.4121 9.56248 11.8502 9.56246 11.4041 9.62244C10.9333 9.68574 10.5082 9.82499 10.1666 10.1666C9.82499 10.5082 9.68574 10.9333 9.62244 11.4041C9.56246 11.8502 9.56248 12.4121 9.5625 13.086V13.164C9.56248 13.8379 9.56246 14.3998 9.62244 14.8459C9.68574 15.3167 9.82499 15.7418 10.1666 16.0834C10.5082 16.425 10.9333 16.5643 11.4041 16.6276C11.8502 16.6875 12.4121 16.6875 13.0859 16.6875H13.164C13.8378 16.6875 14.3998 16.6875 14.8459 16.6276C15.3167 16.5643 15.7418 16.425 16.0834 16.0834C16.425 15.7418 16.5643 15.3167 16.6276 14.8459C16.6875 14.3998 16.6875 13.8379 16.6875 13.1641V13.086C16.6875 12.4122 16.6875 11.8502 16.6276 11.4041C16.5643 10.9333 16.425 10.5082 16.0834 10.1666C15.7418 9.82499 15.3167 9.68574 14.8459 9.62244C14.3998 9.56246 13.8379 9.56248 13.164 9.5625H13.086ZM10.9621 10.9621C11.0598 10.8644 11.208 10.7839 11.554 10.7374C11.9163 10.6887 12.402 10.6875 13.125 10.6875C13.848 10.6875 14.3337 10.6887 14.696 10.7374C15.0421 10.7839 15.1902 10.8644 15.2879 10.9621C15.3857 11.0598 15.4661 11.208 15.5126 11.554C15.5613 11.9163 15.5625 12.402 15.5625 13.125C15.5625 13.848 15.5613 14.3337 15.5126 14.696C15.4661 15.0421 15.3857 15.1902 15.2879 15.2879C15.1902 15.3857 15.0421 15.4661 14.696 15.5126C14.3337 15.5613 13.848 15.5625 13.125 15.5625C12.402 15.5625 11.9163 15.5613 11.554 15.5126C11.208 15.4661 11.0598 15.3857 10.9621 15.2879C10.8644 15.1902 10.7839 15.0421 10.7374 14.696C10.6887 14.3337 10.6875 13.848 10.6875 13.125C10.6875 12.402 10.6887 11.9163 10.7374 11.554C10.7839 11.208 10.8644 11.0598 10.9621 10.9621Z"
  //                           fill=""
  //                         />
  //                         <path
  //                           fillRule="evenodd"
  //                           clipRule="evenodd"
  //                           d="M4.836 9.5625H4.914C5.58786 9.56248 6.14978 9.56246 6.59586 9.62244C7.06671 9.68574 7.49181 9.82499 7.83341 10.1666C8.17501 10.5082 8.31427 10.9333 8.37757 11.4041C8.43754 11.8502 8.43752 12.4121 8.4375 13.086V13.164C8.43752 13.8378 8.43754 14.3998 8.37757 14.8459C8.31427 15.3167 8.17501 15.7418 7.83341 16.0834C7.49181 16.425 7.06671 16.5643 6.59586 16.6276C6.14979 16.6875 5.58789 16.6875 4.91405 16.6875H4.83601C4.16217 16.6875 3.60022 16.6875 3.15414 16.6276C2.6833 16.5643 2.2582 16.425 1.91659 16.0834C1.57499 15.7418 1.43574 15.3167 1.37244 14.8459C1.31246 14.3998 1.31248 13.8379 1.3125 13.164V13.086C1.31248 12.4122 1.31246 11.8502 1.37244 11.4041C1.43574 10.9333 1.57499 10.5082 1.91659 10.1666C2.2582 9.82499 2.6833 9.68574 3.15414 9.62244C3.60023 9.56246 4.16214 9.56248 4.836 9.5625ZM3.30405 10.7374C2.95795 10.7839 2.80983 10.8644 2.71209 10.9621C2.61435 11.0598 2.53394 11.208 2.4874 11.554C2.4387 11.9163 2.4375 12.402 2.4375 13.125C2.4375 13.848 2.4387 14.3337 2.4874 14.696C2.53394 15.0421 2.61435 15.1902 2.71209 15.2879C2.80983 15.3857 2.95795 15.4661 3.30405 15.5126C3.66632 15.5613 4.15199 15.5625 4.875 15.5625C5.59801 15.5625 6.08368 15.5613 6.44596 15.5126C6.79205 15.4661 6.94018 15.3857 7.03791 15.2879C7.13565 15.1902 7.21607 15.0421 7.2626 14.696C7.31131 14.3337 7.3125 13.848 7.3125 13.125C7.3125 12.402 7.31131 11.9163 7.2626 11.554C7.21607 11.208 7.13565 11.0598 7.03791 10.9621C6.94018 10.8644 6.79205 10.7839 6.44596 10.7374C6.08368 10.6887 5.59801 10.6875 4.875 10.6875C4.15199 10.6875 3.66632 10.6887 3.30405 10.7374Z"
  //                           fill=""
  //                         />
  //                         <path
  //                           fillRule="evenodd"
  //                           clipRule="evenodd"
  //                           d="M13.086 1.3125C12.4122 1.31248 11.8502 1.31246 11.4041 1.37244C10.9333 1.43574 10.5082 1.57499 10.1666 1.91659C9.82499 2.2582 9.68574 2.6833 9.62244 3.15414C9.56246 3.60023 9.56248 4.16214 9.5625 4.836V4.914C9.56248 5.58786 9.56246 6.14978 9.62244 6.59586C9.68574 7.06671 9.82499 7.49181 10.1666 7.83341C10.5082 8.17501 10.9333 8.31427 11.4041 8.37757C11.8502 8.43754 12.4121 8.43752 13.086 8.4375H13.164C13.8378 8.43752 14.3998 8.43754 14.8459 8.37757C15.3167 8.31427 15.7418 8.17501 16.0834 7.83341C16.425 7.49181 16.5643 7.06671 16.6276 6.59586C16.6875 6.14978 16.6875 5.58787 16.6875 4.91402V4.83601C16.6875 4.16216 16.6875 3.60022 16.6276 3.15414C16.5643 2.6833 16.425 2.2582 16.0834 1.91659C15.7418 1.57499 15.3167 1.43574 14.8459 1.37244C14.3998 1.31246 13.8379 1.31248 13.164 1.3125H13.086ZM10.9621 2.71209C11.0598 2.61435 11.208 2.53394 11.554 2.4874C11.9163 2.4387 12.402 2.4375 13.125 2.4375C13.848 2.4375 14.3337 2.4387 14.696 2.4874C15.0421 2.53394 15.1902 2.61435 15.2879 2.71209C15.3857 2.80983 15.4661 2.95795 15.5126 3.30405C15.5613 3.66632 15.5625 4.15199 15.5625 4.875C15.5625 5.59801 15.5613 6.08368 15.5126 6.44596C15.4661 6.79205 15.3857 6.94018 15.2879 7.03791C15.1902 7.13565 15.0421 7.21607 14.696 7.2626C14.3337 7.31131 13.848 7.3125 13.125 7.3125C12.402 7.3125 11.9163 7.31131 11.554 7.2626C11.208 7.21607 11.0598 7.13565 10.9621 7.03791C10.8644 6.94018 10.7839 6.79205 10.7374 6.44596C10.6887 6.08368 10.6875 5.59801 10.6875 4.875C10.6875 4.15199 10.6887 3.66632 10.7374 3.30405C10.7839 2.95795 10.8644 2.80983 10.9621 2.71209Z"
  //                           fill=""
  //                         />
  //                       </svg>
  //                     </button>

  //                     <button
  //                       onClick={() => setProductStyle("list")}
  //                       aria-label="button for product list tab"
  //                       className={`${
  //                         productStyle === "list"
  //                           ? "bg-blue border-blue text-white"
  //                           : "text-dark bg-gray-1 border-gray-3"
  //                       } flex items-center justify-center w-10.5 h-9 rounded-[5px] border ease-out duration-200 hover:bg-blue hover:border-blue hover:text-white`}
  //                     >
  //                       <svg
  //                         className="fill-current"
  //                         width="18"
  //                         height="18"
  //                         viewBox="0 0 18 18"
  //                         fill="none"
  //                         xmlns="http://www.w3.org/2000/svg"
  //                       >
  //                         <path
  //                           fillRule="evenodd"
  //                           clipRule="evenodd"
  //                           d="M4.4234 0.899903C3.74955 0.899882 3.18763 0.899864 2.74155 0.959838C2.2707 1.02314 1.8456 1.16239 1.504 1.504C1.16239 1.8456 1.02314 2.2707 0.959838 2.74155C0.899864 3.18763 0.899882 3.74953 0.899903 4.42338V4.5014C0.899882 5.17525 0.899864 5.73718 0.959838 6.18326C1.02314 6.65411 1.16239 7.07921 1.504 7.42081C1.8456 7.76241 2.2707 7.90167 2.74155 7.96497C3.18763 8.02495 3.74953 8.02493 4.42339 8.02491H4.5014C5.17525 8.02493 14.7372 8.02495 15.1833 7.96497C15.6541 7.90167 16.0792 7.76241 16.4208 7.42081C16.7624 7.07921 16.9017 6.65411 16.965 6.18326C17.0249 5.73718 17.0249 5.17527 17.0249 4.50142V4.42341C17.0249 3.74956 17.0249 3.18763 16.965 2.74155C16.9017 2.2707 16.7624 1.8456 16.4208 1.504C16.0792 1.16239 15.6541 1.02314 15.1833 0.959838C14.7372 0.899864 5.17528 0.899882 4.50142 0.899903H4.4234ZM2.29949 2.29949C2.39723 2.20175 2.54535 2.12134 2.89145 2.07481C3.25373 2.0261 3.7394 2.0249 4.4624 2.0249C5.18541 2.0249 14.6711 2.0261 15.0334 2.07481C15.3795 2.12134 15.5276 2.20175 15.6253 2.29949C15.7231 2.39723 15.8035 2.54535 15.85 2.89145C15.8987 3.25373 15.8999 3.7394 15.8999 4.4624C15.8999 5.18541 15.8987 5.67108 15.85 6.03336C15.8035 6.37946 15.7231 6.52758 15.6253 6.62532C15.5276 6.72305 15.3795 6.80347 15.0334 6.85C14.6711 6.89871 5.18541 6.8999 4.4624 6.8999C3.7394 6.8999 3.25373 6.89871 2.89145 6.85C2.54535 6.80347 2.39723 6.72305 2.29949 6.62532C2.20175 6.52758 2.12134 6.37946 2.07481 6.03336C2.0261 5.67108 2.0249 5.18541 2.0249 4.4624C2.0249 3.7394 2.0261 3.25373 2.07481 2.89145C2.12134 2.54535 2.20175 2.39723 2.29949 2.29949Z"
  //                           fill=""
  //                         />
  //                         <path
  //                           fillRule="evenodd"
  //                           clipRule="evenodd"
  //                           d="M4.4234 9.1499H4.5014C5.17526 9.14988 14.7372 9.14986 15.1833 9.20984C15.6541 9.27314 16.0792 9.41239 16.4208 9.754C16.7624 10.0956 16.9017 10.5207 16.965 10.9915C17.0249 11.4376 17.0249 11.9995 17.0249 12.6734V12.7514C17.0249 13.4253 17.0249 13.9872 16.965 14.4333C16.9017 14.9041 16.7624 15.3292 16.4208 15.6708C16.0792 16.0124 15.6541 16.1517 15.1833 16.215C14.7372 16.2749 5.17529 16.2749 4.50145 16.2749H4.42341C3.74957 16.2749 3.18762 16.2749 2.74155 16.215C2.2707 16.1517 1.8456 16.0124 1.504 15.6708C1.16239 15.3292 1.02314 14.9041 0.959838 14.4333C0.899864 13.9872 0.899882 13.4253 0.899903 12.7514V12.6734C0.899882 11.9996 0.899864 11.4376 0.959838 10.9915C1.02314 10.5207 1.16239 10.0956 1.504 9.754C1.8456 9.41239 2.2707 9.27314 2.74155 9.20984C3.18763 9.14986 3.74955 9.14988 4.4234 9.1499ZM2.89145 10.3248C2.54535 10.3713 2.39723 10.4518 2.29949 10.5495C2.20175 10.6472 2.12134 10.7954 2.07481 11.1414C2.0261 11.5037 2.0249 11.9894 2.0249 12.7124C2.0249 13.4354 2.0261 13.9211 2.07481 14.2834C2.12134 14.6295 2.20175 14.7776 2.29949 14.8753C2.39723 14.9731 2.54535 15.0535 2.89145 15.1C3.25373 15.1487 3.7394 15.1499 4.4624 15.1499C5.18541 15.1499 14.6711 15.1487 15.0334 15.1C15.3795 15.0535 15.5276 14.9731 15.6253 14.8753C15.7231 14.7776 15.8035 14.6295 15.85 14.2834C15.8987 13.9211 15.8999 13.4354 15.8999 12.7124C15.8999 11.9894 15.8987 11.5037 15.85 11.1414C15.8035 10.7954 15.7231 10.6472 15.6253 10.5495C15.5276 10.4518 15.3795 10.3713 15.0334 10.3248C14.6711 10.2761 5.18541 10.2749 4.4624 10.2749C3.7394 10.2749 3.25373 10.2761 2.89145 10.3248Z"
  //                           fill=""
  //                         />
  //                       </svg>
  //                     </button>
  //                   </div>
  //                 </div>
  //               </div>

  //               {/* <!-- Products Grid Tab Content Start --> */}
  //               <div
  //                 className={`${
  //                   productStyle === "grid"
  //                     ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7.5 gap-y-9"
  //                     : "flex flex-col gap-7.5"
  //                 }`}
  //               >
  //                 {/* {shopData.map((item, key) =>
  //                   productStyle === "grid" ? (
  //                     <SingleGridItem item={item} key={key} />
  //                   ) : (
  //                     <SingleListItem item={item} key={key} />
  //                   )
  //                 )} */}

  //                 {paginatedProducts.map((item, key) =>
  //   productStyle === "grid" ? (
  //     <SingleGridItem item={item} key={key} />
  //   ) : (
  //     <SingleListItem item={item} key={key} />
  //   )
  // )}

  //               </div>
  //               {/* <!-- Products Grid Tab Content End --> */}

  //               {/* <!-- Products Pagination Start --> */}
  //               {/* <div className="flex justify-center mt-15">
  //                 <div className="bg-white shadow-1 rounded-md p-2">
  //                   <ul className="flex items-center">
  //                     <li>
  //                       <button
  //                         id="paginationLeft"
  //                         aria-label="button for pagination left"
  //                         type="button"
  //                         disabled
  //                         className="flex items-center justify-center w-8 h-9 ease-out duration-200 rounded-[3px disabled:text-gray-4"
  //                       >
  //                         <svg
  //                           className="fill-current"
  //                           width="18"
  //                           height="18"
  //                           viewBox="0 0 18 18"
  //                           fill="none"
  //                           xmlns="http://www.w3.org/2000/svg"
  //                         >
  //                           <path
  //                             d="M12.1782 16.1156C12.0095 16.1156 11.8407 16.0594 11.7282 15.9187L5.37197 9.45C5.11885 9.19687 5.11885 8.80312 5.37197 8.55L11.7282 2.08125C11.9813 1.82812 12.3751 1.82812 12.6282 2.08125C12.8813 2.33437 12.8813 2.72812 12.6282 2.98125L6.72197 9L12.6563 15.0187C12.9095 15.2719 12.9095 15.6656 12.6563 15.9187C12.4876 16.0312 12.347 16.1156 12.1782 16.1156Z"
  //                             fill=""
  //                           />
  //                         </svg>
  //                       </button>
  //                     </li>

  //                     <li>
  //                       <a
  //                         href="#"
  //                         className="flex py-1.5 px-3.5 duration-200 rounded-[3px] bg-blue text-white hover:text-white hover:bg-blue"
  //                       >
  //                         1
  //                       </a>
  //                     </li>

  //                     <li>
  //                       <a
  //                         href="#"
  //                         className="flex py-1.5 px-3.5 duration-200 rounded-[3px] hover:text-white hover:bg-blue"
  //                       >
  //                         2
  //                       </a>
  //                     </li>

  //                     <li>
  //                       <a
  //                         href="#"
  //                         className="flex py-1.5 px-3.5 duration-200 rounded-[3px] hover:text-white hover:bg-blue"
  //                       >
  //                         3
  //                       </a>
  //                     </li>

  //                     <li>
  //                       <a
  //                         href="#"
  //                         className="flex py-1.5 px-3.5 duration-200 rounded-[3px] hover:text-white hover:bg-blue"
  //                       >
  //                         4
  //                       </a>
  //                     </li>

  //                     <li>
  //                       <a
  //                         href="#"
  //                         className="flex py-1.5 px-3.5 duration-200 rounded-[3px] hover:text-white hover:bg-blue"
  //                       >
  //                         5
  //                       </a>
  //                     </li>

  //                     <li>
  //                       <a
  //                         href="#"
  //                         className="flex py-1.5 px-3.5 duration-200 rounded-[3px] hover:text-white hover:bg-blue"
  //                       >
  //                         ...
  //                       </a>
  //                     </li>

  //                     <li>
  //                       <a
  //                         href="#"
  //                         className="flex py-1.5 px-3.5 duration-200 rounded-[3px] hover:text-white hover:bg-blue"
  //                       >
  //                         10
  //                       </a>
  //                     </li>

  //                     <li>
  //                       <button
  //                         id="paginationLeft"
  //                         aria-label="button for pagination left"
  //                         type="button"
  //                         className="flex items-center justify-center w-8 h-9 ease-out duration-200 rounded-[3px] hover:text-white hover:bg-blue disabled:text-gray-4"
  //                       >
  //                         <svg
  //                           className="fill-current"
  //                           width="18"
  //                           height="18"
  //                           viewBox="0 0 18 18"
  //                           fill="none"
  //                           xmlns="http://www.w3.org/2000/svg"
  //                         >
  //                           <path
  //                             d="M5.82197 16.1156C5.65322 16.1156 5.5126 16.0594 5.37197 15.9469C5.11885 15.6937 5.11885 15.3 5.37197 15.0469L11.2782 9L5.37197 2.98125C5.11885 2.72812 5.11885 2.33437 5.37197 2.08125C5.6251 1.82812 6.01885 1.82812 6.27197 2.08125L12.6282 8.55C12.8813 8.80312 12.8813 9.19687 12.6282 9.45L6.27197 15.9187C6.15947 16.0312 5.99072 16.1156 5.82197 16.1156Z"
  //                             fill=""
  //                           />
  //                         </svg>
  //                       </button>
  //                     </li>
  //                   </ul>
  //                 </div>
  //               </div> */}


  //               {totalPages > 1 && (
  //   <div className="flex justify-center mt-15">
  //     <div className="bg-white shadow-1 rounded-md p-2">
  //       <ul className="flex items-center gap-1">
  //         <li>
  //           <button
  //             disabled={page === 1}
  //             onClick={() => setPage((p) => Math.max(1, p - 1))}
  //             className="flex items-center justify-center w-8 h-9 rounded-[3px] disabled:text-gray-4 hover:bg-blue hover:text-white"
  //           >
  //             ‹
  //           </button>
  //         </li>

  //         {Array.from({ length: totalPages }).map((_, i) => (
  //           <li key={i}>
  //             <button
  //               onClick={() => setPage(i + 1)}
  //               className={`flex py-1.5 px-3.5 rounded-[3px] ${
  //                 page === i + 1
  //                   ? "bg-blue text-white"
  //                   : "hover:bg-blue hover:text-white"
  //               }`}
  //             >
  //               {i + 1}
  //             </button>
  //           </li>
  //         ))}

  //         <li>
  //           <button
  //             disabled={page === totalPages}
  //             onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
  //             className="flex items-center justify-center w-8 h-9 rounded-[3px] disabled:text-gray-4 hover:bg-blue hover:text-white"
  //           >
  //             ›
  //           </button>
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // )}

  //               {/* <!-- Products Pagination End --> */}
  //             </div>
  //             {/* // <!-- Content End --> */}
  //           </div>
  //         </div>
  //       </section>
  //     </>
  //   );
  // };

  // export default ShopWithSidebar;

















//   "use client";
// import React, { useState, useEffect } from "react";
// import Breadcrumb from "../Common/Breadcrumb";
// import CustomSelect from "./CustomSelect";
// import CategoryDropdown from "./CategoryDropdown";
// import shopData from "../Shop/shopData";
// import SingleGridItem from "../Shop/SingleGridItem";
// import SingleListItem from "../Shop/SingleListItem";
// import { useSearchParams } from "next/navigation";

// export type Product = {
//   id: number;
//   title: string;
//   reviews: number;
//   price: number;
//   discountedPrice: number;
//   imgs: {
//     thumbnails: string[];
//     previews: string[];
//   };
//   category: string;
// };

// const ShopWithSidebar = () => {
//   const [productStyle, setProductStyle] = useState("grid");
//   const [productSidebar, setProductSidebar] = useState(false);
//   const [stickyMenu, setStickyMenu] = useState(false);
//   const searchParams = useSearchParams();
//   const activeCategory = searchParams.get("category");
//   const min = Number(searchParams.get("min") ?? 0);
//   const max = Number(searchParams.get("max") ?? Infinity);
//   const ITEMS_PER_PAGE = 10;
//   const [page, setPage] = useState(1);

//   const handleStickyMenu = () => {
//     if (window.scrollY >= 80) {
//       setStickyMenu(true);
//     } else {
//       setStickyMenu(false);
//     }
//   };

//   const options = [
//     { label: "Latest Products", value: "0" },
//     { label: "Best Selling", value: "1" },
//     { label: "Old Products", value: "2" },
//   ];

//   const categories = [
//     { name: "Hair care", products: 10, isRefined: true },
//     { name: "Hair Treatment", products: 12, isRefined: false },
//     { name: "Skin care", products: 30, isRefined: false },
//   ];

//   useEffect(() => {
//     window.addEventListener("scroll", handleStickyMenu);

//     function handleClickOutside(event) {
//       if (!event.target.closest(".sidebar-content")) {
//         setProductSidebar(false);
//       }
//     }

//     if (productSidebar) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   });

//   const filteredProducts = shopData.filter((p) => {
//     const inCategory = activeCategory ? p.category === activeCategory : true;
//     const inPrice = p.discountedPrice >= min && p.discountedPrice <= max;
//     return inCategory && inPrice;
//   });

//   const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

//   const paginatedProducts = filteredProducts.slice(
//     (page - 1) * ITEMS_PER_PAGE,
//     page * ITEMS_PER_PAGE
//   );

//   return (
//     <>
//       <Breadcrumb title={"Explore All Products"} pages={["shop", "/"]} />
//       <section className="overflow-hidden relative pb-20 pt-3 lg:pt-6 xl:pt-8 bg-[#f3f4f6]">
//         <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
//           <div className="flex gap-7.5">

//             {/* Sidebar */}
//             <div
//               className={`sidebar-content fixed xl:z-1 z-9999 left-0 top-0 xl:translate-x-0 xl:static max-w-[310px] xl:max-w-[270px] w-full ease-out duration-200 ${
//                 productSidebar
//                   ? "translate-x-0 bg-white p-5 h-screen overflow-y-auto"
//                   : "-translate-x-full"
//               }`}
//             >
//               <button
//                 onClick={() => setProductSidebar(!productSidebar)}
//                 aria-label="button for product sidebar toggle"
//                 className={`xl:hidden absolute -right-12.5 sm:-right-8 flex items-center justify-center w-8 h-8 rounded-md bg-white shadow-1 ${
//                   stickyMenu
//                     ? "lg:top-20 sm:top-34.5 top-35"
//                     : "lg:top-24 sm:top-39 top-37"
//                 }`}
//               >
//                 <svg className="fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path fillRule="evenodd" clipRule="evenodd" d="M10.0068 3.44714C10.3121 3.72703 10.3328 4.20146 10.0529 4.5068L5.70494 9.25H20C20.4142 9.25 20.75 9.58579 20.75 10C20.75 10.4142 20.4142 10.75 20 10.75H4.00002C3.70259 10.75 3.43327 10.5742 3.3135 10.302C3.19374 10.0298 3.24617 9.71246 3.44715 9.49321L8.94715 3.49321C9.22704 3.18787 9.70147 3.16724 10.0068 3.44714Z" fill=""/>
//                   <path fillRule="evenodd" clipRule="evenodd" d="M20.6865 13.698C20.5668 13.4258 20.2974 13.25 20 13.25L4.00001 13.25C3.5858 13.25 3.25001 13.5858 3.25001 14C3.25001 14.4142 3.5858 14.75 4.00001 14.75L18.2951 14.75L13.9472 19.4932C13.6673 19.7985 13.6879 20.273 13.9932 20.5529C14.2986 20.8328 14.773 20.8121 15.0529 20.5068L20.5529 14.5068C20.7539 14.2876 20.8063 13.9703 20.6865 13.698Z" fill=""/>
//                 </svg>
//               </button>

//               <form onSubmit={(e) => e.preventDefault()}>
//                 <div className="flex flex-col gap-6">
//                   <div className="bg-white shadow-1 rounded-lg py-4 px-5">
//                     <div className="flex items-center justify-between">
//                       <p>Filters:</p>
//                     </div>
//                   </div>
//                   <CategoryDropdown categories={categories} />
//                 </div>
//               </form>
//             </div>

//             {/* Content */}
//             <div className="xl:max-w-[870px] w-full">
//               <div className="rounded-lg bg-white shadow-1 pl-3 pr-2.5 py-2.5 mb-6">
//                 <div className="flex items-center justify-between">

//                   {/* Top bar left */}
//                   <div className="flex flex-wrap items-center gap-4">
//                     <CustomSelect options={options} />
//                     <p>
//                       Showing{" "}
//                       <span className="text-dark">
//                         {paginatedProducts.length} of {filteredProducts.length}
//                       </span>{" "}
//                       Products
//                     </p>
//                   </div>

//                   {/* Top bar right */}
//                   <div className="flex items-center gap-2.5">

//                     {/* Grid button */}
//                     <button
//                       onClick={() => setProductStyle("grid")}
//                       aria-label="button for product grid tab"
//                       className={`${
//                         productStyle === "grid"
//                           ? "bg-[#7C3AED] border-[#7C3AED] text-white"
//                           : "text-dark bg-gray-1 border-gray-3"
//                       } flex items-center justify-center w-10.5 h-9 rounded-[5px] border ease-out duration-200 hover:bg-[#7C3AED] hover:border-[#7C3AED] hover:text-white`}
//                     >
//                       <svg className="fill-current" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path fillRule="evenodd" clipRule="evenodd" d="M4.836 1.3125C4.16215 1.31248 3.60022 1.31246 3.15414 1.37244C2.6833 1.43574 2.2582 1.57499 1.91659 1.91659C1.57499 2.2582 1.43574 2.6833 1.37244 3.15414C1.31246 3.60022 1.31248 4.16213 1.3125 4.83598V4.914C1.31248 5.58785 1.31246 6.14978 1.37244 6.59586C1.43574 7.06671 1.57499 7.49181 1.91659 7.83341C2.2582 8.17501 2.6833 8.31427 3.15414 8.37757C3.60022 8.43754 4.16213 8.43752 4.83598 8.4375H4.914C5.58785 8.43752 6.14978 8.43754 6.59586 8.37757C7.06671 8.31427 7.49181 8.17501 7.83341 7.83341C8.17501 7.49181 8.31427 7.06671 8.37757 6.59586C8.43754 6.14978 8.43752 5.58787 8.4375 4.91402V4.83601C8.43752 4.16216 8.43754 3.60022 8.37757 3.15414C8.31427 2.6833 8.17501 2.2582 7.83341 1.91659C7.49181 1.57499 7.06671 1.43574 6.59586 1.37244C6.14978 1.31246 5.58787 1.31248 4.91402 1.3125H4.836ZM2.71209 2.71209C2.80983 2.61435 2.95795 2.53394 3.30405 2.4874C3.66632 2.4387 4.15199 2.4375 4.875 2.4375C5.59801 2.4375 6.08368 2.4387 6.44596 2.4874C6.79205 2.53394 6.94018 2.61435 7.03791 2.71209C7.13565 2.80983 7.21607 2.95795 7.2626 3.30405C7.31131 3.66632 7.3125 4.15199 7.3125 4.875C7.3125 5.59801 7.31131 6.08368 7.2626 6.44596C7.21607 6.79205 7.13565 6.94018 7.03791 7.03791C6.94018 7.13565 6.79205 7.21607 6.44596 7.2626C6.08368 7.31131 5.59801 7.3125 4.875 7.3125C4.15199 7.3125 3.66632 7.31131 3.30405 7.2626C2.95795 7.21607 2.80983 7.13565 2.71209 7.03791C2.61435 6.94018 2.53394 6.79205 2.4874 6.44596C2.4387 6.08368 2.4375 5.59801 2.4375 4.875C2.4375 4.15199 2.4387 3.66632 2.4874 3.30405C2.53394 2.95795 2.61435 2.80983 2.71209 2.71209Z" fill=""/>
//                         <path fillRule="evenodd" clipRule="evenodd" d="M13.086 9.5625C12.4121 9.56248 11.8502 9.56246 11.4041 9.62244C10.9333 9.68574 10.5082 9.82499 10.1666 10.1666C9.82499 10.5082 9.68574 10.9333 9.62244 11.4041C9.56246 11.8502 9.56248 12.4121 9.5625 13.086V13.164C9.56248 13.8379 9.56246 14.3998 9.62244 14.8459C9.68574 15.3167 9.82499 15.7418 10.1666 16.0834C10.5082 16.425 10.9333 16.5643 11.4041 16.6276C11.8502 16.6875 12.4121 16.6875 13.0859 16.6875H13.164C13.8378 16.6875 14.3998 16.6875 14.8459 16.6276C15.3167 16.5643 15.7418 16.425 16.0834 16.0834C16.425 15.7418 16.5643 15.3167 16.6276 14.8459C16.6875 14.3998 16.6875 13.8379 16.6875 13.1641V13.086C16.6875 12.4122 16.6875 11.8502 16.6276 11.4041C16.5643 10.9333 16.425 10.5082 16.0834 10.1666C15.7418 9.82499 15.3167 9.68574 14.8459 9.62244C14.3998 9.56246 13.8379 9.56248 13.164 9.5625H13.086ZM10.9621 10.9621C11.0598 10.8644 11.208 10.7839 11.554 10.7374C11.9163 10.6887 12.402 10.6875 13.125 10.6875C13.848 10.6875 14.3337 10.6887 14.696 10.7374C15.0421 10.7839 15.1902 10.8644 15.2879 10.9621C15.3857 11.0598 15.4661 11.208 15.5126 11.554C15.5613 11.9163 15.5625 12.402 15.5625 13.125C15.5625 13.848 15.5613 14.3337 15.5126 14.696C15.4661 15.0421 15.3857 15.1902 15.2879 15.2879C15.1902 15.3857 15.0421 15.4661 14.696 15.5126C14.3337 15.5613 13.848 15.5625 13.125 15.5625C12.402 15.5625 11.9163 15.5613 11.554 15.5126C11.208 15.4661 11.0598 15.3857 10.9621 15.2879C10.8644 15.1902 10.7839 15.0421 10.7374 14.696C10.6887 14.3337 10.6875 13.848 10.6875 13.125C10.6875 12.402 10.6887 11.9163 10.7374 11.554C10.7839 11.208 10.8644 11.0598 10.9621 10.9621Z" fill=""/>
//                         <path fillRule="evenodd" clipRule="evenodd" d="M4.836 9.5625H4.914C5.58786 9.56248 6.14978 9.56246 6.59586 9.62244C7.06671 9.68574 7.49181 9.82499 7.83341 10.1666C8.17501 10.5082 8.31427 10.9333 8.37757 11.4041C8.43754 11.8502 8.43752 12.4121 8.4375 13.086V13.164C8.43752 13.8378 8.43754 14.3998 8.37757 14.8459C8.31427 15.3167 8.17501 15.7418 7.83341 16.0834C7.49181 16.425 7.06671 16.5643 6.59586 16.6276C6.14979 16.6875 5.58789 16.6875 4.91405 16.6875H4.83601C4.16217 16.6875 3.60022 16.6875 3.15414 16.6276C2.6833 16.5643 2.2582 16.425 1.91659 16.0834C1.57499 15.7418 1.43574 15.3167 1.37244 14.8459C1.31246 14.3998 1.31248 13.8379 1.3125 13.164V13.086C1.31248 12.4122 1.31246 11.8502 1.37244 11.4041C1.43574 10.9333 1.57499 10.5082 1.91659 10.1666C2.2582 9.82499 2.6833 9.68574 3.15414 9.62244C3.60023 9.56246 4.16214 9.56248 4.836 9.5625ZM3.30405 10.7374C2.95795 10.7839 2.80983 10.8644 2.71209 10.9621C2.61435 11.0598 2.53394 11.208 2.4874 11.554C2.4387 11.9163 2.4375 12.402 2.4375 13.125C2.4375 13.848 2.4387 14.3337 2.4874 14.696C2.53394 15.0421 2.61435 15.1902 2.71209 15.2879C2.80983 15.3857 2.95795 15.4661 3.30405 15.5126C3.66632 15.5613 4.15199 15.5625 4.875 15.5625C5.59801 15.5625 6.08368 15.5613 6.44596 15.5126C6.79205 15.4661 6.94018 15.3857 7.03791 15.2879C7.13565 15.1902 7.21607 15.0421 7.2626 14.696C7.31131 14.3337 7.3125 13.848 7.3125 13.125C7.3125 12.402 7.31131 11.9163 7.2626 11.554C7.21607 11.208 7.13565 11.0598 7.03791 10.9621C6.94018 10.8644 6.79205 10.7839 6.44596 10.7374C6.08368 10.6887 5.59801 10.6875 4.875 10.6875C4.15199 10.6875 3.66632 10.6887 3.30405 10.7374Z" fill=""/>
//                         <path fillRule="evenodd" clipRule="evenodd" d="M13.086 1.3125C12.4122 1.31248 11.8502 1.31246 11.4041 1.37244C10.9333 1.43574 10.5082 1.57499 10.1666 1.91659C9.82499 2.2582 9.68574 2.6833 9.62244 3.15414C9.56246 3.60023 9.56248 4.16214 9.5625 4.836V4.914C9.56248 5.58786 9.56246 6.14978 9.62244 6.59586C9.68574 7.06671 9.82499 7.49181 10.1666 7.83341C10.5082 8.17501 10.9333 8.31427 11.4041 8.37757C11.8502 8.43754 12.4121 8.43752 13.086 8.4375H13.164C13.8378 8.43752 14.3998 8.43754 14.8459 8.37757C15.3167 8.31427 15.7418 8.17501 16.0834 7.83341C16.425 7.49181 16.5643 7.06671 16.6276 6.59586C16.6875 6.14978 16.6875 5.58787 16.6875 4.91402V4.83601C16.6875 4.16216 16.6875 3.60022 16.6276 3.15414C16.5643 2.6833 16.425 2.2582 16.0834 1.91659C15.7418 1.57499 15.3167 1.43574 14.8459 1.37244C14.3998 1.31246 13.8379 1.31248 13.164 1.3125H13.086ZM10.9621 2.71209C11.0598 2.61435 11.208 2.53394 11.554 2.4874C11.9163 2.4387 12.402 2.4375 13.125 2.4375C13.848 2.4375 14.3337 2.4387 14.696 2.4874C15.0421 2.53394 15.1902 2.61435 15.2879 2.71209C15.3857 2.80983 15.4661 2.95795 15.5126 3.30405C15.5613 3.66632 15.5625 4.15199 15.5625 4.875C15.5625 5.59801 15.5613 6.08368 15.5126 6.44596C15.4661 6.79205 15.3857 6.94018 15.2879 7.03791C15.1902 7.13565 15.0421 7.21607 14.696 7.2626C14.3337 7.31131 13.848 7.3125 13.125 7.3125C12.402 7.3125 11.9163 7.31131 11.554 7.2626C11.208 7.21607 11.0598 7.13565 10.9621 7.03791C10.8644 6.94018 10.7839 6.79205 10.7374 6.44596C10.6887 6.08368 10.6875 5.59801 10.6875 4.875C10.6875 4.15199 10.6887 3.66632 10.7374 3.30405C10.7839 2.95795 10.8644 2.80983 10.9621 2.71209Z" fill=""/>
//                       </svg>
//                     </button>

//                     {/* List button */}
//                     <button
//                       onClick={() => setProductStyle("list")}
//                       aria-label="button for product list tab"
//                       className={`${
//                         productStyle === "list"
//                           ? "bg-[#7C3AED] border-[#7C3AED] text-white"
//                           : "text-dark bg-gray-1 border-gray-3"
//                       } flex items-center justify-center w-10.5 h-9 rounded-[5px] border ease-out duration-200 hover:bg-[#7C3AED] hover:border-[#7C3AED] hover:text-white`}
//                     >
//                       <svg className="fill-current" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path fillRule="evenodd" clipRule="evenodd" d="M4.4234 0.899903C3.74955 0.899882 3.18763 0.899864 2.74155 0.959838C2.2707 1.02314 1.8456 1.16239 1.504 1.504C1.16239 1.8456 1.02314 2.2707 0.959838 2.74155C0.899864 3.18763 0.899882 3.74953 0.899903 4.42338V4.5014C0.899882 5.17525 0.899864 5.73718 0.959838 6.18326C1.02314 6.65411 1.16239 7.07921 1.504 7.42081C1.8456 7.76241 2.2707 7.90167 2.74155 7.96497C3.18763 8.02495 3.74953 8.02493 4.42339 8.02491H4.5014C5.17525 8.02493 14.7372 8.02495 15.1833 7.96497C15.6541 7.90167 16.0792 7.76241 16.4208 7.42081C16.7624 7.07921 16.9017 6.65411 16.965 6.18326C17.0249 5.73718 17.0249 5.17527 17.0249 4.50142V4.42341C17.0249 3.74956 17.0249 3.18763 16.965 2.74155C16.9017 2.2707 16.7624 1.8456 16.4208 1.504C16.0792 1.16239 15.6541 1.02314 15.1833 0.959838C14.7372 0.899864 5.17528 0.899882 4.50142 0.899903H4.4234ZM2.29949 2.29949C2.39723 2.20175 2.54535 2.12134 2.89145 2.07481C3.25373 2.0261 3.7394 2.0249 4.4624 2.0249C5.18541 2.0249 14.6711 2.0261 15.0334 2.07481C15.3795 2.12134 15.5276 2.20175 15.6253 2.29949C15.7231 2.39723 15.8035 2.54535 15.85 2.89145C15.8987 3.25373 15.8999 3.7394 15.8999 4.4624C15.8999 5.18541 15.8987 5.67108 15.85 6.03336C15.8035 6.37946 15.7231 6.52758 15.6253 6.62532C15.5276 6.72305 15.3795 6.80347 15.0334 6.85C14.6711 6.89871 5.18541 6.8999 4.4624 6.8999C3.7394 6.8999 3.25373 6.89871 2.89145 6.85C2.54535 6.80347 2.39723 6.72305 2.29949 6.62532C2.20175 6.52758 2.12134 6.37946 2.07481 6.03336C2.0261 5.67108 2.0249 5.18541 2.0249 4.4624C2.0249 3.7394 2.0261 3.25373 2.07481 2.89145C2.12134 2.54535 2.20175 2.39723 2.29949 2.29949Z" fill=""/>
//                         <path fillRule="evenodd" clipRule="evenodd" d="M4.4234 9.1499H4.5014C5.17526 9.14988 14.7372 9.14986 15.1833 9.20984C15.6541 9.27314 16.0792 9.41239 16.4208 9.754C16.7624 10.0956 16.9017 10.5207 16.965 10.9915C17.0249 11.4376 17.0249 11.9995 17.0249 12.6734V12.7514C17.0249 13.4253 17.0249 13.9872 16.965 14.4333C16.9017 14.9041 16.7624 15.3292 16.4208 15.6708C16.0792 16.0124 15.6541 16.1517 15.1833 16.215C14.7372 16.2749 5.17529 16.2749 4.50145 16.2749H4.42341C3.74957 16.2749 3.18762 16.2749 2.74155 16.215C2.2707 16.1517 1.8456 16.0124 1.504 15.6708C1.16239 15.3292 1.02314 14.9041 0.959838 14.4333C0.899864 13.9872 0.899882 13.4253 0.899903 12.7514V12.6734C0.899882 11.9996 0.899864 11.4376 0.959838 10.9915C1.02314 10.5207 1.16239 10.0956 1.504 9.754C1.8456 9.41239 2.2707 9.27314 2.74155 9.20984C3.18763 9.14986 3.74955 9.14988 4.4234 9.1499ZM2.89145 10.3248C2.54535 10.3713 2.39723 10.4518 2.29949 10.5495C2.20175 10.6472 2.12134 10.7954 2.07481 11.1414C2.0261 11.5037 2.0249 11.9894 2.0249 12.7124C2.0249 13.4354 2.0261 13.9211 2.07481 14.2834C2.12134 14.6295 2.20175 14.7776 2.29949 14.8753C2.39723 14.9731 2.54535 15.0535 2.89145 15.1C3.25373 15.1487 3.7394 15.1499 4.4624 15.1499C5.18541 15.1499 14.6711 15.1487 15.0334 15.1C15.3795 15.0535 15.5276 14.9731 15.6253 14.8753C15.7231 14.7776 15.8035 14.6295 15.85 14.2834C15.8987 13.9211 15.8999 13.4354 15.8999 12.7124C15.8999 11.9894 15.8987 11.5037 15.85 11.1414C15.8035 10.7954 15.7231 10.6472 15.6253 10.5495C15.5276 10.4518 15.3795 10.3713 15.0334 10.3248C14.6711 10.2761 5.18541 10.2749 4.4624 10.2749C3.7394 10.2749 3.25373 10.2761 2.89145 10.3248Z" fill=""/>
//                       </svg>
//                     </button>

//                   </div>
//                 </div>
//               </div>

//               {/* Products */}
//               <div
//                 className={`${
//                   productStyle === "grid"
//                     ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7.5 gap-y-9"
//                     : "flex flex-col gap-7.5"
//                 }`}
//               >
//                 {paginatedProducts.map((item, key) =>
//                   productStyle === "grid" ? (
//                     <SingleGridItem item={item} key={key} />
//                   ) : (
//                     <SingleListItem item={item} key={key} />
//                   )
//                 )}
//               </div>

//               {/* Pagination */}
//               {totalPages > 1 && (
//                 <div className="flex justify-center mt-15">
//                   <div className="bg-white shadow-1 rounded-md p-2">
//                     <ul className="flex items-center gap-1">
//                       <li>
//                         <button
//                           disabled={page === 1}
//                           onClick={() => setPage((p) => Math.max(1, p - 1))}
//                           className="flex items-center justify-center w-8 h-9 rounded-[3px] disabled:text-gray-4 hover:bg-[#7C3AED] hover:text-white"
//                         >
//                           ‹
//                         </button>
//                       </li>
//                       {Array.from({ length: totalPages }).map((_, i) => (
//                         <li key={i}>
//                           <button
//                             onClick={() => setPage(i + 1)}
//                             className={`flex py-1.5 px-3.5 rounded-[3px] ${
//                               page === i + 1
//                                 ? "bg-[#7C3AED] text-white"
//                                 : "hover:bg-[#7C3AED] hover:text-white"
//                             }`}
//                           >
//                             {i + 1}
//                           </button>
//                         </li>
//                       ))}
//                       <li>
//                         <button
//                           disabled={page === totalPages}
//                           onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
//                           className="flex items-center justify-center w-8 h-9 rounded-[3px] disabled:text-gray-4 hover:bg-[#7C3AED] hover:text-white"
//                         >
//                           ›
//                         </button>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               )}

//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ShopWithSidebar;










// "use client";
// import React, { useState, useEffect } from "react";
// import Breadcrumb from "../Common/Breadcrumb";
// import CustomSelect from "./CustomSelect";
// import shopData from "../Shop/shopData";
// import SingleGridItem from "../Shop/SingleGridItem";
// import SingleListItem from "../Shop/SingleListItem";
// import { useSearchParams, useRouter } from "next/navigation";

// export type Product = {
//   id: number;
//   title: string;
//   reviews: number;
//   price: number;
//   discountedPrice: number;
//   imgs: {
//     thumbnails: string[];
//     previews: string[];
//   };
//   category: string;
// };

// const ShopWithSidebar = () => {
//   const [productStyle, setProductStyle] = useState("grid");
//   const [productSidebar, setProductSidebar] = useState(false);
//   const [stickyMenu, setStickyMenu] = useState(false);
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const activeCategory = searchParams.get("category")?.trim() ?? null;
//   const min = Number(searchParams.get("min") ?? 0);
//   const max = Number(searchParams.get("max") ?? Infinity);
//   const ITEMS_PER_PAGE = 10;
//   const [page, setPage] = useState(1);

//   // Derive categories dynamically from shopData
//   const categories = React.useMemo(() => {
//     const counts: Record<string, number> = {};
//     shopData.forEach((p) => {
//       const cat = p.category.trim();
//       counts[cat] = (counts[cat] ?? 0) + 1;
//     });
//     return Object.entries(counts).map(([name, products]) => ({ name, products }));
//   }, []);

//   const handleCategoryClick = (categoryName: string) => {
//     const params = new URLSearchParams(searchParams.toString());
//     if (activeCategory === categoryName) {
//       // Clicking the active category deselects it
//       params.delete("category");
//     } else {
//       params.set("category", categoryName);
//     }
//     params.delete("min");
//     params.delete("max");
//     setPage(1);
//     router.push(`?${params.toString()}`);
//   };

//   const handleStickyMenu = () => {
//     if (window.scrollY >= 80) {
//       setStickyMenu(true);
//     } else {
//       setStickyMenu(false);
//     }
//   };

//   const options = [
//     { label: "Latest Products", value: "0" },
//     { label: "Best Selling", value: "1" },
//     { label: "Old Products", value: "2" },
//   ];

//   useEffect(() => {
//     window.addEventListener("scroll", handleStickyMenu);

//     function handleClickOutside(event) {
//       if (!event.target.closest(".sidebar-content")) {
//         setProductSidebar(false);
//       }
//     }

//     if (productSidebar) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       window.removeEventListener("scroll", handleStickyMenu);
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   });

//   // Reset page when filters change
//   useEffect(() => {
//     setPage(1);
//   }, [activeCategory, min, max]);

//   const filteredProducts = shopData.filter((p) => {
//     const inCategory = activeCategory ? p.category.trim() === activeCategory : true;
//     const inPrice = p.discountedPrice >= min && p.discountedPrice <= max;
//     return inCategory && inPrice;
//   });

//   const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

//   const paginatedProducts = filteredProducts.slice(
//     (page - 1) * ITEMS_PER_PAGE,
//     page * ITEMS_PER_PAGE
//   );

//   return (
//     <>
//       <Breadcrumb title={"Explore All Products"} pages={["shop", "/"]} />
//       <section className="overflow-hidden relative pb-20 pt-3 lg:pt-6 xl:pt-8 bg-[#f3f4f6]">
//         <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
//           <div className="flex gap-7.5">

//             {/* Sidebar */}
//             <div
//               className={`sidebar-content fixed xl:z-1 z-9999 left-0 top-0 xl:translate-x-0 xl:static max-w-[310px] xl:max-w-[270px] w-full ease-out duration-200 ${
//                 productSidebar
//                   ? "translate-x-0 bg-white p-5 h-screen overflow-y-auto"
//                   : "-translate-x-full"
//               }`}
//             >
//               <button
//                 onClick={() => setProductSidebar(!productSidebar)}
//                 aria-label="button for product sidebar toggle"
//                 className={`xl:hidden absolute -right-12.5 sm:-right-8 flex items-center justify-center w-8 h-8 rounded-md bg-white shadow-1 ${
//                   stickyMenu
//                     ? "lg:top-20 sm:top-34.5 top-35"
//                     : "lg:top-24 sm:top-39 top-37"
//                 }`}
//               >
//                 <svg className="fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path fillRule="evenodd" clipRule="evenodd" d="M10.0068 3.44714C10.3121 3.72703 10.3328 4.20146 10.0529 4.5068L5.70494 9.25H20C20.4142 9.25 20.75 9.58579 20.75 10C20.75 10.4142 20.4142 10.75 20 10.75H4.00002C3.70259 10.75 3.43327 10.5742 3.3135 10.302C3.19374 10.0298 3.24617 9.71246 3.44715 9.49321L8.94715 3.49321C9.22704 3.18787 9.70147 3.16724 10.0068 3.44714Z" fill=""/>
//                   <path fillRule="evenodd" clipRule="evenodd" d="M20.6865 13.698C20.5668 13.4258 20.2974 13.25 20 13.25L4.00001 13.25C3.5858 13.25 3.25001 13.5858 3.25001 14C3.25001 14.4142 3.5858 14.75 4.00001 14.75L18.2951 14.75L13.9472 19.4932C13.6673 19.7985 13.6879 20.273 13.9932 20.5529C14.2986 20.8328 14.773 20.8121 15.0529 20.5068L20.5529 14.5068C20.7539 14.2876 20.8063 13.9703 20.6865 13.698Z" fill=""/>
//                 </svg>
//               </button>

//               <div className="flex flex-col gap-6">
//                 {/* Filter header */}
//                 <div className="bg-white shadow-1 rounded-lg py-4 px-5">
//                   <div className="flex items-center justify-between">
//                     <p className="font-medium text-dark">Filters:</p>
//                     {activeCategory && (
//                       <button
//                         onClick={() => {
//                           const params = new URLSearchParams(searchParams.toString());
//                           params.delete("category");
//                           router.push(`?${params.toString()}`);
//                         }}
//                         className="text-sm text-[#7C3AED] hover:underline"
//                       >
//                         Clear
//                       </button>
//                     )}
//                   </div>
//                 </div>

//                 {/* Category list */}
//                 <div className="bg-white shadow-1 rounded-lg py-4 px-5">
//                   <h3 className="font-medium text-dark mb-3">Categories</h3>
//                   <ul className="flex flex-col gap-1">
//                     {categories.map(({ name, products }) => (
//                       <li key={name}>
//                         <button
//                           onClick={() => handleCategoryClick(name)}
//                           className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors duration-150 ${
//                             activeCategory === name
//                               ? "bg-[#7C3AED] text-white"
//                               : "text-dark hover:bg-gray-100"
//                           }`}
//                         >
//                           <span>{name}</span>
//                           <span
//                             className={`text-xs px-1.5 py-0.5 rounded-full ${
//                               activeCategory === name
//                                 ? "bg-white/20 text-white"
//                                 : "bg-gray-100 text-gray-500"
//                             }`}
//                           >
//                             {products}
//                           </span>
//                         </button>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             {/* Content */}
//             <div className="xl:max-w-[870px] w-full">
//               <div className="rounded-lg bg-white shadow-1 pl-3 pr-2.5 py-2.5 mb-6">
//                 <div className="flex items-center justify-between">

//                   {/* Top bar left */}
//                   <div className="flex flex-wrap items-center gap-4">
//                     <CustomSelect options={options} />
//                     <p>
//                       Showing{" "}
//                       <span className="text-dark">
//                         {paginatedProducts.length} of {filteredProducts.length}
//                       </span>{" "}
//                       Products
//                       {activeCategory && (
//                         <span className="ml-1 text-[#7C3AED]">in &ldquo;{activeCategory}&rdquo;</span>
//                       )}
//                     </p>
//                   </div>

//                   {/* Top bar right */}
//                   <div className="flex items-center gap-2.5">

//                     {/* Grid button */}
//                     <button
//                       onClick={() => setProductStyle("grid")}
//                       aria-label="button for product grid tab"
//                       className={`${
//                         productStyle === "grid"
//                           ? "bg-[#7C3AED] border-[#7C3AED] text-white"
//                           : "text-dark bg-gray-1 border-gray-3"
//                       } flex items-center justify-center w-10.5 h-9 rounded-[5px] border ease-out duration-200 hover:bg-[#7C3AED] hover:border-[#7C3AED] hover:text-white`}
//                     >
//                       <svg className="fill-current" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path fillRule="evenodd" clipRule="evenodd" d="M4.836 1.3125C4.16215 1.31248 3.60022 1.31246 3.15414 1.37244C2.6833 1.43574 2.2582 1.57499 1.91659 1.91659C1.57499 2.2582 1.43574 2.6833 1.37244 3.15414C1.31246 3.60022 1.31248 4.16213 1.3125 4.83598V4.914C1.31248 5.58785 1.31246 6.14978 1.37244 6.59586C1.43574 7.06671 1.57499 7.49181 1.91659 7.83341C2.2582 8.17501 2.6833 8.31427 3.15414 8.37757C3.60022 8.43754 4.16213 8.43752 4.83598 8.4375H4.914C5.58785 8.43752 6.14978 8.43754 6.59586 8.37757C7.06671 8.31427 7.49181 8.17501 7.83341 7.83341C8.17501 7.49181 8.31427 7.06671 8.37757 6.59586C8.43754 6.14978 8.43752 5.58787 8.4375 4.91402V4.83601C8.43752 4.16216 8.43754 3.60022 8.37757 3.15414C8.31427 2.6833 8.17501 2.2582 7.83341 1.91659C7.49181 1.57499 7.06671 1.43574 6.59586 1.37244C6.14978 1.31246 5.58787 1.31248 4.91402 1.3125H4.836ZM2.71209 2.71209C2.80983 2.61435 2.95795 2.53394 3.30405 2.4874C3.66632 2.4387 4.15199 2.4375 4.875 2.4375C5.59801 2.4375 6.08368 2.4387 6.44596 2.4874C6.79205 2.53394 6.94018 2.61435 7.03791 2.71209C7.13565 2.80983 7.21607 2.95795 7.2626 3.30405C7.31131 3.66632 7.3125 4.15199 7.3125 4.875C7.3125 5.59801 7.31131 6.08368 7.2626 6.44596C7.21607 6.79205 7.13565 6.94018 7.03791 7.03791C6.94018 7.13565 6.79205 7.21607 6.44596 7.2626C6.08368 7.31131 5.59801 7.3125 4.875 7.3125C4.15199 7.3125 3.66632 7.31131 3.30405 7.2626C2.95795 7.21607 2.80983 7.13565 2.71209 7.03791C2.61435 6.94018 2.53394 6.79205 2.4874 6.44596C2.4387 6.08368 2.4375 5.59801 2.4375 4.875C2.4375 4.15199 2.4387 3.66632 2.4874 3.30405C2.53394 2.95795 2.61435 2.80983 2.71209 2.71209Z" fill=""/>
//                         <path fillRule="evenodd" clipRule="evenodd" d="M13.086 9.5625C12.4121 9.56248 11.8502 9.56246 11.4041 9.62244C10.9333 9.68574 10.5082 9.82499 10.1666 10.1666C9.82499 10.5082 9.68574 10.9333 9.62244 11.4041C9.56246 11.8502 9.56248 12.4121 9.5625 13.086V13.164C9.56248 13.8379 9.56246 14.3998 9.62244 14.8459C9.68574 15.3167 9.82499 15.7418 10.1666 16.0834C10.5082 16.425 10.9333 16.5643 11.4041 16.6276C11.8502 16.6875 12.4121 16.6875 13.0859 16.6875H13.164C13.8378 16.6875 14.3998 16.6875 14.8459 16.6276C15.3167 16.5643 15.7418 16.425 16.0834 16.0834C16.425 15.7418 16.5643 15.3167 16.6276 14.8459C16.6875 14.3998 16.6875 13.8379 16.6875 13.1641V13.086C16.6875 12.4122 16.6875 11.8502 16.6276 11.4041C16.5643 10.9333 16.425 10.5082 16.0834 10.1666C15.7418 9.82499 15.3167 9.68574 14.8459 9.62244C14.3998 9.56246 13.8379 9.56248 13.164 9.5625H13.086ZM10.9621 10.9621C11.0598 10.8644 11.208 10.7839 11.554 10.7374C11.9163 10.6887 12.402 10.6875 13.125 10.6875C13.848 10.6875 14.3337 10.6887 14.696 10.7374C15.0421 10.7839 15.1902 10.8644 15.2879 10.9621C15.3857 11.0598 15.4661 11.208 15.5126 11.554C15.5613 11.9163 15.5625 12.402 15.5625 13.125C15.5625 13.848 15.5613 14.3337 15.5126 14.696C15.4661 15.0421 15.3857 15.1902 15.2879 15.2879C15.1902 15.3857 15.0421 15.4661 14.696 15.5126C14.3337 15.5613 13.848 15.5625 13.125 15.5625C12.402 15.5625 11.9163 15.5613 11.554 15.5126C11.208 15.4661 11.0598 15.3857 10.9621 15.2879C10.8644 15.1902 10.7839 15.0421 10.7374 14.696C10.6887 14.3337 10.6875 13.848 10.6875 13.125C10.6875 12.402 10.6887 11.9163 10.7374 11.554C10.7839 11.208 10.8644 11.0598 10.9621 10.9621Z" fill=""/>
//                         <path fillRule="evenodd" clipRule="evenodd" d="M4.836 9.5625H4.914C5.58786 9.56248 6.14978 9.56246 6.59586 9.62244C7.06671 9.68574 7.49181 9.82499 7.83341 10.1666C8.17501 10.5082 8.31427 10.9333 8.37757 11.4041C8.43754 11.8502 8.43752 12.4121 8.4375 13.086V13.164C8.43752 13.8378 8.43754 14.3998 8.37757 14.8459C8.31427 15.3167 8.17501 15.7418 7.83341 16.0834C7.49181 16.425 7.06671 16.5643 6.59586 16.6276C6.14979 16.6875 5.58789 16.6875 4.91405 16.6875H4.83601C4.16217 16.6875 3.60022 16.6875 3.15414 16.6276C2.6833 16.5643 2.2582 16.425 1.91659 16.0834C1.57499 15.7418 1.43574 15.3167 1.37244 14.8459C1.31246 14.3998 1.31248 13.8379 1.3125 13.164V13.086C1.31248 12.4122 1.31246 11.8502 1.37244 11.4041C1.43574 10.9333 1.57499 10.5082 1.91659 10.1666C2.2582 9.82499 2.6833 9.68574 3.15414 9.62244C3.60023 9.56246 4.16214 9.56248 4.836 9.5625ZM3.30405 10.7374C2.95795 10.7839 2.80983 10.8644 2.71209 10.9621C2.61435 11.0598 2.53394 11.208 2.4874 11.554C2.4387 11.9163 2.4375 12.402 2.4375 13.125C2.4375 13.848 2.4387 14.3337 2.4874 14.696C2.53394 15.0421 2.61435 15.1902 2.71209 15.2879C2.80983 15.3857 2.95795 15.4661 3.30405 15.5126C3.66632 15.5613 4.15199 15.5625 4.875 15.5625C5.59801 15.5625 6.08368 15.5613 6.44596 15.5126C6.79205 15.4661 6.94018 15.3857 7.03791 15.2879C7.13565 15.1902 7.21607 15.0421 7.2626 14.696C7.31131 14.3337 7.3125 13.848 7.3125 13.125C7.3125 12.402 7.31131 11.9163 7.2626 11.554C7.21607 11.208 7.13565 11.0598 7.03791 10.9621C6.94018 10.8644 6.79205 10.7839 6.44596 10.7374C6.08368 10.6887 5.59801 10.6875 4.875 10.6875C4.15199 10.6875 3.66632 10.6887 3.30405 10.7374Z" fill=""/>
//                         <path fillRule="evenodd" clipRule="evenodd" d="M13.086 1.3125C12.4122 1.31248 11.8502 1.31246 11.4041 1.37244C10.9333 1.43574 10.5082 1.57499 10.1666 1.91659C9.82499 2.2582 9.68574 2.6833 9.62244 3.15414C9.56246 3.60023 9.56248 4.16214 9.5625 4.836V4.914C9.56248 5.58786 9.56246 6.14978 9.62244 6.59586C9.68574 7.06671 9.82499 7.49181 10.1666 7.83341C10.5082 8.17501 10.9333 8.31427 11.4041 8.37757C11.8502 8.43754 12.4121 8.43752 13.086 8.4375H13.164C13.8378 8.43752 14.3998 8.43754 14.8459 8.37757C15.3167 8.31427 15.7418 8.17501 16.0834 7.83341C16.425 7.49181 16.5643 7.06671 16.6276 6.59586C16.6875 6.14978 16.6875 5.58787 16.6875 4.91402V4.83601C16.6875 4.16216 16.6875 3.60022 16.6276 3.15414C16.5643 2.6833 16.425 2.2582 16.0834 1.91659C15.7418 1.57499 15.3167 1.43574 14.8459 1.37244C14.3998 1.31246 13.8379 1.31248 13.164 1.3125H13.086ZM10.9621 2.71209C11.0598 2.61435 11.208 2.53394 11.554 2.4874C11.9163 2.4387 12.402 2.4375 13.125 2.4375C13.848 2.4375 14.3337 2.4387 14.696 2.4874C15.0421 2.53394 15.1902 2.61435 15.2879 2.71209C15.3857 2.80983 15.4661 2.95795 15.5126 3.30405C15.5613 3.66632 15.5625 4.15199 15.5625 4.875C15.5625 5.59801 15.5613 6.08368 15.5126 6.44596C15.4661 6.79205 15.3857 6.94018 15.2879 7.03791C15.1902 7.13565 15.0421 7.21607 14.696 7.2626C14.3337 7.31131 13.848 7.3125 13.125 7.3125C12.402 7.3125 11.9163 7.31131 11.554 7.2626C11.208 7.21607 11.0598 7.13565 10.9621 7.03791C10.8644 6.94018 10.7839 6.79205 10.7374 6.44596C10.6887 6.08368 10.6875 5.59801 10.6875 4.875C10.6875 4.15199 10.6887 3.66632 10.7374 3.30405C10.7839 2.95795 10.8644 2.80983 10.9621 2.71209Z" fill=""/>
//                       </svg>
//                     </button>

//                     {/* List button */}
//                     <button
//                       onClick={() => setProductStyle("list")}
//                       aria-label="button for product list tab"
//                       className={`${
//                         productStyle === "list"
//                           ? "bg-[#7C3AED] border-[#7C3AED] text-white"
//                           : "text-dark bg-gray-1 border-gray-3"
//                       } flex items-center justify-center w-10.5 h-9 rounded-[5px] border ease-out duration-200 hover:bg-[#7C3AED] hover:border-[#7C3AED] hover:text-white`}
//                     >
//                       <svg className="fill-current" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path fillRule="evenodd" clipRule="evenodd" d="M4.4234 0.899903C3.74955 0.899882 3.18763 0.899864 2.74155 0.959838C2.2707 1.02314 1.8456 1.16239 1.504 1.504C1.16239 1.8456 1.02314 2.2707 0.959838 2.74155C0.899864 3.18763 0.899882 3.74953 0.899903 4.42338V4.5014C0.899882 5.17525 0.899864 5.73718 0.959838 6.18326C1.02314 6.65411 1.16239 7.07921 1.504 7.42081C1.8456 7.76241 2.2707 7.90167 2.74155 7.96497C3.18763 8.02495 3.74953 8.02493 4.42339 8.02491H4.5014C5.17525 8.02493 14.7372 8.02495 15.1833 7.96497C15.6541 7.90167 16.0792 7.76241 16.4208 7.42081C16.7624 7.07921 16.9017 6.65411 16.965 6.18326C17.0249 5.73718 17.0249 5.17527 17.0249 4.50142V4.42341C17.0249 3.74956 17.0249 3.18763 16.965 2.74155C16.9017 2.2707 16.7624 1.8456 16.4208 1.504C16.0792 1.16239 15.6541 1.02314 15.1833 0.959838C14.7372 0.899864 5.17528 0.899882 4.50142 0.899903H4.4234ZM2.29949 2.29949C2.39723 2.20175 2.54535 2.12134 2.89145 2.07481C3.25373 2.0261 3.7394 2.0249 4.4624 2.0249C5.18541 2.0249 14.6711 2.0261 15.0334 2.07481C15.3795 2.12134 15.5276 2.20175 15.6253 2.29949C15.7231 2.39723 15.8035 2.54535 15.85 2.89145C15.8987 3.25373 15.8999 3.7394 15.8999 4.4624C15.8999 5.18541 15.8987 5.67108 15.85 6.03336C15.8035 6.37946 15.7231 6.52758 15.6253 6.62532C15.5276 6.72305 15.3795 6.80347 15.0334 6.85C14.6711 6.89871 5.18541 6.8999 4.4624 6.8999C3.7394 6.8999 3.25373 6.89871 2.89145 6.85C2.54535 6.80347 2.39723 6.72305 2.29949 6.62532C2.20175 6.52758 2.12134 6.37946 2.07481 6.03336C2.0261 5.67108 2.0249 5.18541 2.0249 4.4624C2.0249 3.7394 2.0261 3.25373 2.07481 2.89145C2.12134 2.54535 2.20175 2.39723 2.29949 2.29949Z" fill=""/>
//                         <path fillRule="evenodd" clipRule="evenodd" d="M4.4234 9.1499H4.5014C5.17526 9.14988 14.7372 9.14986 15.1833 9.20984C15.6541 9.27314 16.0792 9.41239 16.4208 9.754C16.7624 10.0956 16.9017 10.5207 16.965 10.9915C17.0249 11.4376 17.0249 11.9995 17.0249 12.6734V12.7514C17.0249 13.4253 17.0249 13.9872 16.965 14.4333C16.9017 14.9041 16.7624 15.3292 16.4208 15.6708C16.0792 16.0124 15.6541 16.1517 15.1833 16.215C14.7372 16.2749 5.17529 16.2749 4.50145 16.2749H4.42341C3.74957 16.2749 3.18762 16.2749 2.74155 16.215C2.2707 16.1517 1.8456 16.0124 1.504 15.6708C1.16239 15.3292 1.02314 14.9041 0.959838 14.4333C0.899864 13.9872 0.899882 13.4253 0.899903 12.7514V12.6734C0.899882 11.9996 0.899864 11.4376 0.959838 10.9915C1.02314 10.5207 1.16239 10.0956 1.504 9.754C1.8456 9.41239 2.2707 9.27314 2.74155 9.20984C3.18763 9.14986 3.74955 9.14988 4.4234 9.1499ZM2.89145 10.3248C2.54535 10.3713 2.39723 10.4518 2.29949 10.5495C2.20175 10.6472 2.12134 10.7954 2.07481 11.1414C2.0261 11.5037 2.0249 11.9894 2.0249 12.7124C2.0249 13.4354 2.0261 13.9211 2.07481 14.2834C2.12134 14.6295 2.20175 14.7776 2.29949 14.8753C2.39723 14.9731 2.54535 15.0535 2.89145 15.1C3.25373 15.1487 3.7394 15.1499 4.4624 15.1499C5.18541 15.1499 14.6711 15.1487 15.0334 15.1C15.3795 15.0535 15.5276 14.9731 15.6253 14.8753C15.7231 14.7776 15.8035 14.6295 15.85 14.2834C15.8987 13.9211 15.8999 13.4354 15.8999 12.7124C15.8999 11.9894 15.8987 11.5037 15.85 11.1414C15.8035 10.7954 15.7231 10.6472 15.6253 10.5495C15.5276 10.4518 15.3795 10.3713 15.0334 10.3248C14.6711 10.2761 5.18541 10.2749 4.4624 10.2749C3.7394 10.2749 3.25373 10.2761 2.89145 10.3248Z" fill=""/>
//                       </svg>
//                     </button>

//                   </div>
//                 </div>
//               </div>

//               {/* Products */}
//               <div
//                 className={`${
//                   productStyle === "grid"
//                     ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7.5 gap-y-9"
//                     : "flex flex-col gap-7.5"
//                 }`}
//               >
//                 {paginatedProducts.length > 0 ? (
//                   paginatedProducts.map((item, key) =>
//                     productStyle === "grid" ? (
//                       <SingleGridItem item={item} key={key} />
//                     ) : (
//                       <SingleListItem item={item} key={key} />
//                     )
//                   )
//                 ) : (
//                   <div className="col-span-3 py-20 text-center text-gray-500">
//                     No products found{activeCategory ? ` in "${activeCategory}"` : ""}.
//                   </div>
//                 )}
//               </div>

//               {/* Pagination */}
//               {totalPages > 1 && (
//                 <div className="flex justify-center mt-15">
//                   <div className="bg-white shadow-1 rounded-md p-2">
//                     <ul className="flex items-center gap-1">
//                       <li>
//                         <button
//                           disabled={page === 1}
//                           onClick={() => setPage((p) => Math.max(1, p - 1))}
//                           className="flex items-center justify-center w-8 h-9 rounded-[3px] disabled:text-gray-4 hover:bg-[#7C3AED] hover:text-white"
//                         >
//                           ‹
//                         </button>
//                       </li>
//                       {Array.from({ length: totalPages }).map((_, i) => (
//                         <li key={i}>
//                           <button
//                             onClick={() => setPage(i + 1)}
//                             className={`flex py-1.5 px-3.5 rounded-[3px] ${
//                               page === i + 1
//                                 ? "bg-[#7C3AED] text-white"
//                                 : "hover:bg-[#7C3AED] hover:text-white"
//                             }`}
//                           >
//                             {i + 1}
//                           </button>
//                         </li>
//                       ))}
//                       <li>
//                         <button
//                           disabled={page === totalPages}
//                           onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
//                           className="flex items-center justify-center w-8 h-9 rounded-[3px] disabled:text-gray-4 hover:bg-[#7C3AED] hover:text-white"
//                         >
//                           ›
//                         </button>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               )}

//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ShopWithSidebar;



// "use client";
// import React, { useState, useEffect } from "react";
// import Breadcrumb from "../Common/Breadcrumb";
// import CustomSelect from "./CustomSelect";
// import shopData from "../Shop/shopData";
// import SingleGridItem from "../Shop/SingleGridItem";
// import SingleListItem from "../Shop/SingleListItem";
// import { useSearchParams, useRouter } from "next/navigation";

// export type Product = {
//   id: number;
//   title: string;
//   reviews: number;
//   price: number;
//   discountedPrice: number;
//   imgs: {
//     thumbnails: string[];
//     previews: string[];
//   };
//   category: string;
// };

// const ShopWithSidebar = () => {
//   const [productStyle, setProductStyle] = useState("grid");
//   const [stickyMenu, setStickyMenu] = useState(false);
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const activeCategory = searchParams.get("category")?.trim() ?? null;
//   const min = Number(searchParams.get("min") ?? 0);
//   const max = Number(searchParams.get("max") ?? Infinity);
//   const ITEMS_PER_PAGE = 10;
//   const [page, setPage] = useState(1);

//   // Derive categories dynamically from shopData
//   const categories = React.useMemo(() => {
//     const counts: Record<string, number> = {};
//     shopData.forEach((p) => {
//       const cat = p.category.trim();
//       counts[cat] = (counts[cat] ?? 0) + 1;
//     });
//     return Object.entries(counts).map(([name, products]) => ({ name, products }));
//   }, []);

//   const handleCategoryClick = (categoryName: string) => {
//     const params = new URLSearchParams(searchParams.toString());
//     if (activeCategory === categoryName) {
//       params.delete("category");
//     } else {
//       params.set("category", categoryName);
//     }
//     params.delete("min");
//     params.delete("max");
//     setPage(1);
//     router.push(`?${params.toString()}`);
//   };

//   const handleStickyMenu = () => {
//     if (window.scrollY >= 80) {
//       setStickyMenu(true);
//     } else {
//       setStickyMenu(false);
//     }
//   };

//   const options = [
//     { label: "Latest Products", value: "0" },
//     { label: "Best Selling", value: "1" },
//     { label: "Old Products", value: "2" },
//   ];

//   useEffect(() => {
//     window.addEventListener("scroll", handleStickyMenu);
//     return () => window.removeEventListener("scroll", handleStickyMenu);
//   });

//   // Reset page when filters change
//   useEffect(() => {
//     setPage(1);
//   }, [activeCategory, min, max]);

//   const filteredProducts = shopData.filter((p) => {
//     const inCategory = activeCategory ? p.category.trim() === activeCategory : true;
//     const inPrice = p.discountedPrice >= min && p.discountedPrice <= max;
//     return inCategory && inPrice;
//   });

//   const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

//   const paginatedProducts = filteredProducts.slice(
//     (page - 1) * ITEMS_PER_PAGE,
//     page * ITEMS_PER_PAGE
//   );

//   return (
//     <>
//       <Breadcrumb title={"Explore All Products"} pages={["shop", "/"]} />
//       <section className="overflow-hidden relative pb-20 pt-3 lg:pt-6 xl:pt-8 bg-[#f3f4f6]">
//         <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">

//           {/* ════════════════════════════════════════
//               MOBILE-ONLY: sort row + chip bar
//           ════════════════════════════════════════ */}
//           <div className="xl:hidden mb-4 flex flex-col gap-3">

//             {/* Sort + view toggles row */}
//             <div className="flex items-center gap-2">
//               <div className="flex-1 min-w-0">
//                 <CustomSelect options={options} />
//               </div>
//               <button
//                 onClick={() => setProductStyle("grid")}
//                 aria-label="Grid view"
//                 className={`flex items-center justify-center w-9 h-9 rounded-[5px] border transition-colors shrink-0 ${
//                   productStyle === "grid"
//                     ? "bg-[#7C3AED] border-[#7C3AED] text-white"
//                     : "bg-white border-gray-3 text-dark"
//                 }`}
//               >
//                 <svg className="fill-current" width="15" height="15" viewBox="0 0 18 18" fill="none">
//                   <rect x="1.3" y="1.3" width="6.4" height="6.4" rx="1.2" />
//                   <rect x="10.3" y="1.3" width="6.4" height="6.4" rx="1.2" />
//                   <rect x="1.3" y="10.3" width="6.4" height="6.4" rx="1.2" />
//                   <rect x="10.3" y="10.3" width="6.4" height="6.4" rx="1.2" />
//                 </svg>
//               </button>
//               <button
//                 onClick={() => setProductStyle("list")}
//                 aria-label="List view"
//                 className={`flex items-center justify-center w-9 h-9 rounded-[5px] border transition-colors shrink-0 ${
//                   productStyle === "list"
//                     ? "bg-[#7C3AED] border-[#7C3AED] text-white"
//                     : "bg-white border-gray-3 text-dark"
//                 }`}
//               >
//                 <svg className="fill-current" width="15" height="15" viewBox="0 0 18 18" fill="none">
//                   <rect x="1.3" y="1.3" width="15.4" height="5.5" rx="1.2" />
//                   <rect x="1.3" y="11.2" width="15.4" height="5.5" rx="1.2" />
//                 </svg>
//               </button>
//             </div>

//             {/* Scrollable category chip bar — no button, no modal */}
//             <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
//               {/* "All" chip */}
//               <button
//                 onClick={() => {
//                   const params = new URLSearchParams(searchParams.toString());
//                   params.delete("category");
//                   router.push(`?${params.toString()}`);
//                 }}
//                 className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium border transition-colors whitespace-nowrap ${
//                   !activeCategory
//                     ? "bg-[#7C3AED] border-[#7C3AED] text-white"
//                     : "bg-white border-gray-3 text-dark"
//                 }`}
//               >
//                 All
//               </button>

//               {/* One chip per category */}
//               {categories.map(({ name, products }) => (
//                 <button
//                   key={name}
//                   onClick={() => handleCategoryClick(name)}
//                   className={`shrink-0 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium border transition-colors whitespace-nowrap ${
//                     activeCategory === name
//                       ? "bg-[#7C3AED] border-[#7C3AED] text-white"
//                       : "bg-white border-gray-3 text-dark"
//                   }`}
//                 >
//                   {name}
//                   <span className={`text-xs ${activeCategory === name ? "opacity-70" : "text-gray-400"}`}>
//                     {products}
//                   </span>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* ════════════════════════════════════════
//               MAIN LAYOUT
//           ════════════════════════════════════════ */}
//           <div className="flex gap-7.5">

//             {/* Desktop sidebar — hidden on mobile */}
//             <div className="hidden xl:block xl:max-w-[270px] w-full shrink-0">
//               <div className="flex flex-col gap-6">
//                 <div className="bg-white shadow-1 rounded-lg py-4 px-5">
//                   <div className="flex items-center justify-between">
//                     <p className="font-medium text-dark">Filters:</p>
//                     {activeCategory && (
//                       <button
//                         onClick={() => {
//                           const params = new URLSearchParams(searchParams.toString());
//                           params.delete("category");
//                           router.push(`?${params.toString()}`);
//                         }}
//                         className="text-sm text-[#7C3AED] hover:underline"
//                       >
//                         Clear
//                       </button>
//                     )}
//                   </div>
//                 </div>
//                 <div className="bg-white shadow-1 rounded-lg py-4 px-5">
//                   <h3 className="font-medium text-dark mb-3">Categories</h3>
//                   <ul className="flex flex-col gap-1">
//                     {categories.map(({ name, products }) => (
//                       <li key={name}>
//                         <button
//                           onClick={() => handleCategoryClick(name)}
//                           className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors duration-150 ${
//                             activeCategory === name
//                               ? "bg-[#7C3AED] text-white"
//                               : "text-dark hover:bg-gray-100"
//                           }`}
//                         >
//                           <span>{name}</span>
//                           <span className={`text-xs px-1.5 py-0.5 rounded-full ${
//                             activeCategory === name
//                               ? "bg-white/20 text-white"
//                               : "bg-gray-100 text-gray-500"
//                           }`}>
//                             {products}
//                           </span>
//                         </button>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             {/* Content area */}
//             <div className="xl:max-w-[870px] w-full">

//               {/* Desktop top bar — hidden on mobile */}
//               <div className="hidden xl:block rounded-lg bg-white shadow-1 pl-3 pr-2.5 py-2.5 mb-6">
//                 <div className="flex items-center justify-between">
//                   <div className="flex flex-wrap items-center gap-4">
//                     <CustomSelect options={options} />
//                     <p>
//                       Showing{" "}
//                       <span className="text-dark">
//                         {paginatedProducts.length} of {filteredProducts.length}
//                       </span>{" "}
//                       Products
//                       {activeCategory && (
//                         <span className="ml-1 text-[#7C3AED]">in &ldquo;{activeCategory}&rdquo;</span>
//                       )}
//                     </p>
//                   </div>
//                   <div className="flex items-center gap-2.5">
//                     <button
//                       onClick={() => setProductStyle("grid")}
//                       aria-label="button for product grid tab"
//                       className={`${
//                         productStyle === "grid"
//                           ? "bg-[#7C3AED] border-[#7C3AED] text-white"
//                           : "text-dark bg-gray-1 border-gray-3"
//                       } flex items-center justify-center w-10.5 h-9 rounded-[5px] border ease-out duration-200 hover:bg-[#7C3AED] hover:border-[#7C3AED] hover:text-white`}
//                     >
//                       <svg className="fill-current" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path fillRule="evenodd" clipRule="evenodd" d="M4.836 1.3125C4.16215 1.31248 3.60022 1.31246 3.15414 1.37244C2.6833 1.43574 2.2582 1.57499 1.91659 1.91659C1.57499 2.2582 1.43574 2.6833 1.37244 3.15414C1.31246 3.60022 1.31248 4.16213 1.3125 4.83598V4.914C1.31248 5.58785 1.31246 6.14978 1.37244 6.59586C1.43574 7.06671 1.57499 7.49181 1.91659 7.83341C2.2582 8.17501 2.6833 8.31427 3.15414 8.37757C3.60022 8.43754 4.16213 8.43752 4.83598 8.4375H4.914C5.58785 8.43752 6.14978 8.43754 6.59586 8.37757C7.06671 8.31427 7.49181 8.17501 7.83341 7.83341C8.17501 7.49181 8.31427 7.06671 8.37757 6.59586C8.43754 6.14978 8.43752 5.58787 8.4375 4.91402V4.83601C8.43752 4.16216 8.43754 3.60022 8.37757 3.15414C8.31427 2.6833 8.17501 2.2582 7.83341 1.91659C7.49181 1.57499 7.06671 1.43574 6.59586 1.37244C6.14978 1.31246 5.58787 1.31248 4.91402 1.3125H4.836ZM2.71209 2.71209C2.80983 2.61435 2.95795 2.53394 3.30405 2.4874C3.66632 2.4387 4.15199 2.4375 4.875 2.4375C5.59801 2.4375 6.08368 2.4387 6.44596 2.4874C6.79205 2.53394 6.94018 2.61435 7.03791 2.71209C7.13565 2.80983 7.21607 2.95795 7.2626 3.30405C7.31131 3.66632 7.3125 4.15199 7.3125 4.875C7.3125 5.59801 7.31131 6.08368 7.2626 6.44596C7.21607 6.79205 7.13565 6.94018 7.03791 7.03791C6.94018 7.13565 6.79205 7.21607 6.44596 7.2626C6.08368 7.31131 5.59801 7.3125 4.875 7.3125C4.15199 7.3125 3.66632 7.31131 3.30405 7.2626C2.95795 7.21607 2.80983 7.13565 2.71209 7.03791C2.61435 6.94018 2.53394 6.79205 2.4874 6.44596C2.4387 6.08368 2.4375 5.59801 2.4375 4.875C2.4375 4.15199 2.4387 3.66632 2.4874 3.30405C2.53394 2.95795 2.61435 2.80983 2.71209 2.71209Z" fill=""/>
//                         <path fillRule="evenodd" clipRule="evenodd" d="M13.086 9.5625C12.4121 9.56248 11.8502 9.56246 11.4041 9.62244C10.9333 9.68574 10.5082 9.82499 10.1666 10.1666C9.82499 10.5082 9.68574 10.9333 9.62244 11.4041C9.56246 11.8502 9.56248 12.4121 9.5625 13.086V13.164C9.56248 13.8379 9.56246 14.3998 9.62244 14.8459C9.68574 15.3167 9.82499 15.7418 10.1666 16.0834C10.5082 16.425 10.9333 16.5643 11.4041 16.6276C11.8502 16.6875 12.4121 16.6875 13.0859 16.6875H13.164C13.8378 16.6875 14.3998 16.6875 14.8459 16.6276C15.3167 16.5643 15.7418 16.425 16.0834 16.0834C16.425 15.7418 16.5643 15.3167 16.6276 14.8459C16.6875 14.3998 16.6875 13.8379 16.6875 13.1641V13.086C16.6875 12.4122 16.6875 11.8502 16.6276 11.4041C16.5643 10.9333 16.425 10.5082 16.0834 10.1666C15.7418 9.82499 15.3167 9.68574 14.8459 9.62244C14.3998 9.56246 13.8379 9.56248 13.164 9.5625H13.086ZM10.9621 10.9621C11.0598 10.8644 11.208 10.7839 11.554 10.7374C11.9163 10.6887 12.402 10.6875 13.125 10.6875C13.848 10.6875 14.3337 10.6887 14.696 10.7374C15.0421 10.7839 15.1902 10.8644 15.2879 10.9621C15.3857 11.0598 15.4661 11.208 15.5126 11.554C15.5613 11.9163 15.5625 12.402 15.5625 13.125C15.5625 13.848 15.5613 14.3337 15.5126 14.696C15.4661 15.0421 15.3857 15.1902 15.2879 15.2879C15.1902 15.3857 15.0421 15.4661 14.696 15.5126C14.3337 15.5613 13.848 15.5625 13.125 15.5625C12.402 15.5625 11.9163 15.5613 11.554 15.5126C11.208 15.4661 11.0598 15.3857 10.9621 15.2879C10.8644 15.1902 10.7839 15.0421 10.7374 14.696C10.6887 14.3337 10.6875 13.848 10.6875 13.125C10.6875 12.402 10.6887 11.9163 10.7374 11.554C10.7839 11.208 10.8644 11.0598 10.9621 10.9621Z" fill=""/>
//                         <path fillRule="evenodd" clipRule="evenodd" d="M4.836 9.5625H4.914C5.58786 9.56248 6.14978 9.56246 6.59586 9.62244C7.06671 9.68574 7.49181 9.82499 7.83341 10.1666C8.17501 10.5082 8.31427 10.9333 8.37757 11.4041C8.43754 11.8502 8.43752 12.4121 8.4375 13.086V13.164C8.43752 13.8378 8.43754 14.3998 8.37757 14.8459C8.31427 15.3167 8.17501 15.7418 7.83341 16.0834C7.49181 16.425 7.06671 16.5643 6.59586 16.6276C6.14979 16.6875 5.58789 16.6875 4.91405 16.6875H4.83601C4.16217 16.6875 3.60022 16.6875 3.15414 16.6276C2.6833 16.5643 2.2582 16.425 1.91659 16.0834C1.57499 15.7418 1.43574 15.3167 1.37244 14.8459C1.31246 14.3998 1.31248 13.8379 1.3125 13.164V13.086C1.31248 12.4122 1.31246 11.8502 1.37244 11.4041C1.43574 10.9333 1.57499 10.5082 1.91659 10.1666C2.2582 9.82499 2.6833 9.68574 3.15414 9.62244C3.60023 9.56246 4.16214 9.56248 4.836 9.5625ZM3.30405 10.7374C2.95795 10.7839 2.80983 10.8644 2.71209 10.9621C2.61435 11.0598 2.53394 11.208 2.4874 11.554C2.4387 11.9163 2.4375 12.402 2.4375 13.125C2.4375 13.848 2.4387 14.3337 2.4874 14.696C2.53394 15.0421 2.61435 15.1902 2.71209 15.2879C2.80983 15.3857 2.95795 15.4661 3.30405 15.5126C3.66632 15.5613 4.15199 15.5625 4.875 15.5625C5.59801 15.5625 6.08368 15.5613 6.44596 15.5126C6.79205 15.4661 6.94018 15.3857 7.03791 15.2879C7.13565 15.1902 7.21607 15.0421 7.2626 14.696C7.31131 14.3337 7.3125 13.848 7.3125 13.125C7.3125 12.402 7.31131 11.9163 7.2626 11.554C7.21607 11.208 7.13565 11.0598 7.03791 10.9621C6.94018 10.8644 6.79205 10.7839 6.44596 10.7374C6.08368 10.6887 5.59801 10.6875 4.875 10.6875C4.15199 10.6875 3.66632 10.6887 3.30405 10.7374Z" fill=""/>
//                         <path fillRule="evenodd" clipRule="evenodd" d="M13.086 1.3125C12.4122 1.31248 11.8502 1.31246 11.4041 1.37244C10.9333 1.43574 10.5082 1.57499 10.1666 1.91659C9.82499 2.2582 9.68574 2.6833 9.62244 3.15414C9.56246 3.60023 9.56248 4.16214 9.5625 4.836V4.914C9.56248 5.58786 9.56246 6.14978 9.62244 6.59586C9.68574 7.06671 9.82499 7.49181 10.1666 7.83341C10.5082 8.17501 10.9333 8.31427 11.4041 8.37757C11.8502 8.43754 12.4121 8.43752 13.086 8.4375H13.164C13.8378 8.43752 14.3998 8.43754 14.8459 8.37757C15.3167 8.31427 15.7418 8.17501 16.0834 7.83341C16.425 7.49181 16.5643 7.06671 16.6276 6.59586C16.6875 6.14978 16.6875 5.58787 16.6875 4.91402V4.83601C16.6875 4.16216 16.6875 3.60022 16.6276 3.15414C16.5643 2.6833 16.425 2.2582 16.0834 1.91659C15.7418 1.57499 15.3167 1.43574 14.8459 1.37244C14.3998 1.31246 13.8379 1.31248 13.164 1.3125H13.086ZM10.9621 2.71209C11.0598 2.61435 11.208 2.53394 11.554 2.4874C11.9163 2.4387 12.402 2.4375 13.125 2.4375C13.848 2.4375 14.3337 2.4387 14.696 2.4874C15.0421 2.53394 15.1902 2.61435 15.2879 2.71209C15.3857 2.80983 15.4661 2.95795 15.5126 3.30405C15.5613 3.66632 15.5625 4.15199 15.5625 4.875C15.5625 5.59801 15.5613 6.08368 15.5126 6.44596C15.4661 6.79205 15.3857 6.94018 15.2879 7.03791C15.1902 7.13565 15.0421 7.21607 14.696 7.2626C14.3337 7.31131 13.848 7.3125 13.125 7.3125C12.402 7.3125 11.9163 7.31131 11.554 7.2626C11.208 7.21607 11.0598 7.13565 10.9621 7.03791C10.8644 6.94018 10.7839 6.79205 10.7374 6.44596C10.6887 6.08368 10.6875 5.59801 10.6875 4.875C10.6875 4.15199 10.6887 3.66632 10.7374 3.30405C10.7839 2.95795 10.8644 2.80983 10.9621 2.71209Z" fill=""/>
//                       </svg>
//                     </button>
//                     <button
//                       onClick={() => setProductStyle("list")}
//                       aria-label="button for product list tab"
//                       className={`${
//                         productStyle === "list"
//                           ? "bg-[#7C3AED] border-[#7C3AED] text-white"
//                           : "text-dark bg-gray-1 border-gray-3"
//                       } flex items-center justify-center w-10.5 h-9 rounded-[5px] border ease-out duration-200 hover:bg-[#7C3AED] hover:border-[#7C3AED] hover:text-white`}
//                     >
//                       <svg className="fill-current" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path fillRule="evenodd" clipRule="evenodd" d="M4.4234 0.899903C3.74955 0.899882 3.18763 0.899864 2.74155 0.959838C2.2707 1.02314 1.8456 1.16239 1.504 1.504C1.16239 1.8456 1.02314 2.2707 0.959838 2.74155C0.899864 3.18763 0.899882 3.74953 0.899903 4.42338V4.5014C0.899882 5.17525 0.899864 5.73718 0.959838 6.18326C1.02314 6.65411 1.16239 7.07921 1.504 7.42081C1.8456 7.76241 2.2707 7.90167 2.74155 7.96497C3.18763 8.02495 3.74953 8.02493 4.42339 8.02491H4.5014C5.17525 8.02493 14.7372 8.02495 15.1833 7.96497C15.6541 7.90167 16.0792 7.76241 16.4208 7.42081C16.7624 7.07921 16.9017 6.65411 16.965 6.18326C17.0249 5.73718 17.0249 5.17527 17.0249 4.50142V4.42341C17.0249 3.74956 17.0249 3.18763 16.965 2.74155C16.9017 2.2707 16.7624 1.8456 16.4208 1.504C16.0792 1.16239 15.6541 1.02314 15.1833 0.959838C14.7372 0.899864 5.17528 0.899882 4.50142 0.899903H4.4234ZM2.29949 2.29949C2.39723 2.20175 2.54535 2.12134 2.89145 2.07481C3.25373 2.0261 3.7394 2.0249 4.4624 2.0249C5.18541 2.0249 14.6711 2.0261 15.0334 2.07481C15.3795 2.12134 15.5276 2.20175 15.6253 2.29949C15.7231 2.39723 15.8035 2.54535 15.85 2.89145C15.8987 3.25373 15.8999 3.7394 15.8999 4.4624C15.8999 5.18541 15.8987 5.67108 15.85 6.03336C15.8035 6.37946 15.7231 6.52758 15.6253 6.62532C15.5276 6.72305 15.3795 6.80347 15.0334 6.85C14.6711 6.89871 5.18541 6.8999 4.4624 6.8999C3.7394 6.8999 3.25373 6.89871 2.89145 6.85C2.54535 6.80347 2.39723 6.72305 2.29949 6.62532C2.20175 6.52758 2.12134 6.37946 2.07481 6.03336C2.0261 5.67108 2.0249 5.18541 2.0249 4.4624C2.0249 3.7394 2.0261 3.25373 2.07481 2.89145C2.12134 2.54535 2.20175 2.39723 2.29949 2.29949Z" fill=""/>
//                         <path fillRule="evenodd" clipRule="evenodd" d="M4.4234 9.1499H4.5014C5.17526 9.14988 14.7372 9.14986 15.1833 9.20984C15.6541 9.27314 16.0792 9.41239 16.4208 9.754C16.7624 10.0956 16.9017 10.5207 16.965 10.9915C17.0249 11.4376 17.0249 11.9995 17.0249 12.6734V12.7514C17.0249 13.4253 17.0249 13.9872 16.965 14.4333C16.9017 14.9041 16.7624 15.3292 16.4208 15.6708C16.0792 16.0124 15.6541 16.1517 15.1833 16.215C14.7372 16.2749 5.17529 16.2749 4.50145 16.2749H4.42341C3.74957 16.2749 3.18762 16.2749 2.74155 16.215C2.2707 16.1517 1.8456 16.0124 1.504 15.6708C1.16239 15.3292 1.02314 14.9041 0.959838 14.4333C0.899864 13.9872 0.899882 13.4253 0.899903 12.7514V12.6734C0.899882 11.9996 0.899864 11.4376 0.959838 10.9915C1.02314 10.5207 1.16239 10.0956 1.504 9.754C1.8456 9.41239 2.2707 9.27314 2.74155 9.20984C3.18763 9.14986 3.74955 9.14988 4.4234 9.1499ZM2.89145 10.3248C2.54535 10.3713 2.39723 10.4518 2.29949 10.5495C2.20175 10.6472 2.12134 10.7954 2.07481 11.1414C2.0261 11.5037 2.0249 11.9894 2.0249 12.7124C2.0249 13.4354 2.0261 13.9211 2.07481 14.2834C2.12134 14.6295 2.20175 14.7776 2.29949 14.8753C2.39723 14.9731 2.54535 15.0535 2.89145 15.1C3.25373 15.1487 3.7394 15.1499 4.4624 15.1499C5.18541 15.1499 14.6711 15.1487 15.0334 15.1C15.3795 15.0535 15.5276 14.9731 15.6253 14.8753C15.7231 14.7776 15.8035 14.6295 15.85 14.2834C15.8987 13.9211 15.8999 13.4354 15.8999 12.7124C15.8999 11.9894 15.8987 11.5037 15.85 11.1414C15.8035 10.7954 15.7231 10.6472 15.6253 10.5495C15.5276 10.4518 15.3795 10.3713 15.0334 10.3248C14.6711 10.2761 5.18541 10.2749 4.4624 10.2749C3.7394 10.2749 3.25373 10.2761 2.89145 10.3248Z" fill=""/>
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Products grid / list */}
//               <div
//                 className={`${
//                   productStyle === "grid"
//                     ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7.5 gap-y-9"
//                     : "flex flex-col gap-7.5"
//                 }`}
//               >
//                 {paginatedProducts.length > 0 ? (
//                   paginatedProducts.map((item, key) =>
//                     productStyle === "grid" ? (
//                       <SingleGridItem item={item} key={key} />
//                     ) : (
//                       <SingleListItem item={item} key={key} />
//                     )
//                   )
//                 ) : (
//                   <div className="col-span-3 py-20 text-center text-gray-500">
//                     No products found{activeCategory ? ` in "${activeCategory}"` : ""}.
//                   </div>
//                 )}
//               </div>

//               {/* Pagination */}
//               {totalPages > 1 && (
//                 <div className="flex justify-center mt-15">
//                   <div className="bg-white shadow-1 rounded-md p-2">
//                     <ul className="flex items-center gap-1">
//                       <li>
//                         <button
//                           disabled={page === 1}
//                           onClick={() => setPage((p) => Math.max(1, p - 1))}
//                           className="flex items-center justify-center w-8 h-9 rounded-[3px] disabled:text-gray-4 hover:bg-[#7C3AED] hover:text-white"
//                         >
//                           ‹
//                         </button>
//                       </li>
//                       {Array.from({ length: totalPages }).map((_, i) => (
//                         <li key={i}>
//                           <button
//                             onClick={() => setPage(i + 1)}
//                             className={`flex py-1.5 px-3.5 rounded-[3px] ${
//                               page === i + 1
//                                 ? "bg-[#7C3AED] text-white"
//                                 : "hover:bg-[#7C3AED] hover:text-white"
//                             }`}
//                           >
//                             {i + 1}
//                           </button>
//                         </li>
//                       ))}
//                       <li>
//                         <button
//                           disabled={page === totalPages}
//                           onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
//                           className="flex items-center justify-center w-8 h-9 rounded-[3px] disabled:text-gray-4 hover:bg-[#7C3AED] hover:text-white"
//                         >
//                           ›
//                         </button>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               )}

//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ShopWithSidebar;




// "use client";
// import React, { useState, useEffect } from "react";
// import Breadcrumb from "../Common/Breadcrumb";
// import CustomSelect from "./CustomSelect";
// import shopData from "../Shop/shopData";
// import SingleGridItem from "../Shop/SingleGridItem";
// import SingleListItem from "../Shop/SingleListItem";
// import { useSearchParams, useRouter } from "next/navigation";

// export type Product = {
//   id: number;
//   title: string;
//   reviews: number;
//   price: number;
//   discountedPrice: number;
//   imgs: {
//     thumbnails: string[];
//     previews: string[];
//   };
//   category: string;
// };

// const ShopWithSidebar = () => {
//   const [productStyle, setProductStyle] = useState("grid");
//   const [stickyMenu, setStickyMenu] = useState(false);
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const activeCategory = searchParams.get("category")?.trim() ?? null;
//   const min = Number(searchParams.get("min") ?? 0);
//   const max = Number(searchParams.get("max") ?? Infinity);
//   const ITEMS_PER_PAGE = 10;
//   const [page, setPage] = useState(1);

//   // Derive categories dynamically from shopData
//   const categories = React.useMemo(() => {
//     const counts: Record<string, number> = {};
//     shopData.forEach((p) => {
//       const cat = p.category.trim();
//       counts[cat] = (counts[cat] ?? 0) + 1;
//     });
//     return Object.entries(counts).map(([name, products]) => ({ name, products }));
//   }, []);

//   const handleCategoryClick = (categoryName: string) => {
//     const params = new URLSearchParams(searchParams.toString());
//     if (activeCategory === categoryName) {
//       params.delete("category");
//     } else {
//       params.set("category", categoryName);
//     }
//     params.delete("min");
//     params.delete("max");
//     setPage(1);
//     router.push(`?${params.toString()}`);
//   };

//   const handleStickyMenu = () => {
//     if (window.scrollY >= 80) {
//       setStickyMenu(true);
//     } else {
//       setStickyMenu(false);
//     }
//   };

//   const options = [
//     { label: "Latest Products", value: "0" },
//     { label: "Best Selling", value: "1" },
//     { label: "Old Products", value: "2" },
//   ];

//   useEffect(() => {
//     window.addEventListener("scroll", handleStickyMenu);
//     return () => window.removeEventListener("scroll", handleStickyMenu);
//   });

//   // Reset page when filters change
//   useEffect(() => {
//     setPage(1);
//   }, [activeCategory, min, max]);

//   const filteredProducts = shopData.filter((p) => {
//     const inCategory = activeCategory ? p.category.trim() === activeCategory : true;
//     const inPrice = p.discountedPrice >= min && p.discountedPrice <= max;
//     return inCategory && inPrice;
//   });

//   const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

//   const paginatedProducts = filteredProducts.slice(
//     (page - 1) * ITEMS_PER_PAGE,
//     page * ITEMS_PER_PAGE
//   );

//   return (
//     <>
//       <Breadcrumb title={"Explore All Products"} pages={["shop", "/"]} />
//       <section className="overflow-hidden relative pb-20 pt-3 lg:pt-6 xl:pt-8 bg-[#f3f4f6]">
//         <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">

//           {/* ════════════════════════════════════════
//               MOBILE-ONLY: sort row + chip bar
//           ════════════════════════════════════════ */}
//           <div className="xl:hidden mb-4 flex flex-col gap-3">

//             {/* Sort + view toggles row */}
//             <div className="flex items-center gap-2">
//               <div className="flex-1 min-w-0">
//                 <CustomSelect options={options} />
//               </div>
//               <button
//                 onClick={() => setProductStyle("grid")}
//                 aria-label="Grid view"
//                 className={`flex items-center justify-center w-9 h-9 rounded-[5px] border transition-colors shrink-0 ${
//                   productStyle === "grid"
//                     ? "bg-[#7C3AED] border-[#7C3AED] text-white"
//                     : "bg-white border-gray-3 text-dark"
//                 }`}
//               >
//                 <svg className="fill-current" width="15" height="15" viewBox="0 0 18 18" fill="none">
//                   <rect x="1.3" y="1.3" width="6.4" height="6.4" rx="1.2" />
//                   <rect x="10.3" y="1.3" width="6.4" height="6.4" rx="1.2" />
//                   <rect x="1.3" y="10.3" width="6.4" height="6.4" rx="1.2" />
//                   <rect x="10.3" y="10.3" width="6.4" height="6.4" rx="1.2" />
//                 </svg>
//               </button>
//               <button
//                 onClick={() => setProductStyle("list")}
//                 aria-label="List view"
//                 className={`flex items-center justify-center w-9 h-9 rounded-[5px] border transition-colors shrink-0 ${
//                   productStyle === "list"
//                     ? "bg-[#7C3AED] border-[#7C3AED] text-white"
//                     : "bg-white border-gray-3 text-dark"
//                 }`}
//               >
//                 <svg className="fill-current" width="15" height="15" viewBox="0 0 18 18" fill="none">
//                   <rect x="1.3" y="1.3" width="15.4" height="5.5" rx="1.2" />
//                   <rect x="1.3" y="11.2" width="15.4" height="5.5" rx="1.2" />
//                 </svg>
//               </button>
//             </div>

//             {/* Scrollable category chip bar — no button, no modal */}
//             <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
//               {/* "All" chip */}
//               <button
//                 onClick={() => {
//                   const params = new URLSearchParams(searchParams.toString());
//                   params.delete("category");
//                   router.push(`?${params.toString()}`);
//                 }}
//                 className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium border transition-colors whitespace-nowrap ${
//                   !activeCategory
//                     ? "bg-[#7C3AED] border-[#7C3AED] text-white"
//                     : "bg-white border-gray-3 text-dark"
//                 }`}
//               >
//                 All
//               </button>

//               {/* One chip per category */}
//               {categories.map(({ name, products }) => (
//                 <button
//                   key={name}
//                   onClick={() => handleCategoryClick(name)}
//                   className={`shrink-0 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium border transition-colors whitespace-nowrap ${
//                     activeCategory === name
//                       ? "bg-[#7C3AED] border-[#7C3AED] text-white"
//                       : "bg-white border-gray-3 text-dark"
//                   }`}
//                 >
//                   {name}
//                   <span className={`text-xs ${activeCategory === name ? "opacity-70" : "text-gray-400"}`}>
//                     {products}
//                   </span>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* ════════════════════════════════════════
//               MAIN LAYOUT
//           ════════════════════════════════════════ */}
//           <div className="flex gap-7.5">

//             {/* Desktop sidebar — hidden on mobile */}
//             <div className="hidden xl:block xl:max-w-[270px] w-full shrink-0">
//               <div className="flex flex-col gap-6">
//                 <div className="bg-white shadow-1 rounded-lg py-4 px-5">
//                   <div className="flex items-center justify-between">
//                     <p className="font-medium text-dark">Filters:</p>
//                     {activeCategory && (
//                       <button
//                         onClick={() => {
//                           const params = new URLSearchParams(searchParams.toString());
//                           params.delete("category");
//                           router.push(`?${params.toString()}`);
//                         }}
//                         className="text-sm text-[#7C3AED] hover:underline"
//                       >
//                         Clear
//                       </button>
//                     )}
//                   </div>
//                 </div>
//                 <div className="bg-white shadow-1 rounded-lg py-4 px-5">
//                   <h3 className="font-medium text-dark mb-3">Categories</h3>
//                   <ul className="flex flex-col gap-1">
//                     {categories.map(({ name, products }) => (
//                       <li key={name}>
//                         <button
//                           onClick={() => handleCategoryClick(name)}
//                           className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors duration-150 ${
//                             activeCategory === name
//                               ? "bg-[#7C3AED] text-white"
//                               : "text-dark hover:bg-gray-100"
//                           }`}
//                         >
//                           <span>{name}</span>
//                           <span className={`text-xs px-1.5 py-0.5 rounded-full ${
//                             activeCategory === name
//                               ? "bg-white/20 text-white"
//                               : "bg-gray-100 text-gray-500"
//                           }`}>
//                             {products}
//                           </span>
//                         </button>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             {/* Content area */}
//             <div className="xl:max-w-[870px] w-full">

//               {/* Desktop top bar — hidden on mobile */}
//               <div className="hidden xl:block rounded-lg bg-white shadow-1 pl-3 pr-2.5 py-2.5 mb-6">
//                 <div className="flex items-center justify-between">
//                   <div className="flex flex-wrap items-center gap-4">
//                     <CustomSelect options={options} />
//                     <p>
//                       Showing{" "}
//                       <span className="text-dark">
//                         {paginatedProducts.length} of {filteredProducts.length}
//                       </span>{" "}
//                       Products
//                       {activeCategory && (
//                         <span className="ml-1 text-[#7C3AED]">in &ldquo;{activeCategory}&rdquo;</span>
//                       )}
//                     </p>
//                   </div>
//                   <div className="flex items-center gap-2.5">
//                     <button
//                       onClick={() => setProductStyle("grid")}
//                       aria-label="button for product grid tab"
//                       className={`${
//                         productStyle === "grid"
//                           ? "bg-[#7C3AED] border-[#7C3AED] text-white"
//                           : "text-dark bg-gray-1 border-gray-3"
//                       } flex items-center justify-center w-10.5 h-9 rounded-[5px] border ease-out duration-200 hover:bg-[#7C3AED] hover:border-[#7C3AED] hover:text-white`}
//                     >
//                       <svg className="fill-current" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path fillRule="evenodd" clipRule="evenodd" d="M4.836 1.3125C4.16215 1.31248 3.60022 1.31246 3.15414 1.37244C2.6833 1.43574 2.2582 1.57499 1.91659 1.91659C1.57499 2.2582 1.43574 2.6833 1.37244 3.15414C1.31246 3.60022 1.31248 4.16213 1.3125 4.83598V4.914C1.31248 5.58785 1.31246 6.14978 1.37244 6.59586C1.43574 7.06671 1.57499 7.49181 1.91659 7.83341C2.2582 8.17501 2.6833 8.31427 3.15414 8.37757C3.60022 8.43754 4.16213 8.43752 4.83598 8.4375H4.914C5.58785 8.43752 6.14978 8.43754 6.59586 8.37757C7.06671 8.31427 7.49181 8.17501 7.83341 7.83341C8.17501 7.49181 8.31427 7.06671 8.37757 6.59586C8.43754 6.14978 8.43752 5.58787 8.4375 4.91402V4.83601C8.43752 4.16216 8.43754 3.60022 8.37757 3.15414C8.31427 2.6833 8.17501 2.2582 7.83341 1.91659C7.49181 1.57499 7.06671 1.43574 6.59586 1.37244C6.14978 1.31246 5.58787 1.31248 4.91402 1.3125H4.836ZM2.71209 2.71209C2.80983 2.61435 2.95795 2.53394 3.30405 2.4874C3.66632 2.4387 4.15199 2.4375 4.875 2.4375C5.59801 2.4375 6.08368 2.4387 6.44596 2.4874C6.79205 2.53394 6.94018 2.61435 7.03791 2.71209C7.13565 2.80983 7.21607 2.95795 7.2626 3.30405C7.31131 3.66632 7.3125 4.15199 7.3125 4.875C7.3125 5.59801 7.31131 6.08368 7.2626 6.44596C7.21607 6.79205 7.13565 6.94018 7.03791 7.03791C6.94018 7.13565 6.79205 7.21607 6.44596 7.2626C6.08368 7.31131 5.59801 7.3125 4.875 7.3125C4.15199 7.3125 3.66632 7.31131 3.30405 7.2626C2.95795 7.21607 2.80983 7.13565 2.71209 7.03791C2.61435 6.94018 2.53394 6.79205 2.4874 6.44596C2.4387 6.08368 2.4375 5.59801 2.4375 4.875C2.4375 4.15199 2.4387 3.66632 2.4874 3.30405C2.53394 2.95795 2.61435 2.80983 2.71209 2.71209Z" fill=""/>
//                         <path fillRule="evenodd" clipRule="evenodd" d="M13.086 9.5625C12.4121 9.56248 11.8502 9.56246 11.4041 9.62244C10.9333 9.68574 10.5082 9.82499 10.1666 10.1666C9.82499 10.5082 9.68574 10.9333 9.62244 11.4041C9.56246 11.8502 9.56248 12.4121 9.5625 13.086V13.164C9.56248 13.8379 9.56246 14.3998 9.62244 14.8459C9.68574 15.3167 9.82499 15.7418 10.1666 16.0834C10.5082 16.425 10.9333 16.5643 11.4041 16.6276C11.8502 16.6875 12.4121 16.6875 13.0859 16.6875H13.164C13.8378 16.6875 14.3998 16.6875 14.8459 16.6276C15.3167 16.5643 15.7418 16.425 16.0834 16.0834C16.425 15.7418 16.5643 15.3167 16.6276 14.8459C16.6875 14.3998 16.6875 13.8379 16.6875 13.1641V13.086C16.6875 12.4122 16.6875 11.8502 16.6276 11.4041C16.5643 10.9333 16.425 10.5082 16.0834 10.1666C15.7418 9.82499 15.3167 9.68574 14.8459 9.62244C14.3998 9.56246 13.8379 9.56248 13.164 9.5625H13.086ZM10.9621 10.9621C11.0598 10.8644 11.208 10.7839 11.554 10.7374C11.9163 10.6887 12.402 10.6875 13.125 10.6875C13.848 10.6875 14.3337 10.6887 14.696 10.7374C15.0421 10.7839 15.1902 10.8644 15.2879 10.9621C15.3857 11.0598 15.4661 11.208 15.5126 11.554C15.5613 11.9163 15.5625 12.402 15.5625 13.125C15.5625 13.848 15.5613 14.3337 15.5126 14.696C15.4661 15.0421 15.3857 15.1902 15.2879 15.2879C15.1902 15.3857 15.0421 15.4661 14.696 15.5126C14.3337 15.5613 13.848 15.5625 13.125 15.5625C12.402 15.5625 11.9163 15.5613 11.554 15.5126C11.208 15.4661 11.0598 15.3857 10.9621 15.2879C10.8644 15.1902 10.7839 15.0421 10.7374 14.696C10.6887 14.3337 10.6875 13.848 10.6875 13.125C10.6875 12.402 10.6887 11.9163 10.7374 11.554C10.7839 11.208 10.8644 11.0598 10.9621 10.9621Z" fill=""/>
//                         <path fillRule="evenodd" clipRule="evenodd" d="M4.836 9.5625H4.914C5.58786 9.56248 6.14978 9.56246 6.59586 9.62244C7.06671 9.68574 7.49181 9.82499 7.83341 10.1666C8.17501 10.5082 8.31427 10.9333 8.37757 11.4041C8.43754 11.8502 8.43752 12.4121 8.4375 13.086V13.164C8.43752 13.8378 8.43754 14.3998 8.37757 14.8459C8.31427 15.3167 8.17501 15.7418 7.83341 16.0834C7.49181 16.425 7.06671 16.5643 6.59586 16.6276C6.14979 16.6875 5.58789 16.6875 4.91405 16.6875H4.83601C4.16217 16.6875 3.60022 16.6875 3.15414 16.6276C2.6833 16.5643 2.2582 16.425 1.91659 16.0834C1.57499 15.7418 1.43574 15.3167 1.37244 14.8459C1.31246 14.3998 1.31248 13.8379 1.3125 13.164V13.086C1.31248 12.4122 1.31246 11.8502 1.37244 11.4041C1.43574 10.9333 1.57499 10.5082 1.91659 10.1666C2.2582 9.82499 2.6833 9.68574 3.15414 9.62244C3.60023 9.56246 4.16214 9.56248 4.836 9.5625ZM3.30405 10.7374C2.95795 10.7839 2.80983 10.8644 2.71209 10.9621C2.61435 11.0598 2.53394 11.208 2.4874 11.554C2.4387 11.9163 2.4375 12.402 2.4375 13.125C2.4375 13.848 2.4387 14.3337 2.4874 14.696C2.53394 15.0421 2.61435 15.1902 2.71209 15.2879C2.80983 15.3857 2.95795 15.4661 3.30405 15.5126C3.66632 15.5613 4.15199 15.5625 4.875 15.5625C5.59801 15.5625 6.08368 15.5613 6.44596 15.5126C6.79205 15.4661 6.94018 15.3857 7.03791 15.2879C7.13565 15.1902 7.21607 15.0421 7.2626 14.696C7.31131 14.3337 7.3125 13.848 7.3125 13.125C7.3125 12.402 7.31131 11.9163 7.2626 11.554C7.21607 11.208 7.13565 11.0598 7.03791 10.9621C6.94018 10.8644 6.79205 10.7839 6.44596 10.7374C6.08368 10.6887 5.59801 10.6875 4.875 10.6875C4.15199 10.6875 3.66632 10.6887 3.30405 10.7374Z" fill=""/>
//                         <path fillRule="evenodd" clipRule="evenodd" d="M13.086 1.3125C12.4122 1.31248 11.8502 1.31246 11.4041 1.37244C10.9333 1.43574 10.5082 1.57499 10.1666 1.91659C9.82499 2.2582 9.68574 2.6833 9.62244 3.15414C9.56246 3.60023 9.56248 4.16214 9.5625 4.836V4.914C9.56248 5.58786 9.56246 6.14978 9.62244 6.59586C9.68574 7.06671 9.82499 7.49181 10.1666 7.83341C10.5082 8.17501 10.9333 8.31427 11.4041 8.37757C11.8502 8.43754 12.4121 8.43752 13.086 8.4375H13.164C13.8378 8.43752 14.3998 8.43754 14.8459 8.37757C15.3167 8.31427 15.7418 8.17501 16.0834 7.83341C16.425 7.49181 16.5643 7.06671 16.6276 6.59586C16.6875 6.14978 16.6875 5.58787 16.6875 4.91402V4.83601C16.6875 4.16216 16.6875 3.60022 16.6276 3.15414C16.5643 2.6833 16.425 2.2582 16.0834 1.91659C15.7418 1.57499 15.3167 1.43574 14.8459 1.37244C14.3998 1.31246 13.8379 1.31248 13.164 1.3125H13.086ZM10.9621 2.71209C11.0598 2.61435 11.208 2.53394 11.554 2.4874C11.9163 2.4387 12.402 2.4375 13.125 2.4375C13.848 2.4375 14.3337 2.4387 14.696 2.4874C15.0421 2.53394 15.1902 2.61435 15.2879 2.71209C15.3857 2.80983 15.4661 2.95795 15.5126 3.30405C15.5613 3.66632 15.5625 4.15199 15.5625 4.875C15.5625 5.59801 15.5613 6.08368 15.5126 6.44596C15.4661 6.79205 15.3857 6.94018 15.2879 7.03791C15.1902 7.13565 15.0421 7.21607 14.696 7.2626C14.3337 7.31131 13.848 7.3125 13.125 7.3125C12.402 7.3125 11.9163 7.31131 11.554 7.2626C11.208 7.21607 11.0598 7.13565 10.9621 7.03791C10.8644 6.94018 10.7839 6.79205 10.7374 6.44596C10.6887 6.08368 10.6875 5.59801 10.6875 4.875C10.6875 4.15199 10.6887 3.66632 10.7374 3.30405C10.7839 2.95795 10.8644 2.80983 10.9621 2.71209Z" fill=""/>
//                       </svg>
//                     </button>
//                     <button
//                       onClick={() => setProductStyle("list")}
//                       aria-label="button for product list tab"
//                       className={`${
//                         productStyle === "list"
//                           ? "bg-[#7C3AED] border-[#7C3AED] text-white"
//                           : "text-dark bg-gray-1 border-gray-3"
//                       } flex items-center justify-center w-10.5 h-9 rounded-[5px] border ease-out duration-200 hover:bg-[#7C3AED] hover:border-[#7C3AED] hover:text-white`}
//                     >
//                       <svg className="fill-current" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path fillRule="evenodd" clipRule="evenodd" d="M4.4234 0.899903C3.74955 0.899882 3.18763 0.899864 2.74155 0.959838C2.2707 1.02314 1.8456 1.16239 1.504 1.504C1.16239 1.8456 1.02314 2.2707 0.959838 2.74155C0.899864 3.18763 0.899882 3.74953 0.899903 4.42338V4.5014C0.899882 5.17525 0.899864 5.73718 0.959838 6.18326C1.02314 6.65411 1.16239 7.07921 1.504 7.42081C1.8456 7.76241 2.2707 7.90167 2.74155 7.96497C3.18763 8.02495 3.74953 8.02493 4.42339 8.02491H4.5014C5.17525 8.02493 14.7372 8.02495 15.1833 7.96497C15.6541 7.90167 16.0792 7.76241 16.4208 7.42081C16.7624 7.07921 16.9017 6.65411 16.965 6.18326C17.0249 5.73718 17.0249 5.17527 17.0249 4.50142V4.42341C17.0249 3.74956 17.0249 3.18763 16.965 2.74155C16.9017 2.2707 16.7624 1.8456 16.4208 1.504C16.0792 1.16239 15.6541 1.02314 15.1833 0.959838C14.7372 0.899864 5.17528 0.899882 4.50142 0.899903H4.4234ZM2.29949 2.29949C2.39723 2.20175 2.54535 2.12134 2.89145 2.07481C3.25373 2.0261 3.7394 2.0249 4.4624 2.0249C5.18541 2.0249 14.6711 2.0261 15.0334 2.07481C15.3795 2.12134 15.5276 2.20175 15.6253 2.29949C15.7231 2.39723 15.8035 2.54535 15.85 2.89145C15.8987 3.25373 15.8999 3.7394 15.8999 4.4624C15.8999 5.18541 15.8987 5.67108 15.85 6.03336C15.8035 6.37946 15.7231 6.52758 15.6253 6.62532C15.5276 6.72305 15.3795 6.80347 15.0334 6.85C14.6711 6.89871 5.18541 6.8999 4.4624 6.8999C3.7394 6.8999 3.25373 6.89871 2.89145 6.85C2.54535 6.80347 2.39723 6.72305 2.29949 6.62532C2.20175 6.52758 2.12134 6.37946 2.07481 6.03336C2.0261 5.67108 2.0249 5.18541 2.0249 4.4624C2.0249 3.7394 2.0261 3.25373 2.07481 2.89145C2.12134 2.54535 2.20175 2.39723 2.29949 2.29949Z" fill=""/>
//                         <path fillRule="evenodd" clipRule="evenodd" d="M4.4234 9.1499H4.5014C5.17526 9.14988 14.7372 9.14986 15.1833 9.20984C15.6541 9.27314 16.0792 9.41239 16.4208 9.754C16.7624 10.0956 16.9017 10.5207 16.965 10.9915C17.0249 11.4376 17.0249 11.9995 17.0249 12.6734V12.7514C17.0249 13.4253 17.0249 13.9872 16.965 14.4333C16.9017 14.9041 16.7624 15.3292 16.4208 15.6708C16.0792 16.0124 15.6541 16.1517 15.1833 16.215C14.7372 16.2749 5.17529 16.2749 4.50145 16.2749H4.42341C3.74957 16.2749 3.18762 16.2749 2.74155 16.215C2.2707 16.1517 1.8456 16.0124 1.504 15.6708C1.16239 15.3292 1.02314 14.9041 0.959838 14.4333C0.899864 13.9872 0.899882 13.4253 0.899903 12.7514V12.6734C0.899882 11.9996 0.899864 11.4376 0.959838 10.9915C1.02314 10.5207 1.16239 10.0956 1.504 9.754C1.8456 9.41239 2.2707 9.27314 2.74155 9.20984C3.18763 9.14986 3.74955 9.14988 4.4234 9.1499ZM2.89145 10.3248C2.54535 10.3713 2.39723 10.4518 2.29949 10.5495C2.20175 10.6472 2.12134 10.7954 2.07481 11.1414C2.0261 11.5037 2.0249 11.9894 2.0249 12.7124C2.0249 13.4354 2.0261 13.9211 2.07481 14.2834C2.12134 14.6295 2.20175 14.7776 2.29949 14.8753C2.39723 14.9731 2.54535 15.0535 2.89145 15.1C3.25373 15.1487 3.7394 15.1499 4.4624 15.1499C5.18541 15.1499 14.6711 15.1487 15.0334 15.1C15.3795 15.0535 15.5276 14.9731 15.6253 14.8753C15.7231 14.7776 15.8035 14.6295 15.85 14.2834C15.8987 13.9211 15.8999 13.4354 15.8999 12.7124C15.8999 11.9894 15.8987 11.5037 15.85 11.1414C15.8035 10.7954 15.7231 10.6472 15.6253 10.5495C15.5276 10.4518 15.3795 10.3713 15.0334 10.3248C14.6711 10.2761 5.18541 10.2749 4.4624 10.2749C3.7394 10.2749 3.25373 10.2761 2.89145 10.3248Z" fill=""/>
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Products grid / list */}
//               <div
//                 className={`${
//                   productStyle === "grid"
//                     ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7.5 gap-y-9"
//                     : "flex flex-col gap-7.5"
//                 }`}
//               >
//                 {paginatedProducts.length > 0 ? (
//                   paginatedProducts.map((item, key) =>
//                     productStyle === "grid" ? (
//                       <SingleGridItem item={item} key={key} />
//                     ) : (
//                       <SingleListItem item={item} key={key} />
//                     )
//                   )
//                 ) : (
//                   <div className="col-span-3 py-20 text-center text-gray-500">
//                     No products found{activeCategory ? ` in "${activeCategory}"` : ""}.
//                   </div>
//                 )}
//               </div>

//               {/* Pagination */}
//               {totalPages > 1 && (
//                 <div className="flex justify-center mt-15">
//                   <div className="bg-white shadow-1 rounded-md p-2">
//                     <ul className="flex items-center gap-1">
//                       <li>
//                         <button
//                           disabled={page === 1}
//                           onClick={() => setPage((p) => Math.max(1, p - 1))}
//                           className="flex items-center justify-center w-8 h-9 rounded-[3px] disabled:text-gray-4 hover:bg-[#7C3AED] hover:text-white"
//                         >
//                           ‹
//                         </button>
//                       </li>
//                       {Array.from({ length: totalPages }).map((_, i) => (
//                         <li key={i}>
//                           <button
//                             onClick={() => setPage(i + 1)}
//                             className={`flex py-1.5 px-3.5 rounded-[3px] ${
//                               page === i + 1
//                                 ? "bg-[#7C3AED] text-white"
//                                 : "hover:bg-[#7C3AED] hover:text-white"
//                             }`}
//                           >
//                             {i + 1}
//                           </button>
//                         </li>
//                       ))}
//                       <li>
//                         <button
//                           disabled={page === totalPages}
//                           onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
//                           className="flex items-center justify-center w-8 h-9 rounded-[3px] disabled:text-gray-4 hover:bg-[#7C3AED] hover:text-white"
//                         >
//                           ›
//                         </button>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               )}

//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ShopWithSidebar;




"use client";
import React, { useState, useEffect } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import CustomSelect from "./CustomSelect";
import shopData from "../Shop/shopData";
import SingleGridItem from "../Shop/SingleGridItem";
import SingleListItem from "../Shop/SingleListItem";
import { useSearchParams, useRouter } from "next/navigation";

export type Product = {
  id: number;
  title: string;
  reviews: number;
  price: number;
  discountedPrice: number;
  imgs: {
    thumbnails: string[];
    previews: string[];
  };
  category: string;
};

const ShopWithSidebar = () => {
  const [productStyle, setProductStyle] = useState("grid");
  const [productSidebar, setProductSidebar] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeCategory = searchParams.get("category")?.trim() ?? null;
  const min = Number(searchParams.get("min") ?? 0);
  const max = Number(searchParams.get("max") ?? Infinity);
  const ITEMS_PER_PAGE = 10;
  const [page, setPage] = useState(1);

  // Derive categories dynamically from shopData
  const categories = React.useMemo(() => {
    const counts: Record<string, number> = {};
    shopData.forEach((p) => {
      const cat = p.category.trim();
      counts[cat] = (counts[cat] ?? 0) + 1;
    });
    return Object.entries(counts).map(([name, products]) => ({ name, products }));
  }, []);

  const handleCategoryClick = (categoryName: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (activeCategory === categoryName) {
      params.delete("category");
    } else {
      params.set("category", categoryName);
    }
    params.delete("min");
    params.delete("max");
    setPage(1);
    router.push(`?${params.toString()}`);
  };

  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  const options = [
    { label: "Latest Products", value: "0" },
    { label: "Best Selling", value: "1" },
    { label: "Old Products", value: "2" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  });

  // Lock body scroll when bottom sheet is open
  useEffect(() => {
    document.body.style.overflow = productSidebar ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [productSidebar]);

  // Reset page when filters change
  useEffect(() => {
    setPage(1);
  }, [activeCategory, min, max]);

  const filteredProducts = shopData.filter((p) => {
    const inCategory = activeCategory ? p.category.trim() === activeCategory : true;
    const inPrice = p.discountedPrice >= min && p.discountedPrice <= max;
    return inCategory && inPrice;
  });

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const paginatedProducts = filteredProducts.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <>
      <Breadcrumb title={"Explore All Products"} pages={["shop", "/"]} />
      <section className="overflow-hidden relative pb-20 pt-3 lg:pt-6 xl:pt-8 bg-[#f3f4f6]">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">

          {/* ════════════════════════════════════════
              MOBILE-ONLY: top control bar
          ════════════════════════════════════════ */}
          <div className="xl:hidden flex items-center gap-2 mb-4">

            {/* Filter trigger button */}
            <button
              onClick={() => setProductSidebar(true)}
              className="flex items-center gap-1.5 px-3 py-2 bg-white rounded-lg shadow-1 text-sm font-medium text-dark shrink-0"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="8" y1="12" x2="20" y2="12" />
                <line x1="12" y1="18" x2="20" y2="18" />
              </svg>
              Filters
              {activeCategory && (
                <span className="w-4 h-4 flex items-center justify-center bg-[#7C3AED] text-white text-[9px] font-bold rounded-full leading-none">
                  1
                </span>
              )}
            </button>

            {/* Sort dropdown */}
            <div className="flex-1 min-w-0">
              <CustomSelect options={options} />
            </div>

            {/* Grid / List toggles */}
            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={() => setProductStyle("grid")}
                aria-label="Grid view"
                className={`flex items-center justify-center w-9 h-9 rounded-[5px] border transition-colors ${
                  productStyle === "grid"
                    ? "bg-[#7C3AED] border-[#7C3AED] text-white"
                    : "bg-white border-gray-3 text-dark"
                }`}
              >
                <svg className="fill-current" width="15" height="15" viewBox="0 0 18 18" fill="none">
                  <rect x="1.3" y="1.3" width="6.4" height="6.4" rx="1.2" />
                  <rect x="10.3" y="1.3" width="6.4" height="6.4" rx="1.2" />
                  <rect x="1.3" y="10.3" width="6.4" height="6.4" rx="1.2" />
                  <rect x="10.3" y="10.3" width="6.4" height="6.4" rx="1.2" />
                </svg>
              </button>
              <button
                onClick={() => setProductStyle("list")}
                aria-label="List view"
                className={`flex items-center justify-center w-9 h-9 rounded-[5px] border transition-colors ${
                  productStyle === "list"
                    ? "bg-[#7C3AED] border-[#7C3AED] text-white"
                    : "bg-white border-gray-3 text-dark"
                }`}
              >
                <svg className="fill-current" width="15" height="15" viewBox="0 0 18 18" fill="none">
                  <rect x="1.3" y="1.3" width="15.4" height="5.5" rx="1.2" />
                  <rect x="1.3" y="11.2" width="15.4" height="5.5" rx="1.2" />
                </svg>
              </button>
            </div>
          </div>

          {/* Backdrop */}
          {productSidebar && (
            <div
              className="xl:hidden fixed inset-0 z-[9998] bg-black/40"
              onClick={() => setProductSidebar(false)}
            />
          )}

          {/* Bottom sheet */}
          <div
            className={`xl:hidden fixed left-0 right-0 bottom-0 z-[9999] bg-white rounded-t-2xl shadow-2xl transition-transform duration-300 ease-out ${
              productSidebar ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <div className="flex justify-center pt-3 pb-1">
              <div className="w-9 h-1 bg-gray-3 rounded-full" />
            </div>
            <div className="flex items-center justify-between px-5 pt-2 pb-3 border-b border-gray-2">
              <p className="font-semibold text-dark">Filter by Category</p>
              <div className="flex items-center gap-3">
                {activeCategory && (
                  <button
                    onClick={() => {
                      const params = new URLSearchParams(searchParams.toString());
                      params.delete("category");
                      router.push(`?${params.toString()}`);
                      setProductSidebar(false);
                    }}
                    className="text-sm text-[#7C3AED] font-medium"
                  >
                    Clear all
                  </button>
                )}
                <button
                  onClick={() => setProductSidebar(false)}
                  className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="px-5 pt-4 pb-10">
              <ul className="flex flex-col gap-2">
                {categories.map(({ name, products }) => (
                  <li key={name}>
                    <button
                      onClick={() => {
                        handleCategoryClick(name);
                        setProductSidebar(false);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-150 ${
                        activeCategory === name
                          ? "bg-[#7C3AED] text-white"
                          : "bg-gray-1 text-dark hover:bg-gray-2"
                      }`}
                    >
                      <span>{name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        activeCategory === name ? "bg-white/20 text-white" : "bg-white text-gray-500"
                      }`}>
                        {products}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ════════════════════════════════════════
              MAIN LAYOUT
          ════════════════════════════════════════ */}
          <div className="flex gap-7.5">

            {/* Desktop sidebar — hidden on mobile */}
            <div className="hidden xl:block xl:max-w-[270px] w-full shrink-0">
              <div className="flex flex-col gap-6">
                <div className="bg-white shadow-1 rounded-lg py-4 px-5">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-dark">Filters:</p>
                    {activeCategory && (
                      <button
                        onClick={() => {
                          const params = new URLSearchParams(searchParams.toString());
                          params.delete("category");
                          router.push(`?${params.toString()}`);
                        }}
                        className="text-sm text-[#7C3AED] hover:underline"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                </div>
                <div className="bg-white shadow-1 rounded-lg py-4 px-5">
                  <h3 className="font-medium text-dark mb-3">Categories</h3>
                  <ul className="flex flex-col gap-1">
                    {categories.map(({ name, products }) => (
                      <li key={name}>
                        <button
                          onClick={() => handleCategoryClick(name)}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors duration-150 ${
                            activeCategory === name
                              ? "bg-[#7C3AED] text-white"
                              : "text-dark hover:bg-gray-100"
                          }`}
                        >
                          <span>{name}</span>
                          <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                            activeCategory === name
                              ? "bg-white/20 text-white"
                              : "bg-gray-100 text-gray-500"
                          }`}>
                            {products}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Content area */}
            <div className="xl:max-w-[870px] w-full">

              {/* Desktop top bar — hidden on mobile */}
              <div className="hidden xl:block rounded-lg bg-white shadow-1 pl-3 pr-2.5 py-2.5 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap items-center gap-4">
                    <CustomSelect options={options} />
                    <p>
                      Showing{" "}
                      <span className="text-dark">
                        {paginatedProducts.length} of {filteredProducts.length}
                      </span>{" "}
                      Products
                      {activeCategory && (
                        <span className="ml-1 text-[#7C3AED]">in &ldquo;{activeCategory}&rdquo;</span>
                      )}
                    </p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={() => setProductStyle("grid")}
                      aria-label="button for product grid tab"
                      className={`${
                        productStyle === "grid"
                          ? "bg-[#7C3AED] border-[#7C3AED] text-white"
                          : "text-dark bg-gray-1 border-gray-3"
                      } flex items-center justify-center w-10.5 h-9 rounded-[5px] border ease-out duration-200 hover:bg-[#7C3AED] hover:border-[#7C3AED] hover:text-white`}
                    >
                      <svg className="fill-current" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.836 1.3125C4.16215 1.31248 3.60022 1.31246 3.15414 1.37244C2.6833 1.43574 2.2582 1.57499 1.91659 1.91659C1.57499 2.2582 1.43574 2.6833 1.37244 3.15414C1.31246 3.60022 1.31248 4.16213 1.3125 4.83598V4.914C1.31248 5.58785 1.31246 6.14978 1.37244 6.59586C1.43574 7.06671 1.57499 7.49181 1.91659 7.83341C2.2582 8.17501 2.6833 8.31427 3.15414 8.37757C3.60022 8.43754 4.16213 8.43752 4.83598 8.4375H4.914C5.58785 8.43752 6.14978 8.43754 6.59586 8.37757C7.06671 8.31427 7.49181 8.17501 7.83341 7.83341C8.17501 7.49181 8.31427 7.06671 8.37757 6.59586C8.43754 6.14978 8.43752 5.58787 8.4375 4.91402V4.83601C8.43752 4.16216 8.43754 3.60022 8.37757 3.15414C8.31427 2.6833 8.17501 2.2582 7.83341 1.91659C7.49181 1.57499 7.06671 1.43574 6.59586 1.37244C6.14978 1.31246 5.58787 1.31248 4.91402 1.3125H4.836ZM2.71209 2.71209C2.80983 2.61435 2.95795 2.53394 3.30405 2.4874C3.66632 2.4387 4.15199 2.4375 4.875 2.4375C5.59801 2.4375 6.08368 2.4387 6.44596 2.4874C6.79205 2.53394 6.94018 2.61435 7.03791 2.71209C7.13565 2.80983 7.21607 2.95795 7.2626 3.30405C7.31131 3.66632 7.3125 4.15199 7.3125 4.875C7.3125 5.59801 7.31131 6.08368 7.2626 6.44596C7.21607 6.79205 7.13565 6.94018 7.03791 7.03791C6.94018 7.13565 6.79205 7.21607 6.44596 7.2626C6.08368 7.31131 5.59801 7.3125 4.875 7.3125C4.15199 7.3125 3.66632 7.31131 3.30405 7.2626C2.95795 7.21607 2.80983 7.13565 2.71209 7.03791C2.61435 6.94018 2.53394 6.79205 2.4874 6.44596C2.4387 6.08368 2.4375 5.59801 2.4375 4.875C2.4375 4.15199 2.4387 3.66632 2.4874 3.30405C2.53394 2.95795 2.61435 2.80983 2.71209 2.71209Z" fill=""/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.086 9.5625C12.4121 9.56248 11.8502 9.56246 11.4041 9.62244C10.9333 9.68574 10.5082 9.82499 10.1666 10.1666C9.82499 10.5082 9.68574 10.9333 9.62244 11.4041C9.56246 11.8502 9.56248 12.4121 9.5625 13.086V13.164C9.56248 13.8379 9.56246 14.3998 9.62244 14.8459C9.68574 15.3167 9.82499 15.7418 10.1666 16.0834C10.5082 16.425 10.9333 16.5643 11.4041 16.6276C11.8502 16.6875 12.4121 16.6875 13.0859 16.6875H13.164C13.8378 16.6875 14.3998 16.6875 14.8459 16.6276C15.3167 16.5643 15.7418 16.425 16.0834 16.0834C16.425 15.7418 16.5643 15.3167 16.6276 14.8459C16.6875 14.3998 16.6875 13.8379 16.6875 13.1641V13.086C16.6875 12.4122 16.6875 11.8502 16.6276 11.4041C16.5643 10.9333 16.425 10.5082 16.0834 10.1666C15.7418 9.82499 15.3167 9.68574 14.8459 9.62244C14.3998 9.56246 13.8379 9.56248 13.164 9.5625H13.086ZM10.9621 10.9621C11.0598 10.8644 11.208 10.7839 11.554 10.7374C11.9163 10.6887 12.402 10.6875 13.125 10.6875C13.848 10.6875 14.3337 10.6887 14.696 10.7374C15.0421 10.7839 15.1902 10.8644 15.2879 10.9621C15.3857 11.0598 15.4661 11.208 15.5126 11.554C15.5613 11.9163 15.5625 12.402 15.5625 13.125C15.5625 13.848 15.5613 14.3337 15.5126 14.696C15.4661 15.0421 15.3857 15.1902 15.2879 15.2879C15.1902 15.3857 15.0421 15.4661 14.696 15.5126C14.3337 15.5613 13.848 15.5625 13.125 15.5625C12.402 15.5625 11.9163 15.5613 11.554 15.5126C11.208 15.4661 11.0598 15.3857 10.9621 15.2879C10.8644 15.1902 10.7839 15.0421 10.7374 14.696C10.6887 14.3337 10.6875 13.848 10.6875 13.125C10.6875 12.402 10.6887 11.9163 10.7374 11.554C10.7839 11.208 10.8644 11.0598 10.9621 10.9621Z" fill=""/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.836 9.5625H4.914C5.58786 9.56248 6.14978 9.56246 6.59586 9.62244C7.06671 9.68574 7.49181 9.82499 7.83341 10.1666C8.17501 10.5082 8.31427 10.9333 8.37757 11.4041C8.43754 11.8502 8.43752 12.4121 8.4375 13.086V13.164C8.43752 13.8378 8.43754 14.3998 8.37757 14.8459C8.31427 15.3167 8.17501 15.7418 7.83341 16.0834C7.49181 16.425 7.06671 16.5643 6.59586 16.6276C6.14979 16.6875 5.58789 16.6875 4.91405 16.6875H4.83601C4.16217 16.6875 3.60022 16.6875 3.15414 16.6276C2.6833 16.5643 2.2582 16.425 1.91659 16.0834C1.57499 15.7418 1.43574 15.3167 1.37244 14.8459C1.31246 14.3998 1.31248 13.8379 1.3125 13.164V13.086C1.31248 12.4122 1.31246 11.8502 1.37244 11.4041C1.43574 10.9333 1.57499 10.5082 1.91659 10.1666C2.2582 9.82499 2.6833 9.68574 3.15414 9.62244C3.60023 9.56246 4.16214 9.56248 4.836 9.5625ZM3.30405 10.7374C2.95795 10.7839 2.80983 10.8644 2.71209 10.9621C2.61435 11.0598 2.53394 11.208 2.4874 11.554C2.4387 11.9163 2.4375 12.402 2.4375 13.125C2.4375 13.848 2.4387 14.3337 2.4874 14.696C2.53394 15.0421 2.61435 15.1902 2.71209 15.2879C2.80983 15.3857 2.95795 15.4661 3.30405 15.5126C3.66632 15.5613 4.15199 15.5625 4.875 15.5625C5.59801 15.5625 6.08368 15.5613 6.44596 15.5126C6.79205 15.4661 6.94018 15.3857 7.03791 15.2879C7.13565 15.1902 7.21607 15.0421 7.2626 14.696C7.31131 14.3337 7.3125 13.848 7.3125 13.125C7.3125 12.402 7.31131 11.9163 7.2626 11.554C7.21607 11.208 7.13565 11.0598 7.03791 10.9621C6.94018 10.8644 6.79205 10.7839 6.44596 10.7374C6.08368 10.6887 5.59801 10.6875 4.875 10.6875C4.15199 10.6875 3.66632 10.6887 3.30405 10.7374Z" fill=""/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.086 1.3125C12.4122 1.31248 11.8502 1.31246 11.4041 1.37244C10.9333 1.43574 10.5082 1.57499 10.1666 1.91659C9.82499 2.2582 9.68574 2.6833 9.62244 3.15414C9.56246 3.60023 9.56248 4.16214 9.5625 4.836V4.914C9.56248 5.58786 9.56246 6.14978 9.62244 6.59586C9.68574 7.06671 9.82499 7.49181 10.1666 7.83341C10.5082 8.17501 10.9333 8.31427 11.4041 8.37757C11.8502 8.43754 12.4121 8.43752 13.086 8.4375H13.164C13.8378 8.43752 14.3998 8.43754 14.8459 8.37757C15.3167 8.31427 15.7418 8.17501 16.0834 7.83341C16.425 7.49181 16.5643 7.06671 16.6276 6.59586C16.6875 6.14978 16.6875 5.58787 16.6875 4.91402V4.83601C16.6875 4.16216 16.6875 3.60022 16.6276 3.15414C16.5643 2.6833 16.425 2.2582 16.0834 1.91659C15.7418 1.57499 15.3167 1.43574 14.8459 1.37244C14.3998 1.31246 13.8379 1.31248 13.164 1.3125H13.086ZM10.9621 2.71209C11.0598 2.61435 11.208 2.53394 11.554 2.4874C11.9163 2.4387 12.402 2.4375 13.125 2.4375C13.848 2.4375 14.3337 2.4387 14.696 2.4874C15.0421 2.53394 15.1902 2.61435 15.2879 2.71209C15.3857 2.80983 15.4661 2.95795 15.5126 3.30405C15.5613 3.66632 15.5625 4.15199 15.5625 4.875C15.5625 5.59801 15.5613 6.08368 15.5126 6.44596C15.4661 6.79205 15.3857 6.94018 15.2879 7.03791C15.1902 7.13565 15.0421 7.21607 14.696 7.2626C14.3337 7.31131 13.848 7.3125 13.125 7.3125C12.402 7.3125 11.9163 7.31131 11.554 7.2626C11.208 7.21607 11.0598 7.13565 10.9621 7.03791C10.8644 6.94018 10.7839 6.79205 10.7374 6.44596C10.6887 6.08368 10.6875 5.59801 10.6875 4.875C10.6875 4.15199 10.6887 3.66632 10.7374 3.30405C10.7839 2.95795 10.8644 2.80983 10.9621 2.71209Z" fill=""/>
                      </svg>
                    </button>
                    <button
                      onClick={() => setProductStyle("list")}
                      aria-label="button for product list tab"
                      className={`${
                        productStyle === "list"
                          ? "bg-[#7C3AED] border-[#7C3AED] text-white"
                          : "text-dark bg-gray-1 border-gray-3"
                      } flex items-center justify-center w-10.5 h-9 rounded-[5px] border ease-out duration-200 hover:bg-[#7C3AED] hover:border-[#7C3AED] hover:text-white`}
                    >
                      <svg className="fill-current" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.4234 0.899903C3.74955 0.899882 3.18763 0.899864 2.74155 0.959838C2.2707 1.02314 1.8456 1.16239 1.504 1.504C1.16239 1.8456 1.02314 2.2707 0.959838 2.74155C0.899864 3.18763 0.899882 3.74953 0.899903 4.42338V4.5014C0.899882 5.17525 0.899864 5.73718 0.959838 6.18326C1.02314 6.65411 1.16239 7.07921 1.504 7.42081C1.8456 7.76241 2.2707 7.90167 2.74155 7.96497C3.18763 8.02495 3.74953 8.02493 4.42339 8.02491H4.5014C5.17525 8.02493 14.7372 8.02495 15.1833 7.96497C15.6541 7.90167 16.0792 7.76241 16.4208 7.42081C16.7624 7.07921 16.9017 6.65411 16.965 6.18326C17.0249 5.73718 17.0249 5.17527 17.0249 4.50142V4.42341C17.0249 3.74956 17.0249 3.18763 16.965 2.74155C16.9017 2.2707 16.7624 1.8456 16.4208 1.504C16.0792 1.16239 15.6541 1.02314 15.1833 0.959838C14.7372 0.899864 5.17528 0.899882 4.50142 0.899903H4.4234ZM2.29949 2.29949C2.39723 2.20175 2.54535 2.12134 2.89145 2.07481C3.25373 2.0261 3.7394 2.0249 4.4624 2.0249C5.18541 2.0249 14.6711 2.0261 15.0334 2.07481C15.3795 2.12134 15.5276 2.20175 15.6253 2.29949C15.7231 2.39723 15.8035 2.54535 15.85 2.89145C15.8987 3.25373 15.8999 3.7394 15.8999 4.4624C15.8999 5.18541 15.8987 5.67108 15.85 6.03336C15.8035 6.37946 15.7231 6.52758 15.6253 6.62532C15.5276 6.72305 15.3795 6.80347 15.0334 6.85C14.6711 6.89871 5.18541 6.8999 4.4624 6.8999C3.7394 6.8999 3.25373 6.89871 2.89145 6.85C2.54535 6.80347 2.39723 6.72305 2.29949 6.62532C2.20175 6.52758 2.12134 6.37946 2.07481 6.03336C2.0261 5.67108 2.0249 5.18541 2.0249 4.4624C2.0249 3.7394 2.0261 3.25373 2.07481 2.89145C2.12134 2.54535 2.20175 2.39723 2.29949 2.29949Z" fill=""/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.4234 9.1499H4.5014C5.17526 9.14988 14.7372 9.14986 15.1833 9.20984C15.6541 9.27314 16.0792 9.41239 16.4208 9.754C16.7624 10.0956 16.9017 10.5207 16.965 10.9915C17.0249 11.4376 17.0249 11.9995 17.0249 12.6734V12.7514C17.0249 13.4253 17.0249 13.9872 16.965 14.4333C16.9017 14.9041 16.7624 15.3292 16.4208 15.6708C16.0792 16.0124 15.6541 16.1517 15.1833 16.215C14.7372 16.2749 5.17529 16.2749 4.50145 16.2749H4.42341C3.74957 16.2749 3.18762 16.2749 2.74155 16.215C2.2707 16.1517 1.8456 16.0124 1.504 15.6708C1.16239 15.3292 1.02314 14.9041 0.959838 14.4333C0.899864 13.9872 0.899882 13.4253 0.899903 12.7514V12.6734C0.899882 11.9996 0.899864 11.4376 0.959838 10.9915C1.02314 10.5207 1.16239 10.0956 1.504 9.754C1.8456 9.41239 2.2707 9.27314 2.74155 9.20984C3.18763 9.14986 3.74955 9.14988 4.4234 9.1499ZM2.89145 10.3248C2.54535 10.3713 2.39723 10.4518 2.29949 10.5495C2.20175 10.6472 2.12134 10.7954 2.07481 11.1414C2.0261 11.5037 2.0249 11.9894 2.0249 12.7124C2.0249 13.4354 2.0261 13.9211 2.07481 14.2834C2.12134 14.6295 2.20175 14.7776 2.29949 14.8753C2.39723 14.9731 2.54535 15.0535 2.89145 15.1C3.25373 15.1487 3.7394 15.1499 4.4624 15.1499C5.18541 15.1499 14.6711 15.1487 15.0334 15.1C15.3795 15.0535 15.5276 14.9731 15.6253 14.8753C15.7231 14.7776 15.8035 14.6295 15.85 14.2834C15.8987 13.9211 15.8999 13.4354 15.8999 12.7124C15.8999 11.9894 15.8987 11.5037 15.85 11.1414C15.8035 10.7954 15.7231 10.6472 15.6253 10.5495C15.5276 10.4518 15.3795 10.3713 15.0334 10.3248C14.6711 10.2761 5.18541 10.2749 4.4624 10.2749C3.7394 10.2749 3.25373 10.2761 2.89145 10.3248Z" fill=""/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Products grid / list */}
              <div
                className={`${
                  productStyle === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7.5 gap-y-9"
                    : "flex flex-col gap-7.5"
                }`}
              >
                {paginatedProducts.length > 0 ? (
                  paginatedProducts.map((item, key) =>
                    productStyle === "grid" ? (
                      <SingleGridItem item={item} key={key} />
                    ) : (
                      <SingleListItem item={item} key={key} />
                    )
                  )
                ) : (
                  <div className="col-span-3 py-20 text-center text-gray-500">
                    No products found{activeCategory ? ` in "${activeCategory}"` : ""}.
                  </div>
                )}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-15">
                  <div className="bg-white shadow-1 rounded-md p-2">
                    <ul className="flex items-center gap-1">
                      <li>
                        <button
                          disabled={page === 1}
                          onClick={() => setPage((p) => Math.max(1, p - 1))}
                          className="flex items-center justify-center w-8 h-9 rounded-[3px] disabled:text-gray-4 hover:bg-[#7C3AED] hover:text-white"
                        >
                          ‹
                        </button>
                      </li>
                      {Array.from({ length: totalPages }).map((_, i) => (
                        <li key={i}>
                          <button
                            onClick={() => setPage(i + 1)}
                            className={`flex py-1.5 px-3.5 rounded-[3px] ${
                              page === i + 1
                                ? "bg-[#7C3AED] text-white"
                                : "hover:bg-[#7C3AED] hover:text-white"
                            }`}
                          >
                            {i + 1}
                          </button>
                        </li>
                      ))}
                      <li>
                        <button
                          disabled={page === totalPages}
                          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                          className="flex items-center justify-center w-8 h-9 rounded-[3px] disabled:text-gray-4 hover:bg-[#7C3AED] hover:text-white"
                        >
                          ›
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopWithSidebar;