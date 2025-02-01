//task 1
//camelize("background-color") == 'backgroundColor'
// function camelize(str) {
//     return str
//         .split('-')// ['background', 'color']
//         .map(
//             //convert ['background', 'color'] in ['background', 'Color']
//             (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//         )
//         .join('');// ['background', 'Color'] => 'backgroundColor'
// }

//task2
// let arr = [5, 2, 1, -10, 8];//8,5,2,1,-10

// arr.sort((a, b) => b - a);
// alert(arr);