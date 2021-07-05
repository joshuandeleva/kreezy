import React from "react";
import "./Contact.css";
import Fade from "react-reveal/Fade";
import Emails from "../assets/images/Emails.svg";
import { IoIosPin } from "react-icons/io";
import { BsPhone } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { Container, Grid, Button } from "@material-ui/core";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Contact() {
	return (
		<div className="contact-page">
			<Navbar />
			<div className="contact-page-details">
				<Container>
					<Grid container>
						<Grid
							item
							xl={6}
							sm={12}
							md={6}
							lg={6}
							className="contL__"
						>
							<div className="my-form-details">
								<h6>Let's talk</h6>
								<p>
									Having a project or Feeling to collaborate
									on a project , I'm open for them
								</p>
								<form action="">
									<div className="form__">
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
									</div>
								</form>
							</div>
						</Grid>
						<Grid item xl={6} sm={12} md={6} lg={6}>
							<div className="contacts-me-right">
								<img src={Emails} alt="" />
								<div className="more-details">
									<div className="more-details-1">
										<IoIosPin className="icon--" />
										<p>Nairobi , Kenya</p>
									</div>
									<div className="more-details-1">
										<BsPhone className="icon--" />
										<p>+254707926812</p>
									</div>
									<div className="more-details-1">
										<HiMail className="icon--" />
										<p>nyagachris411@gmail.com</p>
									</div>
								</div>
							</div>
						</Grid>
					</Grid>
				</Container>
			</div>
			<Footer />
		</div>
	);
}

export default Contact;
