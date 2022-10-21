import React from "react"
import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'



function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)

  React.useEffect(() => {
    fetch('https://6352c00ca9f3f34c37481a7c.mockapi.io/items').then((res) => {
      return res.json()
    }).then(json => {
      setItems(json)
    })}, [])

    const onAddtoCart = (obj) => {
        setCartItems(prev => [...prev, obj])}
      
       //Добавить удаление
    

  return (
    <div className="wrapper">
      {cartOpened && <Drawer cartItems={cartItems} onCloseCart={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="wrapTS">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="img/search.svg" alt="Search" />
            <input placeholder="Поиск ..." />
          </div>
        </div>
        <div className="cardsSN">
          {
            items.map((item) => (
              <Card
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onPlus={(obj) => onAddtoCart(obj)}
                onClickFavorite={() => alert("Добавили в закладки")} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
