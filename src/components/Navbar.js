import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline/";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Link from "next/link";
function Navbar() {
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

  return (
    <nav>
      <header className="h-full">
        <div className="items-center w-full h-full bg-white ">
          <div className="flex items-center flex-grow pb-6 link sm:flex-grow-0">
            <Link href="/">
              <a className="text-lg font-bold uppercase md:text-2xl font-montserrat">
                Thibault Ayad
              </a>
            </Link>
          </div>
          <div className="link">
            <Link href="/series">
              {/* <a href="">About</a> */}
              <p className="">Series</p>
            </Link>
          </div>
          <div className="link">
            <Link href="/prints">
              <p className="">Prints</p>
            </Link>
          </div>
          <div className="link">
            <Link href="/about">
              <p className="">About</p>
            </Link>
          </div>
          <div className="link">
            <Link href="/contact">
              <p className="">Contact</p>
            </Link>
          </div>
          <div className="flex items-center justify-around pt-4 text-lg align-center ">
            <a
              href="https://www.instagram.com/dayaboti/"
              target="_blank"
              className="text-gray-500 link hover:text-black"
            >
              <FaInstagram />
            </a>
            <a target="_blank" className="text-gray-500 link hover:text-black">
              <Mailto
                target="_top"
                email="ayadguillaume@gmail.com"
                subject="I'm interested with your work."
                body="Hello world!"
              >
                <AiOutlineMail />
              </Mailto>
            </a>
          </div>

          {/* <div onClick={!session ? signIn : signOut} className="flex link">
          {session ? `Sign out` : "Sign In"}
        </div> */}

          {items.length ? (
            <div className="flex w-auto ">
              <div>
                {" "}
                className="relative flex items-center link " >
                <HiOutlineShoppingCart className="text-3xl"></HiOutlineShoppingCart>
                <span className="absolute w-5 h-5 font-semibold text-center text-black align-middle bg-gray-300 rounded-full -top-1 -right-2 text-2xs align-center">
                  {items.length}
                </span>
                {/* <p className="hidden mt-2 md:inline">Basket</p> */}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </header>
    </nav>
  );
}

export default Navbar;
