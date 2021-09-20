import { CheckCircle, CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

import Header from "../components/Header";

function Success() {
  const router = useRouter();

  return (
    <div className="h-screen bg-gray-100">
      <Header></Header>

      <main className="max-w-screen-lg mx-auto ">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center mb-5 space-x-2">
            <CheckCircleIcon className="w-10 text-green-500 "></CheckCircleIcon>
            <h1 className="text-3xl">
              Thank you, your order has been confirmed!
            </h1>
          </div>
          <p>
            Thank you for shopping with us. We'll send a confirmation once the
            item is shipped.
          </p>
          <button
            onClick={() => router.push("/orders")}
            className="max-w-md mt-8 button"
          >
            Go to my orders
          </button>
        </div>
      </main>
    </div>
  );
}

export default Success;
