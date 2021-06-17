import React, { useState, useEffect } from "react";
import { Container, Link } from "@material-ui/core";
import "./Navbar.css";
const Navbar = () => {
	//handles the mobile nav
	const [mobileNav, setMobileNav] = useState(false);
	//handle navbar scroll
	const [scrollableNav, setscrollableNav] = useState(false);
	//mobile menu
	const showMobileMenu = () => {
		if (window.innerWidth <= 960) {
			setMobileNav(false);
		} else {
			setMobileNav(true);
		}
	};
	//global event to check mobile nav
	window.addEventListener("resize" ,showMobileMenu)
	//on scroll fix the navbar position
	const scrollmyWindow = () => {
		if (window.scrollY >= 80) {
			setscrollableNav(true);
		} else {
			setscrollableNav(false);
		}
	};
	useEffect(() => {});
	// global event
	window.addEventListener("scroll", scrollmyWindow);
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
