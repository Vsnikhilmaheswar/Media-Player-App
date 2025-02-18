import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { FaTrashAlt } from "react-icons/fa";
import VideoCard from './VideoCard';
import Modal from 'react-bootstrap/Modal';
import { addCategoryApi, deleteCategoryApi, getCategoryApi } from '../services/allApi';
import AllVideos from './AllVideos';
function Categories() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [allCategory ,setAllCategory] = useState([])
  const [categoryName,setCategoryName]= useState("")
  const [categoryStatus,setCategoryStatus]  =useState("")
  console.log(categoryName);
  const handleCancel = ()=>{
    setCategoryName("")
  }
const handleAdd = async()=>{
  if(!categoryName)
  {
    alert(`enter category name`)
  }else{
 
 const reqbody ={
      categoryName, 
      AllVideos:[]
    }   
    const result = await addCategoryApi(reqbody)
    if(result.status >=200 && result.status<300)
    {
      alert(`Category added Successfully`)
      handleCancel()
      handleClose()
    }
    else{
      alert('Something went WRONG')
    }
  }
}

const getCategory = async()=>{
  const result = await getCategoryApi()
  if(result.status >=200 && result.status<300)
    {
  setAllCategory(result.data)
  setCategoryStatus(result)
    }

}
const handleDelete = async(id) =>{
 const result =  deleteCategoryApi(id)
}
const videoOver = (e)=>{
  e.preventDefault()
}
const videoDrop = (e ,categoryDetails)=>{
  console.log("cat",categoryDetails);
  const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"))
}
useEffect(()=>{
 getCategory() 
},[])


  return (
<>
<h4>
    Category
</h4>
<button className='btn btn-warning w-100 mt-4' onClick={handleShow} >Add Category</button>
{ allCategory?.length>0?
allCategory.map((item)=>(
  <div className='border border-secondary mt-3 border-2' droppable  onDragOver={(e)=>videoOver(e)} onDrop={(e)=>videoDrop(e,item)}>
  <div className='d-flex justify-content-between p-3 rounded mt-4'>
      <h5>{item.categoryName}</h5>
      <Button variant="danger" onClick={()=>{handleDelete(item?.id)}} ><FaTrashAlt />
      </Button>
  </div>

  {/* <VideoCard/> */}
</div>
))
 
:
<h5 className='text-center text-danger mt-5'>No Category Added</h5>
}




      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<div className='p-3 border rounded'> <input type='text' value={categoryName} placeholder='enter category name ' onChange={(e)=>setCategoryName(e.target.value)} className='form-control'></input>

</div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel} >
            cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
</>

  )
}

export default Categories