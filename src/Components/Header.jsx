import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import icon from '../assets/icon.png'
function Header({insideDashboard}) {

  const navigate=useNavigate();
const handleLogout=()=>{
  sessionStorage.removeItem("existingUser")
  sessionStorage.removeItem("token")
  navigate('/')
}
 
 
  return (
    <>
    <Navbar className="bg-info position-fixed top-0 w-100" style={{zIndex:"2"}}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={icon}
              width="90"
              height="70"
              className="d-inline-block align-top"
            />
            <Link to={'/'} style={{color:"white",fontSize:"30px",textDecoration:"none"}}>
            Project Fair
            </Link>
            
          </Navbar.Brand>
        </Container>
        { insideDashboard &&
            <button className='btn align-items-right border me-3 ' onClick={handleLogout}>Logout</button>
            }
      </Navbar>
    </>
  )
}

export default Header