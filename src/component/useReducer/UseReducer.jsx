import { useReducer } from "react";
import MinusIcon from "../../atoms/MinusIcon";
import PlusIcon from "../../atoms/PlusIcon";
import { initial_value, reducer } from "./reducer";

const UseReducer = () => {
  // useReducer Hook
  const [state, dispatch] = useReducer(reducer, initial_value);
  return (
    <>
      <div className="d-flex justify-content-center align-items-center my-4">
        <div
          className="border p-3 rounded-3"
          style={{
            backgroundColor: "#fff",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}
        >
          <div className="text-center">
            <p>useReducer Hook</p>
            <h3>{state}</h3>
            <div className="mt-4">
              <button
                className="btn btn-primary"
                style={{ marginRight: "100px" }}
                onClick={() => dispatch({ type: "DEC", payload: 5 })}
              >
                <MinusIcon />
              </button>
              <button
                className="btn btn-success"
                onClick={() => dispatch({ type: "INC", payload: 5 })}
              >
                <PlusIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UseReducer;
