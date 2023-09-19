
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './Components/MyNav';
import Jumbotron from './Components/Jumbotron';
import LatestRelease from './Components/LatestRelease';
import { Container, Row, Col } from "react-bootstrap";
import BookContext from './contexts/BookContext';



function App() {
const [query, setQuery] = useState("")
  return (

      <BookContext>
      
          <MyNav navQuery={query} navSetQuery={setQuery} />
          <Jumbotron/>
          <Container>
            <Row>
                <Col>
                  <LatestRelease navQuery={query}/>
                </Col>
                <Col>
                  
                </Col>
            </Row>
          </Container>
        
      </BookContext>
      
    
  );
}

export default App;