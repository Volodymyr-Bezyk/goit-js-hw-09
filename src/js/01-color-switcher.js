const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};
let changeColorIntervalId = null;

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function setBodyBgColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function btnSwitcher(e) {
  switch (e.currentTarget) {
    case refs.startBtn:
      refs.startBtn.setAttribute('disabled', true);
      refs.stopBtn.removeAttribute('disabled', true);
      break;
    case refs.stopBtn:
      refs.startBtn.removeAttribute('disabled', true);
      refs.stopBtn.setAttribute('disabled', true);
      break;
  }
}

function onStartBtnClick(e) {
  changeColorIntervalId = setInterval(setBodyBgColor, 1000);
  btnSwitcher(e);
}

function onStopBtnClick(e) {
  clearInterval(changeColorIntervalId);
  btnSwitcher(e);
}
