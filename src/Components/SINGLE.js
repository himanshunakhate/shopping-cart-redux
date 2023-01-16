import React from 'react'
import { Card } from 'react-bootstrap'
import './styles.css'

const SINGLE = () => {
  return (
    <div className='products flex-container'>
        <Card>
            <Card.Img variant='Top' src="https://source.unsplash.com/random/200x200?engineering" />
            <Card.Body>Hello</Card.Body>
        </Card>
        <Card>
            <Card.Img variant='Top' src="https://source.unsplash.com/random/200x200?engineering" />
            <Card.Body>Hello</Card.Body>
        </Card>
        <Card>
            <Card.Img variant='Top' src="https://source.unsplash.com/random/200x200?engineering" />
            <Card.Body>Hello</Card.Body>
        </Card>
      
    </div>
  )
}

export default SINGLE
