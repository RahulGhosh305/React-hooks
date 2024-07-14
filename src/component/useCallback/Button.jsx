import React from "react";

// eslint-disable-next-line react/prop-types
const Button = ({ children, handleCount, ButtonName }) => {
  console.log(`CallBack ${ButtonName} button Render...`);
  return (
    <div>
      <button
        type="button"
        onClick={() => handleCount()}
        className="btn btn-success"
      >
        {children}
      </button>
    </div>
  );
};

export default React.memo(Button);
