"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useCallback, useRef } from "react";
import Image from "next/image";

import "swiper/css";

const resultImages = [
  "/images/results/Copy of Copy of Grey and White Modern Hair Salon Result Instagram Post_20260204_192947_0000.jpeg",
  "/images/results/Copy of Grey and White Modern Hair Salon Result Instagram Post_20260204_193424_0000.jpeg",
  "/images/results/Neutral Modern Hair Instagram Post_20260131_143452_0000.jpeg",
  "/images/results/Grey and White Modern Hair Salon Result Instagram Post_20260131_145809_0000.jpeg",
 
]
const Testimonials = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className="overflow-hidden pb-16.5">

      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">

        {/* Header */}
        <div className="mb-10 flex items-center justify-between">

          <h2 className="font-semibold text-xl xl:text-heading-6 text-dark">
            Before / After Results
          </h2>

          <div className="flex gap-3">

            <button onClick={handlePrev}>
              Prev
            </button>

            <button onClick={handleNext}>
              Next
            </button>

          </div>

        </div>


        {/* Slider */}
        <Swiper
          ref={sliderRef}
          spaceBetween={20}
          breakpoints={{

            0: {
              slidesPerView: 1,
            },

            640: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },

          }}
        >

          {resultImages.map((image, index) => (

            <SwiperSlide key={index}>

              {/* Square Ratio Image */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden">

                <Image
                  src={image}
                  alt="Hair Result"
                  fill
                  className="object-cover"
                />

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
};

export default Testimonials;





















// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { useCallback, useRef } from "react";
// import Image from "next/image";
// import "swiper/css";

// const resultImages = [
//   "/images/results/Copy of Copy of Grey and White Modern Hair Salon Result Instagram Post_20260204_192947_0000.jpeg",
//   "/images/results/Copy of Copy of Grey and White Modern Hair Salon Result Instagram Post_20260204_192947_0000.jpeg",
//   "/images/results/Neutral Modern Hair Instagram Post_20260131_143452_0000.jpeg",
//   "/images/results/Grey and White Modern Hair Salon Result Instagram Post_20260131_145809_0000.jpeg",
// ];

// const Testimonials = () => {
//   const sliderRef = useRef(null);

//   const handlePrev = useCallback(() => {
//     if (!sliderRef.current) return;
//     sliderRef.current.swiper.slidePrev();
//   }, []);

//   const handleNext = useCallback(() => {
//     if (!sliderRef.current) return;
//     sliderRef.current.swiper.slideNext();
//   }, []);

//   return (
//     <section className="overflow-hidden py-12">
//       <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">

//         {/* Header */}
//         <div className="mb-7 flex items-center justify-between">
//           <div>
//             <span className="text-xs font-semibold text-[#7C3AED] uppercase tracking-widest">
//               Real Results
//             </span>
//             <h2 className="font-semibold text-xl xl:text-2xl text-dark mt-1">
//               Before / After Results
//             </h2>
//           </div>
//           <div className="flex items-center gap-2">
//             <button
//               onClick={handlePrev}
//               className="w-9 h-9 flex items-center justify-center rounded-full border border-purple-200 text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white hover:border-[#7C3AED] transition-all duration-200 text-sm font-medium"
//             >
//               ‹
//             </button>
//             <button
//               onClick={handleNext}
//               className="w-9 h-9 flex items-center justify-center rounded-full border border-purple-200 text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white hover:border-[#7C3AED] transition-all duration-200 text-sm font-medium"
//             >
//               ›
//             </button>
//           </div>
//         </div>

//         {/* Slider */}
//         <Swiper
//           ref={sliderRef}
//           spaceBetween={16}
//           breakpoints={{
//             0:    { slidesPerView: 1.2 },
//             480:  { slidesPerView: 2.2 },
//             768:  { slidesPerView: 3.2 },
//             1024: { slidesPerView: 4 },
//           }}
//         >
//           {resultImages.map((image, index) => (
//             <SwiperSlide key={index}>
//               <div className="group relative rounded-2xl overflow-hidden border border-purple-100 shadow-sm hover:shadow-lg transition-shadow duration-300">

//                 {/* Image */}
//                 <div className="relative w-full aspect-[3/4] overflow-hidden">
//                   <Image
//                     src={image}
//                     alt={`Hair Result ${index + 1}`}
//                     fill
//                     className="object-cover group-hover:scale-105 transition-transform duration-500"
//                   />
//                 </div>

//                 {/* Hover overlay with subtle label */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
//                   <span className="text-white text-xs font-semibold tracking-wide">
//                     Before / After
//                   </span>
//                 </div>

//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//       </div>
//     </section>
//   );
// };

// export default Testimonials;