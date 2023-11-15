import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { getEventById, deleteEventById } from 'lib/events';
import { getImageUrl } from 'lib/storage';
import { useAuth } from "hooks/useAuth";
import Loading from 'components/Loading';
import burza from "assets/images/airsoft-burza_1920.jpg"

function Event() {
	const { id } = useParams();
	const [event, setEvent] = useState(undefined);
	const imageUrl = event?.imageFileId && getImageUrl(event.imageFileId);
	const navigate = useNavigate();
	const { isAdmin } = useAuth();

	const handleDeleteEvent = async () => {
		if (!event.$id) return;
		await deleteEventById(event.$id);
		navigate('/akce');
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
							<Row>
								<Col>
									<h2 className="featurette-heading fw-normal lh-1 my-4 text-primary">{event.name}</h2>
								</Col>
								{isAdmin && (
									<Col className='align-self-center text-end'>
										<div className="btn-group">
											<Link to={'../akce/upravit/' + event.$id} className="btn btn-outline-secondary">Upravit</Link>
											<Button variant='outline-danger' onClick={handleDeleteEvent}>Smazat událost</Button>
										</div>
									</Col>
								)}
							</Row>
							<div className="card shadow-sm">
								<img src={imageUrl || burza} alt="" className="card-img-top cover" width="100%" height="225" role="img" focusable="false" />
								<div className="card-body">
									{/* <p>{event.$id}</p> */}
									<p>{new Date(event.date).toLocaleDateString('cs-CZ') || "Upřesníme"}</p>
									<div dangerouslySetInnerHTML={{ __html: event.description || "Žádný popis" }}></div>
								</div>
							</div>
						</>
					) : (
						<h1 className='text-center mt-5'><Loading/></h1>
					)}
				</Col>
			</Row>
		</Container >
	)
}

export default Event