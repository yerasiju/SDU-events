import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.socialLinks}>
          <a
            href="https://www.instagram.com/we_sdu?igsh=bWY1eHdxMnVua2Yz"
            target="_blank"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>

          <a href="https://t.me/we_sdu" target="_blank">
            <i className="fa-brands fa-telegram"></i>
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
