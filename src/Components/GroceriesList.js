import React from 'react'

export function GroceriesList(props) {
    return (
      <ul className="list-group">
          <li className="list-group-item active" aria-current="true" >{props.header} </li>
          {
              props.data.map(item => (
                  <li key={item.id} className="list-group-item d-flex justify-content-between align-center mt-4" 
                  style={{cursor: item.quantity ? 'pointer' : 'not-allowed'}}>
                  {item.name} - Stock: {item.quantity} - price: {item.price}
                  <button type="button" id={item.id} className= {item.quantity ? 'btn btn-primary' : 'btn btn-info' }
                  onClick={() => props.itemClicked(item)}
                  disabled= {item.quantity ? '' : 'disables'}> Add to Cart </button>
                  </li>)
              )
          }
      </ul>
    )
}