import { useState } from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { createEvent } from 'lib/events';
import { useNavigate } from 'react-router-dom';

function New() {
	const [validated, setValidated] = useState(false);
	const navigate = useNavigate();
	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);

		(async function run() {
			const results = await createEvent({
				name: event.target.eventName.value,
				description: event.target.eventDescription.value,
				date: new Date(event.target.eventDateTime.value).toISOString()
			});

			navigate(`/udalosti/${results.event.$id}`);
		})();
	};

	return (
		<>
			<Container>
				<Row>
					<Col>
						<h1>Vytvořit událost</h1>
						<Form noValidate validated={validated} onSubmit={handleSubmit}>
							<Form.Group controlId="eventName" className="mt-2">
								<Form.Label>Název události</Form.Label>
								<Form.Control type="text" placeholder="Zadejte název události" required />
								<Form.Control.Feedback type="invalid">
									Povinné pole: Zadejte název události
								</Form.Control.Feedback>
							</Form.Group>

							<Form.Group controlId="eventDescription" className="mt-2">
								<Form.Label>Popis události</Form.Label>
								<Form.Control as="textarea" rows={3} placeholder="Zadejte popis události" required />
								<Form.Control.Feedback type="invalid">
									Povinné pole: Zadejte popis události
								</Form.Control.Feedback>
							</Form.Group>

							<Form.Group controlId="eventDateTime" className="mt-2">
								<Form.Label>Datum a čas události</Form.Label>
								<Form.Control type="datetime-local" required />
								<Form.Control.Feedback type="invalid">
									Povinné pole: Zadejte datum události
								</Form.Control.Feedback>
							</Form.Group>

							<Button variant="primary" type="submit" className="mt-3">
								Uložit
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default New;