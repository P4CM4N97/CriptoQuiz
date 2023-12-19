const questions = [
    {
        question: "¿Qué es Bitcoin?",
        answers: [
            { text: "Una mondea digital que puede ser enviada entre pares sin la necesidad de un intermediario", correct: true },
            { text: "Un esquema Ponzi", correct: false },
            { text: "Una forma de digitalizar dolares", correct: false },
            
        ],
    },
    {
        question: "¿Qué es blockchain?",
        answers: [
            { text: "Un tipo de base de datos en el que se almacenan inmediatamente transacciones monetarias", correct: false },
            { text: "Un registro centralizado de transacciones", correct: false },
            { text: "Una red de nodos que trabajanen conjunto para llevar un registro de las transacciones que se hagan", correct: true },
        ],
    },
    {
        question: "¿Qué es un mecanismo de consenso?",
        answers: [
            { text: "Un sistema de votación para elegir nuevos gobernantes", correct: false },
            { text: "Un tipo de algoritmo que sirve para cifrar información", correct: false},
            { text: "El método por el cual los nodos se ponen de acuerdo para verificar la legitimidad de las transacciones", correct: true },
        ],
    },
    {
        question: "¿Qué es una cartera?",
        answers: [
            { text: "Un intermediario que almacena tu dinero y decide qué transacciones aprobar", correct: false },
            { text: "Un medio con el que se almacenan tokens dentro de las blockchains", correct: true},
            { text: "Una red que permite enviar dinero digital", correct: false },
        ],
    },
    {
        question: "¿Quién es Satoshi Nakamoto?",
        answers: [
            { text: "El fundador de blockchain.com", correct: false },
            { text: "Las personas que crearon la fundación Web3.", correct: false},
            { text: "La persona o grupo de personas que idearon, propusieron e implementaron Bitcoin", correct: true },
        ],
    },
    {
        question: "¿Quién es Vitalik Buterin?",
        answers: [
            { text: "La persona o grupo de personas que idearon, propusieron e implementaron Bitcoin", correct: false },
            { text: "El creador y uno de los fundadores de Ethereum", correct: true},
            { text: "El creador y uno de los fundadores de Polkadot", correct: false },
        ],
    },
    {
        question: "¿Qué es Ethereum?",
        answers: [
            { text: "Un tipo de algoritmo que sirve para cifrar información", correct: false },
            { text: "Una blockchain que toma las bases de bitcoin pero incluye mejoras para automatizar funciones por medio de contratos inteligentes", correct: true },
            { text: "Una blockchain que fue construida sobre la red de Bitcoin y sirve para escalar la cantidad de transacciones de la red", correct: false },
        ],
    },
    {
        question: "¿Qué son los mineros?",
        answers: [
            { text: "Grupos de personas con equipos dedicados a descifrar los acertijos criptográficos propuestos por PoW.", correct: true },
            { text: "Un grupo de personas que se encargan de velar por el desarrollo de nuevas tecnologías blockchain", correct: false },
            { text: "Una entidad que pone tokens en staking para asegurar que las transacciones que apruebe son legítimas.", correct: false },
        ],
    },
    {
        question: "¿Qué es un bloque?",
        answers: [
            { text: "Es un conjunto de transacciones validadas que se añade a la blockchain", correct: true },
            { text: "Una red de nodos que trabajan en conjunto para llevar un registro de las transacciones que se hagan.", correct: false },
            { text: "Es un software que sirve como base para construir más software sobre él", correct: false },
        ],
    },
    {
        question: "¿Qué es la inflación?",
        answers: [
            { text: "Es el porcentaje en el que se devalúa el precio de una moneda.", correct: true },
            { text: "Es la cantidad de dinero que un gobierno imprime en un año", correct: false },
            { text: "Es un esquema ponzi", correct: false },
        ],
    },
    {
        question: "¿Qué es una moneda?",
        answers: [
            { text: "Es un dispositivo de metal que sirve para comprar cualquier cosa", correct: false },
            { text: "Es un método que sirve para facilitar intercambios de bienes", correct: true },
            { text: "Es una red de confianza en la que las personas depositan sus bienes", correct: false },
        ],
    },
    {
        question: "¿Qué es Proof of Work (PoW)?",
        answers: [
            { text: "Un tipo de mecanismo de consenso en el que se bloquea una cantidad de tokens para asegurar que las transacciones validadas serán legítimas", correct: false },
            { text: "Una red de nodos que trabajan en conjunto para llevar un registro de las transacciones que se hagan", correct: false },
            { text: "Es el mecanismo de consenso que da acertijos matemáticos computacionalmente intensos que deben ser resueltos para agregar un bloque a la blockchain.", correct: true },
        ],
    },
    {
        question: "¿Cuáles son las ventajas de la centralización?",
        answers: [
            { text: "Menos fricción al tomar decisiones, mejor experiencia de usuario, soporte técnico", correct: true },
            { text: "No tiene ventajas", correct: false },
            { text: "No tener el control de tus fondos, dependencia en terceros para que se acepten o validen transacciones, exclusión de múltiples grupos de sus servicios", correct: false },
        ],
    },
    {
        question: "¿Cuáles son las desventajas de la centralización?",
        answers: [
            { text: "Menos fricción al tomar decisiones, mejor experiencia de usuario, soporte técnico", correct: false},
            { text: "No tiene desventajas", correct: false },
            { text: "No tener el control de tus fondos, dependencia en terceros para que se acepten o validen transacciones, exclusión de múltiples grupos de sus servicios", correct: true },
        ],
    },
    {
        question: "¿Qué es el gas?",
        answers: [
            { text: "Un estado de la materia", correct: false},
            { text: "Una comisión que se paga a los custodios de tu cartera", correct: false },
            { text: "Una comisión que se paga por realizar transacciones en una blockchain.", correct: true },
        ],
    },
    {
        question: "¿Qué es un satoshi?",
        answers: [
            { text: "La unidad mínima en la que un Bitcoin puede ser dividido.", correct: true },
            { text: "Una raza de perros que se creía que Satoshi Nakamoto tenía", correct: false },
            { text: "La unidad más grande que se puede comprar en Bitcoin", correct: false },
        ],
    },
    {
        question: "¿Cuál es el trilema blockchain?",
        answers: [
            { text: "Es un modelo mental que sirve para ejemplificar la dificultad de una blockchain perfecta: se deben escocger dos entre tres posibilidades, escalabilidad, seguridad y descentralización", correct: true },
            { text: "Es un modelo mental que sirve para ejemplificar porqué la tecnología blockchain es obsoleta", correct: false },
            { text: "Son tres problemas que no se aún no se han podido resolver al desarrollar tecnologías blockchain", correct: false },
        ],
    },
    {
        question: "¿Qué es una criptomoneda?",
        answers: [
            { text: "Es una representación digital del dinero que toma su valor porque se respalda en cuentas de banco", correct: false },
            { text: "Es un tipo de moneda que basa su funcionamiento en tarjetas de crédito", correct: false },
            { text: "Es una moneda digital cuyas transacciones son registradas en la blockchain", correct: true },
        ],
    },
    {
        question: "¿Qué es el dinero?",
        answers: [
            { text: "Cualquier instrumento que la gente decida que sea un medio valioso de intercambio", correct: true },
            { text: "Un tipo de sistema económico en el que todos comparten sus posesiones", correct: false },
            { text: "Un tipo de instrumento financiero para especular y obtener retornos", correct: false },
        ],
    },
    {
        question: "¿Qué es una inversión?",
        answers: [
            { text: "La acción de realizar un préstamo y cobrar intereses sobre la cantidad inicial", correct: false },
            { text: "La acción de cambiar algo por su parte contraria", correct: false },
            { text: "La acción de comprar algo con la esperanza de obtener rendimientos sobre su precio original", correct: true },
        ],
    },
    {
        question: "¿Qué es un futuro?",
        answers: [
            { text: "Es un tipo de instrumento financiero que especula que el precio de un bien aumente en el futuro", correct: false },
            { text: "Es un tipo de instrumento financiero que especula que el precio de un bien disminuya en el futuro", correct: false },
            { text: "Es un tipo de instrumento financiero en el que se decide la compra y venta de un bien a un precio determinado en el futuro.", correct: true },
        ],
    },
    {
        question: "¿Qué es un long?",
        answers: [
            { text: "Es un tipo de instrumento financiero en el que se decide la compra y venta de un bien a un precio determinado en el futuro.", correct: false },
            { text: "Es un tipo de instrumento financiero que especula que el precio de un bien aumente en el futuro", correct: true },
            { text: "Es un tipo de instrumento financiero que especula que el precio de un bien disminuya en el futuro", correct: false },
        ],
    },
    {
        question: "¿Qué es un short?",
        answers: [
            { text: "Es un tipo de instrumento financiero que especula que el precio de un bien aumente en el futuro", correct: false },
            { text: "Es un tipo de instrumento financiero que especula que el precio de un bien disminuya en el futuro", correct: true },
            { text: "Es un tipo de instrumento financiero en el que se decide la compra y venta de un bien a un precio determinado en el futuro.", correct: false },
        ],
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    answerButtons.innerHTML = '';

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++; 
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
    });

    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Sacaste ${score} de ${questions.length}`;
    nextButton.innerHTML = "Repetir Quiz";
    nextButton.style.display = "block"
}

function handleNextQuestion(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextQuestion();
    } else {
        startQuiz();
    }
});



startQuiz();
