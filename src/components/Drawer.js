import React from "react"

export function Drawer({onCloseCart, cartItems = []}) {
    return(
        <div className="overlay">
        <div className="drawer">
          <h2>Корзина<img onClick={onCloseCart} className="removeBtn" src="img/btn-remove.svg" alt="Remove" /></h2>

          <div className="items">
            {cartItems.map((obj) => (
              <div className="cartItem">
              <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cartItemImg"></div>
              <div className="cartItemInf">
                <p>{obj.title}</p>
                <b>{obj.price} руб.</b>
              </div>
              <img className="removeBtn" src="img/btn-remove.svg" alt="Remove" />
            </div>
            ))}
          </div>
          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб. </b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб. </b>
              </li>
            </ul>
            <button className="greenButton">Оформить заказ <img src="img/arrow.svg" alt="" /></button>
          </div>
        </div>
        </div>
    )
}

export default Drawer