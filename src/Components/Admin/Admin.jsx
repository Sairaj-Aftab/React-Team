import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Admin/Admin.css';

const Admin = () => {

    const [admin, setAdmin] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5050/team`).then(res => {
            setAdmin(res.data)
        }).catch(err => {
            console.log(err.data);
        })
    },[admin])

    const handleClick = (id) => {
        axios.delete(`http://localhost:5050/team/${id}`).then().catch()
    }

  return (
    <section className='admin mt-2'>
        <Container>
            <Row className='justify-content-center'>
                <Col md='10'>
                    <Card>
                        <Card.Header>
                            <Card.Title>Admin Dashboard...</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Table className='table-striped'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Gmail</th>
                                        <th>Phone</th>
                                        <th>Photo</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        admin.map( (data, index) =>
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{`${data.first} ${data.last}`}</td>
                                            <td>{data.email}</td>
                                            <td>{data.phone}</td>
                                            <td><img style={{width:'30px', height:'30px', objectFit:'cover',borderRadius:'20%'}} src={data.photo} alt="" /></td>
                                            <td>
                                                <Link to={`/profile/${data.id}`} className='btn btn-primary btn-sm'><i class='bx bx-low-vision'></i></Link> &nbsp;
                                                <Button className='btn btn-info btn-sm'><i class='bx bx-edit'></i></Button> &nbsp;
                                                <Button onClick={ () => handleClick(data.id) } className='btn btn-danger btn-sm'><i class='bx bx-trash'></i></Button>
                                            </td>
                                        </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Admin;