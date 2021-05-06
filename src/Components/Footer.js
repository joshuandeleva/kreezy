import React from "react";
import "./Footer.css";
import { Container } from "@material-ui/core";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
function Footer() {
	return (
		<div className="my-footer">
			<Container>
				<div className="footer-items">
					<div className="footer-item-1">
						<li>
							<a href="/blog">Home</a>
						</li>
						<li>
							<a href="/blog">Blogs</a>
						</li>
						<li>
							<a href="/blog">github</a>
						</li>
					</div>
					<div className="footer-item-2">
						<p>Lets engange in social media</p>
						<div className="about-me-social-media">
							<a href="https://www.facebook.com/wanjohi.kreezy/">
								<FaFacebookF />
							</a>
							<a href="https://www.twitter.com/IamWanjohichris">
								<FaTwitter />
							</a>
							<a href="https://www.linkedln.com/in/Wanjohi-christopher-b9bb9b196">
								<FaLinkedinIn />
							</a>
							<a href="https://github.com/WanjohiChristopher">
								<FaGithub />
							</a>
						</div>
					</div>
				</div>
				<hr></hr>
				<p className="footer-copy-right">2021 &copy;ck</p>
			</Container>
		</div>
	);
}

export default Footer;
