import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  type Todo = {
    inputValue: string; //タイトル
    id: number; //ID
    status: number; //4つのボード
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos.length,
      status: 1,
    };
    setTodos([newTodo, ...todos]);
    setInputValue("");
  };

  return (
    <div className='m-10'>
      <h1 className='text-center text-4xl py-10'>TODO管理アプリ</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" onChange={(e) => handleChange(e)} className='input input-bordered' />
          <input type="submit" value="+" className='btn'/>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>・{todo.inputValue}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
