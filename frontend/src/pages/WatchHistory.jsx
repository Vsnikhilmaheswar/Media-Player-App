import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { getwatchhistoryApi, removeWatchHistory } from '../services/allApi';
export default function WatchHistory() {

  const [watchHistory,setWatchHistory] = useState([])
  const getWatchHistory = async()=>{
    const result =await getwatchhistoryApi()
    setWatchHistory(result.data);
    console.log(watchHistory);
    
  }
  const [removeStatus,SetremoveStatus] =useState(false  )
  const deleteWatchHistory = async(id)=>
    {
  const remove = removeWatchHistory(id);
  SetremoveStatus(!removeStatus)
  }
     
    useEffect(()=>{
      getWatchHistory()
    },[removeStatus])
  return (
   
<div>
<div className="container mt-4 table-responsive ">
      <h3 className="text-white">Watch History</h3>
    {  watchHistory?.length>0?
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Url</th>
            <th>Time Stamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
      {    watchHistory.map((item,index)=>(
        <tr>
          <td>{index+1}</td>
          <td>{item.caption}</td>
          <td>
            <a href="https://www.youtube.com/embed/NbSrhpb5HNM" target="_blank" rel="noopener noreferrer">
             {item.url}
            </a>
          </td>
          <td>{item.timestamp}</td>
          <td>
            <Button variant="danger" onClick={()=>deleteWatchHistory(item.id)}>
              <FaTrash />
            </Button>
          </td>
        </tr>))
        }
        </tbody>
      </Table>
      :<h1 className='text-center text-danger text-bold'>No watch History</h1>
      }
    </div>

</div>
  )
}
