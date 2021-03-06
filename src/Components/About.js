import React from "react";
import "./About.css";
import chris2 from "../assets/images/ck2.png";
import Chrispic from "../assets/images/chrispic1.png";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Grid, Container } from "@material-ui/core";
import { GiAchievement, GiCheckMark } from "react-icons/gi";
import { IoLogoTableau } from "react-icons/io5";
import { FaHtml5, FaPython } from "react-icons/fa";
import {
	SiAmazonaws,
	SiPostgresql,
	SiMysql,
	SiHeroku,
	SiFlask,
	SiJupyter,
	SiVisualstudio,
	SiPowerbi,
	SiMicrosoftazure,
	SiApachespark,
} from "react-icons/si";
import { ImFileText, ImGit } from "react-icons/im";
import { GrHadoop } from "react-icons/gr";
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
								<h1>Hello π , I am</h1>
								<p>Christopher Wanjohi</p>
								<h3>
									A Datascientist ,Data engineer π¨βπ»and an NLP
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
											<GiAchievement className="icon-" />
											<div className="abtIcon-des">
												<small>3 year</small>
												<h3>Experience</h3>
											</div>
										</div>
										<div className="abtIcon-1">
											<ImFileText className="icon-" />
											<div className="abtIcon-des">
												<small>20 +</small>
												<h3>Projects</h3>
											</div>
										</div>
										<div className="abtIcon-1">
											<IoTimerOutline className="icon-" />
											<div className="abtIcon-des">
												<small>24/7</small>
												<h3>Support</h3>
											</div>
										</div>
									</div>
								</div>
							</Grid>
						</Grid>
					</Container>
				</div>
				<div className="aboutPage__skills">
					<Container>
						<Grid container>
							<Grid item xl={6} sm={12} md={6} lg={6}>
								<div className="abtPgSkill__">
									<h6>Skills</h6>
									<div className="abtPgSkillShow__">
										<div className="abt1__">
											<GiCheckMark className="abt1__Icon" />
											<p>Data anaysis</p>
										</div>
										<div className="abt1__">
											<GiCheckMark className="abt1__Icon" />
											<p>
												Data visualisation and
												Communication
											</p>
										</div>
										<div className="abt1__">
											<GiCheckMark className="abt1__Icon" />
											<p>
												Data Science and
												BusinessIntelligence
											</p>
										</div>
										<div className="abt1__">
											<GiCheckMark className="abt1__Icon" />
											<p>Data engeneering</p>
										</div>
										<div className="abt1__">
											<GiCheckMark className="abt1__Icon" />
											<p>Machine Learning and AI</p>
										</div>
									</div>
								</div>
							</Grid>
							<Grid item xl={6} sm={12} md={6} lg={6}>
								<div className="tech-stack">
									<div className="tech-stack-main">
										<h6>Tech-Stack</h6>
										<div className="abt1__">
											<FaPython className="abt1__Icon" />
											<p>Python</p>
										</div>
										<div className="abt1__">
											<FaHtml5 className="abt1__Icon" />
											<p>Html</p>
										</div>
										<div className="abt1__">
											<IoLogoTableau className="abt1__Icon" />
											<p>Tableau</p>
										</div>

										<div className="abt1__">
											<SiPowerbi className="abt1__Icon" />
											<p>PowerBi</p>
										</div>

										<div className="abt1__">
											<SiApachespark className="abt1__Icon" />
											<p>ApacheSpark</p>
										</div>
										<div className="abt1__">
											<GrHadoop className="abt1__Icon" />
											<p>Hadoop</p>
										</div>
										<div className="abt1__">
											<SiFlask className="abt1__Icon" />
											<p>Flask</p>
										</div>
									</div>
									<div className="teck-stack-database">
										<h6>Database and Cloud services</h6>
										<div className="abt1__">
											<SiPostgresql className="abt1__Icon" />
											<p>PostgressSql</p>
										</div>
										<div className="abt1__">
											<SiMicrosoftazure className="abt1__Icon" />
											<p>Ms Azure</p>
										</div>
										<div className="abt1__">
											<SiAmazonaws className="abt1__Icon" />
											<p>AWS</p>
										</div>
										<div className="abt1__">
											<SiMysql className="abt1__Icon" />
											<p>MYSQL</p>
										</div>
									</div>
									<div className="teck-stack-tools">
										<h6>Tools and IDEs</h6>
										<div className="abt1__">
											<SiJupyter className="abt1__Icon" />
											<p>Jupyter</p>
										</div>
										<div className="abt1__">
											<SiVisualstudio className="abt1__Icon" />
											<p>Visual Studio</p>
										</div>
										<div className="abt1__">
											<SiHeroku className="abt1__Icon" />
											<p>Heroku</p>
										</div>
										<div className="abt1__">
											<ImGit className="abt1__Icon" />
											<p>Git & Version Control</p>
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
