// source in jQuery
$(document).ready(onReady);

function onReady() {
    console.log('Totally Math!');
    $('input[type=button]').on('click', onCalc);
    $('#calculatorForm').on('submit', onEquals);
}

let button;

function onCalc() {
    console.log('in onCalc');
    const buttons = document.querySelectorAll("input[type=button]");
    const length = buttons.length;
    for (let i = 0; i < length; i++) {
        
        }
    }

}

function onEquals(event) {

    // prevent page from reloading
    event.preventDefault();

    console.log('doing some math');


    // make an object of the values
    let mathEquation = {
    firstNumber: $('#firstNumberInput').val(),
    calculation: button,
    secondNumber: $('#secondNumberInput').val()
    };
    // check to see if i got the values
    console.log(mathEquation);

    $.ajax({
        method: 'POST',
        url: '/equation-answer',
        data: mathEquation
    })
        .then((response) => {
            console.log('response:', response);
        })


}


// grab the values of + - * /
