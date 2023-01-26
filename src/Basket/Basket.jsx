import React, { useEffect, useState } from "react";
import "./basket.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { TiTimes } from "react-icons/ti";
import { FaCcMastercard, FaCcVisa, FaCcPaypal } from "react-icons/fa";
import Api from "../utils/Api";
import Footer from "../Footer/Footer";

const Basket = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    Api.get("/api/basketproduct").then((res) => {
      setProduct(res.data);
    });
  }, []);

  const onFocus = (e) => {
    e.target.type = "date";
  };
  const onBlur = (e) => {
    e.target.type = "text";
  };

  const deleteItem = (id) => {
    Api.delete(`/api/basketproduct/${id}`).then(() => {});
    window.location.reload();
  };

  const increaseCart = (id) => {
    product?.map((item) => {
      if (id === item.id) {
        console.log("item id", item.id);
        item.count += 1;
        item.amount = parseFloat(item.price * item.count).toFixed(2);
        setProduct([...product]);
      }
    });
  };

  const decreaseCart = (id) => {
    product?.map((item) => {
      if (id === item.id) {
        if (item.count > 1) {
          console.log("item id", item.id);
          item.count -= 1;
          item.amount = parseFloat(item.amount - item.price).toFixed(2);
          setProduct([...product]);
          if (item.count <= 1) {
            item.count = 1;


          }
        }
      }
    });
  };

  let shipping = 7.28;
  let tax = 0.0;

  let subTotal = product.reduce((sum, product) => sum + product.price * product.count, 0).toFixed(2);
  let total = (Number(subTotal) + shipping + tax).toFixed(2);

  return (
    <>
      <div className="basket-container">
        <h2>
          <span>Basket</span>
        </h2>

        {product?.length !== 0 ? (
          <div className="shopping-cart">
            <div className="cart-body">
              <div className="cart-title">
                <div>
                  <div className="delete"></div>
                  <div className="cart-name">Product</div>
                  <div className="cart-quantity">Price</div>
                  <div className="cart-quantity">Quantity</div>
                  <div className="cart-quantity">Amount</div>
                </div>
              </div>

              <div className="cart-list">
                {product?.map((product) => (
                  <div className="cart-item" key={product.id}>
                    <div className="delete">
                      <button
                        className="delete-btn"
                        onClick={() => {
                          deleteItem(product.BPid);
                        }}
                      >
                        <TiTimes />
                      </button>
                    </div>
                    <div className="cart-book-width">
                      <div className="cart-book">
                        <div className="book-image">
                          <img
                            src={product.image ? product.image : ""}
                            alt={product.name}
                          />
                        </div>
                        <div className="book-name">
                          <span>{product.name}</span>
                        </div>
                      </div>
                    </div>

                    <div className="book-quantity">
                      <span>${product.price}</span>
                    </div>

                    <div className="book-quantity amount">
                      <button className="book-button button-dec">
                        <AiOutlineMinus
                          onClick={() => {
                            decreaseCart(product.id);
                          }}
                        />
                      </button>
                      <span className="span">{product.count}</span>
                      <button className="book-button button-in">
                        <AiOutlinePlus
                          onClick={() => {
                            increaseCart(product.id);
                          }}
                        />
                      </button>
                    </div>
                    <div className="book-quantity">
                      <span>
                        ${product.amount === 0 ? product.price : product.amount}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="cart-checkout">
              <div className="address">
                <h3 className="address-title">Shipping Address</h3>
                <div className="inputs">
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Last Name" />
                  <input type="text" placeholder="City" />
                  <input type="text" placeholder="Zip Code" />
                  <input type="number" placeholder="Phone Number" />
                  <input type="email" placeholder="Email" />
                </div>
                <div className="line"></div>

                <div className="cart-pay">
                  <div className="pay-options">
                    <div className="pay-carts">
                      <input type="radio" />
                      <div className="cart-name">
                        <div>
                          <FaCcMastercard />
                        </div>
                        <span>Credit Card</span>
                      </div>
                    </div>

                    <div className="pay-carts">
                      <input type="radio" />
                      <div className="cart-name">
                        <div>
                          <FaCcVisa />
                        </div>
                        <span>Debit Card</span>
                      </div>
                    </div>
                    <div className="pay-carts">
                      <input type="radio" />
                      <div className="cart-name">
                        <div>
                          <FaCcPaypal />
                        </div>
                        <span>PayPal</span>
                      </div>
                    </div>
                  </div>

                  <div className="card-info">
                    <div>
                      <input type="text" placeholder="Name on card" />
                      <input type="number" placeholder="Card Number" />
                      <input
                        type="text"
                        onFocus={onFocus}
                        onBlur={onBlur}
                        placeholder="Expiration"
                      />
                      <input type="password" placeholder="Cvv" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="order">
                <h3 className="order-title">Order Summary</h3>
                <div className="subtotal flex">
                  <span>Subtotal</span>
                  <span>${subTotal}</span>
                </div>
                <div className="shipping flex">
                  <span>Shipping</span>
                  <span>${shipping}</span>
                </div>
                <div className="tax flex">
                  <span>Estimated Tax</span>
                  <span>${tax}</span>
                </div>
                <div className="line"></div>
                <div className="total flex">
                  <span>Order Total:</span>
                  <span>${total}</span>
                </div>

                <div className="order-btn">
                  <button>Submit Order</button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div id="empty">Basket is empty!</div>
        )}
      </div>

      <Footer className={product?.length !== 0 ? "" : "all-footer"} />
    </>
  );
};

export default Basket;
