import React, { useContext, useState, useEffect } from 'react';
import Nav from './Nav.jsx'; // Ensure this path is correct
import { Link, useLocation } from 'react-router-dom';
import { ProductContext } from './utils/Context.jsx';
import Loading from './Loading.jsx';
import axios from './utils/axios';

function Home() {
  const [products] = useContext(ProductContext);

  // Get the search query from the URL
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);

  // State to store filtered products
  const [filteredProducts, setFilteredProducts] = useState(null);

  // Function to get products by category
  const getProductsCategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setFilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect to fetch products when category changes
  useEffect(() => {
    if (!filteredProducts || category == "undefined") setFilteredProducts(products)
    if (category != "undefined") getProductsCategory();
  }, [category, products]);

  return products ? (
    <>
      <Nav />
      <div className='h-full w-[85%] bg-red-100 p-5 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto'>
        {filteredProducts && filteredProducts.map((p, i) => (
          <Link key={p.id} to={`/Details/${p.id}`} className='card mr-3 mb-3 w-[18%] h-[25vh] border-blue-100 rounded shadow p-5 flex justify-center items-center flex-col'>
            <div 
              className='w-full h-[80%] bg-contain bg-no-repeat bg-center'
              style={{ backgroundImage: `url(${p.image})` }}></div>
            <div>{p.title}</div>
          </Link>
        ))}
      </div>
    </>
  ) : (<Loading />);
}

export default Home;

// bbv
