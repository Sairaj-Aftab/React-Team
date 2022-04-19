import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Team/Team.css';

const Team = () => {

    const [team, setTeam] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5050/team`).then(res => {
            setTeam(res.data)
        }).catch(err => {
            console.log(err.data);
        })
    },[team])

  return (
    <section className='team py-5'>
        <Container>
            <Row>
                <div className="title text-center"><h2>Team Members</h2></div>
                {
                    team.map((data, index) => 
                        <Col md='3' className='my-3'>
                            <Card className='shadow'>
                                <Card.Body>
                                    <img style={{width : '150px', height: '150px', objectFit : 'cover', borderRadius:'50%', display:'block', margin:'0 auto 20px auto'}} src={data.photo} alt="" />
                                    <h6 style={{textAlign:'center'}}>{`${data.first} ${data.last}`}</h6>
                                    <p style={{textAlign:'center'}}>{data.email}</p>
                                </Card.Body>
                                <Card.Footer className='d-flex justify-content-between align-items-center'>
                                    <div className="social">
                                        <ul>
                                            <li><a href="https://facebook.com"><i class='bx bxl-facebook'></i></a></li>
                                            <li><a href="instagram.com"><i class='bx bxl-instagram'></i></a></li>
                                            <li><a href="twitter.com"><i class='bx bxl-twitter'></i></a></li>
                                            <li><a href="pinterest.com"><i class='bx bxl-pinterest'></i></a></li>
                                            <li><a href="linkedin.com"><i class='bx bxl-linkedin'></i></a></li>
                                        </ul>
                                    </div>
                                    <Link className="btn btn-sm btn-primary shadow" to={`/profile/${data.id}`}>View</Link>
                                </Card.Footer>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        </Container>
    </section>
  )
}

export default Team;