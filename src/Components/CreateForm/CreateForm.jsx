import axios from 'axios';
import React, { useState } from 'react'
import { Alert, Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import '../CreateForm/CreateForm.css';

const CreateForm = () => {

    const [form, setForm] = useState({
        first : '',
        last : '',
        email : '',
        phone : '',
        photo : '',
        fb : '',
        ins : '',
        tw : '',
        li : ''
    })
    let {first, last, email, phone, photo, fb, ins, tw, li} = form;
    console.log(first, last, email, photo, fb, ins, tw, li);

    // Form Submit
    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (first === '' || last === '' || email === '' || photo === '') {
            setAlert({
                message : 'All Fields are Require',
                type : 'alert-danger',
                status : true
            })
        } else {

            axios.post(`http://localhost:5050/team`, {
                first : first,
                last : last,
                email : email,
                phone : phone,
                photo : photo,
                fb : fb,
                ins : ins,
                tw : tw,
                li : li
            }).then( res => {
                setAlert({
                    message : 'Data Stable',
                    type : 'alert-success',
                    status : true
                })

                setForm({
                    first : '',
                    last : '',
                    email : '',
                    phone : '',
                    photo : '',
                    fb : '',
                    ins : '',
                    tw : '',
                    li : ''
                })
            }).catch( err => {
                console.log(err.data);
            })

            
        }
    }

    // Manage Alert
    const [alert, setAlert] = useState({
        message : '',
        type : '',
        status : false
    })

  return (
    <section className='form mt-5'>
        <Container>
            <Row className='justify-content-center'>
                <Col md='5'>
                    <Card className='shadow'>
                        <Card.Header className='d-flex justify-content-between'>
                            <Card.Title>Create Info...</Card.Title>
                           {
                               alert.status &&  <Alert className={alert.type}><p>{ alert.message }</p></Alert>
                           }
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={ handleFormSubmit }>
                                <div className="name-field d-flex justify-content-between">
                                    <Form.Group className='w-48 mb-2'>
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" value={first} onChange={ e => setForm({...form, first: e.target.value})}></Form.Control>
                                    </Form.Group>
                                    <Form.Group className='w-48 mb-2'>
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" value={last} onChange={e => setForm({...form, last: e.target.value})} ></Form.Control>
                                    </Form.Group>
                                </div>
                                <Form.Group className='mb-2'>
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="email" value={email} onChange={e => setForm({...form, email: e.target.value})} ></Form.Control>
                                </Form.Group>
                                <Form.Group className='mb-2'>
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="text" value={phone} onChange={e => setForm({...form, phone: e.target.value})} ></Form.Control>
                                </Form.Group>
                                <Form.Group className='mb-2'>
                                    <Form.Label>Photo</Form.Label>
                                    <Form.Control type="text" value={photo} onChange={e => setForm({...form, photo: e.target.value})} ></Form.Control>
                                </Form.Group>
                                <Row>
                                    <Col md="6">
                                        <Form.Group className='mb-2'>
                                            <Form.Label>Facebook</Form.Label>
                                            <Form.Control type="text" value={fb} onChange={e => setForm({...form, fb: e.target.value})} ></Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col md="6">
                                        <Form.Group className='mb-2'>
                                            <Form.Label>Instagram</Form.Label>
                                            <Form.Control type="text" value={ins} onChange={e => setForm({...form, ins: e.target.value})} ></Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col md="6">
                                        <Form.Group className='mb-2'>
                                            <Form.Label>Twitter</Form.Label>
                                            <Form.Control type="text" value={tw} onChange={e => setForm({...form, tw: e.target.value})} ></Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col md="6">
                                        <Form.Group className='mb-2'>
                                            <Form.Label>Linkedin</Form.Label>
                                            <Form.Control type="text" value={li} onChange={e => setForm({...form, li: e.target.value})} ></Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group className='mb-2'>
                                    <Button className='btn btn-primary w-100' type="submit" value="submit">Submit</Button>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default CreateForm;