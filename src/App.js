import React, { useState, useEffect } from 'react'
import { GroceriesList } from './Components/GroceriesList'
import { ShoppingCart } from './Components/ShoppingCart'
import { groceries,shoppingCart } from './Local Data/data'
import './App.css';

function App() {
  const [groceriesItems, setGroceriesItems] = useState([])
  const [shoppingCartItems, setShoppingCartItems] = useState([])
  // initilaize Grocories List & shoppingCart with useEffect Hook
  useEffect(() => {
    setGroceriesItems(groceries)
    setShoppingCartItems(shoppingCart)
  }, [], [])


  return (
    <div className="App">

      <div className="container-fluid mt-2">
        <div className="row">
          <div className="col-md-6 col-sm-12 alert alert-primary">
            <GroceriesList header="Groceries List" data={groceriesItems} />
          </div>    
          <div className="col-md-6 col-sm-12 alert alert-warning">
            <ShoppingCart header="Shopping Cart" data={shoppingCartItems} />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
