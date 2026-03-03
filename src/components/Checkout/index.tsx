"use client";
import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import { useAppSelector } from "@/redux/store";
import { useSelector } from "react-redux";
import { selectTotalPrice } from "@/redux/features/cart-slice";

const WHATSAPP_NUMBER = "919321684836";

const Checkout = () => {
  const cartItems = useAppSelector((state) => state.cartReducer.items);
  const totalPrice = useSelector(selectTotalPrice);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("Your cart is empty");
      return;
    }

    let message = `🛒 *New Order*\n\n`;

    cartItems.forEach((item) => {
      message += `- ${item.title} x${item.quantity} = ₹${
        item.discountedPrice * item.quantity
      }\n`;
    });

    message += `\n*Total:* ₹${totalPrice}\n`;

    const encoded = encodeURIComponent(message);
    window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
  };

  return (
    <>
      <Breadcrumb title={"Checkout"} pages={["checkout"]} />
      <section className="overflow-hidden py-20 bg-gray-2">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <form onSubmit={handleSubmit}>
            <div className="max-w-[455px] mx-auto">
              <div className="bg-white shadow-1 rounded-[10px]">
                <div className="border-b border-gray-3 py-5 px-4 sm:px-8.5">
                  <h3 className="font-medium text-xl text-dark">
                    Your Order
                  </h3>
                </div>

                <div className="pt-2.5 pb-8.5 px-4 sm:px-8.5">
                  {/* Header */}
                  <div className="flex items-center py-5 border-b border-gray-3">
                    <h4 className="font-medium text-dark w-1/2">Product</h4>
                    <h4 className="font-medium text-dark w-1/4 text-center">
                      Qty
                    </h4>
                    <h4 className="font-medium text-dark w-1/4 text-right">
                      Subtotal
                    </h4>
                  </div>

                  {/* Items */}
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center py-5 border-b border-gray-3"
                    >
                      <p className="text-dark w-1/2">{item.title}</p>

                      <p className="text-dark w-1/4 text-center">
                        {item.quantity}
                      </p>

                      <p className="text-dark w-1/4 text-right">
                        ₹{item.discountedPrice * item.quantity}
                      </p>
                    </div>
                  ))}

                  {/* Total */}
                  <div className="flex items-center justify-between pt-5">
                    <p className="font-medium text-lg text-dark">Total</p>
                    <p className="font-medium text-lg text-dark">
                      ₹{totalPrice}
                    </p>
                  </div>
                </div>
              </div>

        <button
  type="submit"
  className="w-full flex justify-center font-medium text-white bg-[#A855F7] py-3 px-6 rounded-md mt-7.5 hover:bg-[#7C3AED] ease-out duration-200"
>
  Place Order on WhatsApp
</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Checkout;
