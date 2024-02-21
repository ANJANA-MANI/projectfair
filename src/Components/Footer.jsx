import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <MDBFooter  className='text-center text-light bg-dark' style={{ }}>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='video' className='me-3' />
                Project Fair
              </h6>
              <p style={{textAlign:"justify"}}>
                Welcome to the ultimate video gallery experience with our state-of-the-art app!.
                Effortlessly search and find content with our powerful search functionality, and revel in smooth playback with high-quality video streaming.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Guides</h6>

              <Link to={'https://react.dev/'}
              style={{textDecoration:"none",color:"white"}}
              ><p>React</p>
              </Link>
              
              
              <Link to={'https://react-bootstrap.netlify.app/'}
              style={{textDecoration:"none",color:"white"}}>
              <p>
                  ReactBootstrap
              </p>
              </Link>
              
              <Link to={'https://bootswatch.com/'}
              style={{textDecoration:"none",color:"white"}}>
                    <p>
                  Bootswatch
              </p>
              </Link>
          
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'> links</h6>
              <Link to={"/"} className='link' style={{ textDecoration: 'none',color:"white" }}>
                <p>
                  Home 
                </p>
              </Link>
              <Link to={"/Login"} className='link'style={{ textDecoration: 'none',color:"white" }}>
                <p>
                  Login
                </p>
              </Link>
              <Link to={"/Register"} className='link'style={{ textDecoration: 'none',color:"white" }}>
                <p>
                  Register
                </p>
              </Link>

            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@example.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          Project Fair.com
        </a>
      </div>
    </MDBFooter>
  )
}

export default Footer