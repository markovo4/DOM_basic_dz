(function () {
  const buttonQuestion = document.querySelector('[data-question]');
  const buttonAnswer = document.querySelector('[data-answer]');
  const buttonSubmit = document.querySelector('[data-survey]');
  const inputTitle = document.querySelector('[name="surveyTitle"]');
  const form = document.querySelector('.form');

  const surveyQuestions = [];
  let index = 0;

  const surveyAnswers = [];
  let indexAnswer = 0;

  const checkForAnswers = function () {
    if (index > 0) {
      let count = 0;
      for (let i = 0; i < surveyAnswers.length; i += 1) {
        if (surveyAnswers[i].questionId === index - 1) count += 1;
      }
      return !(count < 2);
    }
    return true;
  };

  form.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target === buttonQuestion) {
      if (!checkForAnswers()) {
        alert('Please add another answer');
        return;
      }
      form.insertAdjacentHTML('beforeend', `
            <label>
                <span>Question: </span>
                <input class="form-control mb-2" name="surveyQuestion" placeholder="Survey Question" type="text" data-id-q="${index}">
            </label>`);

      const newQuestion = {
        id: index,
      };
      surveyQuestions.push(newQuestion);
      index += 1;
    }

    if (event.target === buttonAnswer) {
      form.insertAdjacentHTML('beforeend', `
            <label class="answer">
                <span>Answer: </span>
                <input class="form-control mb-2" name="surveyAnswer" placeholder="Survey Answer" type="text" data-id-a="${indexAnswer}">
            </label>`);

      const newAnswer = {
        id: indexAnswer,
        questionId: index - 1,
      };
      surveyAnswers.push(newAnswer);
      indexAnswer += 1;
    }

    if (event.target === buttonSubmit) {
      if (!checkForAnswers()) {
        alert('Please add another answer!');
        return;
      }

      if (inputTitle.value.trim() === '') {
        alert('Please fill in the title field!');
        return;
      }

      for (let i = 0; i < index; i += 1) {
        if (form.querySelector(`[data-id-q="${i}"]`).value.trim() !== '') {
          surveyQuestions[i].text = form.querySelector(`[data-id-q="${i}"]`).value;
        } else {
          alert('Please fill all the fields!');
          return;
        }
      }
      for (let i = 0; i < indexAnswer; i += 1) {
        if (form.querySelector(`[data-id-a="${i}"]`).value.trim() !== '') {
          surveyAnswers[i].text = form.querySelector(`[data-id-a="${i}"]`).value;
        } else {
          alert('Please fill all the fields!');
          return;
        }
      }

      form.innerHTML = '';

      form.insertAdjacentHTML('beforeend', `
  <h1>${inputTitle.value}</h1>
  <ol>
    ${surveyQuestions.map((q) => {
    const answersForQuestion = surveyAnswers.filter((a) => a.questionId === q.id);
    if (answersForQuestion.length > 0) {
      return `
          <li>${q.text}
            <ul>
              ${answersForQuestion.map((a) => `<li>${a.text}</li>`).join('')}
            </ul>
          </li>`;
    }
    return `<li>${q.text}</li>`;
  }).join('')}
  </ol>`);
    }
  });
}());
