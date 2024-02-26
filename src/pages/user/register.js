import React, { useState } from 'react';
import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';
import { AppwriteException } from 'appwrite';
import { useNavigate } from 'react-router-dom';
import { createUser } from 'lib/user';

function Register() {
	const [formData, setFormData] = useState({
		email: '@',
		password: '',
		verifyPassword: '',
		nickname: '',
		validated: false,
		error: null,
		message: null
	});

	const navigate = useNavigate();
	const minPasswordLength = 8;
	const minNicknameLength = 2;
	const verifyURL = 'https://dynamitka.cz/ucet/';

	const handleSubmit = async (event) => {
		event.preventDefault();
		setFormData({ ...formData, validated: true });
		if (formData.password.length < minPasswordLength) {
			setFormData({ ...formData, error: `Heslo musí mít alespoň ${minPasswordLength} znaků.` });
		} else if (formData.password !== formData.verifyPassword) {
			setFormData({ ...formData, error: 'Heslo se neshoduje.' });
		} else if (formData.nickname.length < minNicknameLength) {
			setFormData({ ...formData, error: `Přezdívka musí mít alespoň ${minNicknameLength} znaky.` });
		} else {
			setFormData({ ...formData, error: null });
			try {
				const request = await createUser(formData.email, formData.password, formData.nickname, verifyURL);
				if (request instanceof AppwriteException) {
					setFormData({ ...formData, error: request.type });
					console.log(request)
				} else {
					return navigate('/ucet/?ucet=vytvoren');
				}
			} catch (error) {
				console.log('else catch error', error);
				if (error instanceof AppwriteException) {
					setFormData({ ...formData, error: `Chyba při registraci: ${error}` });
				}
			}
		}
	};

	return (
		<Container>
			<Row>
				<Col>
					<h1>Registrace</h1>
					<Form noValidate validated={formData.validated} onSubmit={handleSubmit}>
						<Form.Group controlId="email">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								value={formData.email}
								onChange={(event) => setFormData({ ...formData, email: event.target.value })}
								required
							/>
							<Form.Control.Feedback type="invalid">
								Povinné pole: Zadejte platný email
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Group controlId="nickname">
							<Form.Label>Jméno</Form.Label>
							<Form.Control
								type="text"
								value={formData.nickname}
								onChange={(event) => setFormData({ ...formData, nickname: event.target.value })}
								isInvalid={formData.nickname.length > 0 && formData.nickname.length < minNicknameLength}
								required
							/>
							<Form.Control.Feedback type="invalid">
								Povinné pole: Zadej jméno. Musí mít alespoň {minNicknameLength} znaky.
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Group controlId="password">
							<Form.Label>Heslo</Form.Label>
							<Form.Control
								type="password"
								value={formData.password}
								onChange={(event) => setFormData({ ...formData, password: event.target.value })}
								isInvalid={formData.password.length > 0 && formData.password.length < 8}
								required
							/>
							<Form.Text className="text-muted">
								Minimum {minPasswordLength} znaků.
							</Form.Text>
							<Form.Control.Feedback type="invalid">
								Povinné pole: Zadej heslo. Musí mít alespoň {minPasswordLength} znaků.
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Group controlId="verifyPassword">
							<Form.Label>Heslo pro kontrolu</Form.Label>
							<Form.Control
								type="password"
								value={formData.verifyPassword}
								onChange={(event) => setFormData({ ...formData, verifyPassword: event.target.value })}
								isInvalid={formData.verifyPassword.length > 0 && formData.verifyPassword !== formData.password}
								required
							/>
							<Form.Control.Feedback type="invalid">
								Nové heslo se neshoduje.
							</Form.Control.Feedback>
						</Form.Group>

						<Button variant="primary" type="submit" className='mt-3'>
							Registrovat
						</Button>

						{formData.message && <Alert variant="success" className="mt-3">{formData.message}</Alert>}
						{formData.error && <Alert variant="danger" className="mt-3">{formData.error}</Alert>}
					</Form>
				</Col>
			</Row>
		</Container>
	);
}

export default Register;
