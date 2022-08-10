import React from 'react'
 import Card from 'react-bootstrap/Card';
 // import { Link } from 'react-router-dom';

const UserCard = ({user}) => {
    console.log(user.name)
  return (
    <div>
       <Card style={{ width: '18rem' }}>
     <Card.Body>
      <Card.Title>{user.name}</Card.Title>
      <Card.Text>{user.email}</Card.Text>
      <Card.Text>{user.phone}</Card.Text>
    </Card.Body>
  </Card> 
  </div>
  )
}

export default UserCard