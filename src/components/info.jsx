import React from "react"
import AppContext from "../context"

export default function Info({image, title, description}) {
    const {setCartOpened} = React.useContext(AppContext)
    return(
        <div className="cart-empty">
            <img width={120} src={image} alt="empty" />
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={()=> setCartOpened(false)} className="greenButton buttonBack"><img src="img/arrow.svg" alt="" />Вернуться назад</button>
            </div>
    )
}