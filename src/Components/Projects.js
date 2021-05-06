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
								<div className="project-des">
									<h6>Diabetes prediction </h6>
									<p>
										A project to predict your diabetes level
									</p>
								</div>
								<div className="project-img">
									<img src={diabetes} alt="" />
								</div>
							</Slide>
						</div>
						<div className="my-project-main-item">
							<Slide bottom>
								<div className="project-des">
									<h6>Apple stock prediction</h6>
									<p>
										Apple Time series analysis project basic
										understanding and complete execution.
									</p>
								</div>
								<div className="project-img">
									<img src={apple} alt="" />
								</div>
							</Slide>
						</div>
						<div className="my-project-main-item">
							<Slide bottom>
								<div className="project-des">
									<h6>Big Mart Sales Prediction</h6>
									<p>Big Mart Sales Prediction</p>
								</div>
								<div className="project-img">
									<img src={proj} alt="" />
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
