import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getAllMeals() {
  // Temporary await promise to simulate loading time
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return db.prepare('SELECT * FROM meals').all();
}