import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import burza from "assets/images/airsoft-burza_1920.jpg"
import { getEventById } from 'lib/events';

function Event() {
	const { id } = useParams();

	const [event, setEvent] = useState(undefined);

	useEffect(() => {

		(async function run() {
			const { event } = await getEventById(id);
			setEvent(event);
		})();

	}, [id]);

	return (
		<Container>
			<Row>
				<Col>
					{event ? (
						<>
							<h1>{event.name}</h1>

							<div className="card shadow-sm">
								<img src={event.image || burza} alt="" className="card-img-top cover" width="100%" height="225" role="img" focusable="false" />
								<div className="card-body">
									{/* <p>{event.$id}</p> */}
									<p>{new Date(event.date).toLocaleDateString('cs-CZ') || "Upřesníme"}</p>
									<p>{event.description || "Žádný popis"}</p>
								</div>
							</div>
						</>
					) : (
						<h1>Chyba připojení k databázi</h1>
					)}
				</Col>
			</Row>
		</Container>
	)
}

export default Event