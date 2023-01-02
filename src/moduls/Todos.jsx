import React, { useEffect } from "react";

export default function Todos() {
  const [todos, setTodos] = React.useState(null);
  const [isLoding, setLoding] = React.useState(true);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((respons) => respons.json())
      .then((todos) => setTodos(todos))
      .finally(() => setLoding(false));
  }, []);
  if (isLoding) {
    return <h1>Yuklenir...</h1>;
  }

  return (
    <div>
      <h1 style={{ border: "1px solid blue" }}>
        To-dos:
        {todos &&
          todos.map((todos) => {
            return (
              <div>
                <p>{todos.id}</p>
                <p>{todos.title}</p>
              </div>
            );
          })}
      </h1>
    </div>
  );
}
