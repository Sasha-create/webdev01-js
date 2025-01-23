//while and for
// while (ymova) {
//     //code
//     //"body"
// }

// let i = 0;
// while (i < 3) {
//     alert(i);
//     i++
// }

// let i = 3;
// while (i) {
//     alert(i);
//     i--;
// }

//do ... while
// do {
//     //"body"
// } while (ymova);

//boolean:true or false; 1 or 0
// let i = 0;
// do {
//     alert(i);
//     i++;
// } while (i < 3);

// for (pochatok; ymova; krok){
//     //"body"
// }

// for (let i = 0; i < 3; i++){
//     alert(i);
// }

//pochatok vykonanya
// let i = 0
// //ymova == true -> vykonaty tilo i vykonaty krok
// if (i < 3) { alert(i); i++ }
// //ymova == true -> vykonaty tilo i vykonaty krok
// if (i < 3) { alert(i); i++ }
// //ymova == true -> vykonaty tilo i vykonaty krok
// if (i < 3) { alert(i); i++ }
// // kinec cyklu i == 3

//break
// let sum = 0;
// while (true) {
//     let value = prompt("Input number", '');
//     if (!value) break;

//     sum += value;
// }

// alert('Total:' + sum);

//continue
// for (let i = 0; i < 10; i++){
//     if (i % 2 == 0) continue;//stop iteration 2,4,6,8

//     alert(i);//1,3,5,7,9
// }

//examples
//prefix
// let i = 0;
// while (++i < 5) alert(i);// 1-4 cykle pochynaemo z 1(nove znachennya)

//postfix
// let i = 0;
// while (i++ < 5) alert(i);//1-5 cykle pochynaemo z 0(stare znachennya)

//prefix
// for (let i = 0; i < 5; ++i) alert(i);// 0-4

//postfix
// for (let i = 0; i < 5; i++) alert(i);// 0-4

//switch
// switch (x) {
//     case 'value1':   //if (x === 'value1')
//         ...
//         [break]
    
//     case 'value2':   //if (x === 'value2')
//         ...
//         [break]

//     default:
//         ...
//         [break]
// }

// let a = 2 + 2;

// switch (a) {
//     case 3:
//         alert('Not rigth')
//         break;
//     case 4:
//         alert('Well done! Correct!')
//         break;
//     case 5:
//         alert('To much!')
//         break;

//     default:
//         alert('I dont know answer')
// }

// let a = 3;

// switch (a) {
//     case 3:
//         alert('Correct!')
//         break;
    
//     case 4:
//     case 5:
//         alert('Not right')
//         alert('To much!')
//         break;

//     default:
//         alert('I dont know answer')
// }