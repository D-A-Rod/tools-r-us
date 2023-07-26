// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams, useNavigate } from "react-router-dom";
// import { fetchSingleProductAsync, selectSingleProduct } from "./singleProductSlice";

// const SingleProduct = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const singleProduct = useSelector(selectSingleProduct);

//   useEffect(() => {
//     dispatch(fetchSingleProductAsync(id));
//   }, [dispatch]);

//   if (!singleProduct) {
//     return <div>Loading....</div>;
//   }

//     return (
//         <div>
//           <h1>Single Product</h1>
//           {singleProduct && singleProduct.id ? (
//             <div className="singleProductWrapper">
//               <h1 className="singleViewNameHeader">
//                 <p>{singleProduct.name}</p>
//                 <img src={singleProduct.imageUrl} alt={singleProduct.name} />
//                 <p>{singleProduct.description}</p>
//                 {singleProduct.available ? <p>Available</p> : <p>Not Available</p>}
//                 <p>{singleProduct.productType}</p>
//                 Price: ${singleProduct.price}
//               </h1>
//               <img src={singleProduct.imageUrl} alt={singleProduct.name} />
//               <div>
//                 <button>Add to Cart</button>
//               </div>
//             </div>
//           ) : (
//             <div>No Product found </div>
//           )}
//         </div>
//       );

// };

// export default SingleProduct;
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchSingleProductAsync,
  selectSingleProduct,
} from "./singleProductSlice";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const singleProduct = useSelector(selectSingleProduct);

  useEffect(() => {
    dispatch(fetchSingleProductAsync(id));
  }, [dispatch, id]);

  if (!singleProduct) {
    return <div>Loading....</div>;
  }

  return (
    <div>
  
      {singleProduct && singleProduct.id ? (
        <div className="single-product-wrapper">
          <div className="single-view-name-header">
            <h1>{singleProduct.name}</h1>
            <img src={singleProduct.imageUrl} alt={singleProduct.name} />
            <h2>{singleProduct.description}</h2>
            {singleProduct.available ? <p>Available</p> : <p>Not Available</p>}
            <p>{singleProduct.productType}</p>
            Price: ${singleProduct.price}
          </div>
          <div>
            <button>Add to Cart</button>
          </div>
        </div>
      ) : (
        <div>No Product found </div>
      )}
    </div>
  );
};

export default SingleProduct;
