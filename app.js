const correctAnswers = ['A','D','C','A','D','C','A','A','D','B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const span = document.querySelector('span');
const section = document.querySelector('section');

form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value];

  // check the answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]){
      score += 10;
      section.setAttribute('class', 'bg-custom')
      if (score >= 40) {
          span.classList.remove('text-primary');
          span.classList.remove('text-danger');
          span.classList.add('text-success');
      } 
       else {
           span.classList.remove('text-primary');
           span.classList.remove('text-success');
           span.classList.add('text-danger');
      }
    }
  });

  // show the result
  scrollTo(0, 0);
  result.classList.remove('d-none');

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`;
    if(output === score){
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);

});