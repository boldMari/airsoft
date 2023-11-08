import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { getEventById, deleteEventById } from 'lib/events';
import { getImageUrl } from 'lib/storage';
import { useAuth } from "hooks/useAuth";
import burza from "assets/images/airsoft-burza_1920.jpg"

function Event() {
	const { id } = useParams();
	const [event, setEvent] = useState(undefined);
	const imageUrl = event?.imageFileId && getImageUrl(event.imageFileId);
	const navigate = useNavigate();
	const { isAdmin } = useAuth();

	const handleDeleteEvent = async () => {
		if ( !event.$id ) return;
		await deleteEventById(event.$id);
		navigate('/udalosti');
	};

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
								<img src={imageUrl || burza} alt="" className="card-img-top cover" width="100%" height="225" role="img" focusable="false" />
								<div className="card-body">
									{/* <p>{event.$id}</p> */}
									<p>{new Date(event.date).toLocaleDateString('cs-CZ') || "Upřesníme"}</p>
									<p>{event.description || "Žádný popis"}</p>
									{isAdmin && (
										<div className="btn-group">
											<Button variant='danger' onClick={handleDeleteEvent}>Smazat událost</Button>
										</div>
									)}
								</div>
							</div>
						</>
					) : (
						<h1>Načítám...</h1>
					)}
				</Col>
			</Row>
		</Container >
	)
}

export default Event