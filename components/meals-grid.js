import styles from "./meals-grid.module.css";

import MealItem from "@/components/meal-item";

export default function MealsGrid({ meals }) {
  return (
    <>
      <ul className={styles.meals}>
        {meals.map((meal, idx) => (
          <li key={idx}>
            <MealItem {...meal}/>
          </li>
        ))}
      </ul>
    </>
  );
}
