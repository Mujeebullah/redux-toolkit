import './App.css';
import { Button, Col, Container, Row, ListGroup, Table } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {createUser} from './api/index';
import {addUser} from './store/slices/userSlice';
import UserDetail from './UserDetail';

function App() {
  const dispatch = useDispatch();  

  const addNewUser = (user) => {
    dispatch(addUser(user));    
  }

  return (
    <Container className='mt-3'>
      <Row>
        <Col><p className='text-center'>Welcome to React reduce using @reduxjs/toolkit</p></Col>
      </Row>
      <Row className='mb-3'>
        <Col><h1 className='text-muted'>Admin Table</h1></Col>
        <hr />
        <div className='d-flex justify-content-between'>
          <h2>List of all users</h2>
          <Button variant='primary' onClick={()=>addNewUser(createUser())}>Add User</Button>
        </div>
      </Row>
      <Row>
        <Col style={{height: '50vh', overflow: 'auto'}}>
        <Table striped bordered hover>
        <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Email</th>
          <th>fullName</th>
          <th>DOB</th>
          <th>City</th>
          <th>Country</th>
          <th>zipCode</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        <UserDetail />
      </tbody>

        </Table>
        
        </Col>
      </Row>
    </Container>
  );
}

export default App;
