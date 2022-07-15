import React from "react";

const Navigation = () => {
	return (
		<nav id="nav-wrap">
			<a
				className="mobile-btn"
				href="#nav-wrap"
				title="Show navigation"
			>
				Show navigation
			</a>
			<a className="mobile-btn" href="#home" title="Hide navigation">
				Hide navigation
			</a>

			<ul id="nav" className="nav">
				<li>
					<a className="smoothscroll" href="#home">
						Home
					</a>
				</li>

				<li className="current">
					<a className="smoothscroll" href="#about">
						About Me
					</a>
				</li>
				<li>
					<a className="smoothscroll" href="#resume">
						Resume
					</a>
				</li>
				<li>
					<a className="smoothscroll" href="#portfolio">
						Portfolio
					</a>
				</li>

				<li>
					<a className="smoothscroll" href="#contact">
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
};
export default Navigation;
