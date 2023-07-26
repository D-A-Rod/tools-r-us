// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchAllProductsAsync, selectAllProducts } from "./allProductsSlice";
// import { Link } from "react-router-dom";

// const AllProducts = () => {
//   const dispatch = useDispatch();
//   const allProducts = useSelector(selectAllProducts);

//   useEffect(() => {
//     dispatch(fetchAllProductsAsync());
//   }, [dispatch]);

//   if (!allProducts) {
//     return <div>Loading...</div>;
//   }

//   if (allProducts.productList.length === 0) {
//     return <div>No products found.</div>;
//   }

//   console.log("Product List:", allProducts.productList);

//   return (
//     <div className="all-product-container">
//       <h2>View All our tools to rent</h2>
//       {allProducts.productList.map((product) => {
//         return (
//           <div className="product-card" key={product.id}>
//             <h2>{product.name}</h2>
//             <img src={product.imageUrl} alt={product.name} />
//             <p>{product.description}</p>
//             <p>Price: ${product.price / 100}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default AllProducts;

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
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AllProducts;
