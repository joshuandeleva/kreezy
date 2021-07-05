import React, { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
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
													<p>
														Machine Learning and AI
													</p>
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
												<h6>
													Database and Cloud services
												</h6>
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
						
					</Grid>
				</Container>
			</div>
		</div>
	);
}
export default Skills;
