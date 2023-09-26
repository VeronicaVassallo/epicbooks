import React, { useState } from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

import SingleBook from "./SingleBook";

import fantasy from "../Books/fantasy.json";

//prova 2
import ListComments from "./ListComments";
import CommentContext from "../contexts/CommentContext";

// Questa funzione filtra i libri
const LatestRelease = (navQuery) => {
	const [filteredBooks, setFilteredBooks] = useState(fantasy);

	const submitFiltered = (e) => {
		e.preventDefault();

		if (navQuery.navQuery === "") {
			setFilteredBooks(fantasy);
		} else {
			const booksFiltered = fantasy.filter((book) =>
				book.title.toLowerCase().includes(navQuery.navQuery.toLowerCase())
			);

			setFilteredBooks(booksFiltered);
		}
	};

	return (
		<CommentContext>
			<Container>
				<Row>
					<Form onSubmit={submitFiltered}>
						<Row className="mx-1 mb-3">
							<Button type="submit" className="bg-danger">
								Cerca
							</Button>
						</Row>
					</Form>

					<Col md={7} className="d-flex flex-wrap gap-4">
						{filteredBooks.map((book) => (
							<SingleBook
								key={book.asin}
								img={book.img}
								title={book.title}
								price={book.price}
								asin={book.asin}
							/>
						))}
					</Col>
					<Col md={3}>
						<ListComments />
					</Col>
				</Row>
			</Container>
		</CommentContext>
	);
};

export default LatestRelease;
