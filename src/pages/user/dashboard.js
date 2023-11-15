import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Alert, Container, Row, Col } from "react-bootstrap";
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

function Dashboard() {

	const navigate = useNavigate();
	const { session } = useAuth();
	const location = useLocation();
	const [showAlert, setShowAlert] = useState(false);

	useEffect(() => {
		if (!session) {
			return navigate('/');
		}
		if (location.search === "?heslo=zmeneno") {
			setShowAlert(true);
		}
	}, [session, location, navigate]);

	return (
		<Container>
			<Row>
				<Col>
					<h1>Můj účet</h1>

					{showAlert && (
						<Alert variant="success" dismissible onClose={() => setShowAlert(false)}>
							Heslo bylo úspěšně změněno
						</Alert>
					)}

					{/* TODO display user name */}
					{/* TODO change email */}
					{/* TODO reset passoword */}
					
					<NavLink to="/ucet/heslo" className="btn btn-primary">Změnit heslo</NavLink>
				</Col>
			</Row>
		</Container>
	)
}

export default Dashboard