import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Icon from "./Icon";

const Navbar = () => {
	return (
		<>
			<header className="my-3 bg-body-tertiary">
				<Container>
					<NavLink to="/" >
						Úvod
					</NavLink>
					<NavLink to="/informace">
						Informace
					</NavLink>
					<NavLink to="/cenik">
						Ceník
					</NavLink>
					<NavLink to="/pravidla">
						Pravidla
					</NavLink>
					<NavLink to="/contact">
						Kontakt
					</NavLink>
					<div className="d-flex">
						<a href="https://www.facebook.com/airsoftklecany">
							<Icon name="facebook" title="Facebook" size='2em'/>
						</a>
						<a href="https://www.instagram.com/bullet_farm_klecany/">
							<Icon name="instagram" title="Instagram" size='2em'/>
						</a>
						<a href="mailto:bulletfarmklecany@gmail.com">
							<Icon name="email" title="Email" size='2em'/>
						</a>
					</div>
				</Container>
			</header>
		</>
	);
};

export default Navbar;