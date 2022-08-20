import Notiflix from 'notiflix';

const formRef = document.querySelector('.form');
formRef.addEventListener('click', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  let delay = Number(formRef.elements.delay.value);
  let position = 1;
  const amount = Number(formRef.elements.amount.value);

  if (e.target.type === 'submit') {
    promiseRepeater(position, delay, amount);
  }
}

function promiseRepeater(position, delay, amount) {
  while (position <= amount) {
    createPromise(position, delay).then(promiseResolve).catch(promiseReject);
    delay += Number(formRef.elements.step.value);
    position += 1;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function promiseResolve({ position, delay }) {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay} ms`);
}

function promiseReject({ position, delay }) {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay} ms`);
}
