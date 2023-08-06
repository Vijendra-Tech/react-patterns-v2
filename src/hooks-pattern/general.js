import { useState } from 'react';

const useProduct = () => {
  const [products, setProducts] = useState([]);
  // load some products

  return products;
};
