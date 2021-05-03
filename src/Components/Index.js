import React from "react";
import Resume from "../assets/images/Resume.docx";
import Navbar from "./Navbar";
import Chrispic from "../assets/images/chrispic1.png";
import { Grid, Container, Button, Link } from "@material-ui/core";
import "./Index.css";
function Index() {
	return (
		<div className="main__content">
			<Navbar />
			<div className="mainContent__navIntro">
				<Container>
					<Grid container spacing={3}>
						<Grid item xl={6} lg={6} sm={12} md={6}>
							<div className="mainContent__navLeft">
								<h1>Hello 👋 ,</h1>
								<h1>I'm Christopher Wanjohi</h1>
								<p>
									A Datascientist 🥑 ,Data engineer 👨‍💻and an
									NLP practioneer 
								</p>
								<div className="nav-btns">
									<Button class="contact">
										<Link to="/contact">Contact me</Link>
									</Button>
									<Button class="cv">
										<Link to={Resume} target="_blank">
											View my Cv
										</Link>
									</Button>
								</div>
							</div>
						</Grid>
						<Grid item xl={6} lg={6} sm={12} md={6}>
							<div className="mainContent__navRight">
								<img src={Chrispic} alt="" />
							</div>
						</Grid>
					</Grid>
				</Container>
			</div>
		</div>
	);
}

export default Index;
