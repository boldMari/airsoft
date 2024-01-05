import React, { useState, useEffect } from 'react';
import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';
import { AppwriteException } from 'appwrite';
import { useNavigate, useLocation } from 'react-router-dom';
import { updatePassword, recoverPassword } from 'lib/user';
import { useAuth } from 'hooks/useAuth';

function ChangePassword() {
	const [formData, setFormData] = useState({
		oldPassword: '',
		newPassword: '',
		verifyPassword: '',
		validated: false,
		error: null
	});

	const [urlParams, setUrlParams] = useState({
		userId: null,
		secret: null,
		expire: null
	});

	const navigate = useNavigate();
	const location = useLocation();
	const minPasswordLength = 8;
	const { session } = useAuth();

	if (!session) {
		console.log('no sessions', session);
	}

	useEffect(() => {

		const searchParams = new URLSearchParams(location.search);
		const params = ['userId', 'secret', 'expire'];

		const updatedParams = params.reduce((acc, param) => {
			const paramValue = searchParams.get(param);
			if (paramValue) {
				acc[param] = paramValue;
			}
			return acc;
		}, {});

		console.log(updatedParams);
		setUrlParams(updatedParams);
	}, [location.search]);

	useEffect(() => {
		if (!session && !urlParams.userId && !urlParams.secret && !urlParams.expire) {
			// return navigate('/');
			// console.log('no session');
		}
	}, [session, navigate, urlParams.userId, urlParams.secret, urlParams.expire]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (formData.newPassword.length < minPasswordLength) {
			setFormData({ ...formData, error: `Nové heslo musí mít alespoň ${minPasswordLength} znaků.` });
		} else if (formData.newPassword !== formData.verifyPassword) {
			setFormData({ ...formData, error: 'Nové heslo se neshoduje.' });
		} else {
			setFormData({ ...formData, error: null });

			// Recover password page variant
			if (urlParams.userId && urlParams.secret && urlParams.expire) {
				try {
					const passwordChangeRequest = await recoverPassword(urlParams.userId, urlParams.secret, formData.newPassword, formData.verifyPassword);
					if (passwordChangeRequest instanceof AppwriteException) {
						setFormData({ ...formData, error: passwordChangeRequest.type });
						console.log(passwordChangeRequest.type)
						setFormData({ ...formData, error: 'Heslo se nepodařilo změnit.' });
					} else {
						return navigate('/prihlasit?heslo=zmeneno');
					}
				} catch (error) {
					console.log('else catch error', error);
					if (error instanceof AppwriteException) {
						setFormData({ ...formData, error: 'Heslo se nepodařilo změnit.' });
					}
				}
				// User password update variant
			} else {
				try {
					const passwordChangeRequest = await updatePassword(formData.newPassword, formData.oldPassword);
					if (passwordChangeRequest instanceof AppwriteException) {
						setFormData({ ...formData, error: passwordChangeRequest.type });
						if (passwordChangeRequest.type === 'user_invalid_credentials') {
							setFormData({ ...formData, error: 'Staré heslo je neplatné. Zkuste to prosím znovu.' });
						} else {
							console.log(passwordChangeRequest.type)
							setFormData({ ...formData, error: 'Heslo se nepodařilo změnit.' });
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
		}
	};

	return (
		<Container>
			<Row>
				<Col>
					<Form onSubmit={handleSubmit}>
						{!urlParams.userId && !urlParams.secret && !urlParams.expire && (
							<>
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
							</>
						)}

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
