import React,{Component} from "react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { nanoid } from "nanoid";

import './singleBook.css'




export default class SingleBook extends Component{
    constructor(props){
        super(props);
      
        this.state = {
            selected: false
        }

    }

 
    toggleBorder = (e) => {
        debugger;
        this.setState(prevState =>({
         selected: !prevState.selected,
        }))

    }

    render(){
        return(
                <Card key={nanoid()} style={{ width: '18rem' }}>
                    <Card.Img onClick={this.toggleBorder} 
                    className={`${this.state.selected? "myBorder" : ""}`}
                    variant="top" src={this.props.img}/>
                    <Card.Body  >
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

