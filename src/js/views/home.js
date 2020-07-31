import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<h1>Come</h1>
			{store.characters.map((e, index) => {
				return <Card key={index} name={e.height} height={e.name} />;
			})}
		</>
	);
};
