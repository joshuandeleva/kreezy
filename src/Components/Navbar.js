import React from "react";
import { Container, Link } from "@material-ui/core";
import "./Navbar.css";
const Navbar = () => {
	return (
		<div className="Navbar__Main">
			<Container>
				<div className="Navbar__items">
					<div className="navbar__logo">
						<Link to="/">CK</Link>
					</div>
					<div className="nav__ItemsList">
						<ul>
							<li>
								<a href="/Home">Home</a>
							</li>
							<li>
								<a href="/About-me">About Me</a>
							</li>
							<li>
								<a href="/Blog">Blog</a>
							</li>
							<li>
								<a href="/skils">Skills</a>
							</li>
							<li>
								<a href="/skils">Services</a>
							</li>
						</ul>
					</div>
				</div>
			</Container>
		</div>
	);
};
export default Navbar;
