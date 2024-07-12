import { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [inputValue, setInputValue] = useState("");

  // useRef Hook -> It will create mutedable varibale, that will not re-render the component
  const countRef = useRef(0); // inistial value
  const inputRef = useRef();

  useEffect(() => {
    countRef.current = countRef.current + 1; // that will not re-render the component
  });

  // Use to access DOM Element Directly
  const changeInputStyle = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "red";
  };

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
            <p>useRef Hook</p>
            <input
              ref={inputRef}
              type="text"
              className="form-control"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <h4>Number of time component render : {countRef.current}</h4>
            <button
              className="btn btn-success"
              onClick={() => changeInputStyle()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UseRef;
