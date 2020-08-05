const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [], //array
			singleCharacter: {}, //objeto
			favoritos: []
		},
		actions: {
			// Use getActions to call a function within a fuction

			loadSomeData: async () => {
				let data = await fetch("https://swapi.dev/api/people/");
				let respons = await data.json();

				setStore({
					characters: respons.results //para coger solo los resultados
				});
			},

			/*obtenerDatos: async id => {
				console.log("id", id);
				console.log(`https://swapi.dev/api/people/${id}`);
				console.log(fetch(`https://swapi.dev/api/people/${id}`));

				const data = await fetch(`https://swapi.dev/api/people/${id}`);

				const users = await data.json();

				setStore({ singleCharacter: users.results });
			},*/

			seleccion: singleCharacter => {
				const store = getStore();

				//setStore({ singleCharacter: singleCharacter });
				localStorage.setItem("singleCharacter", JSON.stringify(singleCharacter)); //tiene que ser string los dos
			} /*
			reloadPage: id => {
				const store = getStore(); // para poder utilizar store
				console.log(id, store.characters[id]);
				store.characters
					? setStore({
							singleCharacter: store.characters[id] //para coger solo los resultados
					  })
					: "";
            }*/,
			favoritos: singleCharacter => {
				const store = getStore();

				setStore(favoritos => favoritos.concat(singleCharacter));
			}
		}
	};
};

export default getState;
