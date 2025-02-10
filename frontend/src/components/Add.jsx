import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { IoMdCloudUpload } from "react-icons/io";
function Add() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (

<>
<h5>Upload New Video  <IoMdCloudUpload onClick={handleShow} className='ms-2' size={30}/> </h5>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>


<p>Please Fill the following Details</p>
<form action=''><div className='p-2 border border-r border-secondary border-2'>
    <input type='text' placeholder='Video Caption'  className='pt-2 form-control'></input>
    <input type='text' placeholder='Video Image' className='mt-2 form-control'></input>
    <input type='text' placeholder='Video Url' className='mt-2 form-control'></input>
</div>
</form>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
</>
  )
}

export default Add