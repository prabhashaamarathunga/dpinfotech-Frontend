import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddEmpModal } from './AddEmpModal';
import { UpdateEmpModal } from './UpdateEmpModal';


export class Employee extends Component {

    constructor(props){
        super(props);
        this.state = {
            emps:[], 
            addModalShow : false,
            updateModalShow : false
        }
    }
    componentDidMount(){
        this.refreshList();
    }

    refreshList(){
        fetch('https://localhost:44359/api/Employee')
        .then(response => response.json())
        .then(data =>{
            this.setState({emps:data});
        })
    }

    componentDidUpdate(){
        this.refreshList();
    }

    DeleteEmp(empCode){
        if(window.confirm('Delete Employee?'))
        {
            fetch('https://localhost:44359/api/Employee/'+empCode,{
                method:'DELETE',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                },
            })
        }
    }
  render() {

   
      const{emps, 
        empCode, 
        empInitials,
        empFirstname,
        empSurname,
        empEmpAddress,
        empDOB,
        empEmpStatus    
                        } = this.state;
      let addModalClose = () => this.setState({addModalShow:false});
      let updateModalClose = () => this.setState({updateModalShow:false});

    return (
        <div>
        <Table className="mt-4" striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>EmployeeID</th>
                    <th>Name</th>
                    <th>DateofBirth</th>
                    <th>Status</th>
                    <th>Actions</th>

                </tr>
            </thead>

            <tbody>
                {emps.map(emp=>
                    <tr key = {emp.Code}>
                    <td>{emp.Code}</td>
                    <td>{emp.Firstname+" "+emp.Surname}</td>
                    <td>{emp.DOB}</td>
                    <td>{emp.EmpStatus}</td>
                    <td>
                        <ButtonToolbar>
                            <Button className="mr-2" variant="info" onClick={()=> this.setState({updateModalShow:true, 
                                empCode:emp.Code,
                                empInitials:emp.Initials,
                                empFirstname:emp.Firstname,
                                empSurname:emp.Surname,
                                empEmpAddress:emp.EmpAddress,
                                empDOB:emp.DOB,
                                empEmpStatus:emp.EmpStatus})}>
                            Update
                            </Button>

                            <Button className="mr-2" variant="danger" onClick={()=> this.DeleteEmp(emp.Code)}>
                            Delete
                            </Button>


                            <UpdateEmpModal
                            show = {this.state.updateModalShow}
                            onHide={updateModalClose}
                            empCode = {empCode}
                            empInitials = {empInitials}
                            empFirstname = {empFirstname}
                            empSurname = {empSurname}
                            empEmpAddress = {empEmpAddress}
                            empDOB = {empDOB}
                            empEmpStatus = {empEmpStatus}
                            />
                        </ButtonToolbar>
                    </td>
                    </tr>
                    
                    
                    )}
            </tbody>

        </Table>

    <ButtonToolbar>
    <Button
        variant='primary'
        onClick={()=> this.setState({addModalShow:true})}>
        Add Employee
    </Button>

    <AddEmpModal
        show ={this.state.addModalShow}
        onHide= {addModalClose}/>
    </ButtonToolbar>
</div>
    );
  }
}