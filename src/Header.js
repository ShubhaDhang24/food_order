import React from "react";
import Product from "./Product";
import data from "./data";

const Header = () => {
  return (
    <div>
      <div className="header">
        <h1>Fast Food App</h1>
        <section className="py-3 container">
          <div className="row justify-content-center">
            {data.productData.map((item, index) => {
              return (
                <Product
                  title={item.title}
                  img={item.img}
                  text={item.text}
                  price={item.price}
                  key={index}
                />
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
