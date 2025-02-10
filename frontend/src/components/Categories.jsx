import React from 'react'
import Button from 'react-bootstrap/Button';
import { FaTrashAlt } from "react-icons/fa";
import VideoCard from './VideoCard';
function Categories() {
  return (
<>
<h4>
    Category
</h4>
<button className='btn btn-warning w-100 mt-4'>Add Category</button>
<div className='border border-secondary mt-3 border-2'>
    <div className='d-flex justify-content-between p-3 rounded mt-4'>
        <h5>Malayalam songs</h5>
        <Button variant="danger"><FaTrashAlt />
        </Button>
    </div>
    <VideoCard/>
</div>
<h5 className='text-center text-danger mt-5'>No Category Added</h5>
</>

  )
}

export default Categories