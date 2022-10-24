import React from "react"
import Card from '../components/Card'
export default function Favorites({items, onAddFavorite}) {
    return(
        <div className="content">
        <div className="wrapTS">
          <h1>Мои закладки</h1>
          
        </div>
        <div className="cardsSN">
        {
           items.map((item) => (
              <Card
                key={item.imageUrl}
                favorited={true}
                onFavorite={onAddFavorite}
                {...item}
                 />
            ))
          }
        </div>
      </div>
    )
}