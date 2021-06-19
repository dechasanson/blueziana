import React from "react";
import { Link } from "react-router-dom";
import FullLogo from "./Images/FullLogo.jpg";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Header = () => {
  
  function myFunction() {
		let x = document.getElementById("myTopnav");
		if (x.className === "topnav") {
			x.className += " responsive";
		} else {
			x.className = "topnav";
		}
	}

	return (
		<>
			<div className="topnav" id="myTopnav">
				<Link to="/" className="active">
					<img src={FullLogo} height="75" alt="logo"/>
				</Link>
				<Link to="/Menu" className="buffer">Menu</Link>
				<Link to="/Gallery" className="buffer">Sights & Sounds</Link>
				<Link to="/Contact" className="buffer">About & Contact Us</Link>
				<a href="javascript:void(0)" className="icon" onClick={myFunction}>
          <FontAwesomeIcon icon={faBars}/>
				</a>
			</div>
		</>
	);
};

export default Header;
