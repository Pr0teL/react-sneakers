import React from "react"

export function Header(props) {
    return(
        <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" alt="Arrow" />
          <div className="headerInfo">
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight">
          <li onClick={props.onClickCart}>
            <img width={18} height={18} src="/img/cart.svg" alt="" />
            <span>1205 руб</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/profile.svg" alt="" />
          </li>
        </ul>
      </header>
    )
}
export default Header