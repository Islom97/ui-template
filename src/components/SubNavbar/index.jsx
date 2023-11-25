import React from "react";
import styles from "./SubNavbar.module.scss";

const SubNavbarList = [
  "Пицца",
  "Паста",
  "Синнамон-роллы",
  "Напитки",
  "Гарниры",
  "Соус",
  "Салаты",
  "Еще"
];

export default function SubNavbar() {
  return (
    <nav>
      <ul className={styles.list}>
        {SubNavbarList.map((menu, i) => (
          <li className={styles.item} key={i}>
            {menu}
          </li>
        ))}
      </ul>
    </nav>
  );
}
