import React, { useState } from 'react';
import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';
import { AppwriteException } from 'appwrite';
import { resetPassword } from 'lib/user';

function ChangePassword() {
	const [formData, setformData] = useState({
		email: '@',
		error: null,
		message: null,
		validated: false
	});

	const handleSubmit = async (event) => {
		event.preventDefault();
		setformData({ ...formData, validated: true, error: null });

		if (event.currentTarget.checkValidity() === false) {
			event.stopPropagation();
		} else {
			try {
				const passwordChangeRequest = await resetPassword(formData.email, 'https://dynamitka.cz/ucet/heslo/');
				if (passwordChangeRequest instanceof AppwriteException) {
					setformData({ ...formData, error: passwordChangeRequest.type });
					if (passwordChangeRequest.type === 'user_invalid_credentials') {
						setformData({ ...formData, error: 'Zadejte platný email' });
					} else {
						setformData({ ...formData, error: 'Nepodařilo se obnovit heslo' });
					}
				} else {
					setformData({ ...formData, message: 'Všechno v cajku. Mrkni do emailu a klikni na odkaz.', error: null });
				}
			} catch (error) {
				console.log('catch error', error);
				if (error instanceof AppwriteException) {
					setformData({ ...formData, error: 'Nepodařilo se obnovit heslo' });
				}
			}
		}
	};

	return (
		<Container>
			<Row>
				<Col>
					<h1>Obnovení hesla</h1>
					<Form noValidate validated={formData.validated} onSubmit={handleSubmit}>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								placeholder="Email"
								value={formData.email}
								onChange={(event) => setformData({ ...formData, email: event.target.value })}
								required
							/>
							<Form.Text className="text-muted">
								Zadej email, který jsi použil při registraci. <br />Na email ti přijde odkaz pro obnovení hesla.
							</Form.Text>
							<Form.Control.Feedback type="invalid">
								Povinné pole: Zadejte platný email
							</Form.Control.Feedback>
						</Form.Group>

						{formData.error && <Alert variant="danger" className="mt-3">{formData.error}</Alert>}
						{formData.message && <Alert variant="success" className="mt-3">{formData.message}</Alert>}

						<Button type="submit" className="mt-3">Obnovit heslo</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
}

export default ChangePassword;
