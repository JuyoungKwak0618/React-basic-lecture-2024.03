let fruits = ['사과', '배', '감'];            // {0:'사과', 1:'배',2:'감'}

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let fruit of fruits) {
  console.log(fruit);
}

let object = {0:'사과', 1:'배',2:'감'};

var x = 4;    // var는 재선언이 가능, 코드가 길어지면 어디서 어떻게 선언되는지 파악되는지 어려움
var x = 6;    // 가급적 사용하지 말 것
let y = 4;    // let은 재선언이 안됨
// let y = 6;

