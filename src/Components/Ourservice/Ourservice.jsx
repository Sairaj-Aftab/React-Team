import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import '../Ourservice/Ourservice.css';

const Ourservice = () => {
  return (
      <>
    <section className='ourservice'>
        <Container>
            <Row>
                <div className="title text-center mb-4">
                    <h3>Our Services</h3>
                </div>
                <Col md='4' className='mb-3'>
                    <div className="box d-flex">
                        <div className="icon">
                            <i class='bx bx-color'></i>
                        </div>
                        <div className="content">
                            <h4>Customer Support</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing metus. elit. Quisque rutrum pellentesque imperdiet.</p>
                        </div>
                    </div>
                </Col>
                <Col md='4' className='mb-3'>
                    <div className="box d-flex">
                        <div className="icon">
                            <i class='bx bx-color'></i>
                        </div>
                        <div className="content">
                            <h4>Customer Support</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing metus. elit. Quisque rutrum pellentesque imperdiet.</p>
                        </div>
                    </div>
                </Col>
                <Col md='4' className='mb-3'>
                    <div className="box d-flex">
                        <div className="icon">
                            <i class='bx bx-color'></i>
                        </div>
                        <div className="content">
                            <h4>Customer Support</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing metus. elit. Quisque rutrum pellentesque imperdiet.</p>
                        </div>
                    </div>
                </Col>
                <Col md='4' className='mb-3'>
                    <div className="box d-flex">
                        <div className="icon">
                            <i class='bx bx-color'></i>
                        </div>
                        <div className="content">
                            <h4>Customer Support</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing metus. elit. Quisque rutrum pellentesque imperdiet.</p>
                        </div>
                    </div>
                </Col>
                <Col md='4' className='mb-3'>
                    <div className="box d-flex">
                        <div className="icon">
                            <i class='bx bx-color'></i>
                        </div>
                        <div className="content">
                            <h4>Customer Support</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing metus. elit. Quisque rutrum pellentesque imperdiet.</p>
                        </div>
                    </div>
                </Col>
                <Col md='4' className='mb-3'>
                    <div className="box d-flex">
                        <div className="icon">
                            <i class='bx bx-color'></i>
                        </div>
                        <div className="content">
                            <h4>Customer Support</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing metus. elit. Quisque rutrum pellentesque imperdiet.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    <section className='cata'>
        <Container>
            <Row>
                <Col md='3'>
                    <div className="box text-center">
                        <i class='bx bx-face'></i>
                        <h2>30000+</h2>
                        <p>Happy Clients</p>
                    </div>
                </Col>
                <Col md='3'>
                    <div className="box text-center">
                        <i class='bx bxs-wine'></i>
                        <h2>15</h2>
                        <p>Years In Business</p>
                    </div>
                </Col>
                <Col md='3'>
                    <div className="box text-center">
                        <i class='bx bx-shape-circle'></i>
                        <h2>178</h2>
                        <p>High Score</p>
                    </div>
                </Col>
                <Col md='3'>
                    <div className="box text-center">
                        <i class='bx bxl-steam'></i>
                        <h2>352</h2>
                        <p>Cups of Coffee</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Ourservice;