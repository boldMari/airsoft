import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from './Navbar';

const Layout = ({children}) => {

	return (
		<>
			<Container>
				<Row>
					<Col>
						<Navbar />
					</Col>
				</Row>
			</Container>
			<main>
				{children}
			</main>
		</>
	);
}

export default Layout;