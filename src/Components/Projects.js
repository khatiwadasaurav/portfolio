import React from "react";

const Projects = ({ data }) => {
	if (data) {
		var projects = data.projects.map(function (projects, i) {
			var projectImage = "images/portfolio/" + projects.image;
			return (
				<div
					key={projects.title + i}
					className="columns portfolio-item"
				>
					<div className="item-wrap">
						<a
							href={projects.url}
							target="blank"
							title={projects.title}
						>
							<img
								alt={projects.title}
								src={projectImage}
							/>
							<div className="overlay">
								<div className="portfolio-item-meta">
									<h5>{projects.title}</h5>
									<p>{projects.category}</p>
								</div>
							</div>
							<div className="lin-icon-group">
								<div className="link-icon">
									<i className="fa fa-link"></i>
								</div>
							</div>
						</a>
					</div>
					<div className="caption-link">
						<a href={projects.git} target="blank">
							<i className="fa fa-github"></i>
						</a>
					</div>
				</div>
			);
		});
	}

	return (
		<section id="portfolio">
			<div className="row">
				<div className="twelve columns collapsed">
					<h1>Check Out Some of My Works.</h1>

					<div
						id="portfolio-wrapper"
						className="bgrid-quarters s-bgrid-thirds cf"
					>
						{projects}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
