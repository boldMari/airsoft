import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Alert, Container, Row, Col, Table, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { verifyEmail, triggerVerifyEmail } from 'lib/user';
import { AppwriteException } from 'appwrite';
import Icon from 'components/Icon';

function Dashboard() {

	const location = useLocation();
	const { userDetails, isAdmin } = useAuth();
	const [showAlert, setShowAlert] = useState(false);
	const navigate = useNavigate();
	const verifyURL = 'https://dynamitka.cz/ucet/';

	useEffect(() => {
		if (location.search === '?heslo=zmeneno') {
			setShowAlert('Heslo bylo úspěšně změněno');
		} else if (location.search === '?profil=zmenen') {
			setShowAlert('Změny v profilu byly uloženy');
		} else if (location.search === '?ucet=vytvoren') {
			setShowAlert('Účet byl vytvořen. Poslali jsme ti ověřovací email. Bude od Appwrite, ale jsme to my :)');
		} else if (location.search === '?email=overen') {
			setShowAlert('Email byl ověřen. Nyní se můžeš přihlašovat na akce.');
		}
	}, [location]);

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

		if (updatedParams.userId && updatedParams.secret) {
			try {
				verifyEmail(updatedParams.userId, updatedParams.secret);
				return navigate('/ucet/?email=overen');
			} catch (error) {
				setShowAlert('Problém s ověřením emailu.');
				console.log(error);
			}
		}
	}, [location.search]);

	const newVerifyEmail = async () => {
		const request = await triggerVerifyEmail(verifyURL);
		if (request instanceof AppwriteException) {
			setShowAlert({ error: request.type });
			console.log(request)
		} else {
			setShowAlert('Poslali jsme ti ověřovací email. Bude od Appwrite, ale jsme to my :)');
		}
	}

	return (
		<Container>
			<Row>
				<Col>
					<h1>Můj účet</h1>

					{showAlert && (
						<Alert variant="success" dismissible onClose={() => setShowAlert(false)}>
							{showAlert}
						</Alert>
					)}

					<Table className='table table-hover table-bordered'>
						<tbody>
							<tr>
								<td>Jméno</td>
								<td>{userDetails.name}</td>
							</tr>
							<tr>
								<td>Email</td>
								<td>
									{userDetails.email} {userDetails.verified === true ? (
										<Icon name="verified" title="Ověřen" size='1.5em' className="p-0" width="50px" height="50px" />
									) : (
										<Button className='btn-sm' onClick={newVerifyEmail}>Ověřit email</Button>
									)}
								</td>
							</tr>
							{userDetails.prefs.team && (
								<tr>
									<td>Tým</td>
									<td>{userDetails.prefs.team}</td>
								</tr>
							)}
							{isAdmin && (
								<tr>
									<td>Role</td>
									<td>Administrátor</td>
								</tr>
							)}
						</tbody>
					</Table>

					{/* TODO change email */}
					<div className="btn-group">
						<NavLink to="/ucet/profil/upravit" className="btn btn-outline-secondary">Upravit profil</NavLink>
						<NavLink to="/ucet/heslo" className="btn btn-outline-secondary">Změnit heslo</NavLink>
					</div>
				</Col>
			</Row>
		</Container>
	)
}

export default Dashboard