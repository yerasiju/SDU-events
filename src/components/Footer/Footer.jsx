import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.socialLinks}>
          <a href="https://facebook.com" target="_blank">
            <i class="fa-brands fa-facebook"></i>
          </a>

          <a href="https://twitter.com" target="_blank">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
        <div className={styles.contactInfo}>
          <p>Email: sdu-events@gmail.com</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 SDU-Events. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
