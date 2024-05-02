import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import bg from '../assets/bg.gif'
import Projectcard from '../Components/Projectcard'
import { Link } from 'react-router-dom'
import { homeProjectsAPI } from '../services/allAPI'
function Home() {

  const[loggedin,setLoggedin]=useState(false)
  const[homeProjects,setHomeprojects]=useState([])
  
  const getHomeprojects=async()=>{
    const result=await homeProjectsAPI()
    if(result.status===200)
    {
      setHomeprojects(result.data)
    }
    else{
      //console.log(result);
     // console.log(result.response);

    }
  }
 // console.log(homeProjects);
  useEffect(()=>{
if(sessionStorage.getItem('token'))
{
  setLoggedin(true);
}
else{
  setLoggedin(false);
}
//api call
getHomeprojects();
  },[])
  return (
    <>
    <div  style={{ width:"100%",height:"70vh"}} className="container-fluid">

   <Row className="align-items-center p-5">
   <Col sm={12} md={6}>
    <h1 className='fw-bolder'><i class="fa-solid fa-list-check fa-beat"></i> Project Fair</h1>
  <p className='align-items-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae odit sit labore blanditiis sapiente, quos nisi temporibus esse eius vel saepe ratione dolore ab fugit eum amet officiis numquam a.</p>
 
 
 {
  loggedin?<Link to={'/dashboard'} className=' btn btn-warning'>Manage Your Projects<i class="fa-solid fa-right-long fa-fade"></i></Link>:
  <Link to={'/login'} className=' btn btn-warning'>Start to Explore<i class="fa-solid fa-right-long fa-fade"></i></Link>

  
 }
  
   </Col>
   <Col sm={12} md={6}>
  
   <img src={bg} alt="" srcset=""width={'500px'} />
   </Col>
   </Row>

    </div>

{/*All Projects */}

<div className="all-projects mt-5 p-1">
<h1 className='text-center'>Explore Your Projects</h1>
<marquee scrollAmount={20} behavior="" direction="">
<Row>
  {homeProjects?.length>0?homeProjects.map(project=>
  < Col key={project.id} sm={12} md={6} lg={4}>
  <Projectcard project={project}/>
</Col>
  )  :null}
</Row>

</marquee>

<div className="text-center"><Link to={'/Projects'}>View More Projects</Link></div>
</div>


    </>
  )
}

export default Home