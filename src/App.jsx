


function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
        <img width={40} height ={40} src="/img/logo.png" alt="" />
        <div className="headerInfo">
          <h3>React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
        </div>
        <ul className="headerRight">
          <li>
          <img width={18} height ={18} src="/img/cart.svg" alt="" />
            <span>1205 руб</span>
          </li>
          <li>
          <img width={18} height ={18} src="/img/profile.svg" alt="" />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Все кроссовки</h1>
        <div className="cardsSN">
        <div className="card">
          <img width={133} height={112} src="img/sneakers/1.jpg" alt="Sneakers" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="cardBottom">
            <div className="cardInf">
            <p>Цена:</p>
            <b>12 999 руб</b>
          </div>
          <button>
            <img width={11} height={11} src="img/plus.svg" alt="+" />
          </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="img/sneakers/2.jpg" alt="Sneakers" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="cardBottom">
            <div className="cardInf">
            <p>Цена:</p>
            <b>12 999 руб</b>
          </div>
          <button>
            <img width={11} height={11} src="img/plus.svg" alt="+" />
          </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="img/sneakers/3.png" alt="Sneakers" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="cardBottom">
            <div className="cardInf">
            <p>Цена:</p>
            <b>12 999 руб</b>
          </div>
          <button>
            <img width={11} height={11} src="img/plus.svg" alt="+" />
          </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="img/sneakers/4.jpg" alt="Sneakers" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="cardBottom">
            <div className="cardInf">
            <p>Цена:</p>
            <b>12 999 руб</b>
          </div>
          <button>
            <img width={11} height={11} src="img/plus.svg" alt="+" />
          </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
