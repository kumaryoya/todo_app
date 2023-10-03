import React, { useState } from 'react';
import Modal from "react-modal";
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos1, setTodos1] = useState<Todo[]>([]);
  const [todos2, setTodos2] = useState<Todo[]>([]);
  const [todos3, setTodos3] = useState<Todo[]>([]);
  const [todos4, setTodos4] = useState<Todo[]>([]);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);

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
    setModal1(false);
  };

  const handleSubmit2 = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos2.length,
    };
    setTodos2([newTodo, ...todos2]);
    setInputValue("");
    setModal2(false);
  };

  const handleSubmit3 = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos3.length,
    };
    setTodos3([newTodo, ...todos3]);
    setInputValue("");
    setModal3(false);
  };

  const handleSubmit4 = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos4.length,
    };
    setTodos4([newTodo, ...todos4]);
    setInputValue("");
    setModal4(false);
  };

  const openModal1 = () => {
    setModal1(true);
  };

  const openModal2 = () => {
    setModal2(true);
  };

  const openModal3 = () => {
    setModal3(true);
  };

  const openModal4 = () => {
    setModal4(true);
  };

  const closeModal1 = () => {
    setModal1(false);
  };

  const closeModal2 = () => {
    setModal2(false);
  };

  const closeModal3 = () => {
    setModal3(false);
  };

  const closeModal4 = () => {
    setModal4(false);
  };

  return (
    <div className='m-20'>
      <h1 className='text-center text-4xl py-10'>TODO管理アプリ</h1>
      <div className='flex justify-between'>
        <div>
          <button onClick={openModal1} className='btn px-28 mb-10'>+</button>
          <Modal isOpen={modal1}>
            <form onSubmit={(e) => handleSubmit1(e)} className='text-center'>
              <input type="text" onChange={(e) => handleChange(e)} className='input input-bordered mb-5' />
              <div className='flex justify-center items-center'>
                <button onClick={closeModal1} className="btn mx-2">Cancel</button>
                <input type="submit" value="OK" className='btn mx-2'/>
              </div>
            </form>
          </Modal>
          <ul>
            {todos1.map((todo) => (
              <li key={todo.id} className='border pl-5 py-5'>・{todo.inputValue}</li>
            ))}
          </ul>
        </div>
        <div>
          <button onClick={openModal2} className='btn px-28 mb-10'>+</button>
          <Modal isOpen={modal2}>
            <form onSubmit={(e) => handleSubmit2(e)} className='text-center'>
              <input type="text" onChange={(e) => handleChange(e)} className='input input-bordered mb-5' />
              <div className='flex justify-center items-center'>
                <button onClick={closeModal2} className="btn mx-2">Cancel</button>
                <input type="submit" value="OK" className='btn mx-2'/>
              </div>
            </form>
          </Modal>
          <ul>
            {todos2.map((todo) => (
              <li key={todo.id} className='border pl-5 py-5'>・{todo.inputValue}</li>
            ))}
          </ul>
        </div>
        <div>
          <button onClick={openModal3} className='btn px-28 mb-10'>+</button>
          <Modal isOpen={modal3}>
            <form onSubmit={(e) => handleSubmit3(e)} className='text-center'>
              <input type="text" onChange={(e) => handleChange(e)} className='input input-bordered mb-5' />
              <div className='flex justify-center items-center'>
                <button onClick={closeModal3} className="btn mx-2">Cancel</button>
                <input type="submit" value="OK" className='btn mx-2'/>
              </div>
            </form>
          </Modal>
          <ul>
            {todos3.map((todo) => (
              <li key={todo.id} className='border pl-5 py-5'>・{todo.inputValue}</li>
            ))}
          </ul>
        </div>
        <div>
          <button onClick={openModal4} className='btn px-28 mb-10'>+</button>
          <Modal isOpen={modal4}>
            <form onSubmit={(e) => handleSubmit4(e)} className='text-center'>
              <input type="text" onChange={(e) => handleChange(e)} className='input input-bordered mb-5' />
              <div className='flex justify-center items-center'>
                <button onClick={closeModal4} className="btn mx-2">Cancel</button>
                <input type="submit" value="OK" className='btn mx-2'/>
              </div>
            </form>
          </Modal>
          <ul>
            {todos4.map((todo) => (
              <li key={todo.id} className='border pl-5 py-5'>・{todo.inputValue}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
