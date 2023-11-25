import React from "react";
import styles from "./foodsList.module.scss";
import { foods } from "./foodsHelper";
import FoodsItem from "./FoodsItem.jsx";

function FoodsList({ title }) {
  return (
    <section className={styles.foods}>
      <h2 className={styles.foods__title}>{title}</h2>

      <ul className={styles.list}>
        {foods.map((food) => (
          <React.Fragment key={food.id}>
            <FoodsItem food={food} />
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
}

export default FoodsList;
