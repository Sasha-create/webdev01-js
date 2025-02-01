//map
// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
// alert(lengths); //5, 7, 6

//sort(fn)
// let arr = [1, 2, 15];

// //method sort arr
// arr.sort();

// alert(arr); //1, 15, 2

// function compare(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// }

// let arr = [1, 2, 15];

// arr.sort(compare);

// alert(arr);//1, 2, 15

//short discription method sort
// let arr = [1, 2, 15];

// // arr.sort(function (a, b) { return a - b });
// arr.sort((a, b) => a - b);

// alert(arr);//1, 2, 15


//reverse
// let arr = [1, 2, 3, 4, 5]
// arr.reverse();
// alert(arr);//5,4,3,2,1

//split, join
// let friends = 'Bilbo, Gandalf, Nazgul';

// let arr = friends.split(', ');//friends.split(', ', 2)
// for (let friend of arr) {
//     alert(`A message to ${friend}.`);// A message to Bilbo. A message to Gandalf. A message to Nazgul.
// }

// let arr = "test";
// alert(arr.split(''));//t,e,s,t

// let friends = ["Bilbo", "Gandalf", "Nazgul"];
// let str = friends.join(';');
// alert(str);

//reduce/reduceRight
// let value = arr.reduce(function (accumulator, item, index, array) {
//     // ... body
// }, [initial]);

// let arr = [1, 2, 3, 4, 5];
// let result = arr.reduce((sum, current) => sum + current, 0);

// alert(result); // 15

//Array.isArray
// alert(typeof {});//object
// alert(typeof []);//object

// alert(Array.isArray({}));//false
// alert(Array.isArray([]));//true