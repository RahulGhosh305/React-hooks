// useLayoutEffect -> run synchronously after the render but before the screen update. This means that the browser paint the UI after the effect runs.

// useEffect -> run asynchronously after the render is committed to the screen. This means that the browser has already painted the UI before the effect runs.

import { useEffect, useLayoutEffect, useState } from "react";

const UseLayoutEffect = () => {
  const [num, setNum] = useState(10);

  useLayoutEffect(() => {
    if (num == 0) {
      setNum(num + Math.random() * 100);
    }
  }, [num]);

  useEffect(() => {
    console.log("I am First console");
  });
  useLayoutEffect(() => {
    // useLayoutEffect is faster render than useEffect
    console.log("I am Second console");
  });
  useEffect(() => {
    console.log("I am Third console");
  });

  return (
    <div className="d-flex justify-content-center align-items-center my-4">
      <div
        className="border p-3 rounded-3"
        style={{
          backgroundColor: "#fff",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      >
        <div className="text-center">
          <p>useLayoutEffect Hook</p>
          <p>For Another Example Inspect Console</p>

          <h3>{num}</h3>

          <div className="mt-4">
            <button className="btn btn-success" onClick={() => setNum(0)}>
              Set Value 0
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseLayoutEffect;
