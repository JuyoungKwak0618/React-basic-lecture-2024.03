const obj = {name:'james', age:25, job:'programmer'}
let age = 'age';
console.log(obj.name, obj[age], obj['job']);      // obj[age] 쓸려면 변수 설정 해서 해야함

for (let key in obj) {
  console.log(obj[key]);
}

