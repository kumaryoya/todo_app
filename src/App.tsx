import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos1, setTodos1] = useState<Todo[]>([]);
  const [todos2, setTodos2] = useState<Todo[]>([]);
  const [todos3, setTodos3] = useState<Todo[]>([]);
  const [todos4, setTodos4] = useState<Todo[]>([]);

  type Todo = {
    inputValue: string;
    id: number;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit1 = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos1.length,
    };
    setTodos1([newTodo, ...todos1]);
    setInputValue("");
  };

  const handleSubmit2 = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos2.length,
    };
    setTodos2([newTodo, ...todos2]);
    setInputValue("");
  };

  const handleSubmit3 = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos3.length,
    };
    setTodos3([newTodo, ...todos3]);
    setInputValue("");
  };

  const handleSubmit4 = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos4.length,
    };
    setTodos4([newTodo, ...todos4]);
    setInputValue("");
  };

  return (
    <div className='m-10'>
      <h1 className='text-center text-4xl py-10'>TODO管理アプリ</h1>
      <div className='flex justify-between'>
        <div>
          <form onSubmit={(e) => handleSubmit1(e)}>
              <input type="text" onChange={(e) => handleChange(e)} className='input input-bordered' />
              <input type="submit" value="+" className='btn'/>
          </form>
          <ul>
            {todos1.map((todo) => (
                <li key={todo.id}>・{todo.inputValue}</li>
            ))}
          </ul>
        </div>
        <div>
          <form onSubmit={(e) => handleSubmit2(e)}>
              <input type="text" onChange={(e) => handleChange(e)} className='input input-bordered' />
              <input type="submit" value="+" className='btn'/>
          </form>
          <ul>
            {todos2.map((todo) => (
                <li key={todo.id}>・{todo.inputValue}</li>
            ))}
          </ul>
        </div>
        <div>
          <form onSubmit={(e) => handleSubmit3(e)}>
              <input type="text" onChange={(e) => handleChange(e)} className='input input-bordered' />
              <input type="submit" value="+" className='btn'/>
          </form>
          <ul>
            {todos3.map((todo) => (
                <li key={todo.id}>・{todo.inputValue}</li>
            ))}
          </ul>
        </div>
        <div>
          <form onSubmit={(e) => handleSubmit4(e)}>
              <input type="text" onChange={(e) => handleChange(e)} className='input input-bordered' />
              <input type="submit" value="+" className='btn'/>
          </form>
          <ul>
            {todos4.map((todo) => (
                <li key={todo.id}>・{todo.inputValue}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
