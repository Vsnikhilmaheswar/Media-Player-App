import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getVideoApi, updateCategoryApi } from '../services/allApi';

function AllVideos({addstatus}) {

   const [videos,setVideos] = useState([])
   const [deleteStatus,setDeleteStatus] = useState([])

  const getAllVideos =async()=>{
    const result = await  getVideoApi()
    console.log(result);
    setVideos(result.data)
  }
   console.log(videos);
   console.log("dele",deleteStatus);
   
const drapOver=(e)=>
{  e.preventDefault()
}

   const videoDrop = async(e)=>
    {
    const {videoDetails,categoryDetails } = JSON.parse(e.dataTransfer.getData("Details"))
    const response = categoryDetails.AllVideos.filter((item)=>item.id!=videoDetails.id)
    const reqBody = {
      categoryName : categoryDetails.categoryName,
      AllVideos : response,
      id : categoryDetails.id
    }
    const result = await updateCategoryApi(categoryDetails.id,reqBody)
    }

  useEffect(()=>{
    getAllVideos()
  },[addstatus,deleteStatus])

  return (
    <>
    <h2>All Videos</h2>
    { videos?.length > 0 ?
      <div className='container-fluid mt-5' droppable onDragOver={(e)=>drapOver(e)} onDrop={(e)=>videoDrop(e)}>
      <div className='row'>
    
     {  videos?.map((item)=> (
           <div className='col-md-3'>   <VideoCard   videoDetails={item}  setDeleteStatus={setDeleteStatus}/>   </div>
     ))
    
      }
       
      </div>
      </div>
     :
      <div className='container-fluid mt-5'>
         <div className='row'>
          <div className="text-center mt-5">
            <img
              src="https://cdn-icons-png.flaticon.com/512/102/102661.png"
              alt="No Videos"
              width="200"
            />
            <h5 className="text-danger mt-3">No Video Added Yet...</h5>
          </div>
        </div>
        
        </div>

    }
    </>
  )
}

export default AllVideos