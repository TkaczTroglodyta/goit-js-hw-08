// import throttle from 'lodash.throttle';

// const STORAGE_KEY = 'feedback-form-state';

// let dataForm = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

// const onDataInput = e => {
//   dataForm = { email: email.value, message: message.value };
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
// };

// const onFormSubmit = e => {
//   e.preventDefault();
//   console.log({ email: email.value, message: message.value });

//   if (email.value === '' || message.value === '') {
//     return alert(`Please fill in all required fields.`);
//   }

//   localStorage.removeItem(STORAGE_KEY);
//   e.currentTarget.reset();
//   dataForm = {};
// };

// const pageReload = () => {
//   if (dataForm) {
//     email.value = dataForm.email || '';
//     message.value = dataForm.message || '';
//   }
// };

// const fbackForm = document.querySelector('.feedback-form');
// const { email, message } = fbackForm.elements;

// fbackForm.addEventListener('input', throttle(onDataInput, 500));
// fbackForm.addEventListener('submit', onFormSubmit);

// pageReload();

import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

let dataForm = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

const onDataInput = e => {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
};

const onFormSubmit = e => {
  e.preventDefault();
  console.log({ email: email.value, message: message.value });

  if (email.value === '' || message.value === '') {
    return alert(`Please fill in all required fields.`);
  }

  localStorage.removeItem(STORAGE_KEY);
  e.currentTarget.reset();
  dataForm = {};
};

const pageReload = () => {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
};

const init = () => {
  const fbackForm = document.querySelector('.feedback-form');

  if (fbackForm !== null) {
    const { email, message } = fbackForm.elements;

    fbackForm.addEventListener('input', throttle(onDataInput, 500));
    fbackForm.addEventListener('submit', onFormSubmit);

    pageReload();
  }
};

window.addEventListener('load', init);
