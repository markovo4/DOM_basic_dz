(function () {
  const buttonQuestion = document.querySelector('[data-question]');
  const buttonAnswer = document.querySelector('[data-answer]');
  const buttonSubmit = document.querySelector('[data-survey]');
  const ulQuestion = document.querySelector('[data-question-list]');
  const form = document.querySelector('.form');

  form.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target === buttonQuestion) {
      const ulAnswer = document.createElement('ol');
      ulAnswer.setAttribute('answer', '2');
      const inputQuestion = document.querySelector('[name="surveyQuestion"]');
      const li = document.createElement('li');
      li.className = 'question-item';

      if (inputQuestion.value.trim() !== '') {
        li.innerHTML = inputQuestion.value;
        ulQuestion.prepend(li);
        li.append(ulAnswer);
      }
    } else if (event.target === buttonAnswer) {
      const li = document.createElement('li');
      li.className = 'answer-item';
      const inputAnswer = document.querySelector('[name="surveyAnswer"]');
      if (inputAnswer.value.trim() !== '') {
        li.innerHTML = inputAnswer.value;
        ulQuestion.querySelector('[answer]').append(li);
      } else if (event.target === buttonSubmit) {
        event.preventDefault();
      }
    }
  });
}());
