import React, { useState } from 'react';
import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';
import { AppwriteException } from 'appwrite';
import { useNavigate } from 'react-router-dom';
import { updatePassword } from 'lib/user';

function ChangePassword() {
	const [formData, setFormData] = useState({
		oldPassword: '',
		newPassword: '',
		verifyPassword: '',
		validated: false,
		error: null
	});

	const navigate = useNavigate();
	const minPasswordLength = 8;

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (formData.newPassword.length < minPasswordLength) {
			setFormData({ ...formData, error: `Nové heslo musí mít alespoň ${minPasswordLength} znaků.` });
		} else if (formData.newPassword !== formData.verifyPassword) {
			setFormData({ ...formData, error: 'Nové heslo se neshoduje.' });
		} else {
			setFormData({ ...formData, error: null });
				try {
					const passwordChangeRequest = await updatePassword(formData.newPassword, formData.oldPassword);
					if (passwordChangeRequest instanceof AppwriteException) {
						setFormData({ ...formData, error: passwordChangeRequest.type });
						if (passwordChangeRequest.type === 'user_invalid_credentials') {
							setFormData({ ...formData, error: 'Staré heslo je neplatné. Zkuste to prosím znovu.' });
						} else {
							console.log(passwordChangeRequest.type)
							setFormData({ ...formData, error: 'Heslo se nepodařilo změnit.'});
						}
					} else {
						return navigate('/ucet?heslo=zmeneno');
					}
				} catch (error) {
					console.log('else catch error', error);
					if (error instanceof AppwriteException) {
						setFormData({ ...formData, error: 'Heslo se nepodařilo změnit.' });
					}
				}
		}
	};

	return (
		<Container>
			<Row>
				<Col>
					<Form onSubmit={handleSubmit}>
						<Form.Group controlId="oldPassword">
							<Form.Label>Staré heslo:</Form.Label>
							<Form.Control
								type="password"
								value={formData.oldPassword}
								onChange={(event) => setFormData({ ...formData, oldPassword: event.target.value })}
								isInvalid={formData.oldPassword.length > 0 && formData.oldPassword.length < 8}
							/>
							<Form.Control.Feedback type="invalid">
								Heslo musí mít alespoň {minPasswordLength} znaků.
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Group controlId="newPassword">
							<Form.Label>Nové heslo:</Form.Label>
							<Form.Control
								type="password"
								value={formData.newPassword}
								onChange={(event) => setFormData({ ...formData, newPassword: event.target.value })}
								isInvalid={formData.newPassword.length > 0 && formData.newPassword.length < 8}
							/>
							<Form.Control.Feedback type="invalid">
								Nové heslo musí mít alespoň	{minPasswordLength} znaků.
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Group controlId="verifyPassword">
							<Form.Label>Znovu nové heslo:</Form.Label>
							<Form.Control
								type="password"
								value={formData.verifyPassword}
								onChange={(event) => setFormData({ ...formData, verifyPassword: event.target.value })}
								isInvalid={formData.verifyPassword.length > 0 && formData.verifyPassword !== formData.newPassword}
							/>
							<Form.Control.Feedback type="invalid">
								Nové heslo se neshoduje.
							</Form.Control.Feedback>
						</Form.Group>

						{formData.error && <Alert variant="danger" className="mt-3">{formData.error}</Alert>}

						<Button type="submit" className="mt-3">Změnit heslo</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
}

export default ChangePassword;
