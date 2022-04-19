import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap';
import '../Footer/Footer.css';

const Footer = () => {
  return (
    <section className='footer'>
        <Container>
            <Row>
                <Col md='4'>
                    <div className="logo">
                        <img src="https://www.portotheme.com/wordpress/porto/corporate1/wp-content/uploads/sites/7/2018/12/logo_white_large.png" alt="" />
                    </div>
                </Col>
                <Col md='4'>
                    <h4>Pages</h4>
                    <ul>
                        <li><a href="#">Our Services</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact US</a></li>
                    </ul>
                </Col>
                <Col md='4'>
                    <h4>Newsletter</h4>
                    <Form className='d-flex justify-content-between'>
                        <Form.Control type='email' className='w-70' placeholder='Email Address'/>
                        <Form.Control type='submit' className='btn btn-primary w-25'/>
                    </Form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Footer;