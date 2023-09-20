"use client"
import Image from "next/image";
import styles from "./page.module.css";
import NavbarSection from "./components/Navbar/Navbar";
import HomePage from "./pages/home/page";
import FooterSection from "./components/footer/FooterSection";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <NavbarSection />
      <HomePage />
      <FooterSection />
    </>
  );
}
