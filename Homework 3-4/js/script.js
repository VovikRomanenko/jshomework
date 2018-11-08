//Первый вариант

var test = {
  tittle: function() {
    var tittle = document.createElement('h2');
    tittle.innerHTML = 'Тест по какой-то теме'
    return tittle;
  },
  arrFunc: [
     function titlles(n) {
      var blockTittle = document.createElement('h3');
      blockTittle.innerHTML = n + '. ' + 'Вопрос №' + n;
      return blockTittle;
    },
    function answers(n) {
      var blockAnswers = document.createElement('label');
      blockAnswers.innerHTML = 'Вариант ответа №' + n ;
      return blockAnswers;
    }
  ]
}

var space = document.querySelector('.main_block');

space.appendChild(test.tittle());

for (var i = 0; i < 3; i++) {
  space.appendChild(test.arrFunc[0](i+1));
  for (var j = 0; j < 3; j++) {
      var checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      space.appendChild(checkbox);
      space.appendChild(test.arrFunc[1](j+1));
      document.write('<br/>');
  }
}

var button = document.createElement('input');
button.type = 'submit';
button.innerHTML = 'Отправить';
space.appendChild(button);

//Второй вариант

var testTwo = {

    title: 'Тест по какой-то теме(в объекте только текст)',
    questions: [
      {
        title: 'Вопрос №1',
        answers: ['Вариант овтета 1', 'Вариант овтета 2', 'Вариант овтета 3']
      },
      {
        title: 'Вопрос №2',
        answers: ['Вариант овтета 1', 'Вариант овтета 2', 'Вариант овтета 3', 'Вариант овтета 4']
      },
      {
        title: 'Вопрос №3',
        answers: ['Вариант овтета 1', 'Вариант овтета 2']
      }
    ]

};

var titleTest = document.createElement('h2');

titleTest.innerHTML = testTwo.title;
space.appendChild(titleTest);


function Title(b){
      var a = document.createElement('h3');
      document.body.appendChild(a);
      a.innerHTML = b;
  };

function Variable(b){
      var x = document.createElement('label');
      var y = document.createElement('input');
      y.type = "checkbox";
      document.body.appendChild(y);
      document.body.appendChild(x);
      x.innerHTML = b;
      document.write('<br/>');
  };

  for(var i=0; i<testTwo.questions.length; i++){
        Title(testTwo.questions[i].title);
        for (var j=0; j<testTwo.questions[i].answers.length; j++){
          Variable(testTwo.questions[i].answers[j]);
        };
      };

var buttonTwo = document.createElement('input');
buttonTwo.type = 'submit';
buttonTwo.innerHTML = 'Отправить';
space.appendChild(buttonTwo);
