import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./Components/MyNav";
import Jumbotron from "./Components/Jumbotron";
import LatestRelease from "./Components/LatestRelease";
import { Container, Row } from "react-bootstrap";
import BookContext from "./contexts/BookContext";
import MyFooter from "./Components/MyFooter";

function Home() {
	const [query, setQuery] = useState("");
	return (
		<BookContext>
			<Container fluid>
				<Jumbotron />
				<MyNav navQuery={query} navSetQuery={setQuery} />
			</Container>
			<Container fluid>
				<Row>
					<LatestRelease navQuery={query} />
				</Row>
			</Container>
			<MyFooter />
		</BookContext>
	);
}

export default Home;
