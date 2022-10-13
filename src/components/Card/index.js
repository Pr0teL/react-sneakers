import React from "react"
import styles from './Card.module.scss'

export default function Card(props) {
  const onClickButton = () => {
    alert(props.title)
  }
    return(
        <div className={styles.card}>
          <div className={styles.favorite}>
            <img src="/img/unlike.svg" alt="unLike"/>
          </div>
            <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
            <h5>{props.title}</h5>
            <div className={styles.cardBottom}>
              <div className="cardInf">
                <p>Цена:</p>
                <b>{props.price} руб</b>
              </div>
              <button onClick={onClickButton}>
                <img width={11} height={11} src="img/plus.svg" alt="+" />
              </button>
            </div>
          </div>
    )
}
