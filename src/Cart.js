import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
  const {
    items,
    isEmpty,
    totalUniqueItems,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if(isEmpty)return <h1 className="text-center">Your Cart is Empty</h1>

  return 
  <section className="py-4 container">
  <div className="row justify-content-center">
    <div className="col-4">
        <h5>cart({totalUniqueItems}) totalItems({totalItems})</h5>
        <table className="table table-light table-hover m-0">
            <tbody>
            {items.map((items,index)=>{
                return(
            <tr key={index} >
                <td>
                    <img src={items.img} />

                </td>
                <td>{items.title}</td>
                <td>{items.price}</td>
                <td>Quantity ({items.quantity})</td>
                <td>
                    <button className="btn btn-info " onClick={()=>updateItemQuantity(items.id,items.quantity-1)}>-</button>
                    <button className="btn btn-info" onClick={()=>updateItemQuantity(items.id,items.quantity+1)}>
                        +
                    </button>
                    <button className="btn btn-danger"onClick={()=>removeItem(items.id)}>Remove</button>
                </td>

            </tr>
                )
            }
            )
        }
        </tbody>
        </table>
    </div>
    <div className="col-auto ">
        <h3>Total= sek{cartTotal}</h3>
    </div>
    <div className="col-auto">
      <button className="btn btn-danger"onClick={emptyCart}>empty cart
        </button>
        
    </div>
    {console.warn()}
    </div>;
    </section>
};

export default Cart;
