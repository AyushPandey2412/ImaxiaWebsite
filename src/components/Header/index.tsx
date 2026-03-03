// "use client";
// import React, { useState, useEffect, useRef, useMemo } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useAppSelector } from "@/redux/store";
// import { useSelector } from "react-redux";
// import { selectTotalPrice } from "@/redux/features/cart-slice";
// import { useCartModalContext } from "@/app/context/CartSidebarModalContext";
// import Image from "next/image";
// import shopData from "../Shop/shopData";

// // ------------------------------------------------------------------
// // SearchDropdown sub-component
// // ------------------------------------------------------------------
// interface SearchDropdownProps {
//   query: string;
//   onClose: () => void;
//   onSelect: () => void;
// }

// const SearchDropdown: React.FC<SearchDropdownProps> = ({ query, onSelect }) => {
//   const router = useRouter();

//   const results = useMemo(() => {
//     if (!query.trim()) return [];
//     const q = query.toLowerCase();
//     return shopData
//       .filter(
//         (p) =>
//           p.title?.toLowerCase().includes(q) ||
//           p.category?.toLowerCase().includes(q)
//       )
//       .slice(0, 6);
//   }, [query]);

//   if (!query.trim()) return null;

//   const handleSelect = (id: number) => {
//     router.push(`/products/${id}`);
//     onSelect();
//   };

//   const handleViewAll = () => {
//     router.push(`/shop?search=${encodeURIComponent(query)}`);
//     onSelect();
//   };

//   return (
//     <div className="absolute top-full left-0 w-full mt-1.5 z-[99999] bg-white rounded-xl border border-gray-100 overflow-hidden"
//       style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.10)" }}
//     >
//       {/* No results */}
//       {results.length === 0 && (
//         <div className="px-4 py-6 flex flex-col items-center gap-1 text-center">
//           <p className="text-sm font-medium text-gray-500">No products found</p>
//           <p className="text-xs text-gray-400">Try a different keyword</p>
//         </div>
//       )}

//       {/* Results */}
//       {results.length > 0 && (
//         <ul className="max-h-[280px] overflow-y-auto divide-y divide-gray-50 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
//           {results.map((item) => {
//             const thumb =
//               item.imgs?.thumbnails?.[0] ??
//               item.imgs?.previews?.[0] ??
//               "/images/placeholder.png";
//             return (
//               <li key={item.id}>
//                 <button
//                   onClick={() => handleSelect(item.id)}
//                   className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#FAF7FF] transition-colors duration-150 text-left group"
//                 >
//                   {/* Thumbnail */}
//                   <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-[#F3EEFF] shrink-0">
//                     <Image
//                       src={thumb}
//                       alt={item.title}
//                       fill
//                       className="object-contain p-1"
//                       sizes="40px"
//                       onError={(e) => { (e.target as HTMLImageElement).src = "/images/placeholder.png"; }}
//                     />
//                   </div>

//                   {/* Info */}
//                   <div className="flex-1 min-w-0">
//                     <p className="text-sm font-medium text-gray-800 truncate group-hover:text-[#A855F7] transition-colors duration-150">
//                       {item.title}
//                     </p>
//                     {item.category && (
//                       <p className="text-xs text-gray-400 capitalize mt-0.5">{item.category}</p>
//                     )}
//                   </div>

//                   {/* Price */}
//                   <span className="text-sm font-semibold text-[#A855F7] shrink-0">
//                     ${Number(item.discountedPrice ?? item.price).toFixed(2)}
//                   </span>
//                 </button>
//               </li>
//             );
//           })}
//         </ul>
//       )}

//       {/* View all */}
//       {results.length > 0 && (
//         <button
//           onClick={handleViewAll}
//           className="w-full py-2.5 text-xs font-semibold text-[#A855F7] hover:bg-[#FAF7FF] border-t border-gray-100 transition-colors duration-150"
//         >
//           View all results for &ldquo;{query}&rdquo; →
//         </button>
//       )}
//     </div>
//   );
// };

// // ------------------------------------------------------------------
// // Search Icon
// // ------------------------------------------------------------------
// const SearchIcon = ({ size = 18 }: { size?: number }) => (
//   <svg
//     className="fill-current"
//     width={size}
//     height={size}
//     viewBox="0 0 18 18"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M17.2687 15.6656L12.6281 11.8969C14.5406 9.28123 14.3437 5.5406 11.9531 3.1781C10.6875 1.91248 8.99995 1.20935 7.19995 1.20935C5.39995 1.20935 3.71245 1.91248 2.44683 3.1781C-0.168799 5.79373 -0.168799 10.0687 2.44683 12.6844C3.71245 13.95 5.39995 14.6531 7.19995 14.6531C8.91558 14.6531 10.5187 14.0062 11.7843 12.8531L16.4812 16.65C16.5937 16.7344 16.7343 16.7906 16.875 16.7906C17.0718 16.7906 17.2406 16.7062 17.3531 16.5656C17.5781 16.2844 17.55 15.8906 17.2687 15.6656ZM7.19995 13.3875C5.73745 13.3875 4.38745 12.825 3.34683 11.7844C1.20933 9.64685 1.20933 6.18748 3.34683 4.0781C4.38745 3.03748 5.73745 2.47498 7.19995 2.47498C8.66245 2.47498 10.0125 3.03748 11.0531 4.0781C13.1906 6.2156 13.1906 9.67498 11.0531 11.7844C10.0406 12.825 8.66245 13.3875 7.19995 13.3875Z"
//       fill=""
//     />
//   </svg>
// );

// // ------------------------------------------------------------------
// // Main Header
// // ------------------------------------------------------------------
// const Header = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [stickyMenu, setStickyMenu] = useState(false);
//   const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
//   const { openCartModal } = useCartModalContext();
//   const router = useRouter();

//   const desktopSearchRef = useRef<HTMLDivElement>(null);
//   const mobileSearchRef = useRef<HTMLDivElement>(null);

//   const product = useAppSelector((state) => state.cartReducer.items);
//   const totalPrice = useSelector(selectTotalPrice);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (e: MouseEvent) => {
//       const target = e.target as Node;
//       const inDesktop =
//         desktopSearchRef.current?.contains(target) ?? false;
//       const inMobile =
//         mobileSearchRef.current?.contains(target) ?? false;
//       if (!inDesktop && !inMobile) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(e.target.value);
//     setDropdownOpen(e.target.value.trim().length > 0);
//   };

//   const handleSearchSubmit = () => {
//     if (!searchQuery.trim()) return;
//     router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
//     setDropdownOpen(false);
//   };

//   const closeDropdown = () => {
//     setDropdownOpen(false);
//     setSearchQuery("");
//   };

//   // Sticky menu
//   useEffect(() => {
//     const handleStickyMenu = () => setStickyMenu(window.scrollY >= 80);
//     window.addEventListener("scroll", handleStickyMenu);
//     return () => window.removeEventListener("scroll", handleStickyMenu);
//   }, []);

//   return (
//     <header className="fixed left-0 top-0 w-full z-9999 bg-white transition-all ease-in-out duration-300">
//       <div className="max-w-[1170px] mx-auto px-4 sm:px-7.5 xl:px-0">

//         {/* ── Header top ── */}
//         <div
//           className={`flex flex-row items-center justify-between ease-out duration-200 ${
//             stickyMenu ? "py-3" : "py-5"
//           }`}
//         >
//           {/* Logo */}
//           <Link href="/" className="flex items-center shrink-0">
//             <div className="relative w-[120px] sm:w-[160px] h-[40px] overflow-hidden">
//               <Image
//                 src="/images/logo/withoutrademark.png"
//                 alt="Logo"
//                 fill
//                 className="object-contain scale-110"
//                 priority
//               />
//             </div>
//           </Link>

//           {/* ── Desktop Search bar ── */}
//           <div
//             ref={desktopSearchRef}
//             className="hidden sm:flex flex-1 max-w-[600px] mx-4 xl:mx-6 relative"
//           >
//             <div className="relative w-full group">
//               {/* Subtle glow ring on focus */}
//               <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400/10 to-violet-400/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none -z-10 blur-sm" />

//               <input
//                 onChange={handleSearchChange}
//                 onFocus={() => searchQuery.trim() && setDropdownOpen(true)}
//                 onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit()}
//                 value={searchQuery}
//                 type="search"
//                 name="search"
//                 id="search"
//                 placeholder="I am shopping for..."
//                 autoComplete="off"
//                 className="custom-search w-full rounded-lg bg-gray-1 border border-[#E9D5FF] py-2.5 pl-4 pr-11 outline-none ease-in duration-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 text-sm text-gray-700 placeholder:text-gray-400"
//               />

//               {/* Divider + Search button */}
//               <div className="absolute right-0 top-0 h-full flex items-center">
//                 <span className="h-5 w-px bg-purple-100 mr-0.5" />
//                 <button
//                   onClick={handleSearchSubmit}
//                   aria-label="Search"
//                   className="flex items-center justify-center w-10 h-full rounded-r-lg text-purple-300 hover:text-purple-500 ease-in duration-200"
//                 >
//                   <SearchIcon size={16} />
//                 </button>
//               </div>
//             </div>

//             {/* Desktop Dropdown */}
//             {dropdownOpen && (
//               <SearchDropdown
//                 query={searchQuery}
//                 onClose={closeDropdown}
//                 onSelect={closeDropdown}
//               />
//             )}
//           </div>

//           {/* ── Header top right ── */}
//           <div className="flex items-center gap-4 sm:gap-5 xl:gap-7.5">
//             {/* Phone support — xl only */}
//             <div className="hidden xl:flex items-center gap-3.5">
//               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path fillRule="evenodd" clipRule="evenodd" d="M4.7177 3.09215C5.94388 1.80121 7.9721 2.04307 8.98569 3.47665L10.2467 5.26014C11.0574 6.4068 10.9889 8.00097 10.0214 9.01965L9.7765 9.27743C9.77582 9.27921 9.7751 9.28115 9.77436 9.28323C9.76142 9.31959 9.7287 9.43538 9.7609 9.65513C9.82765 10.1107 10.1793 11.0364 11.607 12.5394C13.0391 14.0472 13.9078 14.4025 14.3103 14.4679C14.484 14.4961 14.5748 14.4716 14.6038 14.4614L15.0124 14.0312C15.8862 13.1113 17.2485 12.9301 18.347 13.5623L20.2575 14.662C21.8904 15.6019 22.2705 17.9011 20.9655 19.275L19.545 20.7705C19.1016 21.2373 18.497 21.6358 17.75 21.7095C15.9261 21.8895 11.701 21.655 7.27161 16.9917C3.13844 12.6403 2.35326 8.85538 2.25401 7.00615L2.92011 6.9704L2.25401 7.00615C2.20497 6.09248 2.61224 5.30879 3.1481 4.74464L4.7177 3.09215ZM7.7609 4.34262C7.24855 3.61797 6.32812 3.57473 5.80528 4.12518L4.23568 5.77767C3.90429 6.12656 3.73042 6.52646 3.75185 6.92576C3.83289 8.43558 4.48307 11.8779 8.35919 15.9587C12.4234 20.2375 16.1676 20.3584 17.6026 20.2167C17.8864 20.1887 18.1783 20.0313 18.4574 19.7375L19.8779 18.2419C20.4907 17.5968 20.3301 16.4345 19.5092 15.962L17.5987 14.8624C17.086 14.5673 16.4854 14.6584 16.1 15.0642L15.6445 15.5437L15.1174 15.043C15.6445 15.5438 15.6438 15.5445 15.6432 15.5452L15.6417 15.5467L15.6388 15.5498L15.6324 15.5562L15.6181 15.5704C15.6078 15.5803 15.5959 15.5913 15.5825 15.6031C15.5556 15.6266 15.5223 15.6535 15.4824 15.6819C15.4022 15.7387 15.2955 15.8012 15.1606 15.8544C14.8846 15.9633 14.5201 16.0216 14.0699 15.9485C13.1923 15.806 12.0422 15.1757 10.5194 13.5724C8.99202 11.9644 8.40746 10.7647 8.27675 9.87259C8.21022 9.41852 8.26346 9.05492 8.36116 8.78035C8.40921 8.64533 8.46594 8.53766 8.51826 8.4559C8.54435 8.41514 8.56922 8.381 8.5912 8.35322C8.60219 8.33933 8.61246 8.32703 8.62182 8.31627L8.63514 8.30129L8.64125 8.29465L8.64415 8.29154L8.64556 8.29004C8.64625 8.28931 8.64694 8.28859 9.17861 8.79357L8.64695 8.28858L8.93376 7.98662C9.3793 7.51755 9.44403 6.72317 9.02189 6.1261L7.7609 4.34262Z" fill="#A855F7" />
//               </svg>
//               <div>
//                 <span className="block text-2xs text-dark-4 uppercase">24/7 SUPPORT</span>
//                 <p className="font-medium text-custom-sm text-dark">(+965) 7492-3477</p>
//               </div>
//             </div>

//             {/* Search icon — mobile only (toggles mobile bar) */}
//             <button
//               aria-label="Search"
//               onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
//               className={`sm:hidden flex items-center justify-center w-6 h-6 ease-in duration-200 ${
//                 mobileSearchOpen ? "text-purple-500" : "text-gray-600 hover:text-[#A855F7]"
//               }`}
//             >
//               {mobileSearchOpen ? (
//                 <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
//                 </svg>
//               ) : (
//                 <SearchIcon size={22} />
//               )}
//             </button>

//             {/* Cart button */}
//             <button
//               onClick={openCartModal}
//               className="flex items-center gap-2 text-gray-700 hover:text-[#A855F7] transition"
//             >
//               {/* Icon wrapper: fixed size so badge doesn't shift vertical alignment */}
//               <span className="relative flex items-center justify-center w-6 h-6">
//                 <svg className="fill-current w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M15.5433 9.5172C15.829 9.21725 15.8174 8.74252 15.5174 8.45686C15.2175 8.17119 14.7428 8.18277 14.4571 8.48272L12.1431 10.9125L11.5433 10.2827C11.2576 9.98277 10.7829 9.97119 10.483 10.2569C10.183 10.5425 10.1714 11.0173 10.4571 11.3172L11.6 12.5172C11.7415 12.6658 11.9378 12.75 12.1431 12.75C12.3483 12.75 12.5446 12.6658 12.6862 12.5172L15.5433 9.5172Z" fill="" />
//                   <path fillRule="evenodd" clipRule="evenodd" d="M1.29266 2.7512C1.43005 2.36044 1.8582 2.15503 2.24896 2.29242L2.55036 2.39838C3.16689 2.61511 3.69052 2.79919 4.10261 3.00139C4.54324 3.21759 4.92109 3.48393 5.20527 3.89979C5.48725 4.31243 5.60367 4.76515 5.6574 5.26153C5.66124 5.29706 5.6648 5.33321 5.66809 5.36996L17.1203 5.36996C17.9389 5.36995 18.7735 5.36993 19.4606 5.44674C19.8103 5.48584 20.1569 5.54814 20.4634 5.65583C20.7639 5.76141 21.0942 5.93432 21.3292 6.23974C21.711 6.73613 21.7777 7.31414 21.7416 7.90034C21.7071 8.45845 21.5686 9.15234 21.4039 9.97723L21.3935 10.0295L21.3925 10.0341L20.8836 12.5033C20.7339 13.2298 20.6079 13.841 20.4455 14.3231C20.2731 14.8346 20.0341 15.2842 19.6076 15.6318C19.1811 15.9793 18.6925 16.1226 18.1568 16.1882C17.6518 16.25 17.0278 16.25 16.2862 16.25L10.8804 16.25C9.53464 16.25 8.44479 16.25 7.58656 16.1283C6.69032 16.0012 5.93752 15.7285 5.34366 15.1022C4.79742 14.526 4.50529 13.9144 4.35897 13.0601C4.22191 12.2598 4.20828 11.2125 4.20828 9.75996V7.03832C4.20828 6.29837 4.20726 5.80316 4.16611 5.42295C4.12678 5.0596 4.05708 4.87818 3.96682 4.74609C3.87876 4.61723 3.74509 4.4968 3.44186 4.34802C3.11902 4.18961 2.68026 4.03406 2.01266 3.79934L1.75145 3.7075C1.36068 3.57012 1.15527 3.14197 1.29266 2.7512ZM5.70828 6.86996L5.70828 9.75996C5.70828 11.249 5.72628 12.1578 5.83744 12.8068C5.93933 13.4018 6.11202 13.7324 6.43219 14.0701C6.70473 14.3576 7.08235 14.5418 7.79716 14.6432C8.53783 14.7482 9.5209 14.75 10.9377 14.75H16.2406C17.0399 14.75 17.5714 14.7487 17.9746 14.6993C18.3573 14.6525 18.5348 14.571 18.66 14.469C18.7853 14.3669 18.9009 14.2095 19.024 13.8441C19.1537 13.4592 19.2623 12.9389 19.4237 12.156L19.9225 9.73591L19.9229 9.73369C20.1005 8.84376 20.217 8.2515 20.2444 7.80793C20.2704 7.38648 20.2043 7.23927 20.1429 7.15786C20.1367 7.15259 20.0931 7.11565 19.9661 7.07101C19.8107 6.93745 19.5895 6.97049 19.2939 6.93745C18.6991 6.87096 17.9454 6.86996 17.089 6.86996H5.70828Z" fill="" />
//                 </svg>
//                 {/* Badge — uses translate instead of negative top so it doesn't affect flow */}
//                 <span className="flex items-center justify-center font-medium text-2xs absolute -top-2 -right-2 bg-[#A855F7] w-[18px] h-[18px] rounded-full text-white leading-none">
//                   {product.length}
//                 </span>
//               </span>
//               <div className="hidden sm:block">
//                 <span className="block text-2xs uppercase opacity-70">cart</span>
//                 <p className="font-medium text-custom-sm">${totalPrice}</p>
//               </div>
//             </button>
//           </div>
//         </div>

//         {/* ── Mobile Search Bar ──
//             Key fix: overflow-visible so the dropdown isn't clipped.
//             Height is controlled by max-h + opacity. ── */}
//         <div
//           ref={mobileSearchRef}
//           className={`sm:hidden transition-all ease-in-out duration-300 relative ${
//             mobileSearchOpen
//               ? "max-h-16 opacity-100 pb-3 overflow-visible"
//               : "max-h-0 opacity-0 overflow-hidden pointer-events-none"
//           }`}
//         >
//           <div className="flex items-center border border-[#E9D5FF] rounded-lg bg-gray-1 overflow-visible focus-within:border-purple-400 focus-within:ring-2 focus-within:ring-purple-100 transition-all duration-200">
//             <input
//               onChange={handleSearchChange}
//               onFocus={() => searchQuery.trim() && setDropdownOpen(true)}
//               onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit()}
//               value={searchQuery}
//               type="search"
//               name="search-mobile"
//               id="search-mobile"
//               placeholder="I am shopping for..."
//               autoComplete="off"
//               className="custom-search w-full bg-transparent py-2.5 pl-4 pr-3 outline-none text-sm border-none"
//             />
//             {/* Divider + button */}
//             <span className="h-5 w-px bg-purple-100 shrink-0" />
//             <button
//               onClick={handleSearchSubmit}
//               aria-label="Search"
//               className="flex items-center justify-center w-10 h-10 text-purple-300 hover:text-purple-500 ease-in duration-200 shrink-0"
//             >
//               <SearchIcon size={16} />
//             </button>
//           </div>

//           {/* Mobile Dropdown — rendered outside clipping container via absolute */}
//           {dropdownOpen && mobileSearchOpen && (
//             <SearchDropdown
//               query={searchQuery}
//               onClose={closeDropdown}
//               onSelect={() => {
//                 closeDropdown();
//                 setMobileSearchOpen(false);
//               }}
//             />
//           )}
//         </div>

//       </div>
//     </header>
//   );
// };

// export default Header;















"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/store";
import { useSelector } from "react-redux";
import { selectTotalPrice } from "@/redux/features/cart-slice";
import { useCartModalContext } from "@/app/context/CartSidebarModalContext";
import Image from "next/image";
import shopData from "../Shop/shopData";

interface SearchDropdownProps {
  query: string;
  onClose: () => void;
  onSelect: () => void;
}

const SearchDropdown: React.FC<SearchDropdownProps> = ({ query, onSelect }) => {
  const router = useRouter();

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return shopData
      .filter(
        (p) =>
          p.title?.toLowerCase().includes(q) ||
          p.category?.toLowerCase().includes(q)
      )
      .slice(0, 6);
  }, [query]);

  if (!query.trim()) return null;

  const handleSelect = (id: number) => {
    router.push(`/products/${id}`);
    onSelect();
  };

  const handleViewAll = () => {
    router.push(`/shop?search=${encodeURIComponent(query)}`);
    onSelect();
  };

  return (
    <div
      className="absolute top-full left-0 w-full mt-1.5 z-[99999] bg-white rounded-xl border border-gray-100 overflow-hidden"
      style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.10)" }}
    >
      {results.length === 0 && (
        <div className="px-4 py-6 flex flex-col items-center gap-1 text-center">
          <p className="text-sm font-medium text-gray-500">No products found</p>
          <p className="text-xs text-gray-400">Try a different keyword</p>
        </div>
      )}

      {results.length > 0 && (
        <ul className="max-h-[280px] overflow-y-auto divide-y divide-gray-50 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {results.map((item) => {
            const thumb =
              item.imgs?.thumbnails?.[0] ??
              item.imgs?.previews?.[0] ??
              "/images/placeholder.png";
            return (
              <li key={item.id}>
                <button
                  onClick={() => handleSelect(item.id)}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#FAF7FF] transition-colors duration-150 text-left group"
                >
                  <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-[#F3EEFF] shrink-0">
                    <Image
                      src={thumb}
                      alt={item.title}
                      fill
                      className="object-contain p-1"
                      sizes="40px"
                      onError={(e) => { (e.target as HTMLImageElement).src = "/images/placeholder.png"; }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 truncate group-hover:text-[#A855F7] transition-colors duration-150">
                      {item.title}
                    </p>
                    {item.category && (
                      <p className="text-xs text-gray-400 capitalize mt-0.5">{item.category}</p>
                    )}
                  </div>
                  <span className="text-sm font-semibold text-[#A855F7] shrink-0">
                    ${Number(item.discountedPrice ?? item.price).toFixed(2)}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}

      {results.length > 0 && (
        <button
          onClick={handleViewAll}
          className="w-full py-2.5 text-xs font-semibold text-[#A855F7] hover:bg-[#FAF7FF] border-t border-gray-100 transition-colors duration-150"
        >
          View all results for &ldquo;{query}&rdquo; →
        </button>
      )}
    </div>
  );
};

const SearchIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    className="fill-current"
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.2687 15.6656L12.6281 11.8969C14.5406 9.28123 14.3437 5.5406 11.9531 3.1781C10.6875 1.91248 8.99995 1.20935 7.19995 1.20935C5.39995 1.20935 3.71245 1.91248 2.44683 3.1781C-0.168799 5.79373 -0.168799 10.0687 2.44683 12.6844C3.71245 13.95 5.39995 14.6531 7.19995 14.6531C8.91558 14.6531 10.5187 14.0062 11.7843 12.8531L16.4812 16.65C16.5937 16.7344 16.7343 16.7906 16.875 16.7906C17.0718 16.7906 17.2406 16.7062 17.3531 16.5656C17.5781 16.2844 17.55 15.8906 17.2687 15.6656ZM7.19995 13.3875C5.73745 13.3875 4.38745 12.825 3.34683 11.7844C1.20933 9.64685 1.20933 6.18748 3.34683 4.0781C4.38745 3.03748 5.73745 2.47498 7.19995 2.47498C8.66245 2.47498 10.0125 3.03748 11.0531 4.0781C13.1906 6.2156 13.1906 9.67498 11.0531 11.7844C10.0406 12.825 8.66245 13.3875 7.19995 13.3875Z"
      fill=""
    />
  </svg>
);

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const { openCartModal } = useCartModalContext();
  const router = useRouter();

  const desktopSearchRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);

  const product = useAppSelector((state) => state.cartReducer.items);
  const totalPrice = useSelector(selectTotalPrice);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      const inDesktop = desktopSearchRef.current?.contains(target) ?? false;
      const inMobile = mobileSearchRef.current?.contains(target) ?? false;
      if (!inDesktop && !inMobile) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setDropdownOpen(e.target.value.trim().length > 0);
  };

  const handleSearchSubmit = () => {
    if (!searchQuery.trim()) return;
    router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
    setDropdownOpen(false);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
    setSearchQuery("");
  };

  useEffect(() => {
    const handleStickyMenu = () => setStickyMenu(window.scrollY >= 80);
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 w-full z-9999 transition-all ease-in-out duration-300 ${
        stickyMenu
          ? "bg-white shadow-[0_2px_20px_rgba(168,85,247,0.08)] border-b border-purple-50"
          : "bg-white"
      }`}
    >
      <div className="max-w-[1170px] mx-auto px-4 sm:px-7.5 xl:px-0">

        {/* Header top */}
        <div
          className={`flex flex-row items-center justify-between ease-out duration-200 ${
            stickyMenu ? "py-3" : "py-5"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <div className="relative w-[160px] sm:w-[210px] h-[40px]">
              <Image
                src="/images/logo/withoutrademark.png"
                alt="Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Search bar */}
          <div
            ref={desktopSearchRef}
            className="hidden sm:flex flex-1 max-w-[600px] mx-4 xl:mx-6 relative"
          >
            <div className="relative w-full group">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400/10 to-violet-400/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none -z-10 blur-sm" />
              <input
                onChange={handleSearchChange}
                onFocus={() => searchQuery.trim() && setDropdownOpen(true)}
                onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit()}
                value={searchQuery}
                type="search"
                name="search"
                id="search"
                placeholder="I am shopping for..."
                autoComplete="off"
                className="custom-search w-full rounded-lg bg-gray-1 border border-[#E9D5FF] py-2.5 pl-4 pr-11 outline-none ease-in duration-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 text-sm text-gray-700 placeholder:text-gray-400"
              />
              <div className="absolute right-0 top-0 h-full flex items-center">
                <span className="h-5 w-px bg-purple-100 mr-0.5" />
                <button
                  onClick={handleSearchSubmit}
                  aria-label="Search"
                  className="flex items-center justify-center w-10 h-full rounded-r-lg text-purple-300 hover:text-purple-500 ease-in duration-200"
                >
                  <SearchIcon size={16} />
                </button>
              </div>
            </div>

            {dropdownOpen && (
              <SearchDropdown
                query={searchQuery}
                onClose={closeDropdown}
                onSelect={closeDropdown}
              />
            )}
          </div>

          {/* Header top right */}
          <div className="flex items-center gap-4 sm:gap-5 xl:gap-7.5">
            {/* Phone support xl only */}
            <div className="hidden xl:flex items-center gap-3.5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M4.7177 3.09215C5.94388 1.80121 7.9721 2.04307 8.98569 3.47665L10.2467 5.26014C11.0574 6.4068 10.9889 8.00097 10.0214 9.01965L9.7765 9.27743C9.77582 9.27921 9.7751 9.28115 9.77436 9.28323C9.76142 9.31959 9.7287 9.43538 9.7609 9.65513C9.82765 10.1107 10.1793 11.0364 11.607 12.5394C13.0391 14.0472 13.9078 14.4025 14.3103 14.4679C14.484 14.4961 14.5748 14.4716 14.6038 14.4614L15.0124 14.0312C15.8862 13.1113 17.2485 12.9301 18.347 13.5623L20.2575 14.662C21.8904 15.6019 22.2705 17.9011 20.9655 19.275L19.545 20.7705C19.1016 21.2373 18.497 21.6358 17.75 21.7095C15.9261 21.8895 11.701 21.655 7.27161 16.9917C3.13844 12.6403 2.35326 8.85538 2.25401 7.00615L2.92011 6.9704L2.25401 7.00615C2.20497 6.09248 2.61224 5.30879 3.1481 4.74464L4.7177 3.09215ZM7.7609 4.34262C7.24855 3.61797 6.32812 3.57473 5.80528 4.12518L4.23568 5.77767C3.90429 6.12656 3.73042 6.52646 3.75185 6.92576C3.83289 8.43558 4.48307 11.8779 8.35919 15.9587C12.4234 20.2375 16.1676 20.3584 17.6026 20.2167C17.8864 20.1887 18.1783 20.0313 18.4574 19.7375L19.8779 18.2419C20.4907 17.5968 20.3301 16.4345 19.5092 15.962L17.5987 14.8624C17.086 14.5673 16.4854 14.6584 16.1 15.0642L15.6445 15.5437L15.1174 15.043C15.6445 15.5438 15.6438 15.5445 15.6432 15.5452L15.6417 15.5467L15.6388 15.5498L15.6324 15.5562L15.6181 15.5704C15.6078 15.5803 15.5959 15.5913 15.5825 15.6031C15.5556 15.6266 15.5223 15.6535 15.4824 15.6819C15.4022 15.7387 15.2955 15.8012 15.1606 15.8544C14.8846 15.9633 14.5201 16.0216 14.0699 15.9485C13.1923 15.806 12.0422 15.1757 10.5194 13.5724C8.99202 11.9644 8.40746 10.7647 8.27675 9.87259C8.21022 9.41852 8.26346 9.05492 8.36116 8.78035C8.40921 8.64533 8.46594 8.53766 8.51826 8.4559C8.54435 8.41514 8.56922 8.381 8.5912 8.35322C8.60219 8.33933 8.61246 8.32703 8.62182 8.31627L8.63514 8.30129L8.64125 8.29465L8.64415 8.29154L8.64556 8.29004C8.64625 8.28931 8.64694 8.28859 9.17861 8.79357L8.64695 8.28858L8.93376 7.98662C9.3793 7.51755 9.44403 6.72317 9.02189 6.1261L7.7609 4.34262Z" fill="#A855F7" />
              </svg>
              <div>
                <span className="block text-2xs text-dark-4 uppercase">24/7 SUPPORT</span>
                <p className="font-medium text-custom-sm text-dark">(+91) 8591593779</p>
              </div>
            </div>

            {/* Search icon mobile only */}
            <button
              aria-label="Search"
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              className={`sm:hidden flex items-center justify-center w-6 h-6 ease-in duration-200 ${
                mobileSearchOpen ? "text-purple-500" : "text-gray-600 hover:text-[#A855F7]"
              }`}
            >
              {mobileSearchOpen ? (
                <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              ) : (
                <SearchIcon size={22} />
              )}
            </button>

            {/* Cart button */}
            <button
              onClick={openCartModal}
              className="flex items-center gap-2 text-gray-700 hover:text-[#A855F7] transition"
            >
              <span className="relative flex items-center justify-center w-6 h-6">
                <svg className="fill-current w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5433 9.5172C15.829 9.21725 15.8174 8.74252 15.5174 8.45686C15.2175 8.17119 14.7428 8.18277 14.4571 8.48272L12.1431 10.9125L11.5433 10.2827C11.2576 9.98277 10.7829 9.97119 10.483 10.2569C10.183 10.5425 10.1714 11.0173 10.4571 11.3172L11.6 12.5172C11.7415 12.6658 11.9378 12.75 12.1431 12.75C12.3483 12.75 12.5446 12.6658 12.6862 12.5172L15.5433 9.5172Z" fill="" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.29266 2.7512C1.43005 2.36044 1.8582 2.15503 2.24896 2.29242L2.55036 2.39838C3.16689 2.61511 3.69052 2.79919 4.10261 3.00139C4.54324 3.21759 4.92109 3.48393 5.20527 3.89979C5.48725 4.31243 5.60367 4.76515 5.6574 5.26153C5.66124 5.29706 5.6648 5.33321 5.66809 5.36996L17.1203 5.36996C17.9389 5.36995 18.7735 5.36993 19.4606 5.44674C19.8103 5.48584 20.1569 5.54814 20.4634 5.65583C20.7639 5.76141 21.0942 5.93432 21.3292 6.23974C21.711 6.73613 21.7777 7.31414 21.7416 7.90034C21.7071 8.45845 21.5686 9.15234 21.4039 9.97723L21.3935 10.0295L21.3925 10.0341L20.8836 12.5033C20.7339 13.2298 20.6079 13.841 20.4455 14.3231C20.2731 14.8346 20.0341 15.2842 19.6076 15.6318C19.1811 15.9793 18.6925 16.1226 18.1568 16.1882C17.6518 16.25 17.0278 16.25 16.2862 16.25L10.8804 16.25C9.53464 16.25 8.44479 16.25 7.58656 16.1283C6.69032 16.0012 5.93752 15.7285 5.34366 15.1022C4.79742 14.526 4.50529 13.9144 4.35897 13.0601C4.22191 12.2598 4.20828 11.2125 4.20828 9.75996V7.03832C4.20828 6.29837 4.20726 5.80316 4.16611 5.42295C4.12678 5.0596 4.05708 4.87818 3.96682 4.74609C3.87876 4.61723 3.74509 4.4968 3.44186 4.34802C3.11902 4.18961 2.68026 4.03406 2.01266 3.79934L1.75145 3.7075C1.36068 3.57012 1.15527 3.14197 1.29266 2.7512ZM5.70828 6.86996L5.70828 9.75996C5.70828 11.249 5.72628 12.1578 5.83744 12.8068C5.93933 13.4018 6.11202 13.7324 6.43219 14.0701C6.70473 14.3576 7.08235 14.5418 7.79716 14.6432C8.53783 14.7482 9.5209 14.75 10.9377 14.75H16.2406C17.0399 14.75 17.5714 14.7487 17.9746 14.6993C18.3573 14.6525 18.5348 14.571 18.66 14.469C18.7853 14.3669 18.9009 14.2095 19.024 13.8441C19.1537 13.4592 19.2623 12.9389 19.4237 12.156L19.9225 9.73591L19.9229 9.73369C20.1005 8.84376 20.217 8.2515 20.2444 7.80793C20.2704 7.38648 20.2043 7.23927 20.1429 7.15786C20.1367 7.15259 20.0931 7.11565 19.9661 7.07101C19.8107 6.93745 19.5895 6.97049 19.2939 6.93745C18.6991 6.87096 17.9454 6.86996 17.089 6.86996H5.70828Z" fill="" />
                </svg>
                <span className="flex items-center justify-center font-medium text-2xs absolute -top-2 -right-2 bg-[#A855F7] w-[18px] h-[18px] rounded-full text-white leading-none">
                  {product.length}
                </span>
              </span>
              <div className="hidden sm:block">
                <span className="block text-2xs uppercase opacity-70">cart</span>
                <p className="font-medium text-custom-sm">${totalPrice}</p>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div
          ref={mobileSearchRef}
          className={`sm:hidden transition-all ease-in-out duration-300 relative ${
            mobileSearchOpen
              ? "max-h-16 opacity-100 pb-3 overflow-visible"
              : "max-h-0 opacity-0 overflow-hidden pointer-events-none"
          }`}
        >
          <div className="flex items-center border border-[#E9D5FF] rounded-lg bg-gray-1 overflow-visible focus-within:border-purple-400 focus-within:ring-2 focus-within:ring-purple-100 transition-all duration-200">
            <input
              onChange={handleSearchChange}
              onFocus={() => searchQuery.trim() && setDropdownOpen(true)}
              onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit()}
              value={searchQuery}
              type="search"
              name="search-mobile"
              id="search-mobile"
              placeholder="I am shopping for..."
              autoComplete="off"
              className="custom-search w-full bg-transparent py-2.5 pl-4 pr-3 outline-none text-sm border-none"
            />
            <span className="h-5 w-px bg-purple-100 shrink-0" />
            <button
              onClick={handleSearchSubmit}
              aria-label="Search"
              className="flex items-center justify-center w-10 h-10 text-purple-300 hover:text-purple-500 ease-in duration-200 shrink-0"
            >
              <SearchIcon size={16} />
            </button>
          </div>

          {dropdownOpen && mobileSearchOpen && (
            <SearchDropdown
              query={searchQuery}
              onClose={closeDropdown}
              onSelect={() => {
                closeDropdown();
                setMobileSearchOpen(false);
              }}
            />
          )}
        </div>

      </div>
    </header>
  );
};

export default Header;