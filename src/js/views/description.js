import React, { useContext, useState, useEffect } from "react";

//import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Description = () => {
	const { store, actions } = useContext(Context); //funciona como .provider .consumer !

	//const { id } = useParams(); //tienee que ser el mismo nombre que esta en layaout

	var caracter = JSON.parse(localStorage.getItem("singleCharacter"));

	console.log(caracter.name);

	/*useEffect(
		() => {
			actions.obtenerDatos(id);
		},
		[id]
	); //los corchetes siginifican que se ejeuta cada vez que eso cambia lo de dentro, si estan vacios como compenntdimouyd

	/*const [pueblo, setPueblo] = React.useState([]);

	React.useEffect(() => {
		obtenerDatos();
	}, []);

	const obtenerDatos = async () => {
		const data = await fetch(`https://swapi.dev/api/people/${id}`);
		const users = await data.json();
		setPueblo(users);
	};*/

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
						<th scope="row">{caracter.name}</th>
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
