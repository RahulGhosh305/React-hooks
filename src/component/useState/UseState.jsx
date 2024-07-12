import { useState } from "react";
import MinusIcon from "../../atoms/MinusIcon";
import PlusIcon from "../../atoms/PlusIcon";

const UseState = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="d-flex justify-content-center align-items-center my-5">
        <div
          className="border p-3 rounded-3"
          style={{
            backgroundColor: "#fff",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}
        >
          <div className="text-center">
            <p>useState Hook</p>
            <h3>{count}</h3>
            <div className="mt-4">
              <button
                className="btn btn-primary"
                style={{ marginRight: "100px" }}
                onClick={() =>
                  count === 0
                    ? setCount(0)
                    : setCount((previousValue) => previousValue - 1)
                }
              >
                <MinusIcon />
              </button>
              <button
                className="btn btn-success"
                onClick={() => setCount((previousValue) => previousValue + 1)}
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

export default UseState;
