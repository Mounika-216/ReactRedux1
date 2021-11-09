import React , { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {setproducts} from "../redux1/actions/productAction";
import ProductComponent from './ProductComponent';
 
const ProductListing = () => {
 const products = useSelector((state) => state);
 const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
    .get("https://fakestoreapi.com/products")
    .catch((err) => {
      console.log("Err", err);
    });
    dispatch(setproducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  },[]);

  console.log("Products : ",products);
  return(
    <div className = "ui grid container">
      <ProductComponent />
    </div>
  );
};
export default ProductListing;