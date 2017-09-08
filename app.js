
var GroceryListItem = (props) => (
  <div>
      <ul>
        <li>{props.groceries[0]}</li>
        <li>{props.groceries[1]}</li>
      </ul>
  </div>
);

var GroceryList = () => (
  <div>
    <h2> My Groceries </h2>
      <GroceryListItem groceries={['tea', 'bread']}/>
  </div>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));


// var Bread = () => (
//   <div>
//     <ul>
//       <li>Bread</li>
//     </ul>
//   </div>
// );

// var Tea = () => (
//   <div>
//     <ul>
//       <li>Tea</li>
//     </ul>
//   </div>
// );



