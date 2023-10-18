import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";

const Navbar = () => {
	return (
		<>
			<header>
				<Container>
					<NavLink to="/" >
						Home
					</NavLink>
					<NavLink to="/contact">
						Kontakt
					</NavLink>
				</Container>
			</header>
		</>
	);
};

export default Navbar;