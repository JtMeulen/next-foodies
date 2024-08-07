'use server';

import Link from "next/link";
import { Suspense } from "react";

import styles from "./page.module.css";
import { getAllMeals } from "@/lib/db/meals";
import MealsGrid from "@/components/meals-grid";
import Loader from "@/components/loader";

async function Meals() {
  const meals = await getAllMeals();

  return <MealsGrid meals={meals} />
}

export default async function MealsPage() {

  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<Loader />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
