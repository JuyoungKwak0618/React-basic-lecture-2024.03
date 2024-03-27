const fs = require('fs');

// 1) 동기식으로 읽기
// const file01 = fs.readFileSync('./01.전역변수.js');

// console.log(file01);
// console.log('========================================')

// const file02 = fs.readFileSync('./02.os.js')
// console.log(file02);
//<Buffer 63 6f 6e 73 6f 6c 65 2e 6c 6f 67 28 5f 5f 66 69 6c 65 6e 61 6d 65 29 3b 0d 0a 63 6f 6e 73 6f 6c 65 2e 6c 6f 67 28 5f 5f 64 69 72 6e 61 6d 65 29 3b 0d ... 151 more bytes>

// 2) 비동기식으로 읽기 - 아래와 같이 읽으면 안됨
// fs.readFile('./01.전역변수.js',(err, data) => {
//   console.log(data.toString());
// });

// console.log('========================================')
// fs.readFile('./02.os.js',(err, data) => {
//   console.log(data.toString());
// });

// console.log('========================================')


// 3) 올바른 비동기식 읽기
// fs.readFile('./01.전역변수.js',(err, data) => {
//   console.log(data.toString());
//   console.log('========================================')
//   fs.readFile('./02.os.js',(err, data) => {
//     console.log(data.toString());
//     console.log('========================================')
//   });
// });