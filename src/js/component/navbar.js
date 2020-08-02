import React from "react";
import { Link } from "react-router-dom";
import star from "../../img/star.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img src={star} height="50px" />
				</span>
			</Link>
			<div classNameName="ml-auto">
				{/*<Link to="/demo">*/}
				<div className="dropdown">
					<a
						className="btn btn-primary dropdown-toggle"
						href="#"
						role="button"
						id="dropdownMenuLink"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Dropdown link
					</a>

					<div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
						<a className="dropdown-item" href="#">
							Action
						</a>
						<a className="dropdown-item" href="#">
							Another action
						</a>
						<a className="dropdown-item" href="#">
							Something else here
						</a>
					</div>
				</div>
				{/*</Link>*/}
			</div>
		</nav>
	);
};
