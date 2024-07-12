import UseEffect from "./component/useEffect/UseEffect";
import UseState from "./component/useState/UseState";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <UseState />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <UseEffect />
          </div>
          <div className="col-12 col-md-6 col-lg-3"></div>
        </div>
      </div>
    </>
  );
}

export default App;
