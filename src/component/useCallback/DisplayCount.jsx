import React from "react";

// eslint-disable-next-line react/prop-types
const DisplayCount = ({ displayName, number }) => {
  console.log(`Callback ${displayName} Display Component Render...`);
  return <h3>{number}</h3>;
};

export default React.memo(DisplayCount);
