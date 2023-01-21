const first = document.querySelector('#number1');
const second = document.querySelector('#number2');

const result = document.querySelector('.result');
const message = document.querySelector('.message');

if (window.Worker) {
  const myWorker = new Worker("worker.js");

  const sendInput = () => {
    myWorker.postMessage([first.value, second.value]);
    console.log('Message posted to worker');
  }

  first.onchange = sendInput
  second.onchange = sendInput

  myWorker.onmessage = function(e) {
    result.textContent = e.data;
    console.log('Message received from worker');
  }
  myWorker.onerror = function(e){
    message.textContent = e.message;
    console.log('Error received from worker');
  }
} else {
  console.log('Your browser doesn\'t support web workers.');
}
