import React from "react";
import data from "./data";
import  "./Product.css";
import {useCart} from "react-use-cart"


const Product = (props) => {
    const{addItem}=useCart();

  return (
    <div className=" row col-md-3">
      <div className="card ">
        <img className="card-img-top" src={props.img} alt="Card image" />
        <div className="card-body">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text">{props.text}</p>
          <p className="card-text">{props.price}</p>
          <button className="btn btn-primary"onClick={()=>addItem(props.item)
            }>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
