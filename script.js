const body = document.querySelector('body');

const textArea = document.createElement('textarea');
textArea.className = 'board';
body.append(textArea);

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
keyboard.id = 'keyboard';
body.append(keyboard);


let keyboardNumbers = [62, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 1092,
     1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101, 1105, 1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 47];

function init() {
    let out = '';
    for (let i = 0; i < keyboardNumbers.length; i++){
        if (i==13 || i==25 || i==37) {
            out+='<div class="clearfix"></div>'
        }
        out+='<div class="k-key" data="' + keyboard[i] + '">' + String.fromCharCode(keyboardNumbers[i])+'</div>';
    }
    document.querySelector('#keyboard').innerHTML = out;
}

init();

document.onkeypress = function (event) {
    console.log(event.code);
    console.log(event.keyCode);
    document.querySelector('#keyboard .k-key[data="' + event.keyCode + '"]').classList.add('active');
}