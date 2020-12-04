import React, { useState, useEffect } from 'react';
import './App.css';
import Add from './Components/Add/Add';
import AddPost from './Components/Add/AddPost/AddPost';
import Todos from './Components/Todos/Todos';
import SimpleModal from './UI/Modal/Modal';

function App() {

  
  
 
  const [data, setData] = useState([])
  

  /* 
    sessionStorage.setItem('data', 'data')
    window.addEventListener('beforeunload', function (e) {
      e.preventDefault();
      var confirmationMessage = 'Exit message';
      sessionStorage.removeItem('data')
      console.log(confirmationMessage);
      (e && window.event).returnValue = confirmationMessage;
      return confirmationMessage;
    });  */


  const [open, setOpen] = React.useState(false);

  
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  //// GET data ////

  const fetchData = async () => {
    try {
      const fetchedData = await fetch('http://todo.eachbase.com/api/TathevikHayrapetyan/todos')
      const data = await fetchedData.json()
      if (data.message) {
        console.log(data.message);
      } else {
        setData(data)
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  }


  ////POST data////

  const postData = async (value) => {
    try {
      const fetchSignUp = await fetch('https://todo.eachbase.com/api/TathevikHayrapetyan/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(value)
      })
      const posteddata = await fetchSignUp.json()
      if (posteddata.error) {
      } else {
        console.log(posteddata);
        setData([...data, value])
        handleClose()
      }
    } catch (error) {
    }
  }

  //// DELETE ////

  const deleteData = async (id) => {
    console.log(id);
    try {
      const deletedData = await fetch(`https://todo.eachbase.com/api/TathevikHayrapetyan/todos/${id}`, {
        method: 'DELETE'
      })
      const delData = await deletedData.json()
      if (delData.message) {
        console.log(delData.message);
      } else {
        const newData = data.filter(d => d._id !== id)
        setData(newData)
      }
    } catch (error) {
      console.log(error);
    }
  }


  //// EDIT ////

  const editDataFetch = async (value, id) => {
    try {
      const editData = await fetch(`https://todo.eachbase.com/api/TathevikHayrapetyan/todos/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(value)
      })
      const editedData = await editData.json()
      if (editedData.message) {
        console.log(editedData.message);
      } else {
        console.log(editedData);
      }
    } catch (error) {
    }
  }



  const deleteAll = async () => {
    Promise.all(data.map(async (d) => {
      console.log(d._id);
      try {
        const deletedData = await fetch(`https://todo.eachbase.com/api/TathevikHayrapetyan/todos/${d._id}`, {
          method: 'DELETE'
        })
        const delData = await deletedData.json()
        if (delData.message) {
          console.log(delData.message);
        } else {
          console.log(delData);
        }
      } catch (error) {
        console.log(error);
      }
    }))
    setData([])
  }


  useEffect(() => {
    fetchData()
  }, [])

  const body = <AddPost postData={postData} />

  return (
    <div className="App">
      <Add handleOpen={handleOpen} deleteAll={deleteAll} />
      <Todos data={data} deleteData={deleteData} editDataFetch={editDataFetch} />
      <SimpleModal
        open={open}
        handleClose={handleClose}
        body={body}
      />
    </div>
  );
}

export default App;
