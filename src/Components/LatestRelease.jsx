import React, {Component} from "react";
import MyCard from "./MyCard";

import {Container, Row, Col} from "react-bootstrap";

//step 2 in LatestReleas creo le basi della struttura di boostrap e gli importo la Mycard, ciclo tutti i dati che sto passando come props

class LatestRelease extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col className="d-flex flex-wrap gap-4">
                        {this.props.books.map((book) =>
                        <MyCard
                        img={book.img}
                        title={book.title}
                        price={book.price}
                        />
                        )}


                    </Col>   
                </Row>
          </Container>
        )
      }
    }






export default LatestRelease;

