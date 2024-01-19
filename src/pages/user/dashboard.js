import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Alert, Container, Row, Col } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

function Dashboard() {

	const navigate = useNavigate();
	const location = useLocation();
	const { userDetails, isAdmin } = useAuth();
	const [showAlert, setShowAlert] = useState(false);

	useEffect(() => {
		if (location.search === '?heslo=zmeneno') {
			setShowAlert('Heslo bylo úspěšně změněno');
		} else if (location.search === '?profil=zmenen') {
			setShowAlert('Změny v profilu byly uloženy');
		}
		
	}, [location, navigate]);

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

					<h2>{userDetails.prefs.nickname}</h2>
					{userDetails.prefs.team && (
						<p>Tým {userDetails.prefs.team}</p>
					)}

					{isAdmin && (
						<p>Administrátor</p>
					)}

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