import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Books from '../Books/Books';

const Home = () => {

    const [books,setBooks] = useState([]);
    useEffect(() => {
        fetch('https://nameless-plateau-23547.herokuapp.com/books')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div>
            <Container className="container-fluid" >
          <Row>
            {books.map((book) => (
              <Books book={book}></Books>
            ))}
            </Row>
          </Container>
        </div>
    );
};

export default Home;