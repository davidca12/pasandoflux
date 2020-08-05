import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Card } from "../component/card.js";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="list-group list-group-horizontal">
				{store.characters.map((e, index) => {
					return (
						<Card
							/*key={index}
                            id={index}
                            title={e.name}
                            gender={e.gender}
                            hairColor={e.hair_color}
                            eyeColor={e.eye_color}*/
							key={index}
							id={index}
							character={e}
						/>
					);
				})}
			</div>
		</>
	);
};
