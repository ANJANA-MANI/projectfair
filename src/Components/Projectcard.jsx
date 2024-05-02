import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import project1 from '../assets/project1.jpg'
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';
import { BASE_URL } from '../services/serverurl';

function Projectcard({project}) {
  const [show, setShow] = useState(false);  // Fix the typo here
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>{project&&
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={project?`${BASE_URL}/uploads/${project?.projectimage}`:""} onClick={handleShow} />
        <Card.Body>
          <Card.Title>{project?.title}</Card.Title>
        </Card.Body>
      </Card>}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{project?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col className ='lg-6'>
              <img  className ="img-fluid" src={project?`${BASE_URL}/uploads/${project?.projectimage}`:""} alt=""  />
            </Col>
            <Col className ='lg-6'>
              <h2>{project?.title}</h2>
              <p>{project?.overview}</p>
           <p>Languages Used:<span className='fw-bolder'>{project?.languages}</span></p>
            </Col>
          </Row>
          <div>
            <a href={project?.github} className='me-3 btn text-dark fs-5'><i class="fa-brands fa-github"></i></a>
            <a href={project?.website} className='me-5 btn text-dark fs-5'><i class="fa-brands fa-linkedin"></i></a>
          </div>
        </Modal.Body>
        
      </Modal>

    </>
  )
}

export default Projectcard;
