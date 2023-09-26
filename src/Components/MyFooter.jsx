import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Components/singleBook.css";

const MyFooter = () => {
	return (
		<Container fluid className="mt-5 mybackground p-3 text-light">
			<Row>
				<Col md={4} lg={4}>
					<h4>Pricing</h4>
					<p>Your Accont</p>
					<p>Help</p>
					<p>info</p>
				</Col>
				<Col md={4} lg={4}>
					<h4>Company</h4>
					<p>Your Accont</p>
					<p>Help</p>
					<p>info</p>
				</Col>
				<Col md={4} lg={4}>
					<h4>Social</h4>
					<p>Istagram</p>
					<p>Facebook</p>
					<p>Tweeter</p>
				</Col>
			</Row>
		</Container>
	);
};

export default MyFooter;
