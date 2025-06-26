import { useReducer } from 'react';
// import { useState } from 'react';

function App() {
  // const [submit,setSubmit]=useState({
  //   name:"",
  //   email:"",
  //   phone:""
  // })

  const intialState = {
    name: '',
    email: '',
    phone: '',
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'FIELD_UPDATE':
        return {
          ...state,
          [action.payload.field]: action.payload.value,
        };

      default:
        state;
    }
  };

  const [userInfo, dispatch] = useReducer(reducer, intialState);

  const handelOnChange = (e) => {
    e.preventDefault();
    dispatch({
      type: 'FIELD_UPDATE',
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    });
  };
  console.log(userInfo)
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);

  };

  // const handelSubmit=(e)=>{
  //   e.preventDefault()

  // }
  return (
    <div>
      <form className='form' onSubmit={handelSubmit}>
        <input type='text' name='name' placeholder='name' onChange={handelOnChange} />
        <input type='email' name='email' placeholder='email' onChange={handelOnChange} />
        <input type='text' name='phone' placeholder='phone' onChange={handelOnChange} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
