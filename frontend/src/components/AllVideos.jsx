import React from 'react'
import VideoCard from './VideoCard'

function AllVideos() {
  return (
    <>
    <h2>All Videos</h2>
    <div className='container-fluid mt-5'>
      <div className='row'>
        <div className='col-md-3'> <VideoCard/></div>
        <div className='col-md-3'> <VideoCard/></div>
        <div className='col-md-3'> <VideoCard/></div>
      </div>
      <div className="text-center mt-5">
          <img
            src="https://cdn-icons-png.flaticon.com/512/102/102661.png"
            alt="No Videos"
            width="200"
          />
          <h5 className="text-danger mt-3">No Video Added Yet...</h5>
        </div>
    </div>
    </>
  )
}

export default AllVideos