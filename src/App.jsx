import { ContextApi } from "./component/contextAPI/ContextApi";
import CounterApp from "./component/contextAPI/CounterApp";
import UseEffect from "./component/useEffect/UseEffect";
import UseReducer from "./component/useReducer/UseReducer";
import UseRef from "./component/useRef/UseRef";
import UseState from "./component/useState/UseState";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <UseState />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <UseEffect />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <ContextApi>
              <CounterApp />
            </ContextApi>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <UseReducer />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <UseRef />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
