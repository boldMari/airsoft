import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "../components/Card";
import Rules from "../components/Rules";

const Home = () => {
	return (
		<Container>
			<Row>
				<Col>
					<h1>Home</h1>
				</Col>
			</Row>
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
					<Rules></Rules>
				</Col>
			</Row>
		</Container>
	)
}

export default Home