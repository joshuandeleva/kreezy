import React from "react";
import "./Projects.css";
import { Container, Grid } from "@material-ui/core";
import Slide from "react-reveal/Slide";
import diabetes from "../assets/images/diabetes.png";
import proj from "../assets/images/proj2.jpg";
import apple from "../assets/images/apple.jpg";
const Projects = () => {
	return (
		<div className="my-projects">
			<h1 className="project-title">My Projects</h1>
			<Container>
				<Grid container>
					<Grid container className="project__Main">
						<Grid item xl={6} md={6} sm={6} lg={6}>
							<div className="project-img">
								<img src={diabetes} alt="" />
							</div>
						</Grid>
						<Grid item xl={6} md={6} sm={6} lg={6}>
							<div className="project-des">
								<h1>01</h1>
								<h6>Diabetes prediction </h6>
								<p>
									.Diabetes can be controlled if it is
									predicted earlier. To achieve this goal this
									project work we will do early prediction of
									Diabetes in a human body or a patient for a
									higher accuracy through applying, Various
									Machine Learning Techniques. Machine
									learning techniques Provide better result
									for prediction by con- structing models from
									datasets collected from patients.
								</p>
								<div className="project-link">
									<a href="https://diabetes-application.herokuapp.com/">
										Live demo
									</a>
									<a href="https://github.com/WanjohiChristopher/Diabetes-Prediction-Deployment">
										Github
									</a>
								</div>
							</div>
						</Grid>
					</Grid>
					<Grid container className="project__Main">
						<Grid item xl={6} md={6} sm={6} lg={6}>
							<div className="project-des">
								<h1>02</h1>
								<h6>Apple stock prediction</h6>
								<p>
									Stock price prediction is definitely not an
									easy task as there are many factors that
									need to be taken into consideration. Overall
									market conditions, competitors’ performance,
									new product releases, temper of global
									relations are just some key factors that
									have potential to increase or decrease stock
									prices
								</p>
								<div className="project-link">
									<a href="https://github.com/WanjohiChristopher/Apple_Stock-Market-Forecasting-Time-Series-Analysis">
										Live demo
									</a>
									<a href="https://github.com/WanjohiChristopher/Apple_Stock-Market-Forecasting-Time-Series-Analysis">
										Github
									</a>
								</div>
							</div>
						</Grid>
						<Grid item xl={6} md={6} sm={6} lg={6}>
							<div className="project-img">
								<img src={apple} alt="" />
							</div>
						</Grid>
					</Grid>
					<Grid container className="project__Main">
						<Grid item xl={6} md={6} sm={6} lg={6}>
							<div className="project-img">
								<img src={proj} alt="" />
							</div>
						</Grid>
						<Grid item xl={6} md={6} sm={6} lg={6}>
							<div className="project-des">
								<h1>03</h1>
								<h6>Big Mart Sales Prediction</h6>
								Stock price prediction is definitely not an easy
								task as there are many factors that need to be
								taken into consideration. Overall market
								conditions, competitors’ performance, new
								product releases, temper of global relations are
								just some key factors that have potential to
								increase or decrease stock prices
								<div
									className="project-link"
									style={{ marginTop: 20 }}
								>
									<a href="https://github.com/WanjohiChristopher/Big-Mart-Sales-Prediction-Using-Neural-Networks">
										Live demo
									</a>
									<a href="https://github.com/WanjohiChristopher/Big-Mart-Sales-Prediction-Using-Neural-Networks">
										Github
									</a>
								</div>
							</div>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};
export default Projects;
