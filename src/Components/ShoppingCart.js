
export function ShoppingCart(props) {
    return (
      <ul className="list-group">
          <li className="list-group-item active" aria-current="true" >{props.header} </li>
          {
              props.data.map(item => (
                  <li key={item.id} className="list-group-item d-flex justify-content-between align-center mt-4">
                  {item.name} - Amount: {item.quantity} - Total Price: {item.price}$
                  <button type="button" id={item.id} className="btn btn-primary" 
                  /*onClick={() => props.itemClicked(item)}*/> Remove 1</button>
                  </li>)
              )
          }
      </ul>
    )
}