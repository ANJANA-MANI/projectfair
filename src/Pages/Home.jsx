import React from 'react'
import { Col, Row } from 'react-bootstrap'
import bg from '../assets/bg.gif'
import Projectcard from '../Components/Projectcard'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div  style={{ width:"100%",height:"70vh"}} className="container-fluid">

   <Row className="align-items-center p-5">
   <Col sm={12} md={6}>
    <h1 className='fw-bolder'><i class="fa-solid fa-list-check fa-beat"></i> Project Fair</h1>
  <p className='align-items-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae odit sit labore blanditiis sapiente, quos nisi temporibus esse eius vel saepe ratione dolore ab fugit eum amet officiis numquam a.</p>
  <button style={{backgroundColor:"#b3c6ff"}} className='btn'> Start to explore <i class="fa-solid fa-right-long fa-fade"></i></button>
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
  <Col sm={12} md={6} lg={4}>
    <Projectcard/>
  </Col>
  <Col sm={12} md={6} lg={4}>
    <Projectcard/>
  </Col>
  <Col sm={12} md={6} lg={4}>
    <Projectcard/>
  </Col>
</Row>

</marquee>

<div className="text-center"><Link to={'/Projects'}>View More Projects</Link></div>
</div>


    </>
  )
}

export default Home