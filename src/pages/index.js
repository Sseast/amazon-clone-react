import Head from "next/head";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
import React, { useEffect, useState } from "react";

import path from "path";
// import matter from "gray-matter";
// import marked from "marked";
import Link from "next/link";
import { getSession } from "next-auth/client";
import Image from "next/image";

export default function Home({ posts, products, session }) {
  const [resumeData, setResumeData] = useState({});
  const [selectedSerie, setSelectedSerie] = useState("New York, USA");

  useEffect(() => {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);
  return (
    <>
      <Head>
        <title>Thibault Ayad | Home</title>
        <meta name="keywords" content="photos prints" />
      </Head>
      <div className="flex bg-gray-100">
        {/* Header Component */}
        {/* <Header data={resumeData.series}></Header> */}
        <div>
          <Image src="/DSC_0165.jpg" width="300 " height="300"></Image>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const products = await fetch("https://fakestoreapi.com/products/").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
      session,
    },
  };
}
// GET https://fakestoreapi.com/products/
