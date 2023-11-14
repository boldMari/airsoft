import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { useAuth } from 'hooks/useAuth';
import Icon from 'components/Icon';
import Bullet from 'assets/images/bulletfarm.png';
import Navbar from 'react-bootstrap/Navbar';

const MyNavbar = () => {
	const { session, logOut } = useAuth();

	const handleLogOut = async () => {
		await logOut();
	}

	return (
		<>
			<Navbar className="my-3 bg-body-tertiary" variant="dark" expand="md">
				<Container>
					<Navbar.Brand href="/"><img src={Bullet} alt="Bullet Farm" width="38" height="38" /></Navbar.Brand>
					<Navbar.Collapse id="basic-navbar-nav" className="order-3 order-md-2">
						<ul className="navbar-nav me-auto">
							<li className="nav-item">
								<NavLink className="nav-link" to="/">Úvod</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/akce">Akce</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/informace">Informace</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/cenik">Ceník</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/pravidla">Pravidla</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/kontakt">Kontakt</NavLink>
							</li>
							{session && (
								<>
									<li className="nav-item">
										<NavLink className="nav-link" to="/ucet">Účet</NavLink>
									</li>
									<li className='nav-item'>
										<NavLink className="nav-link" onClick={handleLogOut}>Odhlásit</NavLink>
									</li>
								</>
							)}
							{!session && (
								<li className="nav-item">
									<NavLink className="nav-link" to="/prihlasit">Přihlásit</NavLink>
								</li>
							)}
						</ul>
					</Navbar.Collapse>
					<div className="d-flex order-1 order-md-3">
						<a href="https://www.facebook.com/airsoftklecany">
							<Icon name="facebook" title="Facebook" size='1.5em' className="bi text-body-secondary flex-shrink-0 me-3" />
						</a>
						<a href="https://www.instagram.com/bullet_farm_klecany/">
							<Icon name="instagram" title="Instagram" size='1.5em' className="bi text-body-secondary flex-shrink-0 me-3" />
						</a>
						<a href="mailto:bulletfarmklecany@gmail.com">
							<Icon name="email" title="Email" size='1.5em' className="bi text-body-secondary flex-shrink-0 me-3" />
						</a>
					</div>
					<Navbar.Toggle aria-controls="basic-navbar-nav" className="order-2 order-md-4" />
				</Container>
			</Navbar>
		</>
	);
};

export default MyNavbar;