import React from "react";
import styles from "./foodsList.module.scss";

export default function FoodsItem({ food }) {
  return (
    <li key={food.id} className={styles.item}>
      <img className={styles.card__image} src={food.image} alt={food.name} />
      <div className={styles.card__content}>
        <h3 className={styles.card__title}>{food.name}</h3>
        <p className={styles.card__description}>{food.description}</p>
      </div>
      <div className={styles.item_footer}>
        <span className={styles.card__price}>
          {food.price} <span className={styles.price__addition}>сум</span>
        </span>
        <button className={styles.card__button}>Добавить</button>
      </div>
    </li>
  );
}
