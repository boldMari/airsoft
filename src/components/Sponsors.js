import Container from "react-bootstrap/Container";
import anareus from "../assets/images/anareus.png"
import bohemia from "../assets/images/bohemia.png"
import action from "../assets/images/action.svg"
import epes from "../assets/images/epes.png"
import krupicka from "../assets/images/krupicka.png"
import fosil from "../assets/images/fosil.png"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styled from "styled-components";

const SponsorsContainer = styled(Container)`
	a {
		display: inline-block;
	}
	
	img {
		max-width: 200px;
		max-height: 50px;
		width: auto;
		height: auto;
	}

	.row {
		gap: 20px 10px;
	}
`;

function Footer() {

	return (
		<SponsorsContainer className="py-5 text-center">
			<Row className="mb-3">
				<h6>Sponzoři</h6>
			</Row>
			<Row className="row-cols-2 row-cols-md-3 row-cols-lg-4 justify-content-center">
				<Col>
					<a href='https://www.anareus.cz/'><img src={anareus} width="100%" height="250" alt="Anareus logo" /></a>
				</Col>
				<Col>
					<a href='https://airsoftshop.cz/'><img src={bohemia} width="100%" height="250" alt="Bohemia Air Soft logo"/></a>
				</Col>
				<Col>
					<a href='https://www.epes-shop.cz/'><img src={epes} width="100%" height="250" alt="Epes logo" /></a>
				</Col>
				<Col>
					<a href='https://www.actionshop.cz/'><img src={action} width="100%" height="250" alt="Action Shop logo" /></a>
				</Col>
				<Col>
					<a href='https://www.pyrotechnika.cz/'><img src={krupicka} width="100%" height="250" alt="Krupička ohňostroje logo" /></a>
				</Col>
				<Col>
					<a href='https://www.facebook.com/mareksc'><img src={fosil} width="100%" height="250" alt="Fosil Senil Club logo" /></a>
				</Col>
			</Row>
		</SponsorsContainer>
	)
}

export default Footer