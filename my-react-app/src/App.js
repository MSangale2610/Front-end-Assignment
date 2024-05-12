import React, { useState } from 'react';
import TodoRow from './TodoRow';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }));
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="border border-gray-400 rounded-l py-2 px-4"
          placeholder="Enter a new todo..."
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r"
        >
          Add Todo
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map(todo => (
          <TodoRow
            key={todo.id}
            todo={todo}
            onDelete={() => handleDeleteTodo(todo.id)}
            onToggleComplete={() => handleToggleComplete(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;



