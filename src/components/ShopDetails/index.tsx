"use client";
import{ useState } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import Image from "next/image";
import RecentlyViewdItems from "./RecentlyViewd";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addItemToCart } from "@/redux/features/cart-slice";
import { addItemToWishlist } from "@/redux/features/wishlist-slice";
import { useAppSelector } from "@/redux/store";
import { toast } from "react-hot-toast";
import { Product } from "@/types/product";

interface ShopDetailsProps {
  product: Product;
}

const tabs = [
  { id: "tabOne", title: "Description" },
  { id: "tabTwo", title: "Additional Information" },
  { id: "tabThree", title: "Reviews" },
];

const StarIcon = ({ filled = true }: { filled?: boolean }) => (
  <svg className={`fill-current ${filled ? "text-[#FBB040]" : "text-gray-300"}`} width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z" fill="" />
  </svg>
);

const ShopDetails = ({ product }: ShopDetailsProps) => {
  const [previewImg, setPreviewImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("tabOne");
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useAppSelector((state) => state.cartReducer.items);
  const isInCart = cartItems.some((p) => p.id === product.id);

  const handleAddToCart = () => {
    if (isInCart) { toast.error("Already in cart"); return; }
    dispatch(addItemToCart({ ...product, quantity }));
    toast.success("Added to cart");
  };

  const handleAddToWishlist = () => {
    dispatch(addItemToWishlist({ ...product, status: "available", quantity: 1 }));
    toast.success("Added to wishlist");
  };

  return (
    <>
      <Breadcrumb title={product.title} pages={["shop", product.title]} />

      <section className="overflow-hidden relative pb-20 pt-5 lg:pt-20 xl:pt-28">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-17.5">

            {/* Left: Images */}
            <div className="lg:max-w-[570px] w-full">
              <div className="lg:min-h-[512px] rounded-lg shadow-1 bg-gray-2 p-4 sm:p-7.5 relative flex items-center justify-center">
            
                {product.imgs?.previews?.[previewImg] && (
                  <Image src={product.imgs.previews[previewImg]} alt={product.title} width={400} height={400} className="object-contain" />
                )}
              </div>

              {/* Thumbnails */}
              <div className="flex flex-wrap sm:flex-nowrap gap-4.5 mt-6">
                {product.imgs?.thumbnails?.map((thumb, key) => (
                  <button
                    key={key}
                    onClick={() => setPreviewImg(key)}
                    className={`flex items-center justify-center w-15 sm:w-25 h-15 sm:h-25 overflow-hidden rounded-lg bg-gray-2 shadow-1 ease-out duration-200 border-2 hover:border-[#A855F7] ${key === previewImg ? "border-[#A855F7]" : "border-transparent"}`}
                  >
                    <Image width={50} height={50} src={thumb} alt="thumbnail" className="object-contain" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Product Info */}
            <div className="max-w-[539px] w-full">
              {/* Title + Tag */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <h2 className="font-semibold text-xl sm:text-2xl xl:text-custom-3 text-dark">{product.title}</h2>
                {product.tag && (
                  <span className="shrink-0 inline-flex font-medium text-custom-sm text-white bg-[#A855F7] rounded py-0.5 px-2.5">
                    {product.tag}
                  </span>
                )}
              </div>

              {/* Rating + Stock */}
              <div className="flex flex-wrap items-center gap-5.5 mb-4.5">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => <StarIcon key={i} filled />)}
                  </div>
                  <span>({product.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_stock)">
                      <path d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z" fill="#22AD5C" />
                      <path d="M12.6875 7.09374L8.9688 10.7187L7.2813 9.06249C7.00005 8.78124 6.56255 8.81249 6.2813 9.06249C6.00005 9.34374 6.0313 9.78124 6.2813 10.0625L8.2813 12C8.4688 12.1875 8.7188 12.2812 8.9688 12.2812C9.2188 12.2812 9.4688 12.1875 9.6563 12L13.6875 8.12499C13.9688 7.84374 13.9688 7.40624 13.6875 7.12499C13.4063 6.84374 12.9688 6.84374 12.6875 7.09374Z" fill="#22AD5C" />
                    </g>
                    <defs><clipPath id="clip0_stock"><rect width="20" height="20" fill="white" /></clipPath></defs>
                  </svg>
                  <span className="text-green">In Stock</span>
                </div>
              </div>

              {/* Short description */}
              <p className="text-dark-4 text-sm leading-relaxed mb-5">{product.description}</p>

              {/* Key Benefits */}
              {product.keyBenefits && product.keyBenefits.length > 0 && (
                <ul className="flex flex-col gap-2 mb-6">
                  {product.keyBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2.5">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3589 8.35863C13.603 8.11455 13.603 7.71882 13.3589 7.47475C13.1149 7.23067 12.7191 7.23067 12.4751 7.47475L8.75033 11.1995L7.5256 9.97474C7.28152 9.73067 6.8858 9.73067 6.64172 9.97474C6.39764 10.2188 6.39764 10.6146 6.64172 10.8586L8.30838 12.5253C8.55246 12.7694 8.94819 12.7694 9.19227 12.5253L13.3589 8.35863Z" fill="#A855F7" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.0003 1.04169C5.05277 1.04169 1.04199 5.05247 1.04199 10C1.04199 14.9476 5.05277 18.9584 10.0003 18.9584C14.9479 18.9584 18.9587 14.9476 18.9587 10C18.9587 5.05247 14.9479 1.04169 10.0003 1.04169ZM2.29199 10C2.29199 5.74283 5.74313 2.29169 10.0003 2.29169C14.2575 2.29169 17.7087 5.74283 17.7087 10C17.7087 14.2572 14.2575 17.7084 10.0003 17.7084C5.74313 17.7084 2.29199 14.2572 2.29199 10Z" fill="#A855F7" />
                      </svg>
                      <span className="text-sm text-dark">{benefit}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Available Sizes + Suitable For */}
              <div className="flex flex-col gap-3 border-y border-gray-3 py-6 mb-7">
                {product.availableSizes && (
                  <div className="flex items-center gap-3">
                    <span className="min-w-[110px] font-medium text-sm text-dark">Available Sizes:</span>
                    <div className="flex items-center gap-2 flex-wrap">
                      {product.availableSizes.map((size) => (
                        <span key={size} className="text-xs font-medium border border-[#A855F7] text-[#A855F7] rounded px-2.5 py-1">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {product.suitableFor && (
                  <div className="flex items-start gap-3">
                    <span className="min-w-[110px] font-medium text-sm text-dark">Suitable For:</span>
                    <span className="text-sm text-dark-4">{product.suitableFor}</span>
                  </div>
                )}
                {product.usage && (
                  <div className="flex items-start gap-3">
                    <span className="min-w-[110px] font-medium text-sm text-dark">How to Use:</span>
                    <span className="text-sm text-dark-4">{product.usage}</span>
                  </div>
                )}
              </div>

              {/* Quantity + Actions */}
              <div className="flex flex-wrap items-center gap-4.5">
                <div className="flex items-center rounded-md border border-gray-3">
                  <button
                    aria-label="Decrease quantity"
                    className="flex items-center justify-center w-12 h-12 ease-out duration-200 hover:text-[#A855F7]"
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  >
                    <svg className="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.33301 10.0001C3.33301 9.53984 3.7061 9.16675 4.16634 9.16675H15.833C16.2932 9.16675 16.6663 9.53984 16.6663 10.0001C16.6663 10.4603 16.2932 10.8334 15.833 10.8334H4.16634C3.7061 10.8334 3.33301 10.4603 3.33301 10.0001Z" fill="" />
                    </svg>
                  </button>
                  <span className="flex items-center justify-center w-16 h-12 border-x border-gray-4">{quantity}</span>
                  <button
                    aria-label="Increase quantity"
                    className="flex items-center justify-center w-12 h-12 ease-out duration-200 hover:text-[#A855F7]"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <svg className="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.33301 10C3.33301 9.5398 3.7061 9.16671 4.16634 9.16671H15.833C16.2932 9.16671 16.6663 9.5398 16.6663 10C16.6663 10.4603 16.2932 10.8334 15.833 10.8334H4.16634C3.7061 10.8334 3.33301 10.4603 3.33301 10Z" fill="" />
                      <path d="M9.99967 16.6667C9.53944 16.6667 9.16634 16.2936 9.16634 15.8334L9.16634 4.16671C9.16634 3.70647 9.53944 3.33337 9.99967 3.33337C10.4599 3.33337 10.833 3.70647 10.833 4.16671L10.833 15.8334C10.833 16.2936 10.4599 16.6667 9.99967 16.6667Z" fill="" />
                    </svg>
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="inline-flex font-medium text-white bg-[#A855F7] py-3 px-7 rounded-md ease-out duration-200 hover:bg-[#9333EA]"
                >
                  {isInCart ? "In Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="overflow-hidden bg-gray-2 py-20">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">

          {/* Tab headers */}
          <div className="flex flex-wrap items-center bg-white rounded-[10px] shadow-1 gap-5 xl:gap-12.5 py-4.5 px-4 sm:px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`font-medium lg:text-lg ease-out duration-200 hover:text-[#A855F7] relative before:h-0.5 before:bg-[#A855F7] before:absolute before:left-0 before:bottom-0 before:ease-out before:duration-200 hover:before:w-full ${activeTab === tab.id ? "text-[#A855F7] before:w-full" : "text-dark before:w-0"}`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab: Description */}
          <div className={`flex-col sm:flex-row gap-7.5 xl:gap-12.5 mt-12.5 ${activeTab === "tabOne" ? "flex" : "hidden"}`}>
            <div className="max-w-[670px] w-full">
              <h2 className="font-medium text-2xl text-dark mb-5">About this Product</h2>
              <p className="text-dark-4 leading-relaxed mb-7">{product.longDescription ?? product.description}</p>

              {product.keyIngredients && product.keyIngredients.length > 0 && (
                <>
                  <h3 className="font-medium text-lg text-dark mb-4">Key Ingredients</h3>
                  <div className="flex flex-wrap gap-2 mb-7">
                    {product.keyIngredients.map((ingredient) => (
                      <span key={ingredient} className="text-sm border border-purple-200 bg-purple-50 text-[#7C3AED] rounded-full px-3 py-1">
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="max-w-[447px] w-full">
              {product.keyBenefits && product.keyBenefits.length > 0 && (
                <>
                  <h2 className="font-medium text-2xl text-dark mb-5">Key Benefits</h2>
                  <ul className="flex flex-col gap-3 mb-7">
                    {product.keyBenefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#A855F7] shrink-0" />
                        <span className="text-dark-4 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {product.usage && (
                <>
                  <h3 className="font-medium text-lg text-dark mb-3">How to Use</h3>
                  <p className="text-dark-4 text-sm leading-relaxed">{product.usage}</p>
                </>
              )}
            </div>
          </div>

          {/* Tab: Additional Info */}
          <div className={`rounded-xl bg-white shadow-1 p-4 sm:p-6 mt-10 ${activeTab === "tabTwo" ? "block" : "hidden"}`}>
            {[
              ["Brand", "IMAXIA Professional"],
              ["Product", product.title],
              ["Category", product.category ?? "Haircare"],
              ["Tag", product.tag ?? "—"],
              ["Available Sizes", product.availableSizes?.join(", ") ?? "—"],
              ["Suitable For", product.suitableFor ?? "—"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-md even:bg-gray-1 flex py-4 px-4 sm:px-5">
                <div className="max-w-[450px] min-w-[160px] w-full"><p className="text-sm sm:text-base font-medium text-dark">{label}</p></div>
                <div className="w-full"><p className="text-sm sm:text-base text-dark-4">{value}</p></div>
              </div>
            ))}
          </div>

          {/* Tab: Reviews */}
          <div className={`flex-col sm:flex-row gap-7.5 xl:gap-12.5 mt-12.5 ${activeTab === "tabThree" ? "flex" : "hidden"}`}>
            <div className="max-w-[570px] w-full">
              <h2 className="font-medium text-2xl text-dark mb-9">Reviews</h2>
              <div className="flex flex-col gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="rounded-xl bg-white shadow-1 p-4 sm:p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-purple-100 flex items-center justify-center text-purple-600 font-bold">U{i}</div>
                        <div>
                          <h3 className="font-medium text-dark">Customer {i}</h3>
                          <p className="text-custom-sm text-gray-500">Verified Buyer</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, s) => <StarIcon key={s} filled />)}
                      </div>
                    </div>
                    <p className="text-dark mt-4">Great product! Exactly as described. Would definitely recommend to others.</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Review form */}
            <div className="max-w-[550px] w-full">
              <h2 className="font-medium text-2xl text-dark mb-3.5">Add a Review</h2>
              <p className="mb-6 text-gray-500">Your email address will not be published. Required fields are marked *</p>
              <div className="rounded-xl bg-white shadow-1 p-4 sm:p-6">
                <div className="mb-5">
                  <label htmlFor="comments" className="block mb-2.5">Comments</label>
                  <textarea name="comments" id="comments" rows={5} placeholder="Your comments" className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full p-5 outline-none duration-200 focus:border-[#A855F7] focus:ring-2 focus:ring-purple-100" />
                </div>
                <div className="flex flex-col lg:flex-row gap-5 mb-5.5">
                  <div className="flex-1">
                    <label htmlFor="name" className="block mb-2.5">Name</label>
                    <input type="text" name="name" id="name" placeholder="Your name" className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-[#A855F7] focus:ring-2 focus:ring-purple-100" />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="email" className="block mb-2.5">Email</label>
                    <input type="email" name="email" id="email" placeholder="Your email" className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-[#A855F7] focus:ring-2 focus:ring-purple-100" />
                  </div>
                </div>
                <button type="submit" className="inline-flex font-medium text-white bg-[#A855F7] py-3 px-7 rounded-md ease-out duration-200 hover:bg-[#9333EA]">
                  Submit Review
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      <RecentlyViewdItems />
    </>
  );
};

export default ShopDetails;