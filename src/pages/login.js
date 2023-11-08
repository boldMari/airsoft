import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'lib/auth';

function Login() {
	const [email, setEmail] = useState('@');
	const [password, setPassword] = useState('');
	const [validated, setValidated] = useState(false);
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		setValidated(true);

		if (form.checkValidity() === false) {
			event.stopPropagation();
		} else {
			const login = await logIn(email, password);
			
			if (login.error) {
				setError(login.error);
			} else {
				setError(null);
				console.log(login);
				navigate('/udalosti');
			}
		}
	};

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