import { useRef } from "react";
import Input from "./Input";

const ForwardRef = () => {
  // useRef Hook -> It will create mutedable varibale, that will not re-render the component
  const inputRef = useRef(null);

  const handleInput = () => {
    inputRef.current.style.backgroundColor = "yellow";
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
            <p>ForwardRef Hook</p>
            <Input ref={inputRef} />
            <button onClick={() => handleInput()} className="btn btn-success">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForwardRef;
