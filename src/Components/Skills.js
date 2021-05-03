import React from "react";
import { Container, Grid } from "@material-ui/core";
import "./Skills.css";
function Skills() {
	return (
		<div className="myskills">
			<div className="skills-section">
				<Container>
					<Grid container>
						<Grid item xl={12} md={12} lg={12} sm={12}>
							<div className="skill-section-intro">
								<h1>My Skills 🚀</h1>
								<p>
									Am an Enthusiastist to data because of my
									Mathematical background which i have spent
									years on trying to understand (the domain)
									problems in the society .Data lover
								</p>
							</div>
						</Grid>
						<Grid item xl={12} md={12} lg={12} sm={12}>
							<div className="skill-section-show"></div>
						</Grid>
					</Grid>
				</Container>
			</div>
		</div>
	);
}
export default Skills;
