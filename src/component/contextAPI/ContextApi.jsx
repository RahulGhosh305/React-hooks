import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const COUNTER_CONTEXT = createContext({}); // Context API Hook

// eslint-disable-next-line react/prop-types
export const ContextApi = ({ children }) => {
  // useState Hook
  const [count, setCount] = useState(0);

  return (
    <COUNTER_CONTEXT.Provider value={{ count, setCount }}>
      {children}
    </COUNTER_CONTEXT.Provider>
  );
};
