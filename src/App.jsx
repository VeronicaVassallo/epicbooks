import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";
import ErrorPage from "./ErrorPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />}></Route>
				<Route path="/details/:bookid" element={<Details />}></Route>

				<Route path="*" element={<ErrorPage />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
