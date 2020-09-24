
let nome = prompt("Olá, Qual o seu nome?");
console.log(nome);

let respostaUm
var respostaDois
let respostaTres
let respostaOne
let respostaTwo
let respostaThree
let tipoDeProva

function inicioNome() {
    let inicio = prompt("Deseja realizar a prova agora? Responda o número correspondente a sua resposta: \n 1. Sim \n 2. Não");
    if (inicio == 2) {
        return alert("Obrigada, Até a próxima")
    } if (inicio == 1) {
        tipoDeProva = prompt("Você deseja realizar qual prova? Responda o número correspondente a sua resposta: \n 1. Prova de Geografia \n 2. Prova de Matemática")
    }


    if (tipoDeProva == 2) {
        respostaOne = primeiraPerguntaMat()
        respostaTwo = segundaPerguntaMat()
        respostaThree = terceiraPerguntaMat()

        document.getElementById("titulo").innerText = "Olá " + nome + ", bem vinda a prova de matemática."

        document.getElementById("resultados").innerText = "Resultados"

        document.getElementById("corretas").innerText = "Respostas corretas"

        function rights() {
            if (respostaOne == true) {
                document.getElementById("um").innerText = "Resposta 1"
            }
            if (respostaTwo == true) {
                document.getElementById("dois").innerText = "Resposta 2"
            }
            if (respostaThree == true) {
                document.getElementById("três").innerText = "Resposta 3"
            }
        }

        rights()

        document.getElementById("erradas").innerText = "Respostas erradas"

        function wrongs() {
            if (respostaOne == false) {
                document.getElementById("one").innerText = "Resposta 1"
            }
            if (respostaTwo == false) {
                document.getElementById("two").innerText = "Resposta 2"
            }
            if (respostaThree == false) {
                document.getElementById("three").innerText = "Resposta 3"
            }
        }

        wrongs()

        document.getElementById("finalizacao").innerText = "Parabéns, você finalizou a prova."
    }

    function primeiraPerguntaMat() {
        let perguntaOne = prompt("Qual é o resultado da soma 30+17? \n 1. 37 \n 2. 40 \n 3. 57 \n 4. 47");
        if (perguntaOne == 4) {
            return true
        } return false
    }

    function segundaPerguntaMat() {
        let perguntaTwo = prompt("Qual símbolo da operação multiplicação? \n 1. - \n 2. + \n 3. % \n 4. x");
        if (perguntaTwo == 4) {
            return true
        } return false
    }

    function terceiraPerguntaMat() {
        let perguntaThree = prompt("Quanto é 30% de 200? \n 1. 30  \n 2. 60 \n 3. 100 \n 4. 120");
        if (perguntaThree == 2) {
            return true
        } return false
    }



    if (tipoDeProva == 1) {
        respostaUm = primeiraPergunta()
        respostaDois = segundaPergunta()
        respostaTres = terceiraPergunta()

        document.getElementById("titulo").innerText = "Olá " + nome + ", bem vinda a prova de geografia."

        document.getElementById("resultados").innerText = "Resultados"

        document.getElementById("corretas").innerText = "Respostas corretas"

        function corretas() {
            if (respostaUm == true) {
                document.getElementById("um").innerText = "Resposta 1"
            }
            if (respostaDois == true) {
                document.getElementById("dois").innerText = "Resposta 2"
            }
            if (respostaTres == true) {
                document.getElementById("três").innerText = "Resposta 3"
            }
        }

        corretas()

        document.getElementById("erradas").innerText = "Respostas erradas"

        function erradas() {
            if (respostaUm == false) {
                document.getElementById("one").innerText = "Resposta 1"
            }
            if (respostaDois == false) {
                document.getElementById("two").innerText = "Resposta 2"
            }
            if (respostaTres == false) {
                document.getElementById("three").innerText = "Resposta 3"
            }
        }

        erradas()

        document.getElementById("finalizacao").innerText = "Parabéns, você finalizou a prova."
    }
}

function primeiraPergunta() {
    let perguntaUm = prompt("Qual desses estados fica no Nordeste? \n 1. Pará \n 2. Mato Grosso \n 3. Paraná \n 4. Piauí");
    if (perguntaUm == 4) {
        return true
    } return false
}

function segundaPergunta() {
    let perguntaDois = prompt("Qual destes escossistemas é exclusivamente Brasileiro? \n 1. Mata Atlântica \n 2. Amazônia \n 3. Pantanal \n 4. Caatinga");
    if (perguntaDois == 4) {
        return true
    } return false
}

function terceiraPergunta() {
    let perguntaTres = prompt("Quantos anos dura um mandato presidencial? \n 1. Dois anos \n 2. Quatro anos \n 3. Seis anos \n 4. Oito anos");
    if (perguntaTres == 2) {
        return true
    } return false

}

inicioNome()