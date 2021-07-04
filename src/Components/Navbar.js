import React, { useState, useEffect } from "react";
import { Container, Link } from "@material-ui/core";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
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
							<GrClose style={{ fontSize: "1.8rem" }} />
						) : (
							<GiHamburgerMenu style={{ fontSize: "1.8rem" }} />
						)}
					</div>
					<div className="nav__ItemsList">
						<ul
							className={click ? "nav__menu active" : "nav__menu"}
						>
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/about-me">About Me</a>
							</li>
							<li>
								<a href="/blog">Blog</a>
							</li>
							<li>
								<a href="/project">Projects</a>
							</li>
							<li>
								<a href="/services">Services</a>
							</li>
							<li>
								<a href="/contact-us">Contact us</a>
							</li>
						</ul>
					</div>
				</div>
			</Container>
		</div>
	);
};
export default Navbar;
