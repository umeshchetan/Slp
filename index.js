import './App.css';
import { useState } from 'react';

function App() {

  const [formdata, setFormdata] = useState({
    name:'',
    email:'',
    number:''
  })
  const [arr,setArr] = useState([])
  const handleChange = (e) =>{
    const { name, value } = e.target;
    setFormdata((prev) => ({...prev, [name]: value}))
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(formdata);
    // const dataObj = (data) => [...data, formdata];
    setArr([...arr, formdata])
  }
  return (
    <div className="App">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type='text' name='name' id='name' placeholder='UserName'  onChange={(e) => handleChange(e)}/> <br />
        <input type='email' name='email' id='email'  placeholder='Email' onChange={(e) => handleChange(e)}/><br />
        <input type='text' name='number' id='number'  placeholder='Phone number' onChange={(e) => handleChange(e)}/> <br />
        <input type='submit' value="Submit" />
      </form>
      <ul>
        {
          arr.map((item,id) =>{
            return(
              <div key={id}>
                <li>{item.name}</li>
                <li>{item.email}</li>
                <li>{item.number}</li>
              </div>
              // console.log('Map ==>',item)
            )
          })
        }
      </ul>
    </div>

  );
}

export default App;
