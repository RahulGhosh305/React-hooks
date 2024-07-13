import { useCallback, useState } from "react";
import Todos from "./Todos";

const UseCallBackHook = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };

  // useCallback Hook to memoize addTodo function without dependency on todos
  const addTodo = useCallback(() => {
    return setTodos((prevState) => [...prevState, "New Entry"]);
  }, [todos]);

  return (
    <div className="d-flex justify-content-center align-items-center my-4">
      <div
        className="border p-3 rounded-3 text-center"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="my-3">
          <Todos todos={todos} addTodo={addTodo} />
        </div>

        <div>
          <p>Count: {count}</p>
          <button onClick={increment} className="btn btn-success">
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseCallBackHook;
