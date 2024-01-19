import React, { useState } from 'react';
import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';
import { AppwriteException } from 'appwrite';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

function ProfileChange() {
	const { userDetails, updateUserDetails } = useAuth();
	const [formData, setformData] = useState({
		nickname: userDetails.prefs.nickname || '',
		teamName: userDetails.prefs.team || '',
		error: null,
		message: null,
		validated: false
	});

	const navigate = useNavigate();
	const minNicknameLength = 2;

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (formData.nickname !== userDetails.prefs.nickname || formData.teamName !== userDetails.prefs.team) {
			if (formData.nickname.length < minNicknameLength) {
				return setformData({ ...formData, error: `Přezdívka musí mít alespoň ${minNicknameLength} znaky.` });
			}

			try {
				await updateUserDetails({ nickname: formData.nickname, team: formData.teamName });
				return navigate('/ucet/?profil=zmenen');
			} catch (error) {
				if (error instanceof AppwriteException) {
					setformData({ ...formData, error: `Chyba při ukládání změn: ${error.message}`, message: null })
				} else {
					setformData({ ...formData, error: `Chyba při ukládání změn: ${error}`, message: null })
				}
			}
		} else {
			setformData({ ...formData, message: 'Žádné změny k uložení', error: null });
		}
	};

	return (
		<Container>
			<Row>
				<Col>
					<h1>Upravit profil</h1>
					<Form noValidate validated={formData.validated} onSubmit={handleSubmit}>
						<Form.Group controlId="formNickname">
							<Form.Label>Přezdívka:</Form.Label>
							<Form.Control
								type="text"
								placeholder="Přezdívka"
								value={formData.nickname}
								onChange={(event) => setformData({ ...formData, nickname: event.target.value })}
								isInvalid={formData.nickname.length < minNicknameLength}
								required
							/>
							<Form.Control.Feedback type="invalid">
								Přezdívka musí mít alespoň {minNicknameLength} znaky.
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group controlId="formTeamName">
							<Form.Label>Jméno týmu:</Form.Label>
							<Form.Control
								type="text"
								placeholder="Jméno týmu"
								value={formData.teamName}
								onChange={(event) => setformData({ ...formData, teamName: event.target.value })}
							/>
						</Form.Group>
						<Button type="submit" className="mt-3">Uložit</Button>
						{formData.message && <Alert variant="success" className="mt-3">{formData.message}</Alert>}
						{formData.error && <Alert variant="danger" className="mt-3">{formData.error}</Alert>}
					</Form>
				</Col>
			</Row>
		</Container>
	);
}

export default ProfileChange;
