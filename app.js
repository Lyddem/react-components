var GroceryList = () => (
  <div>
    <Tea />
    <Bread />
  </div>
);

var Bread = () => (
  <div>
    <ul>
      <li>Bread</li>
    </ul>
  </div>
);

var Tea = () => (
  <div>
    <ul>
      <li>Tea</li>
    </ul>
  </div>
);
ReactDOM.render(<GroceryList />, document.getElementById("app"));
