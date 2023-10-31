import Container from "react-bootstrap/Container";

function Footer() {
	const currentYear = new Date().getFullYear();
	
	return (
		<Container className="py-5 text-center">
			&copy; Bullet Farm {currentYear}
		</Container>
	)
}

export default Footer