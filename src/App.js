import { ProductCard } from "./components/ProductCard";

const products = [
  {
    id: 0,
    name: "Product 1",
    category: "Category 1",
    price: 200,
    img: "https://img.freepik.com/premium-photo/dog-field-flowers_865967-16274.jpg",
  },
  {id: 1,
    name: "Product 2",
    category: "Category 2",
    price: 500,
    img: "https://yac-wh-sb-prod-s3-media-07001.storage.yandexcloud.net/media/images/britanskaya-korotkosherstnaya-.max-2880x1820.format-jpeg_aw71Muw.jpg",
  },
];

function App() {
  return (
    <div>
      {
        products.map((product)=>(
        <ProductCard data= {product}/>
      ))}
    </div>
  );
}

export default App;
