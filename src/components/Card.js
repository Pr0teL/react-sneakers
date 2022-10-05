import React from "react"

export function Card() {
    return(
        <div className="card">
            <img width={133} height={112} src="img/sneakers/2.jpg" alt="Sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom">
              <div className="cardInf">
                <p>Цена:</p>
                <b>12 999 руб</b>
              </div>
              <button>
                <img width={11} height={11} src="img/plus.svg" alt="+" />
              </button>
            </div>
          </div>
    )
}

export default Card;