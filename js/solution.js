(function () {
  const buttonQuestion = document.querySelector('[data-question]');
  const buttonAnswer = document.querySelector('[data-answer]');
  const buttonSubmit = document.querySelector('[data-survey]');
  const inputTitle = document.querySelector('[name="surveyTitle"]');
  const form = document.querySelector('.form');

  const surveyQuestions = [];

  form.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target === buttonQuestion) {
      form.insertAdjacentHTML('beforeend', `        
        <label>
            <span>Question: </span>
            <input name="surveyQuestion" placeholder="Survey Question" type="text">
        </label>`);
    } else if (event.target === buttonAnswer) {
      form.insertAdjacentHTML('beforeend', `        
        <label class="answer">
            <span>Answer: </span>
            <input name="surveyAnswer" placeholder="Survey Answer" type="text">
        </label>`);
    } else if (event.target === buttonSubmit) {
      const questions = form.querySelectorAll('[name="surveyQuestion"]');
      const answers = form.querySelectorAll('[name="surveyAnswer"]');
      if (questions.length < 2 || answers.length < 2) {
        alert('Please add at least two questions and answers.');
      }
      const surveyTitle = inputTitle.value.trim();
      if (!surveyTitle) {
        alert('Please enter a survey title.');
      }
      surveyQuestions.length = 0;
      questions.forEach((question, index) => {
        const questionText = question.value.trim();
        const answerText = answers[index].value.trim();
        if (questionText && answerText) {
          surveyQuestions.push({ question: questionText, answer: answerText });
        }
      });
      form.innerHTML = '';

      form.insertAdjacentHTML('beforeend', `
        <h1>${inputTitle.value}</h1>
        <ol>
          ${surveyQuestions.map((q) => `<li>${q.question}: ${q.answer}</li>`).join('')}
        </ol>`);
    }
  });
}());
