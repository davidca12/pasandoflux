import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			{store.characters.map((e, index) => {
				return (
					<Card
						key={index}
						title={e.name}
						gender={e.gender}
						hairColor={e.hair_color}
						eyeColor={e.eye_color}
					/>
				);
			})}
		</>
	);
};
