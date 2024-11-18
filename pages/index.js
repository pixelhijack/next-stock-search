import { useEffect, useState } from "react";
import mockData from "../test/mock.json";

export default function SearchView() {
  const apiKey = process.env.NEXT_PUBLIC_ALPHAVANTAGE_API_KEY;
  const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=${apiKey}`;

  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // temp fix to override API daily rate limit exceeded
        const displayData = Object.hasOwn(data, "Information")
          ? mockData
          : data;
        setData(displayData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div>
      <h1>Search view</h1>
      <input
        type="text"
        style={{
          minWidth: "350px",
          lineHeight: "28px",
          padding: "10px 10px",
        }}
        value={query}
        onChange={handleSearchChange}
        placeholder="Search Alphavantage stock quotes: type symbol or name"
      />
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {query && data && (
        <div>
          <h2>Search Results:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
