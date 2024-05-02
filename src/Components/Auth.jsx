import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import { loginAPI, registerAPI } from '../services/allAPI';
import { tokenAuthorizationContext } from '../context/TokenAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Auth({register}) {

const [userData,setuserData]=useState({

  username:"",
  email:"",
  password:""
})
const navigate=useNavigate()
const{isAuthorized,setIsAuthorized}=useContext(tokenAuthorizationContext)
const handleRegister=async(e)=>{
  e.preventDefault()
  const{username,email,password}=userData

  if(!username ||!email ||!password){
    toast.warning("Please fill the missing fields")
  }
  else{
    const result=await registerAPI(userData)
    console.log(result);

    if(result.status===200)
    {
      console.log(result.data);
      console.log({username,email,password});
toast.success(`${result.data.username} has registered successfully`)
setuserData({
  username:"",
  email:"",
  password:""
})

navigate('/login')
    }
    else{
      toast.error(result.response.data);
      console.log(result);
    }
  }
}


const handlelogin=async(e)=>{
  e.preventDefault()
  const{email,password}=userData

  if(!email ||!password){
    toast.warning("Please fill the missing fields")
  }
  else{
    const result=await loginAPI(userData)
    console.log(result);

    if(result.status===202)
    {
      console.log(result.data);
      console.log(JSON.stringify(result.data.existingUser));
console.log("token",result.data.token);
sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
sessionStorage.setItem("token",result.data.token)
setuserData({
  email:"",
  password:""
})
setIsAuthorized(true);
navigate('/')
    }
    else{
      toast.error(result.response.data);
      console.log(result);
    }
  }
}


  const isRegisterForm=register?true:false
  return (
  
    <div style={{width:'100',height:"100vh",marginTop:"100px"}} className='d-flex justify-content-center'>
      <div className="container w-75">
        <Link to={'/'} style={{ textDecoration:"none",color:'blue'}}>Back to Home</Link>
     
<div className="card shadow p-5 "style={{backgroundColor:"#b3c6ff"}}>
<div className="row align-items-center" >
<div className="col-lg-6">
<img src="https://assets-v2.lottiefiles.com/a/567e9d6a-116d-11ee-adcc-c362dfe23881/hrMdhw3flV.gif" alt="" srcset="" className='rounded-start w-100' />
  </div>

<div className="col-lg-6">
<div className="d-flex align-items-center flex-column"></div>
 
 <h1 className='fw-bolder text-light mt-2'>Project Fair<i class="fa-solid fa-list-check fa-beat"></i>
  </h1>
   <h5 className='fw-bolder mt-4 pb-3 text-light'>
{
  isRegisterForm?'Sign up to your Account':'Sign in to your Account'
}
  </h5>

<Form className='text-light w-100'> 
{
  isRegisterForm &&
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
<Form.Control type="email" placeholder="Enter Username"value={userData.username} onChange={(e)=>{
setuserData({...userData,username:e.target.value})
}} />
</Form.Group>
}

<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

        <Form.Control type="email" placeholder="enter Email"value={userData.email} onChange={(e)=>{
setuserData({...userData,email:e.target.value})
}}/>
      </Form.Group>
     

     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  
     <Form.Control type="password" placeholder="password" value={userData.password} onChange={(e)=>{
setuserData({...userData,password:e.target.value})
}}/>
   </Form.Group>
{ 
isRegisterForm?
<div>
  <button className='btn btn-light mb-2' onClick={handleRegister}>Register</button>
  <p>Already have an accout?Click here to login<Link  to={'/login'} style={{textDecoration:"none",color:"blue"}}>Login</Link></p>
</div>:
<div>
<button className='btn btn-light mb-2'  onClick={handlelogin}>Login</button>
<p>New user ?<Link to={'/register'} style={{textDecoration:"none",color:"red"}}>Register</Link> </p>
</div>
}
</Form>







  </div>
  </div>
</div>
</div>
<ToastContainer />
    </div>
  )
}

export default Auth