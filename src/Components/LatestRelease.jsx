import React, { useState } from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

import SingleBook from "./SingleBook";

import fantasy from "../Books/fantasy.json";

// Questa funzione filtra i libri
const LatestRelease = (navQuery) => {
	const [filteredBooks, setFilteredBooks] = useState(fantasy);

	const submitFiltered = (e) => {
		console.log(`Fantasy: ${fantasy}`);
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
		<Container>
			<Row>
				<Form onSubmit={submitFiltered}>
					<Row className="mb-3">
						<Button type="submit">Search</Button>
					</Row>
				</Form>

				<Col className="d-flex flex-wrap gap-4">
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
			</Row>
		</Container>
	);
};

export default LatestRelease;
