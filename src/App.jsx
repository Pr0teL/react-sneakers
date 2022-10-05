import Card from './components/Card'


function App() {
  return (
    <div className="wrapper">
      <div className="overlay" style={{ display: "none" }}>
        <div className="drawer">
          <h2>Корзина<img className="removeBtn" src="img/btn-remove.svg" alt="Remove" /></h2>

          <div className="items">
            <div className="cartItem">
              <div style={{ backgroundImage: "url(img/sneakers/1.jpg)" }} className="cartItemImg"></div>
              <div className="cartItemInf">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src="img/btn-remove.svg" alt="Remove" />
            </div>
            <div className="cartItem">
              <div style={{ backgroundImage: "url(img/sneakers/2.jpg)" }} className="cartItemImg"></div>
              <div className="cartItemInf">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src="img/btn-remove.svg" alt="Remove" />
            </div>
          </div>
          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб. </b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб. </b>
              </li>
            </ul>
            <button className="greenButton">Оформить заказ <img src="img/arrow.svg" alt="" /></button>
          </div>
        </div>
      </div>
      <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" alt="Arrow" />
          <div className="headerInfo">
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <img width={18} height={18} src="/img/cart.svg" alt="" />
            <span>1205 руб</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/profile.svg" alt="" />
          </li>
        </ul>
      </header>
      <div className="content">
        <div className="wrapTS">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="img/search.svg" alt="Search" />
            <input placeholder="Поиск ..." />
          </div>
        </div>
        <div className="cardsSN">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
