import { useEffect, useState } from "react";
import MinusIcon from "../../atoms/MinusIcon";
import PlusIcon from "../../atoms/PlusIcon";

const UseEffect = () => {
  // useState Hook
  const [count, setCount] = useState(0);

  // useEffect Hook -> No Dependency Passed = Run on every render
  useEffect(() => {
    document.title = count;
  });

  // useEffect Hook -> An empty array = Run only first render
  //   useEffect(() => {
  //     document.title = count;
  //   }, []);

  // useEffect Hook -> Pass props or state value = Run only first render or if props, state value will changes
  //   useEffect(() => {
  //     document.title = count;
  //   }, [count]);

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
            <p>useEffect Hook</p>
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

export default UseEffect;
