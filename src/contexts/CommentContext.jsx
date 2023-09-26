import React, { createContext, useEffect, useState } from "react";

export const DataComments = createContext();

const url = "https://striveschool-api.herokuapp.com/api/comments/";
const keyApi =
	"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGUzMTUzZTFmMTc1YzAwMTRjNTU4Y2UiLCJpYXQiOjE2OTU1NzIyMTQsImV4cCI6MTY5Njc4MTgxNH0.VegnslOyQWHmvNMTgGjVKqRgEMrTpVJty3fwz_z3k3k";

const CommentContext = ({ children }) => {
	const [selected, setSelected] = useState(null); // qui andro a salvare il valore dell'asin di ciascon libro che ho selezionato
	const [listComments, setListComments] = useState([]);

	const getComment = () => {
		try {
			if (selected) {
				fetch(url + selected, {
					headers: {
						Authorization: keyApi,
					},
				})
					.then((res) => res.json())
					.then((resJson) => {
						setListComments(resJson);
					});
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getComment();
	}, [selected]);

	return (
		<DataComments.Provider
			value={{ selected, setSelected, listComments, setListComments }}
		>
			{children}
		</DataComments.Provider>
	);
};
export default CommentContext;
