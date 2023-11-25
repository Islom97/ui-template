import React from "react";
import styles from "./Footer.module.scss";
import {
  Logo,
  InstagramIcon,
  FacebookIcon,
  TelegramIcon
} from "@/assets/icons";
import { footerMenu } from "./footerDatas";

export default function Footer() {
  return (
    <footer>
      <div className={styles.footer_navbar}>
        <Logo />
        <nav className={styles.navbar}>
          <ul className={styles.inner}>
            {footerMenu?.map((menu, i) => (
              <li key={i}>{menu}</li>
            ))}
          </ul>
        </nav>
        <span />
      </div>
      <div className={styles.footer_bottom}>
        <p>©Udevs 2020 - 2022 All rights reserved</p>
        <div className={styles.social__medias}>
          <InstagramIcon />
          <FacebookIcon />
          <TelegramIcon />
        </div>
      </div>
    </footer>
  );
}
