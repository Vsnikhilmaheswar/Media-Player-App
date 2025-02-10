import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';   
import { FaTrashAlt } from "react-icons/fa";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
function VideoCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card style={{ width: '100%' }}  onClick={handleShow}>
      <Card.Img variant="top" style={{width:"100%" ,height:"300px"} } src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0KO2TAZO3iLjnRhZFlueafwJBNjYtbSIpPw&s" />
      <Card.Body className='d-flex justify-content-between align-items-center'>
        <Card.Title>Card Title</Card.Title>
       
        <Button variant="danger"><FaTrashAlt />
        </Button>
      </Card.Body>
    </Card>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default VideoCard