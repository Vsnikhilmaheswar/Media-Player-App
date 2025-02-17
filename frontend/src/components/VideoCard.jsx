import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';   
import { FaTrashAlt } from "react-icons/fa";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addwatchhistoryApi, removeVideApi } from '../services/allApi';
function VideoCard({setDeleteStatus,videoDetails}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() =>
    { setShow(true);
      let caption = videoDetails?.caption
      let url = videoDetails?.embededLink
      const time = new Date()
      console.log(time);
      const timestamp = new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",second:"2-digit"}).format(time)
     const reqBody ={
      caption,
      url,
      timestamp
     }
      const result = await addwatchhistoryApi(reqBody)
    }
const handleDelete = async(id)=> {
  const result = await removeVideApi(id)
  console.log(result);
  if(result.status >=200 && result.status <300)
  {
    setDeleteStatus(result)
  }
}
  return (
    <>
      <Card style={{ width: '100%' }} >
      <Card.Img  onClick={handleShow} variant="top" style={{width:"100%" ,height:"300px"} } src={videoDetails?.imgUrl} />
      <Card.Body className='d-flex justify-content-between align-items-center'>
        <Card.Title>{videoDetails?.caption}</Card.Title>
       
        <Button onClick={()=>{handleDelete(videoDetails?.id)}
        } variant="danger"><FaTrashAlt />
        </Button>
      </Card.Body>
    </Card>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="574" src={`${videoDetails?.embededLink}?autoplay=1`} title="Complete DSA in JavaScript in 8 hours | DSA in JS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
    
      </Modal>
    </>
  )
}

export default VideoCard