import Head from "next/head";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
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
        <title>Thibault Ayad | Contact</title>
        <meta name="keywords" content="photos prints" />
      </Head>
      <div>Index of Contact</div>
    </>
  );
}

export default Contact;
