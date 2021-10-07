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

function Header({ data }) {
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

  if (data) {
    var series = data.projects.map((project) => {
      return (
        <li key={project.title} className="ml-1 list-none link">
          <p
            className="link"
            onClick={() => router.push(`/series/${project.url}`)}
          >
            <i className={project.className}>{project.title}</i>
          </p>
        </li>
      );
    });
  }
  return (
    <header className="h-full">
      <div className="items-center w-full h-full p-4 bg-white ">
        <div
          onClick={() => router.push("/")}
          className="flex items-center flex-grow link sm:flex-grow-0"
        >
          <h1 className="text-lg font-bold uppercase md:text-2xl font-montserrat ">
            Thibault Ayad
          </h1>
        </div>
        <div onClick={() => router.push(`/`)} className="text-xs link">
          <p className="">Series</p>
          <p className="">{series}</p>
        </div>
        <div onClick={() => router.push("/prints")} className="text-xs link">
          <p className="">Prints</p>
        </div>
        <div onClick={() => router.push("/about")} className="text-xs link">
          <p className="">About</p>
        </div>
        <div onClick={() => router.push("/contact")} className="text-xs link">
          <p className="">Contact</p>
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
            <div
              onClick={() => router.push("/checkout")}
              className="relative flex items-center link "
            >
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
  );
}

export default Header;
