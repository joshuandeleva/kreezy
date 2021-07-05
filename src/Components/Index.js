import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Navbar from "./Navbar";
import Chrispic from "../assets/images/chrispic1.png";
import { Grid, Container, Button, Link } from "@material-ui/core";
import "./Index.css";
import Skills from "./Skills";
import Slide from "react-reveal/Slide";
import Emails from "../assets/images/Emails.svg";
import { IoIosPin } from "react-icons/io";
import { BsPhone } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import Footer from "./Footer";
function Index() {
	return (
		<div className="main__content">
			<Navbar />
			<div className="mainContent__navIntro">
				<Container>
					<Grid container spacing={3}>
						<Grid item xl={6} lg={6} sm={12} md={6} xm={12}>
							<div className="mainContent__navLeft">
								<Slide top>
									<h1>Hello 👋 ,</h1>
									<h1>I'm Christopher Wanjohi</h1>
									<p>
										A Datascientist 🥑 ,Data engineer 👨‍💻and
										an NLP practioneer
									</p>

									<div className="nav-btns">
										<Button class="contact">
											<Link to="/contact">
												Contact me
											</Link>
										</Button>
										<Button class="cv">
											<Link
												href="../assets/images/Resume.docx"
												download
											>
												View my Cv
											</Link>
										</Button>
									</div>
								</Slide>
							</div>
						</Grid>
						<Grid item xl={6} lg={6} sm={12} md={6} xm={12}>
							<Slide right>
								<div className="mainContent__navRight">
									<img src={Chrispic} alt="" />
								</div>
							</Slide>
						</Grid>
					</Grid>
					<div className="about__me">
						<Grid container>
							<Grid item xl={3} md={6} lg={6} sm={6}>
								<Slide bottom>
									<div className="aboutMe__left">
										<img src={Chrispic} alt="" />
									</div>
								</Slide>
							</Grid>
							<Grid item xl={9} md={6} lg={6} sm={6}>
								<div className="aboutMe__right">
									<Slide top>
										<h1>About Me 👨‍💻</h1>
										<p>
											Hello, i'm experienced data
											scientist extracting insights from
											real world data to derive
											meaningfull intutions to help
											business solve problems.Am
											proficient in python,sql,leveraging
											on Machine Learning, DeeepLearning
										</p>
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
									</Slide>
								</div>
							</Grid>
						</Grid>
					</div>
				</Container>
			</div>
			<div className="skill-section">
				<Container>
					<Skills />
				</Container>
			</div>
			<div className="contact-page">
				<div className="contact-page-details">
					<Container>
						<Grid container>
							<Grid
								item
								xl={6}
								sm={12}
								md={6}
								lg={6}
								className="contL__"
							>
								<div className="my-form-details">
									<h6>Let's talk</h6>
									<p>
										Having a project or Feeling to
										collaborate on a project , I'm open for
										them
									</p>
									<form action="">
										<div className="form__">
											<div className="contact-form-group">
												<label htmlFor="">
													First Name
												</label>
												<input
													type="text"
													placeholder="Enter your FirstName"
												/>
											</div>
											<div className="contact-form-group">
												<label htmlFor="">
													Last Name
												</label>
												<input
													type="text"
													placeholder="Enter your LastName"
												/>
											</div>
											<div className="contact-form-group">
												<label htmlFor="">Email</label>
												<input
													type="text"
													placeholder="Enter your Email"
												/>
											</div>
											<div className="contact-form-group">
												<label htmlFor="">
													Message
												</label>
												<textarea></textarea>
											</div>
											<div className="contact-submit">
												<Button>Send Message</Button>
											</div>
										</div>
									</form>
								</div>
							</Grid>
							<Grid item xl={6} sm={12} md={6} lg={6}>
								<div className="contacts-me-right">
									<img src={Emails} alt="" />
									<div className="more-details">
										<div className="more-details-1">
											<IoIosPin className="icon--" />
											<p>Nairobi , Kenya</p>
										</div>
										<div className="more-details-1">
											<BsPhone className="icon--" />
											<p>+254707926812</p>
										</div>
										<div className="more-details-1">
											<HiMail className="icon--" />
											<p>nyagachris411@gmail.com</p>
										</div>
									</div>
								</div>
							</Grid>
						</Grid>
					</Container>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Index;
