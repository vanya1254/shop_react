import React, { useState } from "react";

import { Footer, Header, Subscribe } from "../components";

import img1 from "../assets/img/item1.jpg";
import img2 from "../assets/img/item2.jpg";

export const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      imgUrl: img1,
      imgAlt: "image product",
      title: "ELLERY X&nbsp;M&rsquo;O CAPSULE",
      description:
        "Known for her sculptural takes on&nbsp;traditional tailoring, Australian arbiter of&nbsp;cool Kym Ellery teams up&nbsp;with Moda Operandi.",
      price: "$84.00",
      color: "Navy",
      size: "Xl",
      quantity: 2,
    },
    {
      id: 2,
      imgUrl: img2,
      imgAlt: "image product",
      title: "ELLERY X&nbsp;M&rsquo;O CAPSULE",
      description:
        "Known for her sculptural takes on&nbsp;traditional tailoring, Australian arbiter of&nbsp;cool Kym Ellery teams up&nbsp;with Moda Operandi.",
      price: "$400.00",
      color: "Black",
      size: "Xl",
      quantity: 1,
    },
  ]);
  const [totalPrice, setTotalPrice] = useState(0);

  const onChangeQuantity = (value, id) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        item.quantity = Number(value) || item.quantity;
      }
      return item;
    });

    setCartItems(updatedCartItems);
    setTotalPrice(
      updatedCartItems.reduce(
        (acc, cur) => acc + Number(cur.price.replace("$", "")),
        0
      )
    );
  };

  return (
    <>
      <Header />
      <div className="center bg">
        <section className="top-head no-crumbs-p">
          <h2 className="top-head-title">Shopping Cart</h2>
        </section>
      </div>
      <div className="center cart">
        <div className="cart-container">
          <div className="cart-items">
            {cartItems.map((cartItem) => (
              <div key={cartItem.id} className="cart-item">
                <img
                  src={cartItem.imgUrl}
                  alt={cartItem.imgAlt}
                  className="cart-item-img"
                />
                <div className="cart-item-content">
                  <h2 className="cart-item-title"></h2>
                  <ul className="cart-item-species">
                    <li>
                      Price: <span className="mark">{cartItem.price}</span>
                    </li>
                    <li>
                      Color: <span className="color">{cartItem.color}</span>
                    </li>
                    <li>
                      Size: <span className="size">{cartItem.size}</span>
                    </li>
                    <li>
                      Quantity:
                      <input
                        value={cartItem.quantity}
                        onChange={(e) =>
                          onChangeQuantity(e.target.value, cartItem.id)
                        }
                        type="number"
                        className="cart-item-quantity quantity"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-btns">
            <button className="cart-btn">Clear Shopping Cart</button>
            <button className="cart-btn">Continue Shopping</button>
          </div>
        </div>
        <aside className="cart-order">
          <form className="cart-order-form">
            <label>Shipping Address</label>
            <input type="text" placeholder="Bangladesh" />
            <input type="text" placeholder="State" />
            <input type="text" placeholder="Postcode / Zip" />
            <button className="cart-btn">Get A&nbsp;Quote</button>
          </form>
          <div className="cart-order-total">
            <h4 className="sub">
              Sub Total <span className="ml-33">${totalPrice}</span>
            </h4>
            <h3 className="grand">
              Grand Total <span className="mark ml-20">${totalPrice}</span>
            </h3>
            <hr />
            <button className="checkout-btn">Proceed To&nbsp;Checkout</button>
          </div>
        </aside>
      </div>
      <Subscribe />
      <Footer />
    </>
  );
};
