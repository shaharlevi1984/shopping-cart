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

  const groceriesItemsClicked = selectedItem => {
    const updateGroceries = groceriesItems.map(item => {
      if (item.id === selectedItem.id) {
        item.quantity--
        const cartItem = shoppingCartItems.find(item => item.id === selectedItem.id)
        if (cartItem) {
          cartItem.quantity++
          cartItem.price = parseFloat(item.price).toFixed(2) * parseFloat(cartItem.quantity).toFixed(2);
        } else {
          const newItem = { ...selectedItem, quantity: 1 }
          setShoppingCartItems(shoppingCartItems => [...shoppingCartItems, newItem]);
        }
      }
      return item
    })
    setGroceriesItems(updateGroceries)
  }

  const cartItemsClicked = selectedItem => {
    const cartItem = shoppingCartItems.find(item => item.id === selectedItem.id)
    const item = groceriesItems.find(item => item.id === selectedItem.id)
    cartItem.quantity--;
    cartItem.price = parseFloat(item.price).toFixed(2) * parseFloat(cartItem.quantity).toFixed(2);

    if (!cartItem.quantity) {
      setShoppingCartItems(shoppingCartItems.filter(item => item.id !== selectedItem.id));
    }

    const updateGroceries = groceriesItems.map(item => {
      if (item.id === selectedItem.id) {
        item.quantity++
      }
      return item
    })
    setGroceriesItems(updateGroceries)
  
  }

  return (
    <div className="App">

      <div className="container-fluid mt-2">
        <div className="row">
          <div className="col-md-6 col-sm-12 alert alert-primary">
            <GroceriesList header="Groceries List" data={groceriesItems} itemClicked={groceriesItemsClicked} />
          </div>    
          <div className="col-md-6 col-sm-12 alert alert-warning">
            <ShoppingCart header="Shopping Cart" data={shoppingCartItems} itemClicked={cartItemsClicked}/>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
