import { useMemo, useState } from "react";
import PlusIcon from "../../atoms/PlusIcon";

const UseMemo = () => {
  // useState Hook
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);

  const getValue = () => {
    return setCount(count + 1);
  };

  //   for slowly render
  const countNumber = (num) => {
    for (let i = 0; i < 100000000; i++) {
      /* empty */
    }
    return num;
  };

  //  useMemo Hook
  const CheckData = useMemo(() => {
    console.log("UseMemo Render this....");
    return countNumber(count); // Return Memoization Value
  }, [count]);

  //   This Function will Render If any State Change
  //   const CheckData = () => {
  //     console.log("UseMemo Render this....");
  //     return countNumber(count);
  //   };

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
            <p>useMemo Hook</p>
            <h3>{CheckData}</h3>
            {/* <h3><CheckData/></h3>  */}
            <div className="mt-4">
              <button className="btn btn-success mb-3" onClick={getValue}>
                <PlusIcon />
              </button>
              <br />
              <button
                className="btn btn-primary"
                onClick={() => setShow(!show)}
              >
                {show ? "You Click me" : "Click Me Please"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UseMemo;
