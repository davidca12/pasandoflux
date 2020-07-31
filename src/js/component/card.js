import React, { useContext } from "react";
//import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = l => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<h1>{l.name}</h1>
			<h2>{l.height}</h2>
		</div>
	);
};
