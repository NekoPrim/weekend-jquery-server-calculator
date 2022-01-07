// source in jQuery
$(document).ready(onReady);

function onReady() {
    console.log('Totally Math!');

    // create event for equal button
    $('.equal').on('click', onEquals);

    // create event for clear
    $('.clear').on('click', onClear);

    // append equations to the DOM
    refresh();
}





function onEquals(event) {

    // prevent page from reloading
    event.preventDefault();

    console.log('doing some math');


    // make an object of the values
    let mathEquation = {
        firstNum: $('#firstNumberInput').val(),
        operator: $('#operators').val(),
        secondNum: $('#secondNumberInput').val()
    };
    // check to see if i got the values
    console.log(mathEquation);

    // send info to the server
    $.ajax({
        method: 'POST',
        url: '/math',
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
        url: '/math'
    };
    $.ajax(ajaxOptions)
        .then((response) => {
            console.log('AJAX request complete!', response);

            render(response);
        })
        .catch((err) => {
            console.log('GET failed!');
            alert('Unable to get answer. Try again later!');
        })
}



function render(response) {
    console.log('in render');

    console.log('response', response);

    // empty table body
    $('#resultsTable tbody').empty();

    // loop through response
    for (let result of response) {
        $('#resultsTable tbody').append(`
            <tr>
                <td>
                    ${result}
                </td>
            </tr>
        `)
    }
}



function onClear() {
    console.log('in onClear');

    // clear input
    $('.numberInput').val('');
}
