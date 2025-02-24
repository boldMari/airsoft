import Container from "react-bootstrap/Container";
import Sponsors from "./Sponsors";

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer>
			<Container className="py-5 text-center">
				&copy; Bullet Farm {currentYear}
			</Container>
			<Sponsors />
		</footer>
	)
}

export default Footer