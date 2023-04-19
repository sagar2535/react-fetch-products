import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    if (data && data.products) {
      console.log(data);
      setProducts(data.products);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      {products.length > 0 && (
        <div className='products'>
          {products.map((prod) => (
            <span key={prod.id} className='products__single'>
              <img
                style={{ cursor: 'pointer' }}
                src={prod.thumbnail}
                alt={prod.title}
              />
              <span>{prod.title}</span>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
/*
 fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(console.log);
 */
