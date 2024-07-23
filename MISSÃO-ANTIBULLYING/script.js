const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Enquanto você vê um colega sendo intimidado na escola, você:",
        alternativas: [
            {
                texto: "a) Ignora e continua seu caminho, não é da sua conta.",
                afirmacao: "Tomou uma decisão errada a respeito de intimidação,"
            },
            {
                texto: "b)Intervém e chama a atenção do agressor, oferecendo apoio ao colega.",
                afirmacao: "Tomou uma decisão acertiva a respeito de intimidação,"

            }



        ]
    },
    {
        enunciado: "Se alguém está compartilhando rumores sobre um colega, você decide:",
        alternativas: [
            {
                texto: "a) Espalhar os rumores para não parecer desatualizado.",
                afirmacao: " acabou errando na questão de rumores,"
            },
            {
                texto: "b) Não contribuir para a propagação dos rumores e confrontar quem está espalhando.",
                afirmacao: " acertou na questão de rumores,"

            }



        ]
    },
    {
        enunciado: "Ao ver um colega sendo excluído de um grupo, você escolhe:",
        alternativas: [
            {
                texto: "a) Se juntar aos outros para não ser excluído também.",
                afirmacao: " não ajudou o seu colega a se sentir incluido,"
            },
            {
                texto: "b) Convidar o colega para se juntar a vocês e fazer com que se sinta incluído.",
                afirmacao: " ajudou o seu colega a se sentir incluido,"

            }



        ]
    },
    {
        enunciado: "Se alguém está sendo ridicularizado por suas roupas, você opta por:",
        alternativas: [
            {
                texto: "a) Rir junto para não ser o próximo alvo.",
                afirmacao: " ridicularizou quem estava sendo atacado,"
            },
            {
                texto: "b) Mostrar apoio ao colega e ignorar quem está fazendo os comentários.",
                afirmacao: " ajudou quem estava sendo atacado,"

            }



        ]
    },
    {
        enunciado: "Quando confrontado por um amigo que está sendo um agressor, você decide:",
        alternativas: [
            {
                texto: "a) Concordar com o amigo para evitar conflitos.",
                afirmacao: "e tomou a decisão errada em clarear as ideias do seu amigo."
            },
            {
                texto: "b) Explicar para o amigo por que o bullying é prejudicial e tentar ajudá-lo a mudar seu comportamento.",
                afirmacao: "e ajudou um amigo a entender o porquê do bullying ser tão prejudicial."

            }



        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
            
        caixaAlternativas.appendChild(botaoAlternativas);



    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
