import React from "react";
import styles from "./Products.module.scss";
import SectionTitle from "../components/SectionTitle/SectionTitle";

export default function Products() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <SectionTitle />
        <div className={styles.products}>
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
}

const Product = () => (
  <div className={styles.product}>
    <div
      className={styles.productImage}
      style={{
        backgroundImage: `url("https://uk.pandora.net/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw2754b0e8/productimages/singlepackshot/168289C01_RGB.jpg?sw=900&sh=900&sm=fit&sfrm=png&bgcolor=F5F5F5")`,
      }}
    >
      <span className={styles.tag}>-20%</span>
    </div>
    <div className={styles.infos}>
      <p className={styles.category}>Type</p>
      <p>Ayoub Jdad Neckless</p>
      <div style={{ display: "flex", gap: "6px" }}>
        <span style={{ color: "#abbc3d" }}>100 DH</span>
        <span style={{ color: "gray", textDecoration: "line-through" }}>
          120 DH
        </span>
      </div>
    </div>
  </div>
);
