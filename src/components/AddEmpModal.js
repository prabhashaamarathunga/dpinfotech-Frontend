import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class AddEmpModal extends Component {
    constructor(props){
        super(props);
    }

handleSubmit(event){

        event.preventDefault();

        fetch('https://localhost:44359/api/Employee',{
            method:'Post',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Code:event.target.Code.value,
                Initials:event.target.Initials.value,
                Firstname:event.target.Firstname.value,
                Surname:event.target.Surname.value,
                EmpAddress:event.target.EmpAddress.value,
                DOB:event.target.DOB.value,
                EmpStatus:event.target.EmpStatus.value
            })
        })

            .then(response => response.json())
            .then((result)=>
            {
                alert(result)
            },
            (error)=>{
                alert('Failed')
            })
      
}

  render() {
    return (
        <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Employee
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
            <div className="container">

            <Form onSubmit={this.handleSubmit}>
            <Row>
                <Col>
                        <Form.Group controlId="Code">
                        </Form.Group>
                        <Form.Label>Employee ID</Form.Label>
                        <Form.Control
                        type="text"
                        name="Code"
                        required
                        placeholder= "Employee ID"/>
                </Col>
            </Row>

            <Row>
                <Col sm={2}>
                        <Form.Group controlId="Initials">  
                        </Form.Group>
                        <Form.Label>Initials</Form.Label>
                        <Form.Control
                        type="text"
                        name="Initials"
                        required
                        placeholder= "Initials"/>
                </Col>
                <Col>
                        <Form.Group controlId="Firstname">  
                        </Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                        type="text"
                        name="Firstname"
                        required
                        placeholder= "First Name"/>
                </Col>
                <Col>
                        <Form.Group controlId="Surname">  
                        </Form.Group>
                        <Form.Label>Surname</Form.Label>
                        <Form.Control
                        type="text"
                        name="Surname"
                        required
                        placeholder= "Surname"/>
                </Col>
            </Row>
            <Row>
                <Col>
                        <Form.Group controlId="EmpAddress">
                        </Form.Group>
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                        type="text"
                        name="EmpAddress"
                        required
                        placeholder= "Address"/>
                </Col>
            </Row>

            <Row>
                <Col>
                        <Form.Group controlId="DOB">
                        </Form.Group>
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control
                        type="date"
                        name="DOB"
                        required
                        placeholder= "Date of Birth"/>
                </Col>
            </Row>

            <Row>
                <Col>
                        <Form.Group controlId="EmpStatus">
                        </Form.Group>
                        <Form.Label>Status</Form.Label>
                        <Form.Control
                        type="text"
                        name="EmpStatus"
                        required
                        placeholder= "Status"/>
                </Col>
            </Row>

            <Row>
                <Col>
                        <Form.Group>
                            <Button varient="primary" type="submit">Submit</Button>
                        </Form.Group>
                </Col>
            </Row>
            </Form>
            </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
