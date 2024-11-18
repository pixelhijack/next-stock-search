import { useEffect, useState } from "react";

export default function SearchView() {
  const apiKey = process.env.NEXT_PUBLIC_ALPHAVANTAGE_API_KEY;
  const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=${apiKey}`;

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchData();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Search view</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
