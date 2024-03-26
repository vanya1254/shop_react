import React, { useEffect, useState, useContext } from "react";

import { Footer, Header, Subscribe } from "../components";

import CartContext from "../contexts/cartContext";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  const onChangeQuantity = (value, id) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        item.quantity = Number(value) || item.quantity;
      }
      return item;
    });

    setCartItems(updatedCartItems);
  };

  const onClickRemove = (id) => {
    setCartItems((prev) => {
      const updatePrev = prev.filter((item) => item.id !== id);

      return [...updatePrev];
    });
  };

  const onClickClearCart = () => {
    setCartItems([]);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    setTotalPrice(
      cartItems.reduce((acc, cur) => acc + Number(cur.price) * cur.quantity, 0)
    );
  }, [cartItems]);

  return (
    <>
      <Header />
      <div className="center bg">
        <section className="top-head no-crumbs-p">
          <h2 className="top-head-title">Shopping Cart</h2>
        </section>
      </div>
      <div
        className="center cart"
        style={!cartItems.length ? { height: "50vh" } : {}}
      >
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
                      Price: <span className="mark">${cartItem.price}</span>
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
                  <button
                    onClick={() => onClickRemove(cartItem.id)}
                    className="cart-item-after"
                  ></button>
                </div>
              </div>
            ))}
          </div>
          {cartItems.length ? (
            <div className="cart-btns">
              <button onClick={onClickClearCart} className="cart-btn">
                Clear Shopping Cart
              </button>
              <button className="cart-btn">Continue Shopping</button>
            </div>
          ) : (
            "CART EMPTY"
          )}
        </div>
        {cartItems.length ? (
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
        ) : (
          ""
        )}
      </div>
      <Subscribe />
      <Footer />
    </>
  );
};

export default Cart;
