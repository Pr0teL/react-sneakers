import React from "react"
import Card from '../components/Card'



export default function Home({ items, searchValue, onChangeSearchInput, onAddFavorite, onAddtoCart, isLoading }) {
  const renderItems = () => {
    return (isLoading ? [...Array(12)] : items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))).map((item) => (
      <Card
        onPlus={(obj) => onAddtoCart(obj)}
        onFavorite={(obj) => onAddFavorite(obj)}
        loading={isLoading}
        {...item}
      />
    ))

  }

  return (
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
          renderItems()
        }
      </div>
    </div>
  )
}