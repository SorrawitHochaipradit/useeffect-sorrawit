import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((apiData) => setData(apiData.products));
  }, []);
  return (
    <div>
      <h1>API Data</h1>
      {data.map((item, index) => {
        return (
          <>
            <img src={item.images} />
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
          </>
        );
      })}
    </div>
  );
}

export default App;
