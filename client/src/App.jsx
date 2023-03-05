import Stock from "./components/Stock";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import useDataStore from "./store/useDataStore";
import RestockStore from "./components/RestockStore";

function App() {
  const dataStore = useDataStore();

  return (
    <div className="container text-center ">
      <div className="d-flex justify-content-center">
        <RestockStore {...dataStore} />
      </div>
      <div className="col align-items-center mt-3">
        <div className="my-3 ">
          <Stock {...dataStore} />
        </div>
        <div className="d-flex-row my-3">
          <Cart {...dataStore} />
        </div>
        <div className="d-flex-row my-3">
          <Checkout {...dataStore} />
        </div>
      </div>
    </div>
  );
}

export default App;
