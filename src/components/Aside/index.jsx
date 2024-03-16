import React from "react";

export const Aside = () => {
  return (
    <aside className="aside-menu" id="menu">
      <section className="menu">
        <h4>Menu</h4>
        <div className="menu-content">
          <article className="man">
            <h4>Man</h4>
            <div className="column-menu">
              <a href="#">Accesories</a>
              <a href="#">Bags</a>
              <a href="#">Denim</a>
              <a href="#">T-shirts</a>
            </div>
          </article>
          <article className="woman">
            <h4>Woman</h4>
            <div className="column-menu">
              <a href="#">Accesories</a>
              <a href="#">Jackets &amp;&nbsp;Coats</a>
              <a href="#">Polos</a>
              <a href="#">T-shirts</a>
              <a href="#">Shirts</a>
            </div>
          </article>
          <article className="kids">
            <h4>Kids</h4>
            <div className="column-menu">
              <a href="#">Accesories</a>
              <a href="#">Jackets &amp;&nbsp;Coats</a>
              <a href="#">Polos</a>
              <a href="#">T-shirts</a>
              <a href="#">Shirts</a>
              <a href="#">Bags</a>
            </div>
          </article>
        </div>
      </section>
    </aside>
  );
};
