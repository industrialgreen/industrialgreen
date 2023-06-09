import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { useState } from "react";
import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import { usePathname } from "next/navigation";

const Test = () => {
  const path = usePathname();

  const variants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const images = {
    hidden: { opacity: 1, x: 30 },
    show: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const variantsPro = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const imagesPro = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageWrapper>

        <div
          style={{ display: "flex", flexDirection: "column", height: "50vh" }}
        >
          <h1>Strona główna</h1>
          <Link href="/projects">
            <div>Przejdź do projektów</div>
          </Link>

          <motion.div
            variants={variants}
            initial="hidden"
            animate="show"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              margin: "20px",
            }}
          >
            <motion.img
              variants={images}
              src="https://placedog.net/150/150/40"
            />
            <motion.img
              variants={images}
              src="https://placedog.net/150/150/30"
            />
            <motion.img
              variants={images}
              src="https://placedog.net/150/150/21"
            />
            <motion.img
              variants={images}
              src="https://placedog.net/150/150/20"
            />
          </motion.div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
            }}
          >
            <h2>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
              necessitatibus error iste nulla ipsam totam earum quaerat, iure
              molestias inventore repudiandae impedit quas aliquam neque
              voluptatum expedita excepturi maiores ab?
            </h2>
          </div>
        </div>

        <h1>Projekty</h1>
        <motion.div
          variants={variantsPro}
          initial="hidden"
          animate="show"
          style={{
            display: "grid",
            gridTemplateColumns: "150px 150px",
            justifyContent: "center",
            gap: "15px",
            margin: "20px",
          }}
        >
          <motion.img
            variants={imagesPro}
            src="https://placedog.net/150/150/40"
          />
          <motion.img
            variants={imagesPro}
            src="https://placedog.net/150/150/30"
          />
          <motion.img
            variants={imagesPro}
            src="https://placedog.net/150/150/21"
          />
          <motion.img
            variants={imagesPro}
            src="https://placedog.net/150/150/20"
          />
        </motion.div>
      </PageWrapper>
    </>
  );
};

export default Test;
