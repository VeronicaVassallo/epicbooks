import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap/";

import "./singleBook.css";
import { Books } from "../contexts/BookContext";
import { DataComments } from "../contexts/CommentContext";

const SingleBook = ({ img, title, price, asin }) => {
	const { selected, setSelected } = useContext(DataComments);

	const selectId = () => {
		setSelected(asin);
	};

	return (
		<div className={`${asin === selected ? "myBorder" : ""}`}>
			<Card
				className="myshadow hovered"
				style={{ width: "18rem" }}
				onClick={selectId}
			>
				<Card.Img variant="top" src={img} />
				<Card.Body>
					<Card.Title>
						<b>Titolo: </b>
						{title}
					</Card.Title>
					<Card.Text>
						<b>Prezzo:</b>
						{price} €
					</Card.Text>
					<Button className="m-2">
						<Link className="text-light myStyle" to={`/details/${asin}`}>
							Info Prodotto
						</Link>
					</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default SingleBook;
