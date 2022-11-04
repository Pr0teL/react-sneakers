import React from "react"
import AppContext from "../context"
import Info from './info'
import axios from 'axios'

export function Drawer({ onCloseCart, onRemove = [] }) {
  const [ordered, setOrdered] = React.useState(false)
  const [orderId, setOrderId] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)
  const { cartItems, setCartItems, cost,setCost } = React.useContext(AppContext)


  const onOrder = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.post('https://6352c00ca9f3f34c37481a7c.mockapi.io/orders', {
        items: cartItems,
      })
      setOrderId(data.id)
      setOrdered(true)
      setCartItems([])
      
      //Жуткий костыль для работы с Mock.api тк нету возможности сразу все удалить или заменить
      cartItems.forEach(item => {
        axios.delete(`https://6352c00ca9f3f34c37481a7c.mockapi.io/cart/${item.id}`,{})
      })


    } catch (error) {
      alert("Не удалось оформить заказ :(")
    }
    setIsLoading(false)
  }
  return (
    <div className="overlay">
      <div className="drawer">
        <h2>Корзина<img onClick={onCloseCart} className="removeBtn" src="img/btn-remove.svg" alt="Remove" /></h2>

        {
          cartItems.length > 0 ? <>
            <div className="items">
              {cartItems.map((obj) => (
                <div className="cartItem">
                  <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cartItemImg"></div>
                  <div className="cartItemInf">
                    <p>{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img onClick={() => {onRemove(obj.id); setCost(cost - obj.price)}} className="removeBtn" src="img/btn-remove.svg" alt="Remove" />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>{cost} руб. </b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{cost * 0.05} руб. </b>
                </li>
              </ul>
              <button disabled={isLoading} onClick={onOrder} className="greenButton">Оформить заказ <img src="img/arrow.svg" alt="" /></button>
            </div>
          </>
            : <Info title={ordered ? "Заказ оформлен" : "Корзина пустая"} description={ordered ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."} image={ordered ? "/img/ordered.png" : "/img/empty-cart.png"} />
        }
      </div>
    </div>
  )
}

export default Drawer