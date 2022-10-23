import React from "react"
import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'



function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [searchValue, setSearchValue] = React.useState("")
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
    
    const onChangeSearchInput = (event) => {
      setSearchValue(event.target.value)
    }

  return (
    <div className="wrapper">
      {cartOpened && <Drawer cartItems={cartItems} onCloseCart={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="wrapTS">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
          <div className="search-block">
            <img src="img/search.svg" alt="Search" />
            <input maxLength={20} value={searchValue} onChange={onChangeSearchInput} placeholder="Поиск ..." />
          </div>
        </div>
        <div className="cardsSN">
          {
            items.filter((item)=> item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item) => (
              <Card
                key={item.imageUrl}
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
