import React, { useState, useEffect } from 'react';
import { Alert, Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { AppwriteException } from 'appwrite';
import { useAuth } from 'hooks/useAuth';

function Login() {
	const [email, setEmail] = useState('@');
	const [password, setPassword] = useState('');
	const [validated, setValidated] = useState(false);
	const [error, setError] = useState(null);
	const navigate = useNavigate();
	const location = useLocation();
	const [showAlert, setShowAlert] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);

	useEffect(() => {
		if (location.search === '?chyba=neprihlaseny') {
			setShowAlert(true);
		} else if (location.search === '?heslo=zmeneno') {
			setShowSuccess(true);
		}
	}, [location]);
	const { logIn, session } = useAuth();

	useEffect(() => {
		if (session) {
			return navigate('/ucet/');
		}
	}, [session, navigate]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		setValidated(true);

		if (form.checkValidity() === false) {
			event.stopPropagation();
		} else {
			try {
				const loginRequest = await logIn(email, password);
				if (loginRequest instanceof AppwriteException) {
					console.log('login try error', loginRequest.type);
					setError(loginRequest.type);
					if (loginRequest.type === 'general_argument_invalid' || loginRequest.type === 'user_invalid_credentials') {
						setError('Zadané přihlašovací údaje jsou neplatné. Zkuste to znovu.');
					} else {
						setError('Chyba přihlášení. Zkuste to znovu.');
					}
				} else {
					return navigate('/ucet/');
				}
			} catch (error) {
				console.log('else catch error', error);
				if (error instanceof AppwriteException) {
					setError('Chyba přihlášení. Zkuste to znovu.');
				}
			}
		}
	};

	return (
		<Container>
			<Row>
				<Col>
					<h1>Přihlásit</h1>
					{showAlert && (
						<Alert variant="warning" dismissible onClose={() => setShowAlert(false)}>
							Na přístup na tuto stránku je potřeba se nejdříve přihlásit.
						</Alert>
					)}
					{showSuccess && (
						<Alert variant="success" dismissible onClose={() => setShowAlert(false)}>
							Heslo bylo úspěšně změněno. Nyní se můžeš přihlásit.
						</Alert>
					)}
					<Form noValidate validated={validated} onSubmit={handleSubmit}>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								placeholder="Email"
								value={email}
								onChange={(event) => setEmail(event.target.value)}
								required
							/>
							<Form.Control.Feedback type="invalid">
								Povinné pole: Zadejte platný email
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>Heslo</Form.Label>
							<Form.Control
								type="password"
								placeholder="Heslo"
								value={password}
								onChange={(event) => setPassword(event.target.value)}
								required
							/>
							<Form.Control.Feedback type="invalid">
								Povinné pole: Zadejte heslo
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Group>
							<a href='/reset'>Obnovit heslo</a>
						</Form.Group>

						<Button variant="primary" type="submit" className="mt-3">
							Přihlásit
						</Button>
					</Form>
					{error && (
						<div className="alert alert-danger mt-3" role="alert">
							{error}
						</div>
					)}
				</Col>
			</Row>
		</Container>
	);
}

export default Login;