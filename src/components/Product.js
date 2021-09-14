import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useState } from "react";
import Currency from "react-currency-formatter";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  const [rating, setRating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime, setHasPrime] = useState(Math.random() < 0.5);

  return (
    <div className="relative z-30 flex-col p-10 m-5 bg-white">
      <p className="absolute top-0 right-0 p-2 text-xs italic font-thin text-gray-400">
        {category}
      </p>
      <Image src={image} objectFit="contain" height={200} width={200} />
      <h4 className="my-3 font-bold">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500"></StarIcon>
          ))}
      </div>
      <p className="my-2 text-xs line-clamp-2">{description}</p>
      <div className="mb-5 ">
        <Currency quantity={price} currency="EUR"></Currency>
      </div>
      {hasPrime && (
        <div className="flex items-center -mt-5 space-x-2">
          <img
            src="https://seeklogo.com/images/A/amazon-prime-logo-4E461CDCF6-seeklogo.com.png"
            className="w-7"
          />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}
      <button className="mt-auto button ">Add to Basket</button>
      {/*
       */}
    </div>
  );
}

export default Product;
