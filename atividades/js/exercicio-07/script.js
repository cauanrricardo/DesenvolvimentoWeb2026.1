const container = document.getElementById("card-container");
const imgPadrao = "https://via.placeholder.com/220x300?text=Sem+Foto";
const url = "https://hp-api.onrender.com/api/characters/staff";

async function carregarPersonagens() {
  try {
    const resposta = await fetch(url);

    if (!resposta.ok) {
      throw new Error(`Erro na requisição: ${resposta.status}`);
    }

    const personagens = await resposta.json();

    personagens.forEach((personagem) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const imagem = document.createElement("img");
      imagem.src = personagem.image ? personagem.image : imgPadrao;

      const nome = document.createElement("h2");
      nome.textContent = personagem.name;

      const casa = document.createElement("p");
      casa.textContent = personagem.house
        ? personagem.house
        : "Casa desconhecida";

      card.appendChild(imagem);
      card.appendChild(nome);
      card.appendChild(casa);

      container.appendChild(card);
    });
  } catch (erro) {
    console.error(erro);
  }
}

carregarPersonagens();
