// import React from "react";
// import Image from "next/image";

// const PromoBanner = () => {
//   return (
//     <section className="overflow-hidden py-20">
//       <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
//         {/* <!-- promo banner big --> */}
//         <div className="relative z-1 overflow-hidden rounded-lg bg-[#F5F5F7] py-12.5 lg:py-17.5 xl:py-22.5 px-4 sm:px-7.5 lg:px-14 xl:px-19 mb-7.5">
//           <div className="max-w-[550px] w-full">
//             <span className="block font-medium text-xl text-dark mb-3">
//               Apple iPhone 14 Plus
//             </span>

//             <h2 className="font-bold text-xl lg:text-heading-4 xl:text-heading-3 text-dark mb-5">
//               UP TO 30% OFF
//             </h2>

//             <p>
//               iPhone 14 has the same superspeedy chip that’s in iPhone 13 Pro,
//               A15 Bionic, with a 5‑core GPU, powers all the latest features.
//             </p>

//             <a
//               href="#"
//               className="inline-flex font-medium text-custom-sm text-white bg-blue py-[11px] px-9.5 rounded-md ease-out duration-200 hover:bg-blue-dark mt-7.5"
//             >
//               Buy Now
//             </a>
//           </div>

//           <Image
//             src="/images/promo/promo-01.png"
//             alt="promo img"
//             className="absolute bottom-0 right-4 lg:right-26 -z-1"
//             width={274}
//             height={350}
//           />
//         </div>

//         <div className="grid gap-7.5 grid-cols-1 lg:grid-cols-2">
//           {/* <!-- promo banner small --> */}
//           <div className="relative z-1 overflow-hidden rounded-lg bg-[#DBF4F3] py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10">
//             <Image
//               src="/images/promo/promo-02.png"
//               alt="promo img"
//               className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-10 -z-1"
//               width={241}
//               height={241}
//             />

//             <div className="text-right">
//               <span className="block text-lg text-dark mb-1.5">
//                 Foldable Motorised Treadmill
//               </span>

//               <h2 className="font-bold text-xl lg:text-heading-4 text-dark mb-2.5">
//                 Workout At Home
//               </h2>

//               <p className="font-semibold text-custom-1 text-teal">
//                 Flat 20% off
//               </p>

//               <a
//                 href="#"
//                 className="inline-flex font-medium text-custom-sm text-white bg-teal py-2.5 px-8.5 rounded-md ease-out duration-200 hover:bg-teal-dark mt-9"
//               >
//                 Grab Now
//               </a>
//             </div>
//           </div>

//           {/* <!-- promo banner small --> */}
//           <div className="relative z-1 overflow-hidden rounded-lg bg-[#FFECE1] py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10">
//             <Image
//               src="/images/promo/promo-03.png"
//               alt="promo img"
//               className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-8.5 -z-1"
//               width={200}
//               height={200}
//             />

//             <div>
//               <span className="block text-lg text-dark mb-1.5">
//                 Apple Watch Ultra
//               </span>

//               <h2 className="font-bold text-xl lg:text-heading-4 text-dark mb-2.5">
//                 Up to <span className="text-orange">40%</span> off
//               </h2>

//               <p className="max-w-[285px] text-custom-sm">
//                 The aerospace-grade titanium case strikes the perfect balance of
//                 everything.
//               </p>

//               <a
//                 href="#"
//                 className="inline-flex font-medium text-custom-sm text-white bg-orange py-2.5 px-8.5 rounded-md ease-out duration-200 hover:bg-orange-dark mt-7.5"
//               >
//                 Buy Now
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PromoBanner;




// import React from "react";
// import Link from "next/link";

// const PromoBanner = () => {
//   return (
//     <section className="overflow-hidden py-20">
//       <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
//         <div className="rounded-2xl bg-[#F3EEFF] px-8 sm:px-14 xl:px-20 py-12 xl:py-16">

//           <div className="flex flex-col sm:flex-row items-center justify-between gap-8">

//             {/* Left */}
//             <div>
//               <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7C3AED] uppercase tracking-widest mb-4">
//                 <span className="w-6 h-px bg-[#7C3AED] inline-block" />
//                 Trusted by 10,000+ customers
//               </span>

//               <h2 className="font-bold text-dark text-2xl sm:text-3xl xl:text-4xl leading-snug mb-3">
//                 Healthy Hair Starts <br />
//                 With the <span className="text-[#7C3AED]">Right Product.</span>
//               </h2>

//               <p className="text-gray-500 text-sm max-w-[380px] leading-relaxed">
//                 Premium sulphate-free hair care made with natural ingredients. Because your hair deserves nothing less.
//               </p>
//             </div>

//             {/* Divider */}
//             <div className="hidden sm:block w-px h-24 bg-purple-200" />

//             {/* Right */}
//             <div className="flex-shrink-0 flex flex-col items-center sm:items-end gap-4">
//               <div className="flex items-center gap-6 mb-2">
//                 <div className="text-center">
//                   <p className="font-bold text-dark text-lg">100%</p>
//                   <p className="text-gray-500 text-xs">Natural</p>
//                 </div>
//                 <div className="text-center">
//                   <p className="font-bold text-dark text-lg">4.9★</p>
//                   <p className="text-gray-500 text-xs">Rated</p>
//                 </div>
//                 <div className="text-center">
//                   <p className="font-bold text-dark text-lg">Free</p>
//                   <p className="text-gray-500 text-xs">Shipping</p>
//                 </div>
//               </div>

//               <Link
//                 href="/shop-with-sidebar"
//                 className="inline-flex items-center gap-2 font-semibold text-white bg-[#7C3AED] hover:bg-[#6D28D9] px-8 py-3.5 rounded-xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-sm"
//               >
//                 Shop Now
//               </Link>
//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default PromoBanner;
















// import React from "react";
// import Link from "next/link";

// const PromoBanner = () => {
//   return (
//     <section className="overflow-hidden py-20">
//       <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
//         <div className="rounded-2xl bg-[#F3EEFF] px-8 sm:px-14 xl:px-20 py-12 xl:py-16">

//           <div className="flex flex-col sm:flex-row items-center justify-between gap-8">

//             {/* Left */}
//             <div>
//               <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7C3AED] uppercase tracking-widest mb-4">
//                 <span className="w-6 h-px bg-[#7C3AED] inline-block" />
//                 Professional Hair Care by Imaxia
//               </span>

//               <h2 className="font-bold text-dark text-2xl sm:text-3xl xl:text-4xl leading-snug mb-3">
//                 Healthy Hair Starts <br />
//                 With the <span className="text-[#7C3AED]">Right Product.</span>
//               </h2>

//               <p className="text-gray-500 text-sm max-w-[380px] leading-relaxed">
//                 Premium sulphate-free hair care infused with Argan Oil, Amino Acids & Acai Berry. Crafted especially for Indian hair types.
//               </p>

//               {/* Badges from brochure */}
//               <div className="flex flex-wrap gap-2 mt-5">
//                 {["0% Formaldehyde", "Sulphate Free", "No Harsh Chemicals", "For Indian Hair"].map((badge) => (
//                   <span
//                     key={badge}
//                     className="text-xs font-medium text-[#7C3AED] bg-white border border-purple-200 px-3 py-1 rounded-full"
//                   >
//                     {badge}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Divider */}
//             <div className="hidden sm:block w-px h-32 bg-purple-200" />

//             {/* Right */}
//             <div className="flex-shrink-0 flex flex-col items-center sm:items-end gap-4">
//               <div className="flex items-center gap-6 mb-2">
//                 <div className="text-center">
//                   <p className="font-bold text-dark text-lg">0%</p>
//                   <p className="text-gray-500 text-xs">Formaldehyde</p>
//                 </div>
//                 <div className="text-center">
//                   <p className="font-bold text-dark text-lg">Frizz</p>
//                   <p className="text-gray-500 text-xs">Free</p>
//                 </div>
//                 <div className="text-center">
//                   <p className="font-bold text-dark text-lg">Deep</p>
//                   <p className="text-gray-500 text-xs">Repair</p>
//                 </div>
//               </div>

//               <Link
//                 href="/shop-with-sidebar"
//                 className="inline-flex items-center gap-2 font-semibold text-white bg-[#7C3AED] hover:bg-[#6D28D9] px-8 py-3.5 rounded-xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-sm"
//               >
//                 Shop Now
//               </Link>
//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default PromoBanner;/













import React from "react";
import Link from "next/link";

const PromoBanner = () => {
  return (
    <section className="overflow-hidden py-20">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="rounded-2xl bg-[#F3EEFF] px-6 sm:px-14 xl:px-20 py-10 xl:py-16">

          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">

            {/* Left */}
            <div className="w-full sm:w-auto">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7C3AED] uppercase tracking-widest mb-4">
                <span className="w-6 h-px bg-[#7C3AED] inline-block" />
                Professional Hair Care by Imaxia
              </span>

              <h2 className="font-bold text-dark text-2xl sm:text-3xl xl:text-4xl leading-snug mb-3">
                Healthy Hair Starts <br />
                With the <span className="text-[#7C3AED]">Right Product.</span>
              </h2>

              <p className="text-gray-500 text-sm max-w-[380px] leading-relaxed">
                Premium sulphate-free hair care infused with Argan Oil, Amino Acids & Acai Berry. Crafted especially for Indian hair types.
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mt-5">
                {["0% Formaldehyde", "Sulphate Free", "No Harsh Chemicals", "For Indian Hair"].map((badge) => (
                  <span
                    key={badge}
                    className="text-xs font-medium text-[#7C3AED] bg-white border border-purple-200 px-3 py-1 rounded-full"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* ✅ Stats + Button together on mobile, hidden on sm+ */}
              <div className="flex sm:hidden items-center justify-between mt-7 pt-5 border-t border-purple-200">
                <div className="flex items-center gap-5">
                  <div className="text-center">
                    <p className="font-bold text-dark text-base">0%</p>
                    <p className="text-gray-500 text-[10px]">Formaldehyde</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-dark text-base">Frizz</p>
                    <p className="text-gray-500 text-[10px]">Free</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-dark text-base">Deep</p>
                    <p className="text-gray-500 text-[10px]">Repair</p>
                  </div>
                </div>

                <Link
                  href="/shop-with-sidebar"
                  className="inline-flex items-center font-semibold text-white bg-[#7C3AED] hover:bg-[#6D28D9] px-5 py-2.5 rounded-xl transition-all duration-200 text-sm whitespace-nowrap"
                >
                  Shop Now
                </Link>
              </div>

            </div>

            {/* Divider — desktop only */}
            <div className="hidden sm:block w-px h-32 bg-purple-200" />

            {/* Right — desktop only */}
            <div className="hidden sm:flex flex-shrink-0 flex-col items-end gap-4">
              <div className="flex items-center gap-6 mb-2">
                <div className="text-center">
                  <p className="font-bold text-dark text-lg">0%</p>
                  <p className="text-gray-500 text-xs">Formaldehyde</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-dark text-lg">Frizz</p>
                  <p className="text-gray-500 text-xs">Free</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-dark text-lg">Deep</p>
                  <p className="text-gray-500 text-xs">Repair</p>
                </div>
              </div>

              <Link
                href="/shop-with-sidebar"
                className="inline-flex items-center gap-2 font-semibold text-white bg-[#7C3AED] hover:bg-[#6D28D9] px-8 py-3.5 rounded-xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-sm"
              >
                Shop Now
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default PromoBanner;