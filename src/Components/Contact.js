import React from "react";
import "./Contact.css";
import contactimg from "../assets/images/contac-1.svg";
import { Container, Grid, Button } from "@material-ui/core";
function Contact() {
	return (
		<div className="contact-page">
			<div className="contact-page-details">
				<Container>
					<div className="contact-intro">
						<h1>Let's collaborate and share projects ideas 🛠</h1>
					</div>
					<Grid container>
						<Grid item xl={6} md={12} lg={6} sm={12}>
							<div className="my-form">
								<form>
									<input
										type="text"
										placeholder="First Name"
									/>
									<input
										type="text"
										placeholder="Last Name"
									/>
									<input
										type="text"
										placeholder="Enter Your Email"
									/>
									<textarea placeholder="mesaage"></textarea>
								</form>
								<Button class="send-btn">Send</Button>
							</div>
						</Grid>
						<Grid item xl={6} md={12} lg={6} sm={12}>
							<div className="my-form-details">
								<img src={contactimg} alt="" />
							</div>
						</Grid>
					</Grid>
				</Container>
			</div>
		</div>
	);
}

export default Contact;
