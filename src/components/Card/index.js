import React from "react"
import styles from './Card.module.scss'

export default function Card({onClickFavorite, onPlus, imageUrl, title, price}) {
 
 const [isAdded, setIsAdded] = React.useState(false)

 const onClickPlus = () => {
  onPlus({imageUrl, title, price});
  setIsAdded(!isAdded);
 }

    return(
        <div className={styles.card}>
          <div className={styles.favorite} onClick={onClickFavorite}>
            <img src="/img/unlike.svg" alt="unLike"/>
          </div>
            <img width={133} height={112} src={imageUrl} alt="Sneakers" />
            <h5>{title}</h5>
            <div className={styles.cardBottom}>
              <div className="cardInf">
                <p>Цена:</p>
                <b>{price} руб</b>
              </div>
                <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "img/btn-checked.svg" : "img/btn-unchecked.svg"} alt="+" />
            </div>
          </div>
    )
}
