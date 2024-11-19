import { useRouter } from "next/router";

export default function DetailView() {
  const router = useRouter();
  const { stock } = router.query;

  return (
    <div>
      <h1>Stock name: {stock}</h1>
      <p>This is the dynamic route for stock: {stock}</p>
    </div>
  );
}
