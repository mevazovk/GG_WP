import { useEffect, useState } from "react";
import { ProductCard } from "./components/ProductCard";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
      .finally(() => setLoading(false));
  }, []);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <h1>Product Store</h1>

      {}
      <button
        className="open-cart-btn"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? "Close Cart" : `View Cart (${cart.length})`}
      </button>

      {}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>Shopping Cart</h2>
        </div>

        <div className="sidebar-content">
        <button onClick={handleClearCart}>Clear Cart</button>
          {cart.length > 0 ? (
            <div>
              <ul>
                {cart.map((product, index) => (
                  <li key={index}><img className="cart-image" src={product.image}/>{product.title} - {product.price}$</li>
                ))}
              </ul>
            </div>
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
      </div>

      {}
      {loading && <div>Loading...</div>}
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
}

export default App;
