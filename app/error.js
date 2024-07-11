"use client";

export default function Error({ error }) {
  console.log(error)
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>An issue occurred, we are sorry!</p>
    </main>
  );
}
