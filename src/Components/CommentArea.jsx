import { DataComments } from "../contexts/CommentContext";
import { Button } from "react-bootstrap/";
import "./singleBook.css";
import React, { useContext, useState } from "react";
const url = "https://striveschool-api.herokuapp.com/api/comments/";
const keyApi =
	"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGUzMTUzZTFmMTc1YzAwMTRjNTU4Y2UiLCJpYXQiOjE2OTU1NzIyMTQsImV4cCI6MTY5Njc4MTgxNH0.VegnslOyQWHmvNMTgGjVKqRgEMrTpVJty3fwz_z3k3k";

const CommentArea = () => {
	const { selected, setSelected } = useContext(DataComments);
	const [author, setAuthor] = useState("");
	const [rate, setRate] = useState(0);
	const [commentTextarea, setcommentTextarea] = useState("");
	const [reload, setReload] = useState(false);

	const postComment = (e) => {
		e.preventDefault();

		try {
			fetch(url, {
				method: "POST",
				body: JSON.stringify({
					author: author,
					rate: rate,
					comment: commentTextarea,
					elementId: selected,
				}),
				headers: {
					Authorization: keyApi,
					"Content-Type": "application/json",
				},
			})
				.then((res) => res.json())
				.then((resJson) => {})
				.then(window.location.reload())
				.then(alert("Commento caricato, riseleziona il libro!!"));
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form className="mybackground p-4 text-light">
			<label className="m-2" htmlFor="author">
				Autore
			</label>
			<input
				className="mb-2"
				type="text"
				name="user"
				id="user"
				onChange={(e) => setAuthor(e.target.value)}
			/>
			<br />
			<label className="m-2" htmlFor="rate">
				Voto da 1 a 5:
			</label>
			<input
				type="number"
				name="rate"
				id="rate"
				onChange={(e) => setRate(e.target.value)}
			/>
			<p>
				<label htmlFor="textArea">Aggiungi un commento</label>
			</p>
			<textarea
				className="myhight"
				name="textArea"
				id="textArea"
				cols="30"
				rows="10"
				onChange={(e) => setcommentTextarea(e.target.value)}
			></textarea>
			<br />
			<Button
				className="bg-danger"
				type="submit"
				onClick={(e) => postComment(e)}
			>
				Post
			</Button>
		</form>
	);
};

export default CommentArea;
