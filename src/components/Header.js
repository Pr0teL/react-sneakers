import React from "react"
import {Link} from 'react-router-dom'
export function Header(props) {
    return(
        <header>
          <Link to="/">
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" alt="Arrow" />
          <div className="headerInfo">
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        </Link>
        <ul className="headerRight">
          <li onClick={props.onClickCart}>
            <img width={18} height={18} src="/img/cart.svg" alt="Cart" />
            <span>1205 руб</span>
          </li>
          <li>
            <Link to="/favorites">
            <img width={18} height={18} src="/img/heart.svg" alt="Favorites" />
            </Link>
          </li>
          <li>
            <img width={18} height={18} src="/img/profile.svg" alt="Profile" />
          </li>
        </ul>
      </header>
    )
}
export default Header