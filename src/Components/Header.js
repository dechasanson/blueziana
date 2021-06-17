import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import FullLogo from "./Images/FullLogo.jpg";


const Header = () => {
	const [isNavVisible, setIsNavVisible] = useState(true);
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	useEffect(() => {
    const handleMediaQueryChange = (mediaQuery) => {
      if (mediaQuery.matches) {
        setIsSmallScreen(true);
        toggleNav();
      } else {
        setIsSmallScreen(false);
      }
    };

		const mediaQuery = window.matchMedia("(max-width: 812px)");
		mediaQuery.addEventListener("change", handleMediaQueryChange);
		handleMediaQueryChange(mediaQuery);

		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);

	const toggleNav = () => {
		setIsNavVisible(!isNavVisible);
	};

	return (
		<>
			<header className="Header" id="header">
				<Link to="/" className="logo">
					{/* <h1>Blueziana Club</h1> */}
          <img src={FullLogo} height="75" />
				</Link>

				{(!isSmallScreen || isNavVisible) && (
						<nav className="Nav">
							<Link to="/Menu">Menu</Link>
							<Link to="/Gallery">Sights & Sounds</Link>
							<Link to="/Boothe Fest">Boothe Fest</Link>
							<Link to='/Contact'>About Us/Contact</Link>
						</nav>
				)}
				<button className="Burger" onClick={toggleNav}>
					<MenuIcon id="burger-icon"></MenuIcon>
				</button>
			</header>
		</>
	);
};

export default Header;
