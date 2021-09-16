import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useState } from "react";
import Currency from "react-currency-formatter";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";
const MAX_RATING = 5;
const MIN_RATING = 1;

function CheckoutProduct({
  id,
  title,
  price,
  description,
  category,
  image,
  hasPrime,
}) {
  const [rating, setRating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const dispatch = useDispatch();
  const addItemToBasket = () => {
    console.log("remove");

    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      hasPrime,
    };
    dispatch(addToBasket(product));
  };
  const removeItemFromBasket = () => {
    console.log("remove");
    console.log("id : " + { id });
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5">
      {/* Left */}
      <Image
        src={image}
        width={200}
        height={200}
        objectFit="contain"
        alt
      ></Image>

      {/* Middle */}
      <div className="col-span-3 mx-5">
        <p className="flex text-lg font-semibold">{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="h-5 text-yellow-500"></StarIcon>
            ))}
        </div>
        <p className="my-2 text-xs line-clamp-3 ">{description}</p>

        <div className="mb-5 ">
          <Currency quantity={price} currency="EUR"></Currency>
        </div>
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              src="https://seeklogo.com/images/A/amazon-prime-logo-4E461CDCF6-seeklogo.com.png"
              className="w-12"
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      {/* Right */}
      <div className="flex flex-col my-auto space-y-2 justify-self-end">
        <button onClick={addItemToBasket} className="button">
          Add to Basket
        </button>
        <button className="button" onClick={removeItemFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
