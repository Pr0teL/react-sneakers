import React from "react"
import styles from './Card.module.scss'

export default function Card({id, onPlus,onFavorite, imageUrl, title, price, favorited = false, added = false}) {
 
 const [isAdded, setIsAdded] = React.useState(added)
 const [isFavorite, setIsFavorite] = React.useState(favorited)

 const onClickPlus = () => {
  onPlus({id, imageUrl, title, price, added});
  setIsAdded(!isAdded);
 }
 const onClickFavorite = () => {
  onFavorite({id, imageUrl, title, price});
  setIsFavorite(!isFavorite);
 }

    return(
        <div className={styles.card}>
          <div className={styles.favorite} onClick={onClickFavorite}>
            <img src={isFavorite? "/img/like.svg" : "/img/unlike.svg"} alt="Like"/>
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
