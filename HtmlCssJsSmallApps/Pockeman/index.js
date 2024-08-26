const onLoad = (function () {
  const tbody = document.getElementById("table-body");
  const pokemonSelect = document.getElementById("pokemon-name");

  const fetchAPI = async (url) => {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (err) {
      throw new Error(err);
    }
  };

  const fetchPokemonDetails = async (pokemon) => {
    return await Promise.all(
      pokemon.map(async (item) => {
        const abilities = await fetchAPI(item.url);
        return {
          ...item,
          attributes: abilities?.abilities?.map(
            (ability) => ability.ability.name
          ),
        };
      })
    );
  };

  const displayPokemonList = (pokemon) => {
    const handleSelect = (event) => {
      const pokemonAbilities = pokemon.find(
        (item) => item.name === event.target.value
      );
      const ul = document.getElementById("ability-list");
      ul.innerHTML = "";
      pokemonAbilities?.attributes?.forEach((ability) => {
        const li = document.createElement("li");
        li.innerText = ability;
        ul.appendChild(li);
      });
    };
    pokemonSelect.addEventListener("change", handleSelect);
  };

  const displayPokemon = (pokemon) => {
    if (pokemon?.length) {
      pokemon.forEach((element) => {
        const row = document.createElement("tr");
        const nameData = document.createElement("td");
        nameData.innerText = element?.name;
        const abilityData = document.createElement("td");
        abilityData.innerText = element?.attributes?.join(", ");
        row.appendChild(nameData);
        row.appendChild(abilityData);
        tbody.appendChild(row);
      });
    }
    if (pokemon?.length) {
      pokemon.forEach((element) => {
        const option = document.createElement("option");
        option.value = element?.name;
        option.innerText = element.name;
        pokemonSelect.appendChild(option);
      });
    }
    displayPokemonList(pokemon);
  };

  const init = async () => {
    const pokemon = await fetchAPI("https://pokeapi.co/api/v2/pokemon");
    const pokemonDetails = await fetchPokemonDetails(pokemon?.results);
    displayPokemon(pokemonDetails);
  };

  return { init };
})();

document.addEventListener("DOMContentLoaded", onLoad.init);
