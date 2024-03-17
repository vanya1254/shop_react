import React from "react";
import { Footer, Header, Subscribe } from "../components";

export const Registration = () => {
  return (
    <>
      <Header />
      <div className="center bg">
        <section className="top-head no-crumbs-p">
          <h2 className="top-head-title">Registration</h2>
        </section>
      </div>
      <div className="center registration">
        <div className="registration-left">
          <form className="registration-form">
            <label>Your Name</label>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <div className="registration-radios">
              <div className="registration-radio">
                <input
                  id="male"
                  className="radio-input"
                  name="sex"
                  type="radio"
                />
                <label htmlFor="male" className="radio-label">
                  Male
                </label>
              </div>
              <div className="registration-radio">
                <input
                  id="female"
                  className="radio-input"
                  name="sex"
                  type="radio"
                />
                <label htmlFor="female" className="radio-label">
                  Female
                </label>
              </div>
            </div>
            <label>Login details</label>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <p>
              Please use 8&nbsp;or more characters, with at&nbsp;least
              1&nbsp;number and a&nbsp;mixture of&nbsp;uppercase and lowercase
              letters
            </p>
          </form>
          <button className="registration-btn">Join Now</button>
        </div>
        <aside className="registration-right">
          <p className="registration-title">Loyalty Has Its Perks</p>
          <p className="registration-text">
            Get in&nbsp;on&nbsp;the loyalty program where you can earn points
            and unlock serious perks. Starting with these as&nbsp;soon
            as&nbsp;you join:
          </p>
          <ul className="registration-ul">
            <li>15% off welcome offer</li>
            <li>Free shipping, returns and exchanges on&nbsp;all orders</li>
            <li>$10 off a&nbsp;purchase on&nbsp;your birthday</li>
            <li>Early access to&nbsp;products</li>
            <li>Exclusive offers &amp;&nbsp;rewards</li>
          </ul>
        </aside>
      </div>
      <Subscribe />
      <Footer />
    </>
  );
};
