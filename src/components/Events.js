import { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "hooks/useAuth";
import { getEvents } from 'lib/events';
import { getImageUrl } from 'lib/storage';
import burza from "assets/images/airsoft-burza_1920.jpg"

const Events = () => {
	const [events, setEvents] = useState();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const { session } = useAuth();

	useEffect(() => {

		(async function run() {
			try {
				const { events } = await getEvents();
				setEvents(events);
				setLoading(false);
			} catch (error) {
				setEvents(null);
				setLoading(false);
				setError(true);
			}
		})();

	}, []);

	return (
		<>
			<Container>
				<Row>
					<Col>
						<h2 className="featurette-heading fw-normal lh-1 my-4 text-primary">Události</h2>
					</Col>
					{session && (
						// <Col className="d-flex justify-content-end">
						<Col className='align-self-center text-end'>
							<div className="btn-group">
								<Link to={'/udalosti/vytvorit'} className="btn btn-sm btn-outline-secondary">Vytvořit</Link>
							</div>
						</Col>
					)}
				</Row>
				{loading ? (
					<p>Načítám...</p>
				) : error ? (
					<p>Chyba spojení s databází. Zkuste to prosím později.</p>
				) : (
					<Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
						{events.map(event => {
							const imageUrl = event?.imageFileId && getImageUrl(event.imageFileId);
							return (
								<Col key={event.$id}>
									<div className="card shadow-sm">
										<Link to={'../udalosti/' + event.$id}>
											<img src={imageUrl || burza} alt="" className="card-img-top cover" width="100%" height="225" role="img" focusable="false" />
										</Link>
										<div className="card-body">
											<h4>{event.name}</h4>
											{/* <p>{event.$id}</p> */}
											<p>{new Date(event.date).toLocaleDateString('cs-CZ') || "Upřesníme"}</p>
											<p>{event.description || "Žádný popis"}</p>
											<div className="d-flex justify-content-between align-items-center">
												<div className="btn-group">
													<Link to={'../udalosti/' + event.$id} className="btn btn-sm btn-outline-secondary">Detail</Link>
												</div>
											</div>
										</div>
									</div>
								</Col>
							)
						})}
					</Row>
				)}
			</Container>
		</>
	)
}

export default Events