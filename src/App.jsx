import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const tambahTodo = () => {
    if (todo === "") return;

    const dataBaru = {
      id: Date.now(),
      text: todo,
      selesai: false,
    };

    setTodos([...todos, dataBaru]);
    setTodo("");
  };

  const hapusTodo = (id) => {
    const hasil = todos.filter((item) => item.id !== id);
    setTodos(hasil);
  };

  const toggleSelesai = (id) => {
    const updateTodo = todos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          selesai: !item.selesai,
        };
      }

      return item;
    });

    setTodos(updateTodo);
  };

  return (
    <div className="container">
      <h1>Todo App React</h1>

      <div className="input-group">
        <input
          type="text"
          placeholder="Masukkan todo..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <button onClick={tambahTodo}>Tambah</button>
      </div>

      <div className="todo-list">
        {todos.map((item) => (
          <div className="todo-item" key={item.id}>
            <p className={item.selesai ? "selesai" : ""}>
              {item.text}
            </p>

            <div className="button-group">
              <button onClick={() => toggleSelesai(item.id)}>
                Selesai
              </button>

              <button onClick={() => hapusTodo(item.id)}>
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;