import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addProjectAPI } from '../services/allAPI';
import { addProjectResponseContext } from '../context/ContextShare';
import { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Addprojects() {
  const { addProjectResponse, setAProjectResponse } = useContext(addProjectResponseContext)
  const [projectDetails, setProjectDetails] = useState({
    title: "",
    languages: "",
    github: "",
    website: "",
    overview: "",
    projectimage: ""
  })
  const [preview, setPreview] = useState("");

  const [token, setToken] = useState("")
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem('token'))
    }
    else {
      setToken('')
    }
  })
  useEffect(() => {
    if (projectDetails.projectimage) {
      setPreview(URL.createObjectURL(projectDetails.projectimage))
    }
  }, [projectDetails.projectimage])
  //console.log('project details', projectDetails);

  const handleAdd = async (e) => {
    e.preventDefault();
    const { title, languages, github, website, overview, projectimage } = projectDetails
    if (!title || !languages || !github || !website || !overview || !projectimage) {
     toast.warning('please fill missing deatils')
    }

    else {
      console.log('title', title);
      console.log('languages', languages);
      console.log('github', github);
      console.log('website', website);
      console.log('overview', overview);
      console.log('projectimage', projectimage);

      const reqBody = new FormData()

      reqBody.append('title', title)
      reqBody.append('languages', languages)
      reqBody.append('github', github)
      reqBody.append('website', website)
      reqBody.append('overview', overview)
      reqBody.append('projectimage', projectimage)

      console.log("Request Body:", reqBody);


      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data"
          , "Authorization": `Bearer ${token}`
        }

        //console.log("Request Headers:", reqHeader);
        const result = await addProjectAPI(reqBody, reqHeader)

        if (result.status === 200) {
        //  console.log(result.data);
        toast.success('project added')
          handleClose();
          setAProjectResponse(result.data)
         
        }
        else {

          console.log(result.response.data);
        }

      }

    }
  }

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false)
    setProjectDetails({
      title: "",
      languages: "",
      github: "",
      website: "",
      overview: "",
      projectimage: ""
    })
    setPreview("");
  }

  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Projects
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">

            <div className="col-lg-6">

              <label >
                <input type="file" style={{ display: "none" }} onChange={(e) => { setProjectDetails({ ...projectDetails, projectimage: e.target.files[0] }) }} />
                <img src={preview ? preview : "https://www.creativefabrica.com/wp-content/uploads/2021/04/05/Photo-Image-Icon-Graphics-10388619-1-1-580x386.jpg"} style={{ width: "100%", cursor: "pointer" }} alt="" srcset="" />
              </label>

            </div>
            <div className="col-lg-6">
              <div className="mb-3"><input type="text" className='form-control' placeholder=' Project Title' value={projectDetails.title} onChange={(e) => setProjectDetails({ ...projectDetails, title: e.target.value })} /></div>
              <div className="mb-3"><input type="text" className='form-control' placeholder='Languages Used' value={projectDetails.languages} onChange={(e) => setProjectDetails({ ...projectDetails, languages: e.target.value })} /></div>
              <div className="mb-3"><input type="text" className='form-control' placeholder='Github' value={projectDetails.github} onChange={(e) => setProjectDetails({ ...projectDetails, github: e.target.value })} /></div>
              <div className="mb-3"><input type="text" className='form-control' placeholder='Website Link' value={projectDetails.website} onChange={(e) => setProjectDetails({ ...projectDetails, website: e.target.value })} /></div>
              <div className="mb-3"><input type="text" className='form-control' placeholder='Project Overview' value={projectDetails.overview} onChange={(e) => setProjectDetails({ ...projectDetails, overview: e.target.value })} /></div>

            </div>

          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
        <ToastContainer/>
      </Modal>
  
    </>
  )
}

export default Addprojects