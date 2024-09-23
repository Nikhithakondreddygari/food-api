import React, { useState } from 'react';
import Products from './Products';
import './App.css';

const App = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const YOUR_APP_ID = "7621ecad";
  const YOUR_APP_KEY = "1c5bfad3ea889f3b54ba7764b0a77e58";

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`)
      .then(response => response.json())
      .then(data => {
        if (data && data.hits) {
          setData(data.hits);
        } else {
          setData([]);
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setData([]);
      });
  };

  return (
    <div className="app">
      <center>
        <h4>Food Recipe App</h4>
        <form onSubmit={submitHandler} className="form">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
          <input type="submit" className="btn-submit" value="Search" />
        </form>
        {Array.isArray(data) && data.length >= 1 ? <Products data={data} /> : null}
      </center>
    </div>
  );
};

export default App;