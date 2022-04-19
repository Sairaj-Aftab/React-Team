import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import '../Slider/Slider.css';

const Slider = () => {
  return (
    <section>
        <Container fluid>
            <Row>
                <Col className='px-0'>
                    <Carousel>
                        <Carousel.Item>
                            <img 
                                className='d-block w-100'
                                src='https://cdn.pixabay.com/photo/2016/06/02/22/33/butterfly-1432308_960_720.jpg'
                                alt='First Slider'
                            />
                            <Carousel.Caption>
                                <h3>This is First Slider</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, saepe adipisci. Ad doloribus neque totam.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className='d-block w-100'
                                src="https://nature-to-nurture.co.uk/wp-content/uploads/2014/03/Mighty-Tree-With-Green-Leaves-Banner-Nature-To-Nurture-Aromatherapy-In-Hemel-St-Albans.jpg"
                                 alt="Second Slider"
                                  />
                            <Carousel.Caption>
                                <h3>This is Second Slider</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, culpa doloremque nesciunt ipsa odio voluptates!</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className='d-block w-100' src="https://42796r1ctbz645bo223zkcdl-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/countryside-resize.jpg" alt="Third Slider" />
                            <Carousel.Caption>
                                <h3>This is Third Slider</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dolorum corrupti, sapiente alias laborum eum?</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Slider;