import { forwardRef } from "react";

const Input = (_props, ref) => {
  return (
    <div>
      <input
        ref={ref}
        className="form-control mb-2"
        type="text"
        name=""
        id=""
      />
    </div>
  );
};

export default forwardRef(Input);
