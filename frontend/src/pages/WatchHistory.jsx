import React from 'react'
import Table from 'react-bootstrap/Table';
import { Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
export default function WatchHistory() {
  return (
<div>
<div className="container mt-4 table-responsive ">
      <h3 className="text-white">Watch History</h3>
      
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
          <tr>
            <td>1</td>
            <td>Tere Mere Darmiyan - TSR</td>
            <td>
              <a href="https://www.youtube.com/embed/NbSrhpb5HNM" target="_blank" rel="noopener noreferrer">
                https://www.youtube.com/embed/NbSrhpb5HNM
              </a>
            </td>
            <td>25/11/2024, 16:18:32</td>
            <td>
              <Button variant="danger">
                <FaTrash />
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>

</div>
  )
}
