import React, {useState, useEffect} from 'react';
import './App.css';
import Add from './Components/Add/Add';
import AddPost from './Components/Add/AddPost/AddPost';
import Todos from './Components/Todos/Todos';
import SimpleModal from './UI/Modal/Modal';

function App() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [isEdit, setIsEdit] = useState(false)

  
  const [open, setOpen] = React.useState(false);


  const handleOpen = () => {
      setOpen(true)
  }

  const handleClose = () => {
      setOpen(false)
  }

  //// GET data ////

  const fetchData = async () => {
    setLoading(true)
    try {
      const fetchedData = await fetch('http://todo.eachbase.com/api/TathevikHayrapetyan/todos')
      const data = await fetchedData.json()
      if(data.message){
      setLoading(false)
        console.log(data.message);
      }else {
        setData(data)
        setLoading(false)
        console.log(data);
      }
    } catch (error) {
      setLoading(false)
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
            //setErrorMessage(data.error)
        } else {
            console.log(posteddata);
            setData([...data, value])
            handleClose()
        }
    } catch (error) {
        //setErrorMessage('something went wrong')
    }
}

//// DELETE ////

const deleteData = async (id) => {
  console.log(id);
  setLoading(true)
  try {
    const deletedData = await fetch(`https://todo.eachbase.com/api/TathevikHayrapetyan/todos/${id}`, {
      method: 'DELETE'
  })
    const delData = await deletedData.json()
    if(delData.message){
    setLoading(false)
      console.log(delData.message);
    }else {
      const newData = data.filter(d => d._id !== id)
      setData(newData)
      setLoading(false)
      console.log(delData);
    }
  } catch (error) {
    setLoading(false)
    console.log(error);
  }
}


//// EDIT ////

const editDataFetch = async (value, id) => {
  setIsEdit(!isEdit)
  try {
      const editData = await fetch(`https://todo.eachbase.com/api/TathevikHayrapetyan/todos/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
        },
          body: JSON.stringify(value)
      })
      const editedData = await editData.json()
      if (editedData.error) {
          //setErrorMessage(data.error)
      } else {
          console.log(editedData);
          setData([...data, value])
      }
  } catch (error) {
      //setErrorMessage('something went wrong')
  }
}

  useEffect(() => {
    fetchData()
  }, [])

  const body = <AddPost  postData={postData}/>

  return (
    <div className="App">
        <Add handleOpen={handleOpen} />
        <Todos data={data} deleteData={deleteData} editDataFetch={editDataFetch} isEdit={isEdit}/>
        <SimpleModal 
                open={open}
                handleClose={handleClose}
                body={body}
        />
    </div>
  );
}

export default App;
