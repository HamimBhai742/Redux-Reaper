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
    console.log(action);
    switch (action.type) {
      case 'FIELD_UPDATE':
        return {
          ...state,
          [action.payload.field]: action.payload.value,
        };
      case 'RESET':
        return {
          name: '',
          email: '',
          phone: '',
        };
      case 'CLEAR':
        return {
          ...state,
          [action.payload.field]: "clrear",
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
  console.log(userInfo);
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
  };

  // const handelSubmit=(e)=>{
  //   e.preventDefault()

  // }
  const handelCrea = (field) => {
    dispatch({
      type: 'CLEAR',
      payload: {
      field
      },
    });
  };
  return (
    <div>
      <form className='form' onSubmit={handelSubmit}>
        <div>
          <input
            type='text'
            name='name'
            placeholder='name'
            onChange={handelOnChange}
          />
          <button onClick={() => handelCrea("name")}>Clear</button>
        </div>
        <input
          type='email'
          name='email'
          placeholder='email'
          onChange={handelOnChange}
        />
        <input
          type='text'
          name='phone'
          placeholder='phone'
          onChange={handelOnChange}
        />
        <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
