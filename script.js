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

// Função para obter a hora atual formatada (HH:MM:SS)
function getCurrentTime() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
    return hours + ':' + minutes + ':' + seconds;
}

// Função para obter a data atual formatada (DD/MM/AAAA)
function getCurrentDate() {
    var now = new Date();
    var day = now.getDate().toString().padStart(2, '0');
    var month = (now.getMonth() + 1).toString().padStart(2, '0');
    var year = now.getFullYear();
    return day + '/' + month + '/' + year;
}

// Função para obter o país de origem do usuário
function getUserCountry() {
    // Este exemplo retorna um país fictício (substitua pela lógica real)
    return 'Brasil';
}

// Função para exibir a hora, a data e o país de origem
function displayDateTimeAndCountry() {
    var timeContainer = document.getElementById('currentTime');
    var dateContainer = document.getElementById('currentDate');
    var countryContainer = document.getElementById('userCountry');

    // Exibir hora e data
    timeContainer.textContent = 'Hora atual: ' + getCurrentTime();
    dateContainer.textContent = 'Data atual: ' + getCurrentDate();

    // Exibir país de origem
    countryContainer.textContent = 'País de origem: ' + getUserCountry();
}

// Exibe a frase de hacker ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    displayRandomPhrase();
    displayDateTimeAndCountry();
});
