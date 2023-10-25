import React from "react";
import { NavLink, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Icon from "./Icon";
import Bullet from "../assets/images/bulletfarm.png";
import './Navbar.css';

const Navbar = () => {
	return (
		<>
			<nav class="navbar navbar-expand-lg my-3 bg-body-tertiary">
				<Container>
					<Link className="navbar-brand" to="/"><img src={Bullet} alt="Bullet Farm" width="38" height="38" /></Link>
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink className="nav-link" to="/">Úvod</NavLink>
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
							<NavLink className="nav-link" to="/contact">Kontakt</NavLink>
						</li>
					</ul>

					<div className="d-flex">
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
				</Container>
			</nav>
		</>
	);
};

export default Navbar;