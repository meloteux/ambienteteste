// Função para selecionar uma frase de hacker aleatória
function selectRandomPhrase() {
    var phrases = [
        "Na dúvida, reinicie.",
        "Nunca confie em um usuário root sorridente.",
        "A senha mais segura é aquela que você não sabe.",
        "Se não está quebrado, não conserte.",
        "Apenas três tipos de pessoas: as que sabem contar e as que não sabem.",
        "Parece estar funcionando? Deixe-me consertar isso.",
        "Na internet, ninguém sabe que você é um cachorro.",
        "Hackear é mais arte do que ciência. É o que separa o bom do ótimo.",
        "Se não puder ser aberto, não deve ser feito.",
        "A verdadeira essência de ser hacker está em resolver problemas de forma criativa."
    ];

    var randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
}

// Função para exibir a frase selecionada
function displayRandomPhrase() {
    var phraseContainer = document.getElementById('randomPhrase');
    phraseContainer.innerText = selectRandomPhrase();
}

// Exibe uma frase de hacker ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    displayRandomPhrase();
});
      