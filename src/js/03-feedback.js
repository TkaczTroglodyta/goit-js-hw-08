import throttle from 'lodash.throttle';

const fbackForm = document.querySelector('feedback-form');
const STORAGE_KEY = 'feedback-form-state';

fbackForm.addEventListener('input', throttle(onDataInput, 500));
fbackForm.addEventListener('submit', onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

const { email, message } = fbackForm.elements;
pageReload();

const pageReload = () => {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
};

const onDataInput = e => {
  const { email, message } = e.currentTarget.elements;
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
};

const onFormSubmit = e => {
  e.preventDefault();
  const { email, message } = e.currentTarget.elements;
};
