import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { AppwriteException } from 'appwrite';
import { createEvent, getEventById, updateEvent } from 'lib/events';
import { uploadImage, getImageUrl, getFile } from 'lib/storage';
import Loading from 'components/Loading';

function New() {
	const [validated, setValidated] = useState(false);
	const navigate = useNavigate();
	const [image, setImage] = useState();
	const [error, setError] = useState();
	const [fileName, setFileName] = useState();
	const [imageType, setImageType] = useState({ isInvalid: null, isValid: null });
	const [imagePreview, setImagePreview] = useState(null);
	const { id } = useParams();
	const [event, setEvent] = useState(undefined);
	const imageUrl = event?.imageFileId && getImageUrl(event.imageFileId);

	const handleImage = (event) => {
		const file = event.target.files[0];
		if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
			setImageType({ isInvalid: true, isValid: false });
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
		setImagePreview(URL.createObjectURL(file));
		setImageType({ isInvalid: false, isValid: true });

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
				const results = await updateEvent({
					$id: id,
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

	useEffect(() => {

		(async function run() {
			const { event } = await getEventById(id);
			setEvent(event);
		})();

	}, [id]);

	useEffect(() => {
		if (event?.imageFileId) {
			(async function run() {
				const getFileName = await getFile(event.imageFileId);
				setFileName(getFileName.name);
			})();
		}
	}, [event]);

	return (
		<>
			<Container>
				<Row>
					<Col>
						{event ? (
							<>
								<h1>Upravit akci</h1>
								<Form noValidate validated={validated} onSubmit={handleSubmit}>
									<Form.Group controlId="eventName" className="mt-2">
										<Form.Label>Název akce</Form.Label>
										<Form.Control type="text" placeholder="Zadejte název akce" defaultValue={event.name} required />
										<Form.Control.Feedback type="invalid">
											Povinné pole: Zadejte název akce
										</Form.Control.Feedback>
									</Form.Group>

									<Form.Group controlId="eventDescription" className="mt-2">
										<Form.Label>Popis akce</Form.Label>
										<Form.Control as="textarea" rows={3} placeholder="Zadejte popis akce" defaultValue={event.description} required />
										<Form.Control.Feedback type="invalid">
											Povinné pole: Zadejte popis akce
										</Form.Control.Feedback>
									</Form.Group>

									<Form.Group controlId="eventDateTime" className="mt-2">
										<Form.Label>Datum a čas konání akce</Form.Label>
										<Form.Control type="datetime-local" defaultValue={new Date(event.date).toISOString().slice(0, 16)} required />
										<Form.Control.Feedback type="invalid">
											Povinné pole: Zadejte datum akce
										</Form.Control.Feedback>
									</Form.Group>

									<Form.Group controlId="eventImage" className="mt-2">
										<Form.Label>Náhledový obrázek akce</Form.Label>
										{imageUrl && (
											<img src={imagePreview || imageUrl} alt="" className="w-50 d-block mb-3" width="100%" height="225" role="img" focusable="false" />
										)}
										<Form.Control type="file" accept=".jpg,.png,.gif" defaultValue={fileName} onChange={handleImage} isInvalid={imageType.isInvalid} isValid={imageType.isValid} />
										<Form.Control.Feedback type="invalid">
											Povinné pole: Vyberte obrázek akce ve formátu JPG, PNG nebo GIF
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
							</>
						) : (
							<h1 className='text-center mt-5'><Loading /></h1>
						)}
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default New;