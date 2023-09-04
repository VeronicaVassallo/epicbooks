import React,{Component} from "react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';






class MyCard extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.img}/>
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.price}
                        </Card.Text>
                        <Button variant="primary">Aggiungi</Button>
                    </Card.Body>
                </Card>
        )
    }
}

export default MyCard;