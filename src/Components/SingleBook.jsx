import React,{useState} from "react";

import CommentArea from "./CommentArea";
import ModalTextArea from "./ModalTextArea";
import Card from 'react-bootstrap/Card';
import { nanoid } from "nanoid";

import './singleBook.css'


const SingleBook = ({img, title, price, asin}) => {
   
 const [selected, setSelected] = useState(false);


    const toggleBorder = () => {
        setSelected(!selected)
  
    }
    
    return(
                <Card style={{ width: '18rem' }}>
                    <Card.Img onClick={toggleBorder} 
                    className={`${selected? "myBorder" : ""}`} //se selected è true aggiungi myBorder, altrimenti aggiungi stringa vuota alla classe
                    variant="top" src={img}/>
                    <Card.Body  >
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {price}
                        </Card.Text>
                        <ModalTextArea asinParametro={asin} />

                    </Card.Body>
                </Card>
    )
}


export default SingleBook;

