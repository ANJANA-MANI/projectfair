import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import Projectcard from '../Components/Projectcard'
import { allProjectsAPI } from '../services/allAPI'
function Projects() {
  const[allProjects,setAllProjects]=useState([])
  const[searchKey,setSearchKey]=useState([])
  const getAllProjects=async()=>{
    if(sessionStorage.getItem('token'))
    {
      const token=sessionStorage.getItem("token")
      const reqHeader={
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
      const result=await  allProjectsAPI(searchKey,reqHeader)
    if(result.status===200)
    {
      setAllProjects(result.data)
      console.log(allProjects);
    }
    else{
      console.log(result);
    }
    }

  }
  console.log(allProjects);
  useEffect(()=>{
    getAllProjects()
  },[searchKey])
  return (
    <>
    <Header/>
    <div style={{marginTop:"100px"}} className='projects'>
    <h1 className='text-center mb-5'>All Projects</h1>
<div className='d-flex justify-content-center  w-100'>
<div className='d-flex border w-50 rounded mb-3'>
<input type="text"  className='form-control' placeholder='Search project by Technologies' onChange={e=>setSearchKey(e.target.value)}/>
<i  style={{marginLeft:"-50px",marginTop:"10px"}}class="fa-solid fa-magnifying-glass"></i>
</div>
</div>
<Row className='ms-3'>
          {allProjects.length> 0 ? (
            allProjects.map((project) => (
              <Col className="d-flex justifycontent-center mb-3" sm={12} md={6} lg={4} >
                <Projectcard project={project} />
              </Col>
            ))
          ) : (
            <p className="text-danger fs-4 fw-bolder text-center">No projects available</p>
          )}
        </Row>
    </div>
    </>
  )
}

export default Projects