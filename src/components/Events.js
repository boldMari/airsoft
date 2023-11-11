import { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { useAuth } from "hooks/useAuth";
import { getEvents, deleteEventById } from 'lib/events';
import { getImageUrl } from 'lib/storage';
import burza from "assets/images/airsoft-burza_1920.jpg"
import Loading from 'components/Loading';
import textPreview from 'utils/textPreview';

const EventCard = styled.div`
	transition: all 0.5s ease 0s;
	
	&:hover {
		box-shadow: ${({ theme }) => theme.colors.yellow} 0 0 0.5em 0.25em !important;

		.btn.btn-outline-secondary {
			color: ${({ theme }) => theme.colors.yellow};
			border-color: ${({ theme }) => theme.colors.yellow};

			&:hover {
				color: #000;
				background-color: ${({ theme }) => theme.colors.yellow};
			}
		}
	}

`;

const FutureEvents = styled(Row)`
	.row.display-flex {
		display: flex;
		flex-wrap: wrap;
	}
	
	.row.display-flex > [class*='col-'] {
		flex-grow: 1;
	}
`;

const PastEvents = styled(FutureEvents)`
	.card-img-top {
		filter: grayscale(100%);

		&:hover {
			filter: grayscale(0%);
		}
	}
`;

const Events = () => {
	const [events, setEvents] = useState();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const { isAdmin } = useAuth();

	function handleDeleteEvent(eventId) {
		if (!eventId) return;
		(async function run() {
			await deleteEventById(eventId);
			window.location.reload();
		})();
	};

	useEffect(() => {
		(async function run() {
			try {
				const { events } = await getEvents();
				setEvents({
					future: events.filter(event => new Date(event.date) >= new Date()).sort((a, b) => new Date(a.date) - new Date(b.date)),
					past: events.filter(event => new Date(event.date) < new Date()).sort((a, b) => new Date(b.date) - new Date(a.date))
				});
				setLoading(false);
			} catch (error) {
				setEvents(null);
				setLoading(false);
				setError(true);
			}
		})();
	}, []);

	return (
		<Container>
			<Row>
				<Col>
					<h2 className="featurette-heading fw-normal lh-1 my-4 text-primary">Chystané akce</h2>
				</Col>
				{isAdmin && (
					<Col className='align-self-center text-end'>
						<div className="btn-group">
							<Link to={'/akce/vytvorit'} className="btn btn-sm btn-outline-secondary">Vytvořit</Link>
						</div>
					</Col>
				)}
			</Row>
			{loading ? (
				<p><Loading /></p>
			) : error ? (
				<p>Chyba spojení s databází. Zkuste to prosím později.</p>
			) : (
				<>
					<FutureEvents className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
						{events.future.length > 0 ? (
							events.future.map(event => (
								<Col key={event.$id}>
									<EventCard className="card h-100">
										<Link to={'../akce/' + event.$id}>
											<img src={(event?.imageFileId && getImageUrl(event.imageFileId)) || burza} alt="" className="card-img-top cover" width="100%" height="225" role="img" focusable="false" />
										</Link>
										<div className="card-body d-flex flex-column">
											<h4>{textPreview(event.name, 100)}</h4>
											<p>{new Date(event.date).toLocaleDateString('cs-CZ') || "Upřesníme"}</p>
											<p>{textPreview(event.description, 100) || "Žádný popis"}</p>
											<div className="d-flex justify-content-between align-items-center mt-auto">
												<div className="btn-group">
													<Link to={'../akce/' + event.$id} className="btn btn-outline-secondary">Detail</Link>
													{isAdmin && (
														<>
															<Link to={'../akce/upravit/' + event.$id} className="btn btn-outline-secondary">Upravit</Link>
															<Button variant='outline-danger' onClick={() => handleDeleteEvent(event.$id)}>Smazat</Button>
														</>
													)}
												</div>
											</div>
										</div>
									</EventCard>
								</Col>
							))
						) : (
							<p>Žádné plánované akce</p>
						)}
					</FutureEvents>
					<Row>
						<Col>
							<h2 className="featurette-heading fw-normal lh-1 my-4 text-primary">Proběhlé akce</h2>
						</Col>
					</Row>
					<PastEvents className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 past-events">
						{events.past.map(event => (
							<Col key={event.$id}>
								<EventCard className="card h-100">
									<Link to={'../akce/' + event.$id}>
										<img src={(event?.imageFileId && getImageUrl(event.imageFileId)) || burza} alt="" className="card-img-top cover" width="100%" height="225" role="img" focusable="false" />
									</Link>
									<div className="card-body d-flex flex-column">
										<h4>{event.name}</h4>
										<p>{new Date(event.date).toLocaleDateString('cs-CZ') || "Upřesníme"}</p>
										<p>{event.description || "Žádný popis"}</p>
										<div className="d-flex justify-content-between align-items-center mt-auto">
											<div className="btn-group">
												<Link to={'../akce/' + event.$id} className="btn btn-outline-secondary">Detail</Link>
												{isAdmin && (
													<>
														<Link to={'../akce/upravit/' + event.$id} className="btn btn-outline-secondary">Upravit</Link>
														<Button variant='danger' onClick={() => handleDeleteEvent(event.$id)}>Smazat</Button>
													</>
												)}
											</div>
										</div>
									</div>
								</EventCard>
							</Col>
						))}
					</PastEvents>
				</>
			)}
		</Container>
	)
}

export default Events