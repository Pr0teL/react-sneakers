import React from "react"
import Card from '../components/Card'
import AppContext from "../context"
export default function Favorites({onAddFavorite}) {

  const {favoriteItems} = React.useContext(AppContext)
    return(
        <div className="content">
        <div className="wrapTS">
          <h1>Мои закладки</h1>
          
        </div>
        <div className="cardsSN">
        {
           favoriteItems.map((item) => (
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