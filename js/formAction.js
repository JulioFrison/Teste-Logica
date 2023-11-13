function fillAnswer() {
    document.getElementById('A').value = '2';
    document.getElementById('B').value = '1';
    document.getElementById('C').value = '9';
    document.getElementById('D').value = '7';
    document.getElementById('E').value = '8';
}

function validateForm() {
    var A = document.getElementById('A').value;
    var B = document.getElementById('B').value;
    var C = document.getElementById('C').value;
    var D = document.getElementById('D').value;
    var E = document.getElementById('E').value;

    // Validar se os campos são preenchidos
    if (A === '' || B === '' || C === '' || D === '' || E === '') {
        alert('Por favor, preencha todos os campos do formulário.');
        return false;
    }

    // Validar se os campos contêm apenas números
    if (!isNumeric(A) || !isNumeric(B) || !isNumeric(C) || !isNumeric(D) || !isNumeric(E)) {
        alert('Os campos devem conter apenas números.');
        return false;
    }

    // Verificar automaticamente se a resposta está correta
    checkAnswer(A, B, C, D, E);

    // Se a validação passar, os dados serão enviados via GET
    return true;
}

function isNumeric(value) {
    return /^-?\d+$/.test(value);
}

function checkAnswer(A, B, C, D, E) {
    // Resposta correta do desafio
    var correctAnswer = { A: '2', B: '1', C: '9', D: '7', E: '8'};

    // Verificar se a resposta do usuário é correta
    if (A === correctAnswer.A && B === correctAnswer.B && C === correctAnswer.C && D === correctAnswer.D && E === correctAnswer.E) {
        alert('Parabéns! Você acertou o desafio.');
    } else {
        alert('Resposta incorreta. Tente novamente.');
    }
}
