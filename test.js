'use strict'


function but1() {
    let text = document.querySelector('input');
    text.disabled = true;
}

function but2() {
    let text = document.querySelector('input');
    text.disabled = false;
}
function but3() {
    let el = document.getElementById('example');
    if (el.hidden != true) {
        document.getElementById('example').hidden = true;
        document.getElementById('Button').innerText = 'Показать квадрат';
        return;
    }
    document.getElementById('example').hidden = false;
    document.getElementById('Button').innerText = 'Скрыть квадрат';
}

function but4(anElement) {
    let text = anElement.innerText
    document.getElementById('txt').value += text;
}

function but5() {
    let text = document.getElementById("txt").value;
    document.getElementById('txt').value = eval(text);
}

function but6() {
    document.getElementById('txt').value = '';
}

let text = document.querySelectorAll('.red');
let arr = Array.prototype.map.call(text, function (el, i) {
    return el.id;
});

for (let i = 0; i < text.length; i++) {

    document.getElementById(arr[i]).onclick = function () {
        arr.forEach((element, index, Array) => {
            document.getElementById(element).style.backgroundColor = 'red';
        });
        text[i].style.backgroundColor = "green";

    };
}
