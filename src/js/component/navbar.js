import React, { useContext } from "react";
import { Link } from "react-router-dom";
import star from "../../img/star.png";
import { Dropdown } from "react-bootstrap";

import { Context } from "../store/appContext";
import { Single } from "../views/single";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img src={star} height="50px" />
				</span>
			</Link>

			<Dropdown>
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					Dropdown Button
				</Dropdown.Toggle>

				<Dropdown.Menu>
					{store.favoritos.map((item, index) => {
						console.log(item);
						return (
							<Dropdown.Item href="#/action-1" key={index}>
								{item}
								<button
									type="button"
									className="close"
									aria-label="Close"
									onClick={() => actions.eliminar(item)}>
									<span aria-hidden="true">&times;</span>
								</button>
							</Dropdown.Item>
						);
					})}
				</Dropdown.Menu>
			</Dropdown>
		</nav>
	);
};

/*<li className="list-group-item" key={index}>
							{item}

							<button
								type="button"
								className="close"
								aria-label="Close"
								onClick={() => actions.eliminar(item)}>
								<span aria-hidden="true">&times;</span>
							</button>
						</li>*/
