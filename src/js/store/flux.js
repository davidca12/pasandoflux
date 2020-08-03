const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [], //array
			singleCharacter: {} //objeto
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: async () => {
				let res = await fetch("https://swapi.dev/api/people/");
				let data = await res.json();

				setStore({
					characters: data.results //para coger solo los resultados
				});
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			seleccion: singleCharacter => {
				setStore({ singleCharacter: singleCharacter });
			}
		}
	};
};

export default getState;
