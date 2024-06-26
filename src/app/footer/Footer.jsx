import React from "react";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div className={styles.gridElement}>
            <img
              className={styles.logo}
              src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            />
            <p className={styles.description}>
              We are a team of designers and developers that create high quality
              wordpress, shopify, Opencart.
            </p>
          </div>
          <div>Hello</div>
          <div>Hello</div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>Copyright © 2024 Majdouline Jewelry | Built by BigFocus.</p>{" "}
        <img src="https://corano-demo.myshopify.com/cdn/shop/files/payment_large.png?v=1613781786" />
      </div>
    </div>
  );
}
