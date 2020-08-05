import { array } from "prop-types";

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
			updateFavoritos: target => {
				// Update query onKeyPress of input box
				const store = getStore();

				setStore({ update: target });
				//console.log(store.update);
			},
			eliminar: name => {
				const store = getStore();
				const exist = store.favoritos.filter(item => item != name);
				console.log(exist);
				setStore({ favoritos: exist });
			},
			favoritos: name => {
				/*const store = getStore();

				let array = [];
				let nw = array.push(store.update);
				console.log(array);*/

				//setStore(favoritos => favoritos.concat(update)); //array siempre !

				const store = getStore();
				const exist = store.favoritos.filter(fav => fav === name);
				console.log(exist.length);

				if (exist.length === 0) {
					return setStore({ favoritos: [...store.favoritos, name] });
				} else {
					return setStore({ favoritos: store.favoritos });
				}

				console.log(store.favoritos);
			}
		}
	};
};

export default getState;
