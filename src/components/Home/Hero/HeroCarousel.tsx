// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// // Import Swiper styles
// import "swiper/css/pagination";
// import "swiper/css";

// import Image from "next/image";

// const HeroCarousal = () => {
//   return (
//     <Swiper
//       spaceBetween={30}
//       centeredSlides={true}
//       autoplay={{
//         delay: 2500,
//         disableOnInteraction: false,
//       }}
//       pagination={{
//         clickable: true,
//       }}
//       modules={[Autoplay, Pagination]}
//       className="hero-carousel"
//     >
//       <SwiperSlide>
//         <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
//           <div className="max-w-[394px] py-10 sm:py-15 lg:py-24.5 pl-4 sm:pl-7.5 lg:pl-12.5">
//             <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
//               <span className="block font-semibold text-heading-3 sm:text-heading-1 text-blue">
//                 30%
//               </span>
//               <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
//                 Sale
//                 <br />
//                 Off
//               </span>
//             </div>

//             <h1 className="font-semibold text-dark text-xl sm:text-3xl mb-3">
//               <a href="#">True Wireless Noise Cancelling Headphone</a>
//             </h1>

//             <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at ipsum at risus euismod lobortis in
//             </p>

//             <a
//               href="#"
//               className="inline-flex font-medium text-white text-custom-sm rounded-md bg-dark py-3 px-9 ease-out duration-200 hover:bg-blue mt-10"
//             >
//               Shop Now
//             </a>
//           </div>

//           <div>
//             <Image
//               src="/images/hero/hero-01.png"
//               alt="headphone"
//               width={351}
//               height={358}
//             />
//           </div>
//         </div>
//       </SwiperSlide>
//       <SwiperSlide>
//         {" "}
//         <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
//           <div className="max-w-[394px] py-10 sm:py-15 lg:py-26 pl-4 sm:pl-7.5 lg:pl-12.5">
//             <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
//               <span className="block font-semibold text-heading-3 sm:text-heading-1 text-blue">
//                 30%
//               </span>
//               <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
//                 Sale
//                 <br />
//                 Off
//               </span>
//             </div>

//             <h1 className="font-semibold text-dark text-xl sm:text-3xl mb-3">
//               <a href="#">True Wireless Noise Cancelling Headphone</a>
//             </h1>

//             <p>
//               Lorem ipsum dolor sit, consectetur elit nunc suscipit non ipsum
//               nec suscipit.
//             </p>

//             <a
//               href="#"
//               className="inline-flex font-medium text-white text-custom-sm rounded-md bg-dark py-3 px-9 ease-out duration-200 hover:bg-blue mt-10"
//             >
//               Shop Now
//             </a>
//           </div>

//           <div>
//             <Image
//               // src="/images/hero/hero-01.png"
//               src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=900&auto=format&fit=crop"
//               alt="headphone"
//               width={351}
//               height={358}
//             />
//           </div>
//         </div>
//       </SwiperSlide>
//     </Swiper>
//   );
// };

// export default HeroCarousal;


// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// import "swiper/css/pagination";
// import "swiper/css";

// import Image from "next/image";

// const slides = [
//   {
//     discount: "30%",
//     title: "True Wireless Noise Cancelling Headphone",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at ipsum at risus euismod lobortis.",
//     img: "/images/hero/hero-01.png",
//     imgAlt: "headphone",
//   },
//   {
//     discount: "30%",
//     title: "True Wireless Noise Cancelling Headphone",
//     desc: "Lorem ipsum dolor sit, consectetur elit nunc suscipit non ipsum nec suscipit.",
//     img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=900&auto=format&fit=crop",
//     imgAlt: "makeup",
//   },
// ];

// const HeroCarousal = () => {
//   return (
//     <Swiper
//       spaceBetween={30}
//       centeredSlides={true}
//       autoplay={{
//         delay: 2500,
//         disableOnInteraction: false,
//       }}
//       pagination={{ clickable: true }}
//       modules={[Autoplay, Pagination]}
//       className="hero-carousel"
//     >
//       {slides.map((slide, i) => (
//         <SwiperSlide key={i}>
//           {/* Mobile: image on top, text below | Desktop: side by side */}
//           <div className="flex flex-col sm:flex-row sm:items-center">

//             {/* Image — top on mobile, right on desktop */}
//             <div className="w-full sm:hidden relative h-[220px] overflow-hidden rounded-t-xl">
//               <Image
//                 src={slide.img}
//                 alt={slide.imgAlt}
//                 fill
//                 className="object-cover object-top"
//               />
//             </div>

//             {/* Text content */}
//             <div className="w-full sm:max-w-[394px] px-4 py-5 sm:py-15 lg:py-24.5 sm:pl-7.5 lg:pl-12.5">
//               <div className="flex items-center gap-3 mb-4 sm:mb-7.5 sm:mb-10">
//                 <span className="font-semibold text-3xl sm:text-heading-1 text-blue">
//                   {slide.discount}
//                 </span>
//                 <span className="text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
//                   Sale
//                   <br />
//                   Off
//                 </span>
//               </div>

//               <h1 className="font-semibold text-dark text-lg sm:text-3xl mb-2 sm:mb-3">
//                 <a href="#">{slide.title}</a>
//               </h1>

//               <p className="text-sm text-gray-500 line-clamp-2 sm:line-clamp-none">
//                 {slide.desc}
//               </p>

//               <a
//                 href="#"
//                 className="inline-flex font-medium text-white text-custom-sm rounded-md bg-dark py-2.5 px-7 sm:py-3 sm:px-9 ease-out duration-200 hover:bg-blue mt-5 sm:mt-10"
//               >
//                 Shop Now
//               </a>
//             </div>

//             {/* Image — hidden on mobile, visible on sm+ (right side) */}
//             <div className="hidden sm:block shrink-0">
//               <Image
//                 src={slide.img}
//                 alt={slide.imgAlt}
//                 width={351}
//                 height={358}
//               />
//             </div>

//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default HeroCarousal;
















// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// import "swiper/css/pagination";
// import "swiper/css";

// import Image from "next/image";

// const slides = [
//   {
//     discount: "30%",
//     label: "Sale Off",
//     title: "Blue Butos Shampoo & Mask Combo",
//     desc: "Sulphate free formula. Makes your hair silky, shiny & smooth. For all hair types.",
//     img: "/images/hero/InShot_20260222_125936302.jpg.jpeg", // ← put your image here
//     imgAlt: "Imaxia Blue Butos Shampoo and Mask",
//     accentColor: "text-[#7C3AED]",
//     bg: "bg-[#F3EEFF]",
//   },
//   {
//     discount: "30%",
//     label: "Sale Off",
//     title: "True Wireless Noise Cancelling Headphone",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     img: "/images/hero/hero-01.png",
//     imgAlt: "Headphone",
//     accentColor: "text-blue",
//     bg: "bg-white",
//   },
// ];

// const HeroCarousal = () => {
//   return (
//     <Swiper
//       spaceBetween={0}
//       centeredSlides={true}
//       autoplay={{
//         delay: 3000,
//         disableOnInteraction: false,
//       }}
//       pagination={{ clickable: true }}
//       modules={[Autoplay, Pagination]}
//       className="hero-carousel"
//     >
//       {slides.map((slide, i) => (
//         <SwiperSlide key={i}>
//           <div className={`flex flex-col sm:flex-row sm:items-stretch ${slide.bg}`}>

//             {/* Mobile: image on top, 3:2 ratio — no crop distortion */}
//             <div className="sm:hidden w-full relative" style={{ aspectRatio: "3/2" }}>
//               <Image
//                 src={slide.img}
//                 alt={slide.imgAlt}
//                 fill
//                 className="object-contain object-center"
//                 sizes="100vw"
//                 priority={i === 0}
//               />
//             </div>

//             {/* Text content */}
//             <div className="flex flex-col justify-center px-5 py-6 sm:py-12 sm:pl-10 sm:pr-4 sm:w-[55%]">
//               <div className="flex items-center gap-3 mb-4">
//                 <span className={`font-bold text-4xl sm:text-5xl ${slide.accentColor}`}>
//                   {slide.discount}
//                 </span>
//                 <span className="text-dark text-sm leading-5">
//                   Sale
//                   <br />
//                   Off
//                 </span>
//               </div>

//               <h2 className="font-semibold text-dark text-lg sm:text-2xl mb-2 leading-snug">
//                 <a href="#">{slide.title}</a>
//               </h2>

//               <p className="text-sm text-gray-500 mb-5 line-clamp-2 sm:line-clamp-3">
//                 {slide.desc}
//               </p>

//               <a
//                 href="#"
//                 className="self-start inline-flex font-medium text-white text-sm rounded-md bg-dark py-2.5 px-7 ease-out duration-200 hover:bg-blue"
//               >
//                 Shop Now
//               </a>
//             </div>

//             {/* Desktop: image on right — object-contain so portrait images are never cropped */}
//             <div className="hidden sm:flex items-center justify-center sm:w-[45%] relative min-h-[320px] p-6">
//               <Image
//                 src={slide.img}
//                 alt={slide.imgAlt}
//                 fill
//                 className="object-contain object-center"
//                 sizes="45vw"
//                 priority={i === 0}
//               />
//             </div>

//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default HeroCarousal;

















// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// import "swiper/css/pagination";
// import "swiper/css";

// import Image from "next/image";

// const slides = [
//   {
//     discount: "30%",
//     title: "Blue Butos Shampoo & Mask Combo",
//     desc: "Sulphate free formula. Makes your hair silky, shiny & smooth. For all hair types.",
//     // img: "/images/hero/InShot_20260222_125936302.jpg.jpeg",
//     img: "/images/hero/image.png",
//     imgAlt: "Imaxia Blue Butos Shampoo and Mask",
//     accentColor: "text-[#7C3AED]",
//     bg: "bg-[#F3EEFF]",
//     // portrait image — use object-cover + focus top
//     imgStyle: "object-cover object-top",
//   },
//   {
//     discount: "30%",
//     title: "True Wireless Noise Cancelling Headphone",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     img: "/images/hero/hero-01.png",
//     imgAlt: "Headphone",
//     accentColor: "text-blue",
//     bg: "bg-white",
//     // product cutout — use object-contain
//     imgStyle: "object-contain object-center",
//   },
// ];

// const HeroCarousal = () => {
//   return (
//     <Swiper
//       spaceBetween={0}
//       centeredSlides={true}
//       autoplay={{ delay: 3000, disableOnInteraction: false }}
//       pagination={{ clickable: true }}
//       modules={[Autoplay, Pagination]}
//       className="hero-carousel"
//     >
//       {slides.map((slide, i) => (
//         <SwiperSlide key={i}>

//           {/* ── MOBILE layout: stacked, image fills top ── */}
//           <div className={`sm:hidden flex flex-col ${slide.bg}`}>
//             {/* Full-width image, tall enough to show portrait photo properly */}
//             <div className="relative w-full h-[260px]">
//               <Image
//                 src={slide.img}
//                 alt={slide.imgAlt}
//                 fill
//                 className={slide.imgStyle}
//                 sizes="100vw"
//                 priority={i === 0}
//               />
//             </div>

//             {/* Text below image */}
//             <div className="px-5 pt-5 pb-8">
//               <div className="flex items-center gap-3 mb-3">
//                 <span className={`font-bold text-4xl ${slide.accentColor}`}>
//                   {slide.discount}
//                 </span>
//                 <span className="text-dark text-sm leading-5">
//                   Sale<br />Off
//                 </span>
//               </div>
//               <h2 className="font-semibold text-dark text-lg mb-2 leading-snug">
//                 <a href="#">{slide.title}</a>
//               </h2>
//               <p className="text-sm text-gray-500 mb-5 line-clamp-2">
//                 {slide.desc}
//               </p>
//               <a
//                 href="#"
//                 className="inline-flex font-medium text-white text-sm rounded-md bg-dark py-2.5 px-7 ease-out duration-200 hover:bg-blue"
//               >
//                 Shop Now
//               </a>
//             </div>
//           </div>

//           {/* ── DESKTOP layout: side by side ── */}
//           <div className={`hidden sm:flex flex-row items-stretch min-h-[340px] ${slide.bg}`}>
//             {/* Text left */}
//             <div className="flex flex-col justify-center pl-10 pr-4 py-12 w-[55%]">
//               <div className="flex items-center gap-3 mb-5">
//                 <span className={`font-bold text-5xl ${slide.accentColor}`}>
//                   {slide.discount}
//                 </span>
//                 <span className="text-dark text-sm leading-5">
//                   Sale<br />Off
//                 </span>
//               </div>
//               <h2 className="font-semibold text-dark text-2xl mb-3 leading-snug">
//                 <a href="#">{slide.title}</a>
//               </h2>
//               <p className="text-sm text-gray-500 mb-8 line-clamp-3">
//                 {slide.desc}
//               </p>
//               <a
//                 href="#"
//                 className="self-start inline-flex font-medium text-white text-sm rounded-md bg-dark py-3 px-9 ease-out duration-200 hover:bg-blue"
//               >
//                 Shop Now
//               </a>
//             </div>

//             {/* Image right — no padding so portrait fills edge to edge */}
//             <div className="relative w-[45%]">
//               <Image
//                 src={slide.img}
//                 alt={slide.imgAlt}
//                 fill
//                 className={slide.imgStyle}
//                 sizes="45vw"
//                 priority={i === 0}
//               />
//             </div>
//           </div>

//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default HeroCarousal;











// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// import "swiper/css/pagination";
// import "swiper/css";

// import Image from "next/image";

// const slides = [
//   {
//     discount: "30%",
//     title: "Blue Butos Shampoo & Mask Combo",
//     desc: "Sulphate free formula. Makes your hair silky, shiny & smooth. For all hair types.",
//     img: "/images/hero/image.png",
//     imgAlt: "Imaxia Blue Butos Shampoo and Mask",
//     accentColor: "text-[#7C3AED]",
//     bg: "bg-[#F3EEFF]",
//     btnBg: "bg-[#7C3AED] hover:bg-[#6D28D9]",
//     imgStyle: "object-contain object-center",
//   },
//   {
//     discount: "30%",
//     title: "True Wireless Noise Cancelling Headphone",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     img: "/images/hero/IMG_20260222_101437.jpg.jpeg",
//     imgAlt: "Headphone",
//     accentColor: "text-[#7C3AED]",       // ← matched to slide 1
//     bg: "bg-[#F3EEFF]",                   // ← matched to slide 1
//     btnBg: "bg-[#7C3AED] hover:bg-[#6D28D9]",
//     imgStyle: "object-contain object-center",
//   },
// ];

// const HeroCarousal = () => {
//   return (
//     <Swiper
//       spaceBetween={0}
//       centeredSlides={true}
//       autoplay={{ delay: 3000, disableOnInteraction: false }}
//       pagination={{ clickable: true }}
//       modules={[Autoplay, Pagination]}
//       className="hero-carousel !overflow-hidden"
//     >
//       {slides.map((slide, i) => (
//         <SwiperSlide key={i}>

//           {/* ── MOBILE layout ── */}
//           <div className={`sm:hidden flex flex-col ${slide.bg}`}>
//             <div className="relative w-full h-[320px]">
//               <Image
//                 src={slide.img}
//                 alt={slide.imgAlt}
//                 fill
//                 className={slide.imgStyle}
//                 sizes="100vw"
//                 priority={i === 0}
//               />
//             </div>

//             <div className="px-5 pt-5 pb-8">
//               <div className="flex items-center gap-3 mb-3">
//                 <span className={`font-bold text-4xl ${slide.accentColor}`}>
//                   {slide.discount}
//                 </span>
//                 <span className="text-dark text-sm leading-5">
//                   Sale<br />Off
//                 </span>
//               </div>
//               <h2 className="font-semibold text-dark text-lg mb-2 leading-snug">
//                 <a href="#">{slide.title}</a>
//               </h2>
//               <p className="text-sm text-gray-500 mb-5 line-clamp-2">
//                 {slide.desc}
//               </p>

//               {/* ── Improved Button ── */}
//               <a
//                 href="#"
//                 className={`
//                   group inline-flex items-center gap-2
//                   font-medium text-white text-sm
//                   rounded-lg px-7 py-2.5
//                   ${slide.btnBg}
//                   shadow-md hover:shadow-lg
//                   transition-all duration-300 ease-out
//                   hover:-translate-y-0.5 active:translate-y-0
//                 `}
//               >
//                 Shop Now
//               </a>
//             </div>
//           </div>

//           {/* ── DESKTOP layout ── */}
//           <div className={`hidden sm:flex flex-row items-stretch min-h-[340px] ${slide.bg}`}>
//             <div className="flex flex-col justify-center pl-10 pr-4 py-12 w-[55%]">
//               <div className="flex items-center gap-3 mb-5">
//                 <span className={`font-bold text-5xl ${slide.accentColor}`}>
//                   {slide.discount}
//                 </span>
//                 <span className="text-dark text-sm leading-5">
//                   Sale<br />Off
//                 </span>
//               </div>
//               <h2 className="font-semibold text-dark text-2xl mb-3 leading-snug">
//                 <a href="#">{slide.title}</a>
//               </h2>
//               <p className="text-sm text-gray-500 mb-8 line-clamp-3">
//                 {slide.desc}
//               </p>

//               {/* ── Improved Button ── */}
//               <a
//                 href="#"
//                 className={`
//                   group self-start inline-flex items-center gap-2
//                   font-medium text-white text-sm
//                   rounded-lg px-9 py-3
//                   ${slide.btnBg}
//                   shadow-md hover:shadow-xl
//                   transition-all duration-300 ease-out
//                   hover:-translate-y-0.5 active:translate-y-0
//                 `}
//               >
//                 Shop Now
//                 <svg
//                   className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
//                   fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                 </svg>
//               </a>
//             </div>

//             <div className="relative w-[45%] overflow-hidden">
//               <Image
//                 src={slide.img}
//                 alt={slide.imgAlt}
//                 fill
//                 className={slide.imgStyle}
//                 sizes="45vw"
//                 priority={i === 0}
//               />
//             </div>
//           </div>

//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default HeroCarousal;

























"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css/pagination";
import "swiper/css";

import Image from "next/image";

const slides = [
  {
    discount: "30%",
    title: "Blue Butos Shampoo & Mask Combo",
    desc: "Sulphate free formula. Makes your hair silky, shiny & smooth. For all hair types.",
    img: "/images/hero/image.png",
    imgAlt: "Imaxia Blue Butos Shampoo and Mask",
    accentColor: "text-[#7C3AED]",
    bg: "bg-[#F3EEFF]",
    // bg: "bg-[#ffffff]",
    btnBg: "bg-[#7C3AED] hover:bg-[#6D28D9]",
    imgStyle: "object-contain object-center",
    desktopPy: "lg:py-24.5",
  },
  {
    discount: "30%",
    title: "True Wireless Noise Cancelling Headphone",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at ipsum at risus euismod lobortis in.",
    img: "/images/hero/IMG_20260222_101437.jpg.jpeg",
    imgAlt: "Headphone",
    accentColor: "text-[#7C3AED]",
    // bg: "bg-[#ffffff]",
      bg: "bg-[#F3EEFF]",
    btnBg: "bg-[#7C3AED] hover:bg-[#6D28D9]",
    imgStyle: "object-contain object-center",
    desktopPy: "lg:py-26",
  },
];

const HeroCarousal = () => {
  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel !overflow-hidden !bg-[#F3EEFF]"
      // className="hero-carousel !overflow-hidden !bg-[#ffffff]"
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>

          {/* ── MOBILE layout (< sm) — image top, text bottom ── */}
          <div className={`sm:hidden flex flex-col h-full ${slide.bg}`}>
            <div className="relative w-full h-[320px]">
              <Image
                src={slide.img}
                alt={slide.imgAlt}
                fill
                className={slide.imgStyle}
                sizes="100vw"
                priority={i === 0}
              />
            </div>

            <div className="px-5 pt-5 pb-8">
              <div className="flex items-center gap-3 mb-3">
                <span className={`font-bold text-4xl ${slide.accentColor}`}>
                  {slide.discount}
                </span>
                <span className="text-dark text-sm leading-5">
                  Sale<br />Off
                </span>
              </div>
              <h2 className="font-semibold text-dark text-lg mb-2 leading-snug">
                <a href="#">{slide.title}</a>
              </h2>
              <p className="text-sm text-gray-500 mb-5 line-clamp-2">
                {slide.desc}
              </p>
              <a
                href="#"
                className={`
                  group inline-flex items-center gap-2
                  font-medium text-white text-sm rounded-lg px-7 py-2.5
                  ${slide.btnBg}
                  shadow-md hover:shadow-lg
                  transition-all duration-300 ease-out
                  hover:-translate-y-0.5 active:translate-y-0
                `}
              >
                Shop Now
              </a>
            </div>
          </div>

          {/* ── DESKTOP layout (sm+) — original style: text left, image floating right ── */}
          <div className={`hidden sm:flex items-center flex-row min-h-[420px] lg:min-h-[480px] xl:min-h-[500px] h-full ${slide.bg}`}>
            {/* Text — left side */}
            <div className={`max-w-[394px] py-10 sm:py-15 ${slide.desktopPy} pl-4 sm:pl-7.5 lg:pl-12.5 pr-4`}>
              <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
                <span className={`block font-semibold text-heading-3 sm:text-heading-1 ${slide.accentColor}`}>
                  {slide.discount}
                </span>
                <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
                  Sale<br />Off
                </span>
              </div>

              <h1 className="font-semibold text-dark text-xl sm:text-3xl mb-3">
                <a href="#">{slide.title}</a>
              </h1>

              <p className="text-sm text-gray-500 line-clamp-3">
                {slide.desc}
              </p>

              <a
                href="#"
                className={`
                  group inline-flex items-center gap-2
                  font-medium text-white text-sm rounded-lg px-9 py-3
                  ${slide.btnBg}
                  shadow-md hover:shadow-xl
                  transition-all duration-300 ease-out
                  hover:-translate-y-0.5 active:translate-y-0
                  mt-10
                `}
              >
                Shop Now
              </a>
            </div>

            {/* Image — right side, floating/natural size like original */}
            <div className="flex-1 flex items-center justify-center py-4 pr-4">
              <div className="relative w-full h-[380px] lg:h-[430px] xl:h-[450px]">
                <Image
                  src={slide.img}
                  alt={slide.imgAlt}
                  fill
                  className={slide.imgStyle}
                  sizes="351px"
                  priority={i === 0}
                />
              </div>
            </div>
          </div>

        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroCarousal;