// source in jQuery
$(document).ready(onReady);

function onReady() {
    console.log('Totally Math!');
    // create event for + - * /
    $('input[type=button]').on('click', onCalc);

    // create event for submit
    $('#calculatorForm').on('submit', onEquals);

    // create event for reset
    $('#clear').on('click', onReset);
}



let button;



function onCalc() {
    console.log('in onCalc');

    // get value using this
    button = $(this).val();
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

    // send info to the server
    $.ajax({
        method: 'POST',
        url: '/equation',
        data: mathEquation
    })
        .then((response) => {
            console.log('response:', response);
            refresh();
        })
        .catch((err) => {
            console.log('POST failed!');
            alert('Unable to send equation. Try again later!');
        }) // catch any errors

    // clear number input areas with one class
    $('.numberInput').val('');
}

// get info back from the server
function refresh() {
    console.log('in refresh');

    let ajaxOptions = {
        method: 'GET',
        url: '/history'
    };
    $.ajax(ajaxOptions)
        .then((response) => {
            console.log('AJAX request complete!', response);

            // empty table body
            $('#resultsTable tbody').empty();

            // loop through response
            for (let i = 0; i <response.length; i ++) {
                let result = response[i];
                $('#resultsTable tbody').append(`
                    <tr>
                        <td>
                            ${result.equation}
                        </td>

                        <td>
                            ${result.answer}
                        </tr>
                    </tr>
                `)
            }
        })
        .catch((err) => {
            console.log('GET request failed', err);
            alert('Unable to get answer. Try again later!');
        })
}






function onReset() {
    console.log('in onReset');

    // clear input
    $('#firstNumberInput').val('')
    $('#secondNumberInput').val('')
}


