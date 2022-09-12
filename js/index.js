let pokeList = document.getElementById("pokeList");
for (let c = 0; c < pokemons.length; c++) {
  let pokeId = pokemons[c].id;
  let pokeDescription = pokemons[c].description;
  let pokeImg = pokemons[c].img;
  let pokeName = pokemons[c].nameItem;
  let pokeValue = pokemons[c].value;
  let pokeTipe = pokemons[c].tag;

  let card = document.createElement("li");
  card.classList.add("pokeCard");

  let imgCard = document.createElement("img");
  imgCard.src = pokeImg;
  imgCard.alt = pokeName;
  imgCard.classList.add("pokeImg");
  if (pokeTipe === "Terrestre") {
    imgCard.style.backgroundImage = "url(./img/background_grass.jpg)";
  } else if (pokeTipe === "Aqua") {
    imgCard.style.backgroundImage = "url(./img/background_sea.jpg)";
  } else {
    imgCard.style.backgroundImage = "url(./img/background_cloud.jpg)";
  }

  imgCard.style.backgroundSize = "cover";

  let nameCard = document.createElement("h3");
  nameCard.innerText = pokeName;

  let descriptionCard = document.createElement("p");
  descriptionCard.classList.add("descriptionCard");
  descriptionCard.innerText = pokeDescription;

  let power = document.createElement("p");
  power.classList.add("power");
  power.innerText = "$ " + pokeValue;

  let tipe = document.createElement("p");
  tipe.classList.add("type");

  tipe.innerText = pokeTipe;

  let buttonCard = document.createElement("button");
  buttonCard.classList.add("escolher");
  buttonCard.id = pokeId;
  buttonCard.innerHTML = `<img id="${pokeId}" src="./img/botao.png" alt="botão pegar"/>`;

  let textCard = document.createElement("div");
  textCard.classList.add("textCard");
  textCard.append(tipe, power);

  card.appendChild(imgCard);
  card.appendChild(textCard);
  card.appendChild(nameCard);
  card.appendChild(descriptionCard);
  card.appendChild(buttonCard);

  pokeList.appendChild(card);
}

let botoesPokemon = document.getElementsByClassName("escolher");

for (let i = 0; i < botoesPokemon.length; i++) {
  let botao = botoesPokemon[i];

  botao.addEventListener("click", function (event) {
    let elemento = event.target;
    let idElemento = elemento.id;
    let id = idElemento;
    let pokemon = procuraPokemon(id);

    if (!pokemon) {
      alert("Pokemon não listado.");
    } else {
      inserePokemon(pokemon);
    }
  });
}

function procuraPokemon(id) {
  for (let index = 0; index < pokemons.length; index++) {
    let pokemon = pokemons[index];
    if (pokemon.id == id) {
      return pokemon;
    }
  }
  return false;
}

let count = 0;
let total = 0;
function inserePokemon(pokemon) {
  count++;
  document.querySelector("#quantidade").innerHTML = count;
  total += pokemon.value;
  document.querySelector("#total").innerText = total;

  let listaEscolhidos = document.getElementById("listaEscolhidos");

  let li = document.createElement("li");
  li.classList.add("selectedCard");
  let img = document.createElement("img");
  let h3 = document.createElement("h3");
  let p = document.createElement("p");
  let button = document.createElement("button");
  let span = document.createElement("span");

  img.src = pokemon.img;
  img.alt = pokemon.nameItem;

  h3.innerText = pokemon.nameItem;

  button.innerHTML = "Remover";

  p.innerText = "$ " + pokemon.value;

  span.append(h3, p, button);

  button.addEventListener("click", function (event) {
    let li = event.path[2];
    li.remove();

    count--;
    document.querySelector("#quantidade").innerHTML = count;

    total -= pokemon.value;
    document.querySelector("#total").innerText = total;
  });

  li.appendChild(img);
  li.appendChild(span);

  listaEscolhidos.appendChild(li);
}

function search_poke() {
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("pokeCard");

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "list-item";
    }
  }
}
