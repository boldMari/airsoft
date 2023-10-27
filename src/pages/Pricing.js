import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PricingCard from "../components/PricingCard";

const Pricing = () => {
  return (
	<Container>
		<Row>
			<Col>
				<PricingCard></PricingCard>
			</Col>
		</Row>
	</Container>
  )
}

export default Pricing