import { useEffect } from "react";
import homeStore from "../src/store/homeStore";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import ListItems from "./components/ListItems";

export default function home() {
  const store = homeStore();

  useEffect(() => {
    store.fetchCoins();
  }, []);

  return (
    <div>
      <Header />
      <header className="home-search">
        <div className="width">
          <h2>Input coin</h2>
          <div className="home-search-input">
            <input
              type="text"
              placeholder="Search"
              value={store.query}
              onChange={store.setQuery}
            />
          </div>
        </div>
      </header>
      <div className="home-cryptos">
        <div className="width">
          <h2> {!store.searched? 'Trending Coins': 'Searched Results'}</h2>
          {store.coins.map((coin) => {
            return <ListItems key={coin.id} coin={coin} />;
          })}
        </div>
      </div>
    </div>
  );
}