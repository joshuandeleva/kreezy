import React, { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
import Progressbar from "./Progressbar";
import "./Skills.css";
const Datarenderd = [
	{ bgcolor: "#6a1b9a", completed: 80, skill: "Data Analysis" },
	{
		bgcolor: "#00695c",
		completed: 85,
		skill: "Data extraction,transformation and loading",
	},
	{ bgcolor: "#ef6c00", completed: 90, skill: "Data Wraggling/cleaning" },
	{ bgcolor: "#ff6b81", completed: 70, skill: "Data Modelling" },
	{ bgcolor: "#2ed573", completed: 80, skill: "Data Intuition" },
	{ bgcolor: "#ff6b81", completed: 95, skill: "Data Visualization" },
];
function Skills() {
	const [completed, setCompleted] = useState(0);
	useEffect(() => {
		setInterval(
			() => setCompleted(Math.floor(Math.random() * 100) + 1),
			2000
		);
	}, [completed]);
	return (
		<div className="myskills">
			<div className="skills-section">
				<Container>
					<Grid container justify="center">
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
						<div className="skill-section-show">
							{Datarenderd.map((myskill, index) => (
								<Progressbar
									key={index}
									bgcolor={myskill.bgcolor}
									completed={myskill.completed}
									skill={myskill.skill}
								/>
							))}
						</div>
					</Grid>
				</Container>
			</div>
		</div>
	);
}
export default Skills;
