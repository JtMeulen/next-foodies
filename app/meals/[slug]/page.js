export default function MealPage({ params }) {
  const slug = params.slug;

  return <h1>This is the {slug} Page</h1>;
}
