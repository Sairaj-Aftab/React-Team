import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import '../Profile/Profile.css';

const Profile = () => {

    const {id} = useParams();

    const [profile, setProfile] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5050/team?id=${id}`).then(res => {
            setProfile({...res.data[0]})
        }).catch(err => {
            console.log(err.data);
        })
    },[profile])

  return (
    <section className='profile my-5'>
        <Container>
            <Row className='justify-content-center'>
                <Col md='4'>
                    <Card>
                        <Card.Body>
                            <img src={profile.photo} alt="" />
                            <div className="info text-center mt-3">
                                <h5>{`${profile.first} ${profile.last}`}</h5>
                                <h6>{profile.email}</h6>
                                <h6>{profile.phone}</h6>
                            </div>
                            <div className="social mt-3 d-flex justify-content-between align-items-center">
                                <ul className='mb-0 p-0'>
                                    <li><a href="#"><i class='bx bxl-facebook'></i></a></li>
                                    <li><a href="#"><i class='bx bxl-instagram'></i></a></li>
                                    <li><a href="#"><i class='bx bxl-twitter'></i></a></li>
                                    <li><a href="#"><i class='bx bxl-linkedin'></i></a></li>
                                    <li><a href="#"><i class='bx bxl-pinterest'></i></a></li>
                                </ul>
                                <Button className='btn btn-primary btn-sm'>Edit</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Profile;