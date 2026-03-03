// import React from "react";

// const steps = [
//   {
//     step: "01",
//     title: "Choose Your Product",
//     desc: "Browse our range of sulphate-free shampoos, masks, oils & treatments suited for your hair type.",
//     icon: (
//       <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//         <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//       </svg>
//     ),
//   },
//   {
//     step: "02",
//     title: "Apply & Nourish",
//     desc: "Follow our simple application guide for best results. Most products show visible results within 2–4 weeks.",
//     icon: (
//       <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//         <path strokeLinecap="round" strokeLinejoin="round" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
//       </svg>
//     ),
//   },
//   {
//     step: "03",
//     title: "See the Results",
//     desc: "Experience the transformation — shinier, stronger and healthier hair with every use.",
//     icon: (
//       <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//         <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
//       </svg>
//     ),
//   },
// ];

// const HowItWorks = () => {
//   return (
//     <section className="overflow-hidden py-20">
//       <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">

//         <div className="text-center mb-12">
//           <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#7C3AED] uppercase tracking-widest mb-3">
//             <span className="w-6 h-px bg-[#7C3AED]" />
//             Simple Process
//             <span className="w-6 h-px bg-[#7C3AED]" />
//           </span>
//           <h2 className="font-bold text-dark text-2xl sm:text-3xl xl:text-4xl">
//             How It Works
//           </h2>
//           <p className="text-gray-400 text-sm mt-3">Three simple steps to your best hair ever.</p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative">

//           {/* Connector line (desktop only) */}
//           <div className="hidden sm:block absolute top-10 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px bg-purple-100 z-0" />

//           {steps.map((s, i) => (
//             <div key={i} className="relative z-10 bg-white rounded-2xl p-8 text-center border border-gray-100 hover:shadow-md transition-shadow duration-200">
//               <div className="w-14 h-14 rounded-2xl bg-[#F3EEFF] text-[#7C3AED] flex items-center justify-center mx-auto mb-5 shadow-sm">
//                 {s.icon}
//               </div>
//               <span className="text-xs font-bold text-purple-300 tracking-widest block mb-2">{s.step}</span>
//               <h3 className="font-semibold text-dark text-base mb-3">{s.title}</h3>
//               <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
//             </div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// };

// export default HowItWorks;


























import React from "react";

const benefits = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "100% Natural Ingredients",
    desc: "No sulphates, no parabens. Just pure goodness for your hair.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Fast & Free Shipping",
    desc: "Get your order delivered to your door at no extra cost.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Dermatologist Tested",
    desc: "Clinically tested and approved for all hair types including sensitive scalp.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
      </svg>
    ),
    title: "30-Day Money Back",
    desc: "Not satisfied? We'll refund you — no questions asked.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="overflow-hidden py-20">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-20 items-center">

          {/* Left — Heading */}
          <div className="xl:max-w-[340px] w-full flex-shrink-0">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#7C3AED] uppercase tracking-widest mb-4">
              <span className="w-6 h-px bg-[#7C3AED]" />
              Why Imaxia
            </span>
            <h2 className="font-bold text-dark text-2xl sm:text-3xl xl:text-4xl leading-snug mb-5">
              Why Thousands <br />
              <span className="text-[#7C3AED]">Choose Us</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              We're not just another hair care brand. Every product is crafted with purpose — clean ingredients, real results, and care you can trust.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-8">
              <div>
                <p className="font-bold text-dark text-2xl">10K+</p>
                <p className="text-gray-400 text-xs mt-0.5">Happy Customers</p>
              </div>
              <div className="w-px h-10 bg-gray-100" />
              <div>
                <p className="font-bold text-dark text-2xl">4.9★</p>
                <p className="text-gray-400 text-xs mt-0.5">Average Rating</p>
              </div>
              <div className="w-px h-10 bg-gray-100" />
              <div>
                <p className="font-bold text-dark text-2xl">50+</p>
                <p className="text-gray-400 text-xs mt-0.5">Products</p>
              </div>
            </div>
          </div>

          {/* Right — 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="group bg-white border border-gray-100 rounded-2xl p-6 flex gap-4 items-start hover:border-purple-200 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F3EEFF] text-[#7C3AED] flex items-center justify-center flex-shrink-0 group-hover:bg-[#7C3AED] group-hover:text-white transition-colors duration-200">
                  {b.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-dark text-sm mb-1.5">{b.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;