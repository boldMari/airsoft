import { useState } from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { AppwriteException } from 'appwrite';
import { createEvent } from 'lib/events';
import { uploadImage } from 'lib/storage';
import { useNavigate } from 'react-router-dom';

function New() {
	const [validated, setValidated] = useState(false);
	const navigate = useNavigate();
	const [image, setImage] = useState();
	const [error, setError] = useState();
	const [imageType, setImageType] = useState({isInvalid: null, isValid: null});

	const handleImage = (event) => {
		const file = event.target.files[0];
		if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
			setImageType({isInvalid: true, isValid: false});
			return;
		}

		const image = new Image();

		image.onload = function () {
			setImage({
				type: file.type,
				width: image.width,
				height: image.height,
				file: file,
			})
		};
		image.src = URL.createObjectURL(file)
		setImageType({isInvalid: false, isValid: true});

	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		setValidated(true);

		try {
			let upload;
			if (image?.file) {
				upload = await uploadImage(image.file);
			}

			if (form.checkValidity() === false) {
				event.stopPropagation();
			} else {
				const results = await createEvent({
					name: event.target.eventName.value,
					description: event.target.eventDescription.value,
					date: new Date(event.target.eventDateTime.value).toISOString(),
					imageFileId: upload?.$id
				});

				navigate(`/akce/${results.event.$id}`);
			}
		} catch (error) {
			if (error instanceof AppwriteException) {
				if (error.type === 'user_unauthorized') {
					setError('Událost nebyla uložena. Nejprve se přihlaste.');
				} else {
					setError('Událost nebyla uložena. Zkuste to prosím později.');
				}
			}
		}
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
								<Form.Label>Datum a čas konání události</Form.Label>
								<Form.Control type="datetime-local" required />
								<Form.Control.Feedback type="invalid">
									Povinné pole: Zadejte datum události
								</Form.Control.Feedback>
							</Form.Group>

							<Form.Group controlId="eventImage" className="mt-2">
								<Form.Label>Náhledový obrázek události</Form.Label>
								<Form.Control type="file" accept=".jpg,.png,.gif" required onChange={handleImage} isInvalid={imageType.isInvalid} isValid={imageType.isValid} />
								<Form.Control.Feedback type="invalid">
									Povinné pole: Vyberte obrázek události ve formátu JPG, PNG nebo GIF
								</Form.Control.Feedback>
							</Form.Group>

							<Button variant="primary" type="submit" className="mt-3">
								Uložit
							</Button>

							{error && (
								<div className="alert alert-danger mt-3" role="alert">
									{error}
								</div>
							)}
						</Form>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default New;