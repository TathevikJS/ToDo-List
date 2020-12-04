import React, { useState, useEffect } from 'react';
import './App.css';
import Add from './Components/Add/Add';
import AddPost from './Components/Add/AddPost/AddPost';
import Todos from './Components/Todos/Todos';
import SimpleModal from './UI/Modal/Modal';

import { fetchTodos } from './redux/action';



function App() {

  useEffect(() => {
    fetchTodos()
  }, [])

  const body = <AddPost />

  return (
    <div className="App">
      <Add />
      <Todos />
      <SimpleModal
        body={body}
      />
    </div>
  );
}

export default App;
