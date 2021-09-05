import React, {useEffect, useState} from 'react';
import './App.css';
import Coin from './Coin'
import Stock from './components/Stock'
import axios from 'axios';

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get(url).then(res => {
      setCoins(res.data);
      console.log(res.data);
    }).catch(error => console.log(error))
  }, []);
  
  const handleChange = e => {
    setSearch(e.target.value)
  }


  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase()
  ))

  var axios = require("axios").default;

    var options = {
      method: 'GET',
      url: 'https://rest.yahoofinanceapi.com/v6/finance/quote',
      params: {symbols: 'THETA-USD,PLTR,CNY=X'},
      headers: {
        'x-api-key': 'YOUR-PERSONAL-API-KEY'
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency!</h1>
        <form>
          <input type="text" placeholder="search"
           className="coin-input" onChange={handleChange} />
        </form>
      </div>
    {filteredCoins.map(coin => {
      return(
        <Coin 
        key={coin.id} 
        name={coin.name} 
        image={coin.image} 
        symbol={coin.symbol}
        volume={coin.market_cap}
        price={coin.current_price}
        priceChange={coin.price_change_percentage_24h}
        marketcap={coin.total_volume}
        />
      )
    })}
    <Stock />
    </div>
  );
}

export default App;
