import React, { useContext, useEffect, useState } from 'react'
import Addprojects from './Addprojects'
import { allProjectsAPI, deleteProjectAPI, getUserAPI, userProjectsAPI } from '../services/allAPI'
import { addProjectResponseContext, editProjectResponseContext } from '../context/ContextShare'
import Editproject from './Editproject'
import Alert from 'react-bootstrap/Alert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Myprojects() {
  const{editProjectResponse,setEditProjectResponse}=useContext(editProjectResponseContext)
  const[userProjects,setUserProjects]=useState([])
  const {addProjectResponse,setAProjectResponse}=useContext(addProjectResponseContext)
  const getUserProjects=async()=>{
    if(sessionStorage.getItem("token"))
    {
      const token=sessionStorage.getItem("token")
      const reqHeader={
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
      const result=await userProjectsAPI(reqHeader)
      if(result.status===200)
      {
        setUserProjects(result.data)
      }
      else{
       // console.log(result);
        //console.log(result.response.data);
      }
    }
  }
 
 useEffect(()=>{
  getUserProjects()
 },[addProjectResponse,editProjectResponse])

const handleDelete=async(id)=>
{
console.log('started deleting...');
const token=sessionStorage.getItem("token")
const reqHeader={
  "Content-Type":"application/json",
  "Authorization":`Bearer ${token}`
}
console.log('header',reqHeader);
const result=await deleteProjectAPI(id,reqHeader)
  if(result.status==200)
  {
    getUserProjects();
    toast.success('Deleted..')
  }
  else{
    //alert(result.response.data);
    console.log('Response',result.response.data);
  }
}
  return (
    <div className='card shadow p-3 mt-3' style={{zIndex:"1"}}>
    <div className="d-flex">
        <h2>My Projects</h2>
        <div className="ms-auto">
            <Addprojects/>
        </div>
    </div>
    {addProjectResponse.title?<Alert className="bg-success" dismissable>
      <span className='text-danger fw-bolder'>{addProjectResponse.title}</span>Project added sucessfully
    </Alert>:null}
    <div className="mt-4">
{/*collection of projects*/}
{userProjects?.length>0?userProjects.map(project=>(<div className="border d-flex align-items-center rounded p-2 m-2">
        <h5>{project.title}</h5>
        <div className="icons ms-auto">
         <Editproject project={project} />

         <button className='btn fs-5'>
  <a href={project.github} target='_blank'>
    <i className="fab fa-github text-dark"></i>
  </a>
</button>

         <button className='btn fs-5'><i className='fa-solid fa-trash text-dark' onClick={()=>handleDelete(project._id)}></i></button>
        </div>
      </div>
     
    )): <p className='mt-2'>No Projects uploaded yet</p>}
      
      </div>

      <ToastContainer />
        </div>
        
  )
}

export default Myprojects