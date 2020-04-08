const body = document.querySelector('body');

const textArea = document.createElement('textarea');
textArea.className = 'board';
body.append(textArea);

let language = document.createElement('div');
language.className = 'language';
language.innerHTML = 'Привет) Разреши взять пару дней - доделать эту багованную штуку :)';
body.append(language);

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
keyboard.id = 'keyboard';
body.append(keyboard);


// let numbers = [];
// document.onkeypress = function (event){
//     console.log(event)
//     numbers.push(event.charCode);
//     console.log(numbers);
// }

let keyboardNumbersRus = [62, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 1092,
     1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101, 1105, 1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 47];

let keyboardNumbersEng = [167, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 97, 115, 100, 102,
     103, 104, 106, 107, 108, 59, 92, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47];

let keyboardNumbers = keyboardNumbersEng;

function init() {
    textArea.focus();
    let out = '';
    for (let i = 0; i < keyboardNumbers.length; i++){
        if (i==13 || i==25 || i==37) {
            out += '<div class="clearfix"></div>'
        }
        out += '<div class="k-key" data="' + keyboardNumbers[i] + '" >' + String.fromCharCode(keyboardNumbers[i]) + '</div>';
    }
    document.querySelector('#keyboard').innerHTML = out;
}

init();

document.onkeypress = function (event) {
    
    document.querySelectorAll('#keyboard .k-key').forEach((element)=>{
        element.classList.remove('active');
    });
    document.querySelector('#keyboard .k-key[data="' + event.keyCode + '"]').classList.add('active');
}

document.querySelectorAll('#keyboard .k-key').forEach(function(element){
    element.onclick =  function(event) {
        document.querySelectorAll('#keyboard .k-key').forEach(function (element){
            element.classList.remove('active');
        });
        let code = this.getAttribute('data');
        this.classList.add('active');
        console.log(String.fromCharCode(code));
        textArea.value+=String.fromCharCode(code);
        textArea.focus();
    }
});


const buttonChangeLanguage = document.createElement('div');
buttonChangeLanguage.className = 'changeLanguage';
buttonChangeLanguage.innerHTML = 'Eng';
body.append(buttonChangeLanguage);

buttonChangeLanguage.addEventListener('click', (event) => {
    if (buttonChangeLanguage.innerHTML = 'Eng') {
        buttonChangeLanguage.innerHTML = 'Rus'
        keyboardNumbers = keyboardNumbersRus;
        init();
    } else {
        buttonChangeLanguage.innerHTML = 'Eng'
        keyboardNumbers = keyboardNumbersEng;
        init();
    }
    // console.log(event)
})