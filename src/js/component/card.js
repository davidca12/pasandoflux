import React, { useContext } from "react";
//import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
export const Card = singleCharacter => {
	const { store, actions } = useContext(Context); //funciona como .provider .consumer !

	return (
		<>
			<div className="card-group">
				<div className="card">
					<img className="card-img-top" src="..." alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">{singleCharacter.character.name}</h5>
						<p className="card-text">{singleCharacter.character.gender}</p>
						<p className="card-text">{singleCharacter.character.hair_color}</p>
						<p className="card-text">{singleCharacter.character.eye_color}</p>
						<Link to={{ pathname: `/description/${singleCharacter.id + 1}` }}>
							<button
								type="button"
								className="btn btn-outline-primary"
								onClick={() => actions.seleccion(singleCharacter.character)}>
								Learn more
							</button>
						</Link>
						<button
							type="button"
							className="btn btn-outline-warning"
							onClick={() => actions.seleccion(singleCharacter.character)}>
							<i className="fa fa-heart" aria-hidden="true" />
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
