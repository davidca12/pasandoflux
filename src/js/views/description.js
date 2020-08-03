import React, { useContext } from "react";
//import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Description = () => {
	const { store, actions } = useContext(Context); //funciona como .provider .consumer !
	console.log(store.singleCharacter);

	return (
		<>
			<h1>
				nombre:
				{store.singleCharacter.name}
			</h1>
		</>
	);
};
