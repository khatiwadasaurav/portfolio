import React from "react";
import { useForm } from "react-hook-form";

const Contact = ({ data }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: "onBlur",
		defaultValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},
	});

	if (data) {
		var contactName = data.name;
		var street = data.address.street;
		var city = data.address.city;
		var state = data.address.state;
		var zip = data.address.zip;
		var phone = data.phone;
		var contactEmail = data.email;
		var contactMessage = data.contactmessage;
	}

	const submitForm = ({ email, message, name, subject }) => {
		window.open(
			`mailto:${email}?subject=${encodeURIComponent(
				subject
			)}&body=${encodeURIComponent(name)} (${encodeURIComponent(
				email
			)}): ${encodeURIComponent(message)}`
		);
	};

	return (
		<section id="contact">
			<div className="row section-head">
				<div className="two columns header-col">
					<h1>
						<span>Get In Touch.</span>
					</h1>
				</div>

				<div className="ten columns">
					<p className="lead">{contactMessage}</p>
				</div>
			</div>

			<div className="row">
				<div className="eight columns">
					<form
						onSubmit={handleSubmit((data) => {
							submitForm(data);
						})}
					>
						<fieldset>
							<div>
								<label htmlFor="contactName">
									Name{" "}
									<span className="required">*</span>
								</label>
								<input
									type="text"
									size="35"
									id="contactName"
									name="contactName"
									placeholder="Your Name"
									{...register("name", {
										required:
											"Your name is required",
									})}
								/>

								<p className="errorMessage">
									{errors.name?.message}
								</p>
							</div>

							<div>
								<label htmlFor="contactEmail">
									Email{" "}
									<span className="required">*</span>
								</label>
								<input
									type="text"
									size="35"
									id="contactEmail"
									name="contactEmail"
									placeholder="Email Address"
									{...register("email", {
										required: "Email is required",
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
											message: "Invalid email address",
										},
									})}
								/>
								<p className="errorMessage">
									{errors.email?.message}
								</p>
							</div>

							<div>
								<label htmlFor="contactSubject">
									Subject
								</label>
								<input
									type="text"
									size="35"
									id="contactSubject"
									name="contactSubject"
									{...register("subject", {
										required:
											"Subject is required",
									})}
								/>
								<p className="errorMessage">
									{errors.subject?.message}
								</p>
							</div>

							<div>
								<label htmlFor="contactMessage">
									Message{" "}
									<span className="required">*</span>
								</label>
								<textarea
									cols="50"
									rows="15"
									id="contactMessage"
									name="contactMessage"
									placeholder="Your Message"
									{...register("message", {
										required:
											"Your message is required",
									})}
								></textarea>
								<p className="errorMessage">
									{errors.message?.message}
								</p>
							</div>

							<div>
								<button
									type="submit"
									className="submit"
								>
									Submit
								</button>
							</div>
						</fieldset>
					</form>

					<div id="message-warning"> Error boy</div>
					<div id="message-success">
						<i className="fa fa-check"></i>Your message was
						sent, thank you!
						<br />
					</div>
				</div>

				<aside className="four columns footer-widgets">
					<div className="widget widget_contact">
						<h4>Address and Phone</h4>
						<p className="address">
							{contactName}
							<br />
							{contactEmail}
							<br />
							<br />
							{street} <br />
							{city}, {state} {zip}
							<br />
							<span>{phone}</span>
						</p>
					</div>
				</aside>
			</div>
		</section>
	);
};

export default Contact;
