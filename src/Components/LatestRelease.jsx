import React, {Component} from "react";

import {Container, Row, Col, Form, Button }from "react-bootstrap";


import SingleBook from "./SingleBook";

import fantasy from "../Books/fantasy.json"


class LatestRelease extends Component{
    constructor(props){
        super(props);

        this.state = {
            formValue: "",
            arrayFilteredBooks: fantasy,
        }
    }
    //metodo che recupera il valore dell'inpunt
    getValueFromForm = (e) => {
        const {name, value} = e.target;
        this.setState({[name]:value.trim()})

    }

    /*metodo che all'onclick del bottone mi filtra e mi crea un array con i libri
     il cui titolo include il valore dell'inpunt*/
   submitFiltered = (e) => {
    e.preventDefault();
    const {formValue} = this.state //valore stato/form

    const fantasybooks = fantasy;
    let booksFiltered =  fantasybooks.filter(bk => bk.title.toLowerCase().includes(formValue.toLowerCase()))// ho i libri filtrati
   this.setState({arrayFilteredBooks: booksFiltered})


   }

    render(){
        return(
            <Container>
                <Row>
                    
                    <Form onSubmit={this.submitFiltered}> 
                        <Row className="mb-3">
                            <Form.Group className="d-flex" as={Col} md="4" controlId="validationCustom01">
                                <Form.Label>Search Your Book</Form.Label>
                                <Form.Control
                                    name= "formValue"
                                    value={this.state.formValue}
                                    required
                                    type="text"
                                    onChange={this.getValueFromForm}
                                />
                                <Button type="submit">Search</Button>
                            </Form.Group>
                            
                        </Row> 
                    </Form>
                
                    <Col className="d-flex flex-wrap gap-4">
                  
                     {this.state.arrayFilteredBooks.map((book) =>
                        <SingleBook
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

