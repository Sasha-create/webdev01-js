//FUNCTIONS
//alert, prompt, confirm

//Function Declaration


// function showMessage() {
//     alert("Hello to everyone!");
// }

// showMessage();

//function name(parameter1, parameter2, parameter3, ...){
    // body
//}


// function showMessage() {
//     let message = "Hello, I'm JavaScript!" // local variable

//     alert(message);
// }

// showMessage();

// GLOBAL VARIABLE
// let userName = "Bill";

// function showMessage() {
//     let message = "Hello," + userName;
//     alert(message);
// }

// showMessage();

// function showMessage() {
//     let userName = 'Jack';

//     let message = "Hello," + userName;
//     alert(message);
// }

// showMessage();

//PARAMETERS
// function showMessage(from, text) { 
//     alert(from + ': ' + text);
// }

// showMessage('Anna', 'Hello!');
// showMessage('Anna', 'How are you?');

//parameters, arguments
// function showMessage(from, text = 'no text') { 
//     from = '*' + from + '*';

//     alert(from + ': ' + text);
// }

// // let from = 'Anna';
// // showMessage(from, 'hello!');
// // alert(from);
// showMessage('Anna', undefined);

// function showMessage(text) {
//     // ...
//     if (text === undefined) {
//         text = 'empty message';
//     }

//     alert(text)
// }

// showMessage();//empty message

// function showMessage(text) { 
//     text = text || 'empty message';
//     //...
// }

// function sum(a, b) {
//     return a + b;
// }

// let result = sum(1, 2);
// alert(result);

//show...     showMessage(..)
//get...      getAge(..)
//calc...     calcSum(..)
//create...   createForm(..)
//check...    checkPermission(..)  true/false

//Function Expression
// let showMessage = function () {
//     alert('Hello!')
// }

//Callback function
// function ask(quastion, yes, no) {
//     if (confirm(quastion)) yes()
//     else no()
// }

// function showOk() {
//     alert('you confirm work tomorrow');
// }

// function showCancel() {
//     alert('you cancel work tomorrow');
// }

// ask('Would you mind work tomorrow?', showOk, showCancel);


function ask(quastion, yes, no) {
    if (confirm(quastion)) yes()
    else no()
}

ask(
    'Would you mind work tomorrow?',
    function () {
        alert('you confirm work tomorrow');
    }, 
    function () {
        alert('you cancel work tomorrow');
    }
)