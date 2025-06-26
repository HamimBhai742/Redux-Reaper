import { useState } from "react"

function App() {
const [submit,setSubmit]=useState({
  name:"",
  email:"",
  phone:""
})

const userInfo=(input,value)=>{
  setSubmit({
    ...submit,[input]:value
  })
}
const handelSubmit=(e)=>{
  e.preventDefault()
console.log(submit)
}
  return (
    <div>
      <form className="form" onSubmit={handelSubmit}>
        <input type="text" placeholder='name' onChange={(e)=>userInfo("name",e.target.value)}/>
        <input type="email" placeholder='email' onChange={(e)=>userInfo("email",e.target.value)} />
        <input type="text" placeholder='phone' onChange={(e)=>userInfo("phone",e.target.value)} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
