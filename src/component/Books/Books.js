import React from 'react';
import { Card, Col,Button } from "react-bootstrap";
import { useHistory } from 'react-router';

const Books = (props) => {
    const {bookName,authorName,price,imageUrl,_id} = props.book;
    console.log(bookName);
    const history = useHistory()
    const handleBook = (id) =>{
        history.push(`/checkOut/${id}`)
    }
    return (
        <>
        <Col lg={3} md={2} sm={8} style={{marginTop: '10%',width:'25rem'}}>
              <Card bg='light' style={{borderRadius:'10px',border:'1px solid black'}}>
                  <Card.Img variant="top" src={imageUrl} style={{width:'auto'}}/>
                  <Card.Body>
                      <Card.Title>{bookName}</Card.Title>
                      <p>{authorName}</p>
                      <h1>$ {price}</h1>
                      <Button variant="primary" onClick={() =>handleBook(_id)}>Buy Now</Button>
                  </Card.Body>
              </Card>
          </Col>
          
      </>
    );
};

export default Books;