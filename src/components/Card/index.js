import React from "react"
import styles from './Card.module.scss'
import ContentLoader from "react-content-loader"
export default function Card({id, onPlus,onFavorite, imageUrl, title, price, favorited = false, added = false, loading = false}) {
 
 const [isAdded, setIsAdded] = React.useState(added)
 const [isFavorite, setIsFavorite] = React.useState(favorited)

 const onClickPlus = () => {
  onPlus({id, imageUrl, title, price});
  setIsAdded(!isAdded);
 }
 const onClickFavorite = () => {
  onFavorite({id, imageUrl, title, price});
  setIsFavorite(!isFavorite);
 }

    return(
        <div className={styles.card}>
          {
            loading ?  <ContentLoader 
            speed={2}
            width={210}
            height={230}
            viewBox="0 0 210 260"
            backgroundColor="#e6e6e6"
            foregroundColor="#f5f5f5"
          >
            <rect x="3" y="157" rx="3" ry="3" width="150" height="15" /> 
            <rect x="3" y="176" rx="2" ry="2" width="93" height="15" /> 
            <rect x="3" y="213" rx="8" ry="8" width="80" height="24" /> 
            <rect x="112" y="205" rx="8" ry="8" width="32" height="32" /> 
            <rect x="3" y="0" rx="10" ry="10" width="150" height="122" />
          </ContentLoader> :
          <>
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
            </>
          }
          
          </div>
    )
}
