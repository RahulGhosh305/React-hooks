import React from "react";

const Title = () => {
  console.log("Callback Title Render...");
  return (
    <div>
      <p>useCallback Hook</p>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(Title);
