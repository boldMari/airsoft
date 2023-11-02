import { Container, Row, Col } from "react-bootstrap";
import PricingCard from "components/PricingCard";

const Pricing = () => {
  return (
	<Container>
		<Row>
			<Col>
				<PricingCard/>
			</Col>
		</Row>
	</Container>
  )
}

export default Pricing