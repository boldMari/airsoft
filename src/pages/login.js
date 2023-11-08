import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

function Login() {
	const [email, setEmail] = useState('@');
	const [password, setPassword] = useState('');
	const [validated, setValidated] = useState(false);
	const [error, setError] = useState(null);
	const navigate = useNavigate();
	const { logIn, session } = useAuth();

	const handleSubmit = async (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		setValidated(true);

		if (form.checkValidity() === false) {
			event.stopPropagation();
		} else {
			const loginRequest = await logIn(email, password);
			return navigate('/udalosti');

			// if (!loginRequest) {
			// 	setError(true);
			// 	console.log('some issue');
			// } else {
			// 	setError(null);
			// 	console.log('no issue');
			// 	return navigate('/udalosti');
			// }
		}
	};

	useEffect(() => {
		if (session) {
			return navigate('/udalosti');
		}
	}, [session]);

	return (
		<Container>
			<Row>
				<Col>
					<h1>Přihlásit</h1>
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

						<Button variant="primary" type="submit" className="mt-3">
							Přihlásit
						</Button>
					</Form>
					{error && (
						<Form.Control.Feedback type="invalid" className="mt-3">
							Chyba přihlášení. Zkontrolujte zadané údaje.
						</Form.Control.Feedback>
					)}
				</Col>
			</Row>
		</Container>
	);
}

export default Login;