import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import productsData from './products.json';
import ProductCard from './components/ProductCard';

function App() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const categories = ['All', ...new Set(productsData.map(p => p.category))];

  const filteredProducts = productsData.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase()) &&
    (category === 'All' || product.category === category)
  );

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center">🛒 Product Catalog</h2>
      <div className="row mb-3">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <select className="form-control" onChange={e => setCategory(e.target.value)}>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="row">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
