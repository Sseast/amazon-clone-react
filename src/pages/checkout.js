import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import { selectItems, selectTotal } from "../slices/basketSlice";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/client";

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const [session] = useSession();

  return (
    <div className="bg-gray-100">
      <Header></Header>
      <main className="mx-auto lg:flex max-w-screen-2xl">
        {/* Left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            width={1020}
            height={250}
            objectFit="contain"
          ></Image>
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="pb-4 text-3xl border-b ">
              {items.length ? "Shopping Basket" : "Your basket is empty"}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              ></CheckoutProduct>
            ))}
          </div>
        </div>
        {/* Right */}
        <div className="flex flex-col p-10 bg-white">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items):{" "}
                <span>
                  <Currency quantity={total}></Currency>
                </span>
              </h2>
              <button
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 border-gray-200 to-gray-500 cursor-not-allowed text-gray-300"
                }`}
              >
                {!session ? "Signin to checkout" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
