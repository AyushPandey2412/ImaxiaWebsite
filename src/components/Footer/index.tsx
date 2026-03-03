import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="overflow-hidden bg-[#FDF8FF]">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">

        {/* ── Main grid ── */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-8 sm:gap-10 xl:gap-16 pt-12 xl:pt-22.5 pb-10 xl:pb-15">

          {/* ── Brand + Contact — full width on mobile ── */}
          <div className="col-span-2 xl:col-span-1">

            {/* Logo */}
            <div className="mb-4">
              <span className="text-2xl font-black tracking-tight">
                <span className="text-[#A353BB]">IMAXIA</span>
                <span className="text-dark"> Professional</span>
              </span>
              <div className="w-10 h-0.5 bg-[#A353BB] mt-2 rounded-full" />
            </div>

            <p className="text-sm text-gray-500 leading-relaxed mb-5 max-w-[320px]">
              Premium professional hair care infused with Argan Oil, Amino Acids & Acai Berry. Crafted especially for Indian hair types.
            </p>

            <ul className="flex flex-col gap-2.5">
              <li className="flex gap-3 items-start text-sm text-gray-600">
                <span className="flex-shrink-0 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.25 8.51464C4.25 4.45264 7.77146 1.25 12 1.25C16.2285 1.25 19.75 4.45264 19.75 8.51464C19.75 12.3258 17.3871 16.8 13.5748 18.4292C12.574 18.8569 11.426 18.8569 10.4252 18.4292C6.61289 16.8 4.25 12.3258 4.25 8.51464ZM12 2.75C8.49655 2.75 5.75 5.38076 5.75 8.51464C5.75 11.843 7.85543 15.6998 11.0147 17.0499C11.639 17.3167 12.361 17.3167 12.9853 17.0499C16.1446 15.6998 18.25 11.843 18.25 8.51464C18.25 5.38076 15.5034 2.75 12 2.75ZM12 7.75C11.3096 7.75 10.75 8.30964 10.75 9C10.75 9.69036 11.3096 10.25 12 10.25C12.6904 10.25 13.25 9.69036 13.25 9C13.25 8.30964 12.6904 7.75 12 7.75ZM9.25 9C9.25 7.48122 10.4812 6.25 12 6.25C13.5188 6.25 14.75 7.48122 14.75 9C14.75 10.5188 13.5188 11.75 12 11.75C10.4812 11.75 9.25 10.5188 9.25 9Z" fill="#A353BB"/>
                  </svg>
                </span>
                Mumbai, Maharashtra, India
              </li>
              <li>
                <a href="tel:+918591593779" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#A353BB] transition-colors duration-200">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.7177 3.0919C5.94388 1.80096 7.9721 2.04283 8.98569 3.47641L10.2467 5.25989C11.0574 6.40656 10.9889 8.00073 10.0214 9.0194L9.7765 9.27719C9.76142 9.31935 9.7287 9.43513 9.7609 9.65489C9.82765 10.1104 10.1793 11.0361 11.607 12.5392C13.0391 14.0469 13.9078 14.4023 14.3103 14.4677C14.484 14.4959 14.5748 14.4714 14.6038 14.4612L15.0124 14.031C15.8862 13.111 17.2485 12.9298 18.347 13.5621L20.2575 14.6617C21.8904 15.6016 22.2705 17.9008 20.9655 19.2747L19.545 20.7703C19.1016 21.2371 18.497 21.6355 17.75 21.7092C15.9261 21.8893 11.701 21.6548 7.27161 16.9915C3.13844 12.64 2.35326 8.85513 2.25401 7.00591C2.20497 6.09224 2.61224 5.30855 3.1481 4.7444L4.7177 3.0919Z" fill="#A353BB"/>
                  </svg>
                  +91 8591593779
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#" aria-label="Facebook" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F9F0FB] text-[#A353BB] hover:bg-[#A353BB] hover:text-white transition-all duration-200">
                <svg className="fill-current" width="13" height="13" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.99984 0.666504C7.48706 0.666504 6.09165 1.04648 4.81361 1.80644C3.53557 2.54019 2.51836 3.5491 1.76197 4.83317C1.03166 6.11724 0.666504 7.51923 0.666504 9.03915C0.666504 10.428 0.966452 11.7252 1.56635 12.9307C2.19233 14.1099 3.04 15.0926 4.10938 15.8788C5.17876 16.6649 6.37855 17.1497 7.70876 17.3332V11.4763H5.59608V9.03915H7.70876V7.19166C7.70876 6.16965 7.98262 5.37038 8.53035 4.79386C9.10417 4.21734 9.8736 3.92908 10.8386 3.92908C11.4646 3.92908 12.0906 3.98149 12.7166 4.08632V6.16965H11.6602C11.1908 6.16965 10.8386 6.30068 10.6039 6.56273C10.3952 6.79858 10.2909 7.09994 10.2909 7.46682V9.03915H12.6383L12.2471 11.4763H10.2909V17.3332C12.86 16.6256 13.9294 15.8395 14.9988 15.0533C15.8334 14.0706 16.4333 12.8913 17.0332 11.6859C17.3332 10.4018 17.3332 9.03915 17.3332 9.03915C17.3332 7.51923 16.955 6.11724 16.1986 4.83317C15.4683 3.5491 14.4641 2.54019 13.1861 1.80644C11.908 1.04648 10.5126 0.666504 8.99984 0.666504Z" fill=""/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F9F0FB] text-[#A353BB] hover:bg-[#A353BB] hover:text-white transition-all duration-200">
                <svg className="fill-current" width="13" height="13" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#ig_f)">
                    <path d="M19.6562 6C19.625 5 19.4375 4.28125 19.2187 3.625C19 2.96875 18.6562 2.4375 18.125 1.90625C17.5937 1.375 17.0625 1.0625 16.4375 0.8125C15.8125 0.5625 15.125 0.40625 14.0625 0.375C12.9687 0.3125 12.6562 0.3125 10 0.3125C7.34375 0.3125 7.0625 0.3125 6 0.34375C4.9375 0.375 4.28125 0.5625 3.625 0.78125C2.96875 1 2.4375 1.375 1.90625 1.90625C1.375 2.4375 1.03125 2.96875 0.8125 3.625C0.5625 4.25 0.40625 4.9375 0.375 6C0.34375 7.0625 0.3125 7.34375 0.3125 10C0.3125 12.6562 0.3125 12.9375 0.34375 14C0.375 15.0625 0.5625 15.7188 0.78125 16.375C1 17.0312 1.34375 17.5625 1.875 18.0938C2.40625 18.625 2.96875 18.9688 3.59375 19.1875C4.21875 19.4062 4.90625 19.5938 5.96875 19.625C7.03125 19.6875 7.3125 19.6875 9.96875 19.6875C12.625 19.6875 12.9062 19.6875 13.9687 19.6562C15.0312 19.625 15.6875 19.4375 16.3437 19.2188C17 19 17.5312 18.6562 18.0625 18.125C18.5937 17.5938 18.9375 17.0312 19.1562 16.4062C19.375 15.7812 19.5625 15.0938 19.5937 14.0312C19.625 13.0312 19.625 12.7188 19.625 10.0625C19.625 7.40625 19.6875 7.0625 19.6562 6ZM10.0005 13.25C8.18799 13.25 6.75049 11.7812 6.75049 10C6.75049 8.21875 8.21924 6.75 10.0005 6.75C11.813 6.75 13.2505 8.1875 13.2505 10C13.2505 11.8125 11.813 13.25 10.0005 13.25Z" fill=""/>
                  </g>
                  <defs><clipPath id="ig_f"><rect width="20" height="20" fill="white"/></clipPath></defs>
                </svg>
              </a>
              <a href="https://wa.me/919321684836" aria-label="WhatsApp" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F9F0FB] text-[#A353BB] hover:bg-[#A353BB] hover:text-white transition-all duration-200">
                <svg className="fill-current" width="13" height="13" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 13.8697 2.50573 15.6279 3.43091 17.1503L2.02441 22L6.99806 20.619C8.46779 21.4638 10.1757 21.9999 12.001 21.9999C17.5238 21.9999 22.001 17.5228 22.001 11.9999C22.001 6.47703 17.5238 2 12.001 2ZM8.59729 7.30019C8.77086 7.30019 8.94822 7.30158 9.10352 7.30908C9.27788 7.31658 9.46627 7.33098 9.64551 7.74268C9.85638 8.22668 10.3116 9.40177 10.373 9.52637C10.4344 9.65097 10.4756 9.79658 10.3936 9.96338C10.3116 10.1302 10.2709 10.2349 10.1465 10.3799C10.0221 10.5249 9.88408 10.7031 9.77148 10.8145C9.64688 10.9391 9.51748 11.0747 9.66309 11.3237C9.80869 11.5727 10.307 12.3969 11.0596 13.0654C12.0254 13.9188 12.8418 14.1855 13.0908 14.311C13.3398 14.4365 13.4849 14.4155 13.6299 14.2499C13.7755 14.0843 14.2524 13.5254 14.4185 13.2764C14.5846 13.0274 14.7507 13.0679 14.979 13.1514C15.2074 13.2354 16.3825 13.8149 16.6315 13.9399C16.8805 14.0649 17.0464 14.1274 17.1079 14.2319C17.1699 14.3364 17.1699 14.8354 16.9619 15.4154C16.7539 15.9954 15.7759 16.5539 15.3179 16.6034C14.8594 16.6529 14.4299 16.8284 12.3379 16.0239C9.82489 15.0574 8.19434 12.4584 8.07031 12.2919C7.94629 12.1254 7.06738 10.9547 7.06738 9.74268C7.06738 8.53067 7.70508 7.93457 7.93408 7.68457C8.16308 7.43457 8.42383 7.30019 8.59729 7.30019Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* ── Our Story ── */}
          <div className="col-span-1">
            <h2 className="mb-5 text-base font-semibold text-dark">Our Story</h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              IMAXIA Professional was founded with one mission — to bring salon-quality hair care to every Indian home. Our formulas are built around Indian hair textures, climate, and needs.
            </p>
            <ul className="flex flex-col gap-2.5">
              {["0% Formaldehyde", "Sulphate Free", "No Harsh Chemicals", "Made For Indian Hair"].map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A353BB] flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Hair Care Tips ── */}
          <div className="col-span-1">
            <h2 className="mb-5 text-base font-semibold text-dark">Hair Care Tips</h2>
            <ul className="flex flex-col gap-3.5">
              {[
                "Use sulphate-free shampoo to maintain smoothing treatments longer.",
                "Apply argan oil on damp hair for maximum shine and frizz control.",
                "Avoid washing hair within 72 hours after a Nanoplastia treatment.",
                "Use a heat protector spray before any hot styling tool.",
              ].map((tip, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-gray-500 leading-relaxed">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#F9F0FB] text-[#A353BB] text-[10px] font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {/* ── What Makes Us Different ── */}
          <div className="col-span-2 sm:col-span-1">
            <h2 className="mb-5 text-base font-semibold text-dark">What Makes Us Different</h2>
            <ul className="flex flex-col gap-3.5">
              {[
                { title: "Formaldehyde Free", desc: "Safe single-sitting formula with no harsh chemicals." },
                { title: "Natural Ingredients", desc: "Argan Oil, Acai Berry & Amino Acids in every product." },
                { title: "Made for Indian Hair", desc: "Formulated specifically for Indian textures and climate." },
                { title: "Salon-Grade Results", desc: "Professional quality results you can use at home." },
              ].map((item) => (
                <li key={item.title} className="flex gap-2.5">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#A353BB] mt-1.5" />
                  <div>
                    <p className="text-xs font-semibold text-dark">{item.title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* ── Footer Bottom ── */}
      <div className="py-5 xl:py-7.5 border-t border-gray-100">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center sm:justify-between">
            <p className="text-dark font-medium text-sm text-center sm:text-left">
              &copy; {year} <span className="text-[#A353BB]">IMAXIA</span> Professional. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <p className="font-medium text-sm">We Accept:</p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a href="#" aria-label="visa"><Image src="/images/payment/payment-01.svg" alt="visa" width={52} height={18} /></a>
                <a href="#" aria-label="mastercard"><Image src="/images/payment/payment-03.svg" alt="mastercard" width={28} height={20} /></a>
                <a href="#" aria-label="apple pay"><Image src="/images/payment/payment-04.svg" alt="apple pay" width={44} height={18} /></a>
                <a href="#" aria-label="google pay"><Image src="/images/payment/payment-05.svg" alt="google pay" width={46} height={18} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;