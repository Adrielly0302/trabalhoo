const perguntas = [
    {
        pergunta: "Qual é o maior país do mundo em extensão territorial?",
        opcoes: [
            "Canadá",
            "China",
            "Rússia",
            "Estados Unidos"
        ],
        resposta: 2 // índice da resposta correta
    },
    {
        pergunta: "Qual é o rio mais extenso do mundo?",
        opcoes: [
            "Rio Amazonas",
            "Rio Nilo",
            "Rio Yangtzé",
            "Rio Mississipi"
        ],
        resposta: 0
    },
    {
        pergunta: "Qual é o continente com o maior número de países?",
        opcoes: [
            "Ásia",
            "África",
            "Europa",
            "América do Sul"
        ],
        resposta: 1
    },
    {
        pergunta: "O Brasil é de que continente?",
        opcoes: [
            "Europa",
            "America do norte",
            "America do sul",
            "Asia"
        ],
        resposta: 2
    },
    {
        pergunta: "Qual oceano banha a costa leste do Brasil?",
        opcoes: [
            "Oceano Índico",
            "Oceano Pacífico",
            "Oceano Atlântico",
            "Oceano Ártico"
        ],
        resposta: 2
    },
    {
        pergunta: "Qual é o deserto mais seco do mundo?",
        opcoes: [
            "Deserto do Saara",
            "Deserto de Gobi",
            "Deserto de Atacama",
            "Deserto da Namíbia"
        ],
        resposta: 2
    }
    
];

// Função para gerar os flashcards
function criarFlashcards() {
    const container = document.getElementById("container");

    perguntas.forEach((pergunta, index) => {
        const cartao = document.createElement("article");
        cartao.classList.add("cartao");

        cartao.innerHTML = `
            <div class="cartao__conteudo">
                <h3>Questão ${index + 1}</h3>
                <div class="cartao__conteudo__pergunta">
                    <p>${pergunta.pergunta}</p>
                </div>
                <div class="cartao__conteudo__opcoes">
                    ${pergunta.opcoes.map((opcao, i) => `
                        <label>
                            <input type="radio" name="pergunta${index}" value="${i}">
                            ${opcao}
                        </label>
                    `).join('')}
                </div>
                <button onclick="verificarResposta(${index})">Responder</button>
                <div class="resultado" id="resultado${index}" style="display:none;"></div>
            </div>
        `;
        
        container.appendChild(cartao);
    });
}

// Função para verificar a resposta
function verificarResposta(index) {
    const opcoes = document.getElementsByName(`pergunta${index}`);
    const resultadoDiv = document.getElementById(`resultado${index}`);
    let respostaSelecionada;

    opcoes.forEach((opcao, i) => {
        if (opcao.checked) {
            respostaSelecionada = i;
        }
    });

    if (respostaSelecionada === undefined) {
        resultadoDiv.innerHTML = "Por favor, selecione uma opção.";
    } else if (respostaSelecionada === perguntas[index].resposta) {
        resultadoDiv.innerHTML = "Resposta correta!";
    } else {
        resultadoDiv.innerHTML = "Resposta errada! A resposta correta é: " + perguntas[index].opcoes[perguntas[index].resposta];
    }

    resultadoDiv.style.display = "block";
}

// Chama a função para criar os flashcards ao carregar a página
window.onload = criarFlashcards;
