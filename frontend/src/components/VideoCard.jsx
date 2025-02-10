import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';   
import { FaTrashAlt } from "react-icons/fa";
 
function VideoCard() {
  return (
    <>
      <Card style={{ width: '100%' }}>
      <Card.Img variant="top" style={{width:"100%" ,height:"300px"} } src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0KO2TAZO3iLjnRhZFlueafwJBNjYtbSIpPw&s" />
      <Card.Body className='d-flex justify-content-between align-items-center'>
        <Card.Title>Card Title</Card.Title>
       
        <Button variant="danger"><FaTrashAlt />
        </Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default VideoCard