import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>E-Commerce Web Application</h1>
      <h2>Welcome to My Store</h2>

      <h3>Products</h3>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <h4>{product.name}</h4>
          <p>Price: ₹{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;