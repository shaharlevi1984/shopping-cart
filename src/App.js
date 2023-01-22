import { GroceriesList } from './Components/GroceriesList'
import { ShoppingCart } from './Components/ShoppingCart'
import { groceries,shoppingCart } from './Local Data/data'
import './App.css';

function App() {
  return (
    <div className="App">

      <div className="container-fluid mt-2">
        <div className="row">
          <div className="col-md-6 col-sm-12 alert alert-primary">
            <GroceriesList header="Groceries List" data={groceries} />
          </div>    
          <div className="col-md-6 col-sm-12 alert alert-warning">
            <ShoppingCart header="Shopping Cart" data={shoppingCart} />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
