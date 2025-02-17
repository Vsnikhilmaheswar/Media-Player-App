import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { IoMdCloudUpload } from "react-icons/io";

import { addVideoApi } from '../services/allApi';

function Add({setAddstatus}) {
    const [show, setShow] = useState(false);

    const [videoDetails , setVideoDetails] =useState(
      {
        caption:"",
        imgUrl:"",
        embededLink :""
      })
   console.log(videoDetails);
   
    const handleClose = () => {setShow(false)
      handleCancel()
    };
    const handleShow = () => setShow(true);
    const handleCancel =()=>{
      setVideoDetails({
        caption:"",
        imgUrl:"",
        embededLink :""
      
      })

    }
   const handleAdd =async ()=>{
    const {caption,imgUrl,embededLink} = videoDetails
    if(!caption ||!imgUrl || !embededLink)
    {
      // alert(``)
      toast.info(`fill the form`)
    }
    else{
        if(embededLink.startsWith('https://youtu.be/'))
      {
        let link = `https://www.youtube.com/embed/${embededLink.slice(17,28)}`
        console.log(link);
        const result = await addVideoApi({caption,imgUrl,embededLink:link})
        console.log(result);
        if(result.status >=200 && result.status <300)
        {
          // alert(`media uploaded succesfully`)
          toast.success(`media uploaded succesfully`)
          handleClose()
          setAddstatus(result)  
        }
        else{
          // alert(`Something went wrong`)
          toast.warning(`Something went wrong`)
        }
      
      }
      else{
        let link = `https://www.youtube.com/embed/${embededLink.slice(-11)}`
        console.log(link);
        const result = await addVideoApi({caption,imgUrl,embededLink:link})
        console.log(result);
        if(result.status >=200 && result.status <300)
          {
            // alert(`media uploaded succesfully`)
            toast.success(`media uploaded succesfully`)
            handleClose()
            setAddstatus(result)  
          }
          else{
            // alert(`Something went wrong`)
            toast.warning(`Something went wrong`)
          }
      }
    
    }
   }
   //https://www.youtube.com/watch?v=hSFIicFoiW4
   //https://youtu.be/hSFIicFoiW4?si=XlXPMnQYvd2WPCDS
   //<iframe width="1020" height="574" src="https://www.youtube.com/embed/hSFIicFoiW4" title="5 Stages of Spiritual Awakening | Which Stage Are You In" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
    <input type='text' onChange={(e)=>setVideoDetails({...videoDetails, caption:e.target.value})} placeholder='Video Caption'  value={videoDetails.caption}  className='pt-2 form-control'></input>
    <input type='text' onChange={(e)=>setVideoDetails({...videoDetails, imgUrl:e.target.value})} placeholder='Video Image' value={videoDetails.imgUrl} className='mt-2 form-control'></input>
    <input type='text' onChange={(e)=>setVideoDetails({...videoDetails, embededLink:e.target.value})} placeholder='Video Url' value={videoDetails.embededLink} className='mt-2 form-control'></input>
</div>
</form>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="secondary" onClick={handleAdd}>
            Upload
          </Button>
        </Modal.Footer>
        <ToastContainer position='top-center' theme='dark' autoClose={5000}/>
      </Modal>
</>
  )
}

export default Add