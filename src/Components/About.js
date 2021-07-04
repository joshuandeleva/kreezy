import React from "react";
import "./About.css";
import chris2 from "../assets/images/ck2.png";
import Chrispic from "../assets/images/chrispic1.png";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Grid, Container } from "@material-ui/core";
import { GiAchievement } from "react-icons/gi";
import { ImFileText } from "react-icons/im";
import { IoTimerOutline } from "react-icons/io5";
import Navbar from "./Navbar";
import Footer from "./Footer";
function About() {
	return (
		<div className="aboutMe__page">
			<Navbar />
			<div className="aboutPage__main">
				<Container>
					<Grid container>
						<Grid
							item
							xl={6}
							sm={12}
							md={6}
							lg={6}
							className="main-div"
						>
							<div className="aboutMePage__left">
								<h1>Hello 👋 , I am</h1>
								<p>Christopher Wanjohi</p>
								<h3>
									A Datascientist ,Data engineer 👨‍💻and an NLP
									practioneer
								</h3>
								<h6>
									I i'm an experienced Datascientist in
									driving business value using advanced data
									analysis and machine learning
									techniques.Involved in developer clubs ,data
									science society and i'm passionate about NLP{" "}
								</h6>
								<div className="aboutMePage__leftBtns">
									<Button className="abtHire">
										<Link to="/contact-us">Hire me</Link>
									</Button>
									<Button className="abtCv">
										<Link
											href="../assets/images/Resume.docx"
											download
										>
											Download CV
										</Link>
									</Button>
								</div>
							</div>
						</Grid>
						<Grid
							item
							xl={6}
							sm={12}
							md={6}
							lg={6}
							className="main-div"
						>
							<div className="aboutPage__right">
								<img src={chris2} alt="" />
							</div>
						</Grid>
					</Grid>
				</Container>
				<div className="aboutMePage__moreDetails">
					<Container>
						<Grid container>
							<Grid
								item
								xl={6}
								sm={12}
								lg={6}
								md={6}
								className="main-div"
							>
								<div className="aboutMePage__moreDetailsLeft">
									<img src={Chrispic} alt="" />
								</div>
							</Grid>
							<Grid
								item
								xl={6}
								sm={12}
								lg={6}
								md={6}
								className="main-div"
							>
								<div className="aboutMePage__moreDetailsRight">
									<h6>About Me</h6>
									<p>
										Data scientist with 2+ years of broad
										based experience in building
										dta-intensive applications, overcoming
										complex architectural and scalability
										issues in diverse industries. Proficient
										in predictive modelling , data
										processing and data anaysis algorithms
										,as well as scripting languages
										including python.Capable of creating
										,developing ,testing and deploying
										highly adaptive diverse services to
										transalte business and functional
										qualifications into substantila
										deliverables
									</p>
									<div className="abtIcons">
										<div className="abtIcon-1">
											<GiAchievement />
											<div className="abtIcon-des">
												<small>3 year</small>
												<h3>Experience</h3>
											</div>
										</div>
										<div className="abtIcon-1">
											<ImFileText />
											<div className="abtIcon-des">
												<small>3 year</small>
												<h3>Experience</h3>
											</div>
										</div>
										<div className="abtIcon-1">
											<IoTimerOutline />
											<div className="abtIcon-des">
												<small>3 year</small>
												<h3>Experience</h3>
											</div>
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
export default About;
