import React from "react";

const About = () => {
	return (
		<>
			<main className="main" id="contact">
				<div className="title about">
					<h1 id="about" className="title">
						Where Y'at?
					</h1>
				</div>
				<div className="banner">
					<h2 className="intro">WHO WE ARE</h2>
					<img
						src="https://res.cloudinary.com/doe9bf93k/image/upload/v1624134804/Blueziana%20Sights/Stacked_Logo_Transparent_pibqvm.png"
						className="intro contactLogo"
            width="500"
            alt="logo"
					></img>
					<p className="intro contactLogo">
						The Blueziana Club is owned and operated by Greg and Thais. Heavily
						influenced by the delta blues, the Blueziana Club is set up to mimic
						the appearance of juke joints throughout the region. You’ll always
						find Greg behind the bar mixing drinks and stirring the pot. Just on
						the other side of bar is where you’ll typically find Thais, making
						sure guests all pass a good time.
					</p>
					<p className="intro">
						With blues on the radio, a good drink in your hand, and surrounded
						by friends, there’s no way you won’t have fun!
					</p>
				</div>
				<div className="banner">
					<h2 className="intro">HOW TO FIND US</h2>
					<p className="intro">
						The Blueziana Club is located somewhere in the map below. It's open
						when it's open, closed when it's closed, and you can get here by
						invitation only.
					</p>
				</div>
				<div className="map">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4250793.290472896!2d-94.00577479213666!3d30.55875335490979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a454b2118265%3A0xc955f73281e54703!2sLouisiana!5e0!3m2!1sen!2sus!4v1624125675280!5m2!1sen!2sus"
						className="sponsor"
						width="60%"
						height="450"
						style={{ margin: "0 2em 2em 2em" }}
						allowFullScreen=""
            loading="lazy"
            alt="map"
            title="map"
					></iframe>
					<img
						src="https://res.cloudinary.com/doe9bf93k/image/upload/v1624135116/Blueziana%20Sights/BOOTHE_1_dxyee9.png"
						className="sponsor"
            height="450"
            alt="sponsor banner"
					></img>
				</div>
			</main>
		</>
	);
};

export default About;
