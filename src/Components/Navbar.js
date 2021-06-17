import React, { useState, useEffect } from "react";
import { Container, Link } from "@material-ui/core";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";
const Navbar = () => {
	//handles the mobile nav
	const [mobileNav, setMobileNav] = useState(true);
	const [click, setClick] = useState(false);
	//handle navbar scroll
	const [navbar, setNavbar] = useState(false);
	const closeMobilebtn = () => setClick(false);
	const handleClick = () => setClick(!click);
	//mobile menu
	const showMobileMenu = () => {
		if (window.innerWidth <= 960) {
			setMobileNav(false);
		} else {
			setMobileNav(true);
		}
	};
	//global event to check mobile nav
	window.addEventListener("resize", showMobileMenu);
	//on scroll fix the navbar position
	const scrollmyWindow = () => {
		if (window.scrollY >= 80) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};
	useEffect(() => {});
	// global event
	window.addEventListener("scroll", scrollmyWindow);
	return (
		<div className={navbar ? "navbar active" : "navbar"}>
			<Container>
				<div className="Navbar__items">
					<div className="navbar__logo">
						<Link to="/">CK</Link>
					</div>
					<div className="menu__icon" onClick={handleClick}>
						{click ? (
							<GiHamburgerMenu style={{ fontSize: "2.5rem" }} />
						) : (
							<GiHamburgerMenu style={{ fontSize: "2.5rem" }} />
						)}
					</div>
					<div className="nav__ItemsList">
						<ul
							className={click ? "nav__menu active" : "nav__menu"}
						>
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
