import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import AllVideos from '../components/AllVideos'
import Categories from '../components/Categories'
function Home() {
  const [addstatus,setAddstatus] = useState({})
  return (
   <> 
   <div className='container d-flex  justify-content-between mt-5'>
   <Add setAddstatus={setAddstatus}/>
   <Link to={'/watchhistory'} style={{textDecoration:"none"}}><h5>Watch History</h5></Link>
   </div>

   <div className='container-fluid p-4'>

    <div className='row'>
      <div className='col-md-9'>
        <AllVideos addstatus={addstatus}/>
      </div>
      <div className='col-md-3'>
        <Categories />
      </div>
    </div>
   </div>
   </>
  )
}

export default Home