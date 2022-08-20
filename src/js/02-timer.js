import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
  startBtn: document.querySelector('button[data-start]'),
};

refs.startBtn.setAttribute('disabled', true);
let finalDate = null;
let isActiveTimer = false;

flatpickr('input#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: Date.now(),
  //   minDate: Date.now(),
  minuteIncrement: 1,
  weekNumbers: true,

  onClose(selectedDates) {
    finalDate = selectedDates[0].getTime();
    if (finalDate <= Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }
    refs.startBtn.removeAttribute('disabled', true);
  },
});

// ================== Варіант через функції ===================

refs.startBtn.addEventListener('click', onStartBtnClick);
let intervalID = null;

function onStartBtnClick(e) {
  if (isActiveTimer) {
    Notiflix.Notify.warning('The timer is already running');
    return;
  }
  isActiveTimer = true;
  Notiflix.Notify.success('The timer starts');
  intervalID = setInterval(mainTimeHandler, 1000);
}

function mainTimeHandler(interfaceObj) {
  const deltaTime = deltaTimeHandler();
  const timer = convertMs(deltaTime);
  interfaceChanger(timer);

  if (deltaTime >= 0 && deltaTime < 1100) {
    stopTime();
  }
}

function interfaceChanger(timerObj) {
  const { days, hours, minutes, seconds } = timerObj;
  refs.days.textContent = addLeadingZero(days);
  refs.hours.textContent = addLeadingZero(hours);
  refs.minutes.textContent = addLeadingZero(minutes);
  refs.seconds.textContent = addLeadingZero(seconds);
}

function deltaTimeHandler() {
  return finalDate - Date.now();
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function stopTime() {
  clearInterval(intervalID);
  refs.startBtn.setAttribute('disabled', true);
  Notiflix.Notify.info('Time is out');
  isActiveTimer = false;
}

/*==========================Варіант 2 через клас===============================*/

// class Timer {
//   constructor({ finalDate, updateInterface, disableStartBtn }) {
//     this.finishTime = null;
//     this.isActiveTimer = false;
//     this.intervalId = null;
//   }
//   start() {
//     if (this.isActiveTimer) {
//       Notiflix.Notify.warning('The timer is already running');
//       return;
//     }
//     Notiflix.Notify.success('The timer starts');
//     this.finishTime = finalDate;
//     this.isActiveTimer = true;
//     this.intervalId = this.intervalHandler();
//   }

//   convertMs(ms) {
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;

//     const days = Math.floor(ms / day);
//     const hours = Math.floor((ms % day) / hour);
//     const minutes = Math.floor(((ms % day) % hour) / minute);
//     const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//     return { days, hours, minutes, seconds };
//   }

//   intervalHandler() {
//     setInterval(() => {
//       this.deltaTime = this.finishTime - Date.now();
//       this.counter = this.convertMs(this.deltaTime);

//       updateInterface(this.counter);

//       if (this.deltaTime >= 0 && this.deltaTime < 1000) {
//         this.stop();
//       }
//     }, 1000);
//   }

//   stop() {
//     clearInterval(this.intervalId);
//     Notiflix.Notify.info('Time is out');
//     this.isActiveTimer = false;
//     disableStartBtn();
//   }
// }
// const timer = new Timer({ finalDate, updateInterface, disableStartBtn });

// function updateInterface(obj) {
//   refs.days.textContent = addLeadingZero(obj.days);
//   refs.hours.textContent = addLeadingZero(obj.hours);
//   refs.minutes.textContent = addLeadingZero(obj.minutes);
//   refs.seconds.textContent = addLeadingZero(obj.seconds);
// }

// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }

// function disableStartBtn() {
//   refs.startBtn.setAttribute('disabled', true);
// }

// refs.startBtn.addEventListener('click', () => {
//   timer.start();
// });
