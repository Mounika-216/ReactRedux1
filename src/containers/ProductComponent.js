import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const contentStyle = {
  width: '250px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
}
const ProductComponent = () =>{
  // use Selector is used to access the redux state value  and store it in a react component variable
const products = useSelector((state) => state.allproducts.products);
 const renderList = products.map((product) =>{
   const {id , title ,image , price, category} = product ;
     return(
     <div className = "four wide column"  key = {id}>
        <Link to={`/product/${id}`}>
        <div className = "ui link cards">
          <div className = " ui card" >
            
              <div className = "image" style={{height : '350px'}}>
                <img src = {image} alt= {title} style={{height : '100%'}} />
              </div>
          
               <div className = "content">
                   <div className="header" style={contentStyle}>{title}</div>
                   <div className= "meta price">${price}</div>
                   <div className ="meta">{category}</div>
              </div>
           </div>
        </div>
        </Link>
     </div>);
 })
  return(
     <>{renderList}</>
  );
};
export default ProductComponent;