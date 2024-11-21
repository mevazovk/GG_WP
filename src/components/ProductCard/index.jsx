import "./index.css";

export function ProductCard({ data, onAddToCart }) {
  const { image, category, title, price } = data;

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-category">
        <a href="#">{category}</a>
      </div>
      <h4 className="product-title">{title}</h4>
      <div className="product-price">{price}$</div>
      <button className="add-to-cart-btn" onClick={() => onAddToCart(data)}>
        Add to Cart
      </button>
    </div>
  );
}
