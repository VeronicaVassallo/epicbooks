import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "./singleBook.css";

import { Trash } from "react-bootstrap-icons";

const url = "https://striveschool-api.herokuapp.com/api/comments/";
const keyApi =
	"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGUzMTUzZTFmMTc1YzAwMTRjNTU4Y2UiLCJpYXQiOjE2OTQyNDY0MzAsImV4cCI6MTY5NTQ1NjAzMH0.ew3uBhcSMloW84sp7YPmjN9PrsRuH5XCDi_Ec-3x-gs";

function ModalTextArea(asinParametro) {
	const [author, setAuthor] = useState("");
	const [rate, setRate] = useState(0);
	const [commentTextarea, setcommentTextarea] = useState("");
	const [reload, setReload] = useState(false);

	const [show, setShow] = useState(false);
	let [allComments, setAllComments] = useState([]);
	console.log(allComments);

	const handleClose = () => setShow(false);
	const handleShow = () => {
		setShow(true);
	};

	const toggleReLoad = () => setReload(!reload);

	const getComment = () => {
		try {
			fetch(url + asinParametro.asinParametro, {
				headers: {
					Authorization: keyApi,
				},
			})
				.then((res) => res.json())
				.then((resJson) => {
					setAllComments(resJson);
					console.log(setAllComments);
				});
		} catch (error) {
			console.log(error);
		}
	};
	const postComment = (e) => {
		e.preventDefault();

		try {
			fetch(url, {
				method: "POST",
				body: JSON.stringify({
					author: author,
					rate: rate,
					comment: commentTextarea,
					elementId: asinParametro.asinParametro,
				}),
				headers: {
					Authorization: keyApi,
					"Content-Type": "application/json",
				},
			})
				.then((res) => res.json())
				.then((resJson) => {
					debugger;
				});
		} catch (error) {
			console.log(error);
		}
	};

	const handleDeleteComment = async (commentId) => {
		const commentUrl = `https://striveschool-api.herokuapp.com/api/comments/${commentId}`;

		try {
			return await fetch(commentUrl, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					Authorization: keyApi,
				},
			});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getComment();
	}, [reload]);

	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				Recensioni
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form>
						<label htmlFor="author">author</label>
						<input
							type="text"
							name="user"
							id="user"
							onChange={(e) => setAuthor(e.target.value)}
						/>
						<label htmlFor="rate">Rate</label>
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
						<button type="submit" onClick={(e) => postComment(e)}>
							Post
						</button>
					</form>
					<ul>
						{allComments.map((comment) => (
							<li>
								<p>{comment.author}</p>
								<button
									onClick={() =>
										handleDeleteComment(comment._id).then(() => toggleReLoad())
									}
								>
									<Trash color="red" />
								</button>
								<p>{comment.comment}</p>
							</li>
						))}
					</ul>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default ModalTextArea;
