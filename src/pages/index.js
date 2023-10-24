import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "../components/Card";
import ShortRules from "../components/ShortRules";
import Address from "../components/Address";
import Limits from "../components/Limits";
import Events from "../components/Events";
import ControlledCarousel from "../components/ControlledCarousel";

const Home = () => {
	return (
		<>
			<ControlledCarousel />
			<Container>
				<Row className="row-cols-1 row-cols-md-3 mb-3 text-center mt-5">
					<Col>
						<Card title="Jsi u nás poprvé?" description="Základní informace k první hre." link="/informace" cta="Více info"></Card>
					</Col>
					<Col>
						<Card title="Ceník" description="od 100 Kč" link="/cenik" cta="Více info"></Card>
					</Col>
					<Col>
						<Card title="Půjčovna" description="Vše, co potřebuješ k hre." link="/cenik" cta="Více info"></Card>
					</Col>
				</Row>
				<Row>
					<Col>
						<ShortRules />
					</Col>
				</Row>
				<Row>
					<Col>
						<Limits />
					</Col>
				</Row>
				<Row>
					<Col>
						<Events />
					</Col>
				</Row>
				<Row>
					<Col>
						<Address />
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default Home