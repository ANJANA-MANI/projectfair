import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BASE_URL } from '../services/serverurl';
import { editProjectAPI } from '../services/allAPI';
import { editProjectResponseContext } from '../context/ContextShare';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Editproject({project}) {
//  console.log('project',project._id);
const{editProjectResponse,setEditProjectResponse}=useContext(editProjectResponseContext)
const[projectDetails,setProjectDetails]=useState({
    id:project._id,
    title:project.title,
    languages:project.languages,
    github:project.github,
    website:project.website,
    overview:project.overview,
    projectimage:""
  })

 // console.log('Project',project);

  const handleUpdate= async()=>
  {
    console.log('editing....');
    const{id,title,languages,github,website,overview,projectimage}=projectDetails
    console.log('Details',id,title,languages,github,website,overview,projectimage);
    
    if(!title||!languages||!github||!website||!overview)
    {
      alert('please fill the missing..')
    }

    else
    {
   console.log('Appending reqbody');
   const reqBody=new FormData()
   reqBody.append('title',title)
   reqBody.append('languages',languages)
   reqBody.append('github',github)
   reqBody.append('website',website)
   reqBody.append('overview',overview)
   preview?reqBody.append('projectimage',projectimage):reqBody.append('projectimage',project.projectimage)
   console.log("Request Body:", reqBody);

  const token=sessionStorage.getItem('token');
  if(preview)
  {
    const reqHeader={
      "Content-Type":"multipart/form-data"
       ,"Authorization":`Bearer ${token}`
    }

    //api call
    const result=await editProjectAPI(id,reqBody,reqHeader)
    console.log('api called.......');
    if(result.status===200)
    {
      setEditProjectResponse(result.data)
     // console.log('edit project response',editProjectResponse);
     
      handleClose()
      setPreview(""); 
      //passs response to my project
    }
    else{
      console.log('The result',result);
     toast.alert(result.response.data)

    }
  }
  else
  {
    const reqHeader={
      "Content-Type":"application/json"
       ,"Authorization":`Bearer ${token}`
    }
    const result=await editProjectAPI(id,reqBody,reqHeader)
    if(result.status===200)
    {
      setEditProjectResponse(result.data)
      toast.success('Edited..')
      handleClose()
      //passs response to my project
    }
    else{
     // console.log(result);
     toast.error(result.response.data)
      
    }


  }
    }
  }
  const[preview,setPreview]=useState("")
  //console.log(project);
    const[show,setShow]=useState(false);
    const handleClose = () => {
      setShow(false);
      setProjectDetails({
        id:project.id,
        title:project.title,
        languages:project.languages,
        github:project.github,
        website:project.website,
        overview:project.overview,
        projectimage:""
      })
      setPreview(""); 
      }

    const handleShow = () => setShow(true);
   
    useEffect(()=>{
      if(projectDetails.projectimage)
      {
        setPreview(URL.createObjectURL(projectDetails.projectimage))
      }
    },[projectDetails.projectimage])
  return (
 <>
 
 <button onClick={handleShow} className='btn fs-5'><i class="fa-solid fa-pen-to-square text-dark"></i></button>
 <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">

            <div className="col-lg-6">

            <label >
      <input type="file" style={{display:"none"}} onChange={e=>setProjectDetails({...projectDetails,projectimage:e.target.files[0],id: project._id,})}/>
    <img  style={{width:"100%",cursor:"pointer"}} src={ preview?preview:`${BASE_URL}/uploads/${project.projectimage}`}alt="project image" srcset="" />
    </label>

            </div>
            <div className="col-lg-6">
<div className="mb-3"><input type="text"  className='form-control'placeholder=' Project Title' value={projectDetails?.title} onChange={e=>setProjectDetails({...projectDetails,title:e.target.value})}/></div>
<div className="mb-3"><input type="text"  className='form-control'placeholder='Languages Used'  value={projectDetails?.languages}  onChange={e=>setProjectDetails({...projectDetails,languages:e.target.value})}   /></div>
<div className="mb-3"><input type="text"  className='form-control'placeholder='Github'  value={projectDetails?.github}  onChange={e=>setProjectDetails({...projectDetails,github:e.target.value})} /></div>
<div className="mb-3"><input type="text"  className='form-control'placeholder='Website Link'  value={projectDetails?.website}  onChange={e=>setProjectDetails({...projectDetails,website:e.target.value})} /></div>
<div className="mb-3"><input type="text"  className='form-control'placeholder='Project Overview' value={projectDetails?.overview}  onChange={e=>setProjectDetails({...projectDetails,overview:e.target.value})} /></div>

            </div>
         
          </div>
          
         </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Edit
          </Button>
        </Modal.Footer>
        <ToastContainer/>
      </Modal>
  
 </>
  )
}

export default Editproject