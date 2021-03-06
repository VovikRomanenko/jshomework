var subtitle = "Тест по программированию";
var questions = [{
    text: "Вопрос №1",
    answers: ["Ответ 1",
      "Ответ 2",
      "Ответ 3"
    ],
    correctAnswer: 0
  },
  {
    text: "Вопрос №2",
    answers: ["Ответ 1",
      "Ответ 2",
      "Ответ 3"
    ],
    correctAnswer: 1
  },
  {
    text: "Вопрос №3",
    answers: ["Ответ 1",
      "Ответ 2",
      "Ответ 3"
    ],
    correctAnswer: 2
  }
];
var correct = [];
for (var i = 0; i < questions.length; i++) {
  correct[i] = questions[i].correctAnswer;
};
var trust = [{}, {}, {}];
for (var i = 0; i < questions.length; i++) {
  trust[i].ask = questions[i].text;
  trust[i].answer = questions[i].answers[correct[i]];
};
console.log('true', JSON.stringify(trust));
localStorage.setItem('true', JSON.stringify(trust));
console.log(localStorage.getItem('true'))
var yourAns = new Array;
var score = 0;

function Engine(question, answer) {
  yourAns[question] = answer;
};

function Score() {
  var answerText = "Результаты:\n";
  for (var i = 0; i < yourAns.length; ++i) {
    var num = i + 1;
    answerText = answerText + "\n    Вопрос №" + num + "";
    if (yourAns[i] != questions[i].correctAnswer) {
      answerText = answerText + "\n    Правильный ответ: " +
        questions[i].answers[questions[i].correctAnswer] + "\n";
    } else {
      answerText = answerText + ": Верно! \n";
      ++score;
    }
  };

  answerText = answerText + "\nВсего правильных ответов: " + score + "\n";

  alert(answerText);
  yourAns = [];
  score = 0;
  clearForm("quiz");
};

function clearForm(name) {
  var f = document.forms[name];
  for (var i = 0; i < f.elements.length; ++i) {
    if (f.elements[i].checked)
      f.elements[i].checked = false;
  };
};

for (var q = 0; q < questions.length; ++q) {
  var question = questions[q];
  var idx = 1 + q;
  document.writeln('<span class="quest">' + question.text + '</span><br/>');
  for (var i in question.answers) {
    document.writeln('<input type=radio name="q' + idx + '" value="' + i +
      '" onClick="Engine(' + q + ', this.value)">' + question.answers[i] + '<br/>');
  }
};
