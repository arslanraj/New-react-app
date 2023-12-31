import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from "../assets/images/IMG_20190216_155103-01.jpg"
function Projects() {
  return (
    <div className='bg-dark mb-5'>
    <div className='container '>
        <div className='row '   >
            <div className='col-sm-12 col-md-6 col-lg-4  ' >
            <Card style={{ width: '18rem'  }}  className=' mt-5'>
                <Card.Img variant="top" src={Image} style={{height:"15rem", }}/>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4 '>
            <Card style={{ width: '18rem' }} className=' mt-5'>
                <Card.Img variant="top" src={Image} style={{height:"15rem", }}/>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4'>
            <Card style={{ width: '18rem' }} className=' mt-5'>
                <Card.Img variant="top" src={Image}style={{height:"15rem", }}/>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4 '>
            <Card style={{ width: '18rem' }} className=' mt-5 mb-5 '>
                <Card.Img variant="top" src={Image} style={{height:"15rem", }}/>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4 '>
            <Card style={{ width: '18rem' }} className=' mt-5 mb-5'>
                <Card.Img variant="top" src={Image} style={{height:"15rem", }}/>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4 '>
            <Card style={{ width: '18rem' }} className=' mt-5 mb-5'>
                <Card.Img variant="top" src={Image} style={{height:"15rem", }}/>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </div>
           
            
            
          
        </div>
      
    </div>
    </div>
  )
}

export default Projects
