import { useParams, Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

import "./Components/singleBook.css";

const url = "https://epibooks.onrender.com/";

const Details = () => {
	const { bookid } = useParams();

	const url = "https://epibooks.onrender.com/";

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [books, setBooks] = useState([]);

	const [data, setData] = useState([]);
	const [comments, setComments] = useState([]);

	const urlComments = "https://striveschool-api.herokuapp.com/api/comments/";
	const keyApi =
		"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGUzMTUzZTFmMTc1YzAwMTRjNTU4Y2UiLCJpYXQiOjE2OTU1NzIyMTQsImV4cCI6MTY5Njc4MTgxNH0.VegnslOyQWHmvNMTgGjVKqRgEMrTpVJty3fwz_z3k3k";

	const getCommets = async () => {
		if (bookid) {
			try {
				const res = await fetch(urlComments + bookid, {
					headers: {
						Authorization: keyApi,
					},
				});
				debugger;
				setComments(await res.json());
			} catch (error) {
				console.log(error);
			}
		}
	};

	const getData = async () => {
		try {
			setLoading(true);
			const response = await fetch(url + bookid);
			setData(await response.json());
			setBooks(data);
			setLoading(false);
		} catch (error) {
			setError(error);
		}
	};

	useEffect(() => {
		getData();
		getCommets();
	}, []);

	return (
		<div className="mybackground">
			<Button className="m-2">
				<Link className="text-light myStyle" to={"/"}>
					{" "}
					Torna all'Home
				</Link>
			</Button>
			{data[0] ? <h1 className="m-2 text-light">{data[0].title}</h1> : ""}

			<div className="d-flex myMediaQuery">
				{data[0] ? (
					<div>
						<img
							className="m-5 myshadow"
							src={data[0].img}
							alt="img"
							width="70%"
						></img>
					</div>
				) : (
					""
				)}
				<div className="myDetails">
					<h3>Trama:</h3>
					<p>
						A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet,
						consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. A common form of Lorem ipsum reads: Lorem ipsum dolor sit
						amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
						ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
						nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.
					</p>
					{data[0] ? <p>Prezzo: {data[0].price} €</p> : ""}
					{data[0] ? <p>Genere: {data[0].category} </p> : ""}
					<p>Asin : {bookid}</p>
				</div>
			</div>
			<ul>
				{comments.map((comment) => (
					<li key={comment._id} className="text-white myList">
						<p>
							<b>Autore: </b>
							{comment.author}
						</p>
						<p>
							<b>Commento: </b>
							{comment.comment}
						</p>
						<p>
							<b>Valutazione: </b>
							{comment.rate}
						</p>
						<hr />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Details;
