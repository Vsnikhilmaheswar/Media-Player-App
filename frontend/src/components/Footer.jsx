import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import {
  FaGithubSquare,
  FaInstagram,
  FaFacebookSquare,
  FaTwitterSquare,
  FaDribbbleSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div class="container-fluid py-5 ">
      <div className="row">
        <div className="col-md-4">
          <h2 className="text-light">
            <FontAwesomeIcon icon={faPlay} beat /> Media Player
          </h2>
          <p className="mt-4">
            long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters
          </p>
        </div>
        <div className="col-md-2 d-md-flex  justify-content-center mt-4 mt-md-0">
       <div>
       <h4 className="">Links</h4>
          <Link to={'/'}> <p>Landing Page</p> </Link> 
          <Link to={'/home'}> <p>Home Page</p></Link> 
          <Link to={'/watchhistory'}><p>Watch History </p></Link> 
       </div>
        </div>
        <div className="col-md-2 d-md-flex  justify-content-center mt-4 mt-md-0">
       <div>
       <h4 className="" >Links</h4>
          <Link to={'/'}> <p>Landing Page</p> </Link> 
          <Link to={'/home'}> <p>Home Page</p></Link> 
          <Link to={'/watchhistory'}><p>Watch History </p></Link> 
       </div>
        </div>
        <div className="col-md-4 mt-2 mt-md-0">
          <h4>Contact Us</h4>
        <div className="d-flex justify-content-between ">
        <input type="text" className="form-control me-3" placeholder="Email ID "/>
        <Button variant="primary">Search</Button>
        </div>
        <div className="d-flex justify-content-between pt-4">
        <FaFacebookSquare  size={30} />
          <FaDribbbleSquare size={30} />
          <FaGithubSquare size={30} />
          <FaTwitterSquare size={30} />
          <FaInstagram size={30} />
        </div>

           </div>
      </div>
    </div>
  );
}

export default Footer;
