import { ContextApi } from "./component/contextAPI/ContextApi";
import CounterApp from "./component/contextAPI/CounterApp";
import UseCallback from "./component/useCallback/UseCallback";
import UseEffect from "./component/useEffect/UseEffect";
import UseLayoutEffect from "./component/useLayoutEffect/UseLayoutEffect";
import UseMemo from "./component/useMemo/UseMemo";
import UseReducer from "./component/useReducer/UseReducer";
import UseRef from "./component/useRef/UseRef";
import UseState from "./component/useState/UseState";

function App() {
  return (
    <>
      <div className="container">
        <h3 className="text-center">Example Of All React Hooks</h3>
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
          <div className="col-12 col-md-6 col-lg-4">
            <UseLayoutEffect />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <UseMemo />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <UseCallback />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
