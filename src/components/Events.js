import klecany from "../assets/images/klecany_.jpg"
import burza from "../assets/images/airsoft-burza_1920.jpg"
import dynamitka from "../assets/images/mp7fRR.jpeg"
import { Container, Row, Col } from "react-bootstrap";

const Events = () => {
	return (
		<>
			<Container>
				<h2 className="featurette-heading fw-normal lh-1 my-4 text-primary">Události</h2>
				<Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
					<Col>
						<div className="card shadow-sm">
							<img src={burza} alt="" className="card-img-top cover" width="100%" height="225" role="img" focusable="false" />
							<div className="card-body">
								<h4>Burza</h4>
								<p>Naše burza je místem, kde můžete prodat své nepoužívané airsoftové vybavení a získat vybavení nové.</p>
							</div>
						</div>
					</Col>
					<Col>
						<div className="card shadow-sm">
							<img src={dynamitka} className="card-img-top cover" alt="" width="100%" height="225" role="img" focusable="false" />
							<div className="card-body">
								<h4>First shot Dynamitka</h4>
								<p>První airsoftová hra v novém areálu.</p>
								<div className="d-flex justify-content-between align-items-center">
									<div className="btn-group">
										<button type="button" className="btn btn-sm btn-outline-secondary">Připravujeme</button>
									</div>
								</div>
							</div>
						</div>
					</Col>
					<Col>
						<div className="card shadow-sm">
							<img src={klecany} alt="" className="card-img-top cover" width="100%" height="225" role="img" focusable="false" />
							<div className="card-body">
								<h4>Last shot Klecany</h4>
								<p>25.6.2023 - se konala poslední hra v areálu Klecan.</p>
								<div className="d-flex justify-content-between align-items-center">
									<div className="btn-group">
										<button type="button" className="btn btn-sm btn-outline-secondary">Připravujeme</button>
									</div>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</>

	)
}

export default Events