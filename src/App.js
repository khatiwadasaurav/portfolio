import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Projects";

import "./App.css";

const App = () => {
	const [resumeData, setResumeData] = useState({});
	useEffect(() => {
		fetch("/resumeData.json", {
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setResumeData(data);
			})
			.then(() => {
				document.getElementById("about").scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			});
	}, []);

	return (
		<div className="App">
			<Header data={resumeData.main} />
			<About data={resumeData.main} />
			<Resume data={resumeData.resume} />
			<Portfolio data={resumeData.portfolio} />
			<Contact data={resumeData.main} />
			<Footer data={resumeData.main} />
		</div>
	);
};

export default App;
