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
        <p style={{textAlign:"justify"}}>Your personal web-based music companion. Designed with simplicity and smooth performance in mind, this player allows you to enjoy your favorite tracks without distractions. Whether you're chilling, working, or on the move, the Media Player adapts to your vibe with responsive design and easy controls.

  </p>
    <Link to={'/home'} className='btn btn-warning mt-3'>Get Started</Link>  
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
        <Card.Title> Volume Control</Card.Title>
        <Card.Text>
        Adjust sound smoothly for the perfect audio level.
        </Card.Text>
     
      </Card.Body>
    </Card>
         </Col>
        <Col md={4} className='mt-md-5'>   <Card style={{ width: '100%' }}>
      <Card.Img variant="top" style={{height:"250px"}} src="https://i.gifer.com/4SHX.gif" />
      <Card.Body>
        <Card.Title> Play, Pause, and Skip</Card.Title>
        <Card.Text>
        Full control over your listening experience.
        </Card.Text>

      </Card.Body>
    </Card></Col>
        <Col md={4} className='mt-md-5'>   <Card style={{ width: '100%' }}>
      <Card.Img variant="top" style={{height:"250px"}} src="https://i.gifer.com/ICU.gif" />
      <Card.Body>
        <Card.Title>Interactive UI </Card.Title>
        <Card.Text>
        Smooth transitions and real-time feedback with React Hooks.
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
        <h2 className="text-center p-5 text-3xl font-bold">Simple, Fast, and Powerful</h2>

<p className="mt-2 text-lg">
  <span className="text-2xl font-semibold">🎧 Play Everything</span> – From your favorite tracks to curated playlists, this media player supports all formats with seamless audio playback. No lags, no delays — just press play and enjoy uninterrupted music anytime.
</p>

<p className="mt-2 text-lg">
  <span className="text-2xl font-semibold">⚡ Lightning Fast</span> – Built using modern web technologies like React and Tailwind CSS, enjoy lightning-fast performance and real-time interactions across all devices and screen sizes.
</p>

<p className="mt-2 text-lg">
  <span className="text-2xl font-semibold">🎵 Powerful Yet Simple</span> – With a clean UI, intuitive controls, and responsive layout, this player focuses on what matters most — your music. Whether you're relaxing, studying, or working out, it's got your vibe covered.
</p>

        
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