import {GroceriesList} from './Components/GroceriesList'
import {groceries} from './Local Data/data'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container-fluid mt-2">
      <div className="col-md-6 col-sm-12 alert alert-primary">
            <GroceriesList header="Groceries List" data={groceries}  />
          </div>
      </div>
    </div>
  );
}

export default App;
