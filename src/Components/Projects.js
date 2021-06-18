import React from "react";
import "./Projects.css";
import { Container } from "@material-ui/core";
import Slide from "react-reveal/Slide";
import diabetes from "../assets/images/diabetes.png";
import proj from "../assets/images/proj2.jpg";
import apple from "../assets/images/apple.jpg";
const Projects = () => {
	return (
		<div className="my-projects">
			<Container>
				<div className="project-title">
					<h1>Projects</h1>
				</div>
				<div className="main-grid">
					<div className="main-grid-item">
						<div className="my-project-main-item">
							<Slide bottom>
								<div className="project-img">
									<img src={diabetes} alt="" />
								</div>
								<div className="project-des">
									<h6>Diabetes prediction </h6>
									<p>
										A project to predict your diabetes level
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
							</Slide>
						</div>
						<div className="my-project-main-item">
							<Slide bottom>
								<div className="project-img">
									<img src={apple} alt="" />
								</div>
								<div className="project-des">
									<h6>Apple stock prediction</h6>
									<p>
										Apple Time series analysis project basic
										understanding and complete execution.
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
							</Slide>
						</div>
						<div className="my-project-main-item">
							<Slide bottom>
								<div className="project-img">
									<img src={proj} alt="" />
								</div>
								<div className="project-des">
									<h6>Big Mart Sales Prediction</h6>
									<p>Big Mart Sales Prediction</p>
									<div className="project-link">
										<a href="https://github.com/WanjohiChristopher/Big-Mart-Sales-Prediction-Using-Neural-Networks">
											Live demo
										</a>
										<a href="https://github.com/WanjohiChristopher/Big-Mart-Sales-Prediction-Using-Neural-Networks">
											Github
										</a>
									</div>
								</div>
							</Slide>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};
export default Projects;
