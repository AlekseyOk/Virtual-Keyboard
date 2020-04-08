const body = document.querySelector('body');

const textArea = document.createElement('textarea');
textArea.className = 'board';
body.append(textArea);

const language = document.createElement('div');
language.className = 'language';
language.innerHTML = 'Привет!) Чтобы поменять раскладку клавиатуры - нажмите Томатную кнопку, </br> для подсветки кнопок при нажатии на физическую клавиатуру - поменяйте раскладку на вашем устройстве)';
body.append(language);

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
keyboard.id = 'keyboard';
body.append(keyboard);

const keyboardNumbersRus = [62, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 1081,
  1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 1092, 1099, 1074,
  1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101, 1105, 1103, 1095, 1089, 1084, 1080,
  1090, 1100, 1073, 1102, 47];

const keyboardNumbersEng = [167, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113,
  119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 97, 115, 100, 102, 103, 104,
  106, 107, 108, 59, 92, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47];

let keyboardNumbers = keyboardNumbersEng;


function init() {
  textArea.focus();

  // положили все кнопки в html
  let out = '';
  for (let i = 0; i < keyboardNumbers.length; i += 1) {
    if (i === 13 || i === 25 || i === 37) {
      out += '<div class="clearfix"></div>';
    }
    out += `<div class="k-key" data="${keyboardNumbers[i]}" >${String.fromCharCode(keyboardNumbers[i])}</div>`;
  }
  document.querySelector('#keyboard').innerHTML = out;

  // добавили класс Active на нажатую кнопку
  document.onkeypress = function addActive(event) {
    textArea.focus();
    document.querySelectorAll('#keyboard .k-key').forEach((element) => {
      element.classList.remove('active');
    });

    if (document.querySelector(`#keyboard .k-key[data="${event.keyCode}"]`) !== null) {
      document.querySelector(`#keyboard .k-key[data="${event.keyCode}"]`).classList.add('active');
      language.classList.remove('error');
    } else {
      language.classList.add('error');
    }
  };

  // добавляем текст в textarea
  document.querySelectorAll('#keyboard .k-key').forEach((element) => {
    element.addEventListener('click', function addDataToTextArea() {
      document.querySelectorAll('#keyboard .k-key').forEach((el) => {
        el.classList.remove('active');
      });
      const code = this.getAttribute('data');
      this.classList.add('active');
      language.classList.remove('error');
      textArea.value += String.fromCharCode(code);
      textArea.focus();
    });
  });
}

init();

// кнопка смены языка
const buttonChangeLanguage = document.createElement('div');
buttonChangeLanguage.className = 'changeLanguage';
buttonChangeLanguage.innerHTML = 'Eng';
body.append(buttonChangeLanguage);

buttonChangeLanguage.addEventListener('click', () => {
  if (buttonChangeLanguage.innerHTML === 'Eng') {
    buttonChangeLanguage.innerHTML = 'Rus';
    keyboardNumbers = keyboardNumbersRus;
    init();
  } else {
    buttonChangeLanguage.innerHTML = 'Eng';
    keyboardNumbers = keyboardNumbersEng;
    init();
  }
});
