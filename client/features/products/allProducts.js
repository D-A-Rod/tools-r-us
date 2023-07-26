import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProductsAsync, selectAllProducts } from "./allProductsSlice";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector(selectAllProducts);

  useEffect(() => {
    if (allProducts === null) {
      dispatch(fetchAllProductsAsync());
    }
  }, [dispatch, allProducts]);

  //   const priceFunction = () => {
  //     return allProducts.price / 100
  //   }

  if (allProducts === null) {
    return <div>Loading...</div>;
  }

  if (allProducts.length === 0) {
    return <div>No products found.</div>;
  }

  console.log("All Products Array:", allProducts.length);

  return (
    <div className="all-product-container">
      <h2>View All our tools to rent</h2>
      {allProducts.map((product) => {
        return (
          <div className="product-card" key={product.id}>
            <h2>{product.name}</h2>
            <img src={product.imageUrl} alt={product.name} />
            <h5>{product.description}</h5>
            {product.available ? <p>Available</p> : <p>Not Available</p>}
            <p>{product.productType}</p>
            {/* <p>Price: ${product.price}</p> */}
            <Link to={`/singleProduct/${product.id}`}>
              <button>Go to item</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AllProducts;
