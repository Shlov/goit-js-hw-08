import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', throttle(inputRecording, 500));
formEl.addEventListener('submit', submitForm);

let arr = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

downloadText();

function inputRecording(event) {
    arr = {...arr, ...JSON.parse(localStorage.getItem('feedback-form-state'))};
    arr[event.target.type]= event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(arr));
}

function downloadText() {
    if (Object.keys(arr).length) {
        if (arr.email) {
            formEl[0].value = arr.email;
        }
        if (arr.textarea) {
            formEl[1].value = arr.textarea;
        }
    }
}

function submitForm(event) {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    localStorage.removeItem('feedback-form-state');
    formEl.reset();
}