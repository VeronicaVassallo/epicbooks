import React, { useContext } from "react";
//elementi bootstrap
import { Container, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Col, Form, Button } from "react-bootstrap";
//importro nanoid qui
import { nanoid } from "nanoid";
//importO L'array di oggettti NavLinks
import { navLinks } from "./navLinks";
import "./singleBook.css";
//valore inpunt

import { Books } from "../contexts/BookContext";

const MyNav = ({ navQuery, navSetQuery }) => {
	//libri filtati
	//const [filteredBooks, setFilteredBooks] = useState(fantasy);

	const { books, setBooks, loading, getData } = useContext(Books);
	console.log(books);

	const getValueFromForm = (value) => {
		navSetQuery(value);
	};

	return (
		<Navbar expand="lg" className="bg-body-tertiary">
			<Container fluid className="bg-info MyColor">
				<Row>
					<Navbar.Brand className="text-white" href="#">
						EpicBooks
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							{navLinks.map((link) => (
								<Nav.Link key={nanoid()} href={link.url}>
									{link.label}
								</Nav.Link>
							))}
							<Form className="MyForm" /*onSubmit={submitFiltered}*/>
								<Row className="mb-3">
									<Form.Group
										className="d-flex"
										as={Col}
										md="4"
										controlId="validationCustom01"
									>
										<Form.Label>Search Your Book</Form.Label>
										<Form.Control
											name={navQuery}
											type="text"
											onChange={(e) => getValueFromForm(e.target.value)}
										/>
										<Button>Dark Mode</Button>
									</Form.Group>
								</Row>
							</Form>
						</Nav>
					</Navbar.Collapse>
				</Row>
			</Container>
		</Navbar>
	);
};

export default MyNav;
