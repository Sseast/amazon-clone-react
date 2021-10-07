import Head from "next/head";
import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  const [resumeData, setResumeData] = useState({});

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
        <title>Thibault Ayad | About</title>
        <meta name="keywords" content="photos prints" />
      </Head>
      <div>Index of About</div>
    </>
  );
}

export default About;
