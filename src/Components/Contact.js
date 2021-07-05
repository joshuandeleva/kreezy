import React from "react";
import "./Contact.css";
import Fade from "react-reveal/Fade";
import { Container, Grid, Button } from "@material-ui/core";
function Contact() {
	return (
		<div className="contact-page">
			<div className="contact-page-details">
				<Container>
					<Grid container>
						<Grid item xl={6} sm={12} md={6} lg={6}>
							<div className="my-form-details">
								<h6>Let's talk</h6>
								<p>
									Having a project or Feeling to collaborate
									on a project , I'm open for them
								</p>
								<div className="form">
									<form action="">
										<div className="contact-form-group">
											<label htmlFor="">First Name</label>
											<input
												type="text"
												placeholder="Enter your FirstName"
											/>
										</div>
										<div className="contact-form-group">
											<label htmlFor="">Last Name</label>
											<input
												type="text"
												placeholder="Enter your LastName"
											/>
										</div>
										<div className="contact-form-group">
											<label htmlFor="">Email</label>
											<input
												type="text"
												placeholder="Enter your Email"
											/>
										</div>
										<div className="contact-form-group">
											<label htmlFor="">Message</label>
											<textarea></textarea>
										</div>
										<div className="contact-submit">
											<Button>Send Message</Button>
										</div>
									</form>
								</div>
							</div>
						</Grid>
						<Grid item xl={6} sm={12} md={6} lg={6}></Grid>
					</Grid>
				</Container>
			</div>
		</div>
	);
}

export default Contact;
