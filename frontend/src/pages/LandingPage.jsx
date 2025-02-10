import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function LandingPage() {
  return (
  <>
      <Container fluid>
      <Row className='mt-5 d-flex justify-content-center align-items-center'>
        <Col md={1}></Col>
        <Col sm={12} md={5}>
        <h1 style={{color:"white"}}>Welcome to <span className='text-primary'>Media Player</span></h1>
        <p style={{textAlign:"justify"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

  </p>
    <Link to={'/'} className='btn btn-warning mt-3'>Get Started</Link>  
        </Col>
        <Col sm={12} md={5}>
        <img className='img-fluid' src='https://i.gifer.com/7d20.gif'/>
        </Col>
        <Col md={1}></Col>
      </Row>
    </Container>
    <Container>
    <Row>

      <Col md={2}></Col>
      <Col md={8}>
      <Row>
        <Col md={4} className='mt-md-5'>
        <Card style={{ width: '100%' }}>
      <Card.Img variant="top" style={{height:"250px"}} src="https://i.gifer.com/cm8.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
     
      </Card.Body>
    </Card>
         </Col>
        <Col md={4} className='mt-md-5'>   <Card style={{ width: '100%' }}>
      <Card.Img variant="top" style={{height:"250px"}} src="https://i.gifer.com/4SHX.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>

      </Card.Body>
    </Card></Col>
        <Col md={4} className='mt-md-5'>   <Card style={{ width: '100%' }}>
      <Card.Img variant="top" style={{height:"250px"}} src="https://i.gifer.com/ICU.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
     
      </Card.Body>
    </Card></Col>
      </Row>
      </Col>
      <Col md={2}></Col>
    
    </Row>
    
    </Container>


    <div className='container-fluid'>
     <div className='row'> 
      <div className='col-1'></div>
      <div className='col-10 border border-secondary border-2'>
        <div className='row'>
        <div className='col-6'>
        <h2 className='text-center p-5'>Simple fast and Powerfull</h2>
       <p className='mt-2'> <span className='fs-2'>Play everything</span> sdsds radno  text i ahve tero hy  to duakd hdb adbjbda adadad ajdn sdsdd sds ds dededddd  ed wd d e d ddeee  eeeee e ee  e e eeeee  eeee  eeee  eeee  eeee  eeee   eeee e eeeee eeee  eee e</p>
       <p className='mt-2'> <span className='fs-2'>Play everything</span> sdsds radno  text i ahve tero hy  to duakd hdb adbjbda adadad ajdn sdsdd sds ds dededddd  ed wd d e d ddeee  eeeee e ee  e e eeeee  eeee  eeee  eeee  eeee  eeee   eeee e eeeee eeee  eee e</p>
       <p className='mt-2'> <span className='fs-2'>Play everything</span> sdsds radno  text i ahve tero hy  to duakd hdb adbjbda adadad ajdn sdsdd sds ds dededddd  ed wd d e d ddeee  eeeee e ee  e e eeeee  eeee  eeee  eeee  eeee  eeee   eeee e eeeee eeee  eee e</p>
       
        
        </div>
        <div className='col-6'>

        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/qmVirHJL_XA" title="Margazhi Video Song | Dominic and The Ladies Purse | Mammootty | Gautham Vasudev Menon| Darbuka Siva" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        </div>

      </div>
      <div className='col-1'></div>
     </div>
    </div>
    </>
  )
}

export default LandingPage