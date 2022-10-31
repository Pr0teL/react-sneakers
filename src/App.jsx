import React from "react"
import { Route, Routes } from 'react-router-dom'
import axios from "axios"
import Home from './pages/Home'
import Header from './components/Header'
import Drawer from './components/Drawer'
import Favorites from "./pages/Favorites"



function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favoriteItems, setFavoriteItems] = React.useState([])
  const [searchValue, setSearchValue] = React.useState("")
  const [cartOpened, setCartOpened] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get('https://6352c00ca9f3f34c37481a7c.mockapi.io/cart')
      const favoriteResponse = await axios.get('https://6352c00ca9f3f34c37481a7c.mockapi.io/favorites')
      const itemsResponse = await axios.get('https://6352c00ca9f3f34c37481a7c.mockapi.io/items')
      setCartItems(cartResponse.data);
      setFavoriteItems(favoriteResponse.data);
      setItems(itemsResponse.data);
      setIsLoading(false)
    }

    fetchData()
  }, [])

  const onAddtoCart = async (obj) => {
    try {
      if (cartItems.find(cartObj => cartObj.id === obj.id)) {
        onRemoveItem(obj.id)
      } else {
        await axios.post('https://6352c00ca9f3f34c37481a7c.mockapi.io/cart', obj)
        setCartItems(prev => [...prev, obj])
        console.log(obj);
      }
    } catch (error) {
      alert("Не удалось добавить в корзину")
    }

  }

  const onRemoveItem = (id) => {
    axios.delete(`https://6352c00ca9f3f34c37481a7c.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => Number(item.id) !== Number(id)))
  }

  const onAddFavorite = async (obj) => {
    try {
      if (favoriteItems.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://6352c00ca9f3f34c37481a7c.mockapi.io/favorites/${obj.id}`)
        setFavoriteItems(prev => prev.filter(item => item.id !== obj.id))
      } else {
        const { data } = await axios.post('https://6352c00ca9f3f34c37481a7c.mockapi.io/favorites', obj)
        setFavoriteItems(prev => [...prev, data])
      }
    } catch (error) {
      alert("Не удалось добавить в фавориты")
    }

  }


  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper">
      {cartOpened && <Drawer onRemove={onRemoveItem} cartItems={cartItems} onCloseCart={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route path="/" exact element={<Home
          items={items}
          cartItems={cartItems}
          searchValue={searchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddFavorite={onAddFavorite}
          onAddtoCart={onAddtoCart}
          isLoading={isLoading}
        />} />
        <Route path="/favorites" exact element={<Favorites items={favoriteItems} onAddFavorite={onAddFavorite} />} />
      </Routes>

    </div>
  );
}

export default App;
