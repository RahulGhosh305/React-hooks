import { useCallback, useState } from "react";
import Button from "./Button";
import DisplayCount from "./DisplayCount";
import Title from "./Title";

const UseCallBackHook = () => {
  // useState Hook
  const [count1, setCount1] = useState(0);
  const [count5, setCount5] = useState(0);

  // useCallback Hook
  const incrementBy1 = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]);

  const incrementBy5 = useCallback(() => {
    return setCount5(count5 + 5);
  }, [count5]);

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
            <Title />
            <div className="d-flex">
              <div>
                <span>Inrement By 1:</span>
                <DisplayCount displayName={"Inrement By 1"} number={count1} />
                <Button handleCount={incrementBy1} ButtonName={"Inrement By 1"}>
                  {"Inrement By 1"}
                </Button>
              </div>
              <div className="mx-2"></div>
              <div>
                <span>Increment By 5:</span>
                <DisplayCount displayName={"Inrement By 5"} number={count5} />
                <Button handleCount={incrementBy5} ButtonName={"Inrement By 5"}>
                  {"Inrement By 5"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UseCallBackHook;
