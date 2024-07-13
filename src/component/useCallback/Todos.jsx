/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Todos = ({ todos, addTodo }) => {
  console.log("child/todo render");
  return (
    <div>
      <h4>My Todos</h4>
      {todos.map((todo, index) => {
        return <p key={index}>{todo + " " + index}</p>;
      })}
      <button className="btn btn-primary" onClick={addTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default Todos;
