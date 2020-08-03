import React, { useContext } from "react";
//import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Description = () => {
	const { store, actions } = useContext(Context); //funciona como .provider .consumer !
	console.log(store.singleCharacter);

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-sm">imagen</div>
					<div className="col-sm">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
					</div>
				</div>
			</div>
			<table className="table table-striped">
				<thead>
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Birth Year</th>
						<th scope="col">Gender</th>
						<th scope="col">Height</th>
						<th scope="col">Skin Color</th>
						<th scope="col">Eye Color</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">{store.singleCharacter.name}</th>
						<td>{store.singleCharacter.birth_year}</td>
						<td>{store.singleCharacter.gender}</td>
						<td>{store.singleCharacter.height}</td>
						<td>{store.singleCharacter.skin_color}</td>
						<td>{store.singleCharacter.eye_color}</td>
					</tr>

					{/*<tr>
						<th scope="row">3</th>
						<td>Larry</td>
						<td>the Bird</td>
						<td>@twitter</td>
                    </tr>*/}
				</tbody>
			</table>
		</>
	);
};
