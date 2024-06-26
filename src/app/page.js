import Image from "next/image";
import styles from "./page.module.css";
import Header from "./header/Header";
import MainSlide from "./main-slide/MainSlide";
import Categories from "./categories/Categories";
import Products from "./products/Products";
import Footer from "./footer/Footer";
import ServicePolicy from "./service-policy/ServicePolicy";

export default function Home() {
  return (
    <>
      <Header />
      <MainSlide />
      <ServicePolicy />
      <Products />
      <Categories />
      <Products />
      <Footer />
    </>
  );
}
