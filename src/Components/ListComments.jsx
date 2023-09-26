import React, { useContext, useState } from "react";

import CommentArea from "./CommentArea";
import { DataComments } from "../contexts/CommentContext";

import { Trash } from "react-bootstrap-icons";

import "./singleBook.css";

const url = "https://striveschool-api.herokuapp.com/api/comments/";
const keyApi =
	"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGUzMTUzZTFmMTc1YzAwMTRjNTU4Y2UiLCJpYXQiOjE2OTU1NzIyMTQsImV4cCI6MTY5Njc4MTgxNH0.VegnslOyQWHmvNMTgGjVKqRgEMrTpVJty3fwz_z3k3k";

const ListComments = () => {
	const { listComments, setListComments } = useContext(DataComments);
	const [reload, setReload] = useState(false);

	const handleDeleteComment = async (commentId) => {
		if (commentId) {
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
		}
	};

	const toggleReLoad = () => {
		setReload(!reload);
		window.location.reload();
		alert("il commento è stato eliminato!");
	};

	return (
		<div className="mybackground myshadow">
			<CommentArea />
			<ul>
				{listComments.map((comment) => (
					<li className="myList" key={comment._id}>
						<p>
							{" "}
							<b>Autore:</b> {comment.author}
						</p>
						<p>
							<b>Commento:</b> {comment.comment}
						</p>
						<p>
							<b>Valutazione:</b> {comment.rate}
						</p>
						<button
							onClick={() =>
								handleDeleteComment(comment._id).then(() => toggleReLoad())
							}
						>
							<Trash color="red" />
						</button>
						<hr />
					</li>
				))}
			</ul>
		</div>
	);
};

export default ListComments;
