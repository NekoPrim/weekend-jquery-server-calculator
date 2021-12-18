// source in jQuery
$(document).ready(onReady);

function onReady() {
    console.log('Totally Math!');
    $('#calculatorForm').on('submit', onEquals);
}

function onEquals(event) {

    // prevent page from reloading
    event.preventDefault();

    console.log('doing some math');

    // grab input values
    let mathEquation = {
    firstNumber: $('#firstNumberInput').val(),
    add: $('.addition').val(),
    minus: $('.minus').val(),
    times: $('.mulitplication').val(),
    divide: $('.division').val(),
    secondNumber: $('#secondNumberInput').val()
    };



}