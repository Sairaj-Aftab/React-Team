import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Header/Header.css'

const Header = () => {
  return (
    <section className='header'>
      <Container>
        <Row className='d-flex justify-content-between'>
          <Col md='3'>
            <div className="logo">
              <img src="https://www.portotheme.com/wordpress/porto/corporate1/wp-content/themes/porto/images/logo/logo_black.png" alt="" />
            </div>
          </Col>
          <Col md='9'>
            <div className="menu">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Portfolios</Link></li>
                <li><Link to="/team">Team Members</Link></li>
                <li><Link to="/admin">Admin</Link></li>
                <li><Link to="/createform">Form</Link></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Header;