//_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
console.log('-----------------Chunk--------------------')
function customChunk(inputArray:Array<any>, window?: number){
  if(window === undefined){
    window = 1;
  } else if (window <= 0){
    return [];
  } else if(window > inputArray.length){
    window = inputArray.length;
  }

  let resultArr = [];
  const len = inputArray.length;
  for(let i = 0; i < len; i = i + window){
    let temp = [];
    for(let j = i; j < (i + window) && j < len; j++){
        temp.push(inputArray[j]);
    } 
    resultArr.push(temp);
  }
  return resultArr;
}

let arr:String[] = ['a', 'b', 'c', 'd','a', 'b', 'c', 'd'];

console.log('customChunk output with array size 8 and window size 3',customChunk(arr, 3));
console.log('customChunk output with array size 8 and window size 2',customChunk(arr, 2));
console.log('customChunk output with array size 8 and window size 1',customChunk(arr, 1));
console.log('customChunk output with array size 8 and window size 0',customChunk(arr, 0));
console.log('customChunk output with array size 8 and window size undefined',customChunk(arr));
console.log('customChunk output with array size 8 and window size -1',customChunk(arr, -1));
console.log('customChunk output with array size 8 and window size 8',customChunk(arr, 8));

/////////////////////////Chunk function implementation end////////////////////////////////////
console.log('-----------------Sum--------------------')
function customSum(inputArray:Array<number>){
  let sum = 0;
  for(let num of inputArray){
    sum += num;
  }
  return sum;
}

let numArr:number[] = [4,2,8,6];
console.log('customSum output with input [4,2,8,6] is =',customSum(numArr));
console.log('-----------------Find--------------------')
let users_1 = [
  { 'user': 'ravikiran', 'age': 36, 'active': true },
  { 'user': 'Henry',   'age': 30, 'active': false },
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 30, 'active': false },
];

function customFind(inputArray: Array<any>, obj: any){
  let result: any;
  inputArray.forEach((user, index, arr) => {
      if(typeof obj === 'function'){
        if(obj(user)){
          result = user;
          arr.length = index + 1;
        }
    } else if(Array.isArray(obj)){
      let userKeys = Object.keys(user);
      if(userKeys.indexOf(obj[0]) !== -1){
        if(user[obj[0]] === obj[1]){
          result = user;
          arr.length = index + 1;
        }
      }
    } else if(typeof obj === 'object'){
      let userKeys = Object.keys(user);
      let objKeys = Object.keys(obj);
      let bool = true;
      objKeys.forEach(objKey => {
        if(userKeys.indexOf(objKey) !== -1){
          bool = bool && (user[objKey] === obj[objKey]);
        }
      });
      if(bool){
        result = user;
        arr.length = index + 1;
      }
    } else {
      let userKeys = Object.keys(user);
      if(userKeys.indexOf(obj) !== -1){
        result = user;
        arr.length = index + 1;
      }
    }
  })
  return result;
}
// let res = customFind(users, function(o) { return !o.active; })
// console.log('res',res);
console.log(customFind(users_1, function(o) { return !o.active; }));

console.log(customFind(users_1, ['active', false]));

console.log(customFind(users_1, 'active'));
console.log(customFind(users_1, { 'age': 36, 'active': false }));

console.log('-----------------Filter--------------------')
let users_2 = [
  { 'user': 'ravikiran', 'age': 36, 'active': true },
  { 'user': 'Henry',   'age': 30, 'active': false },
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 30, 'active': false },
];
function customFilter(inputArray: Array<any>, obj: any){
  let result: Array<any> = [];
  inputArray.forEach((user, index, arr) => {
      if(typeof obj === 'function'){
        if(obj(user)){
          result.push(user);
        }
    } else if(Array.isArray(obj)){
      let userKeys = Object.keys(user);
      if(userKeys.indexOf(obj[0]) !== -1){
        if(user[obj[0]] === obj[1]){
          result.push(user);
        }
      }
    } else if(typeof obj === 'object'){
      let userKeys = Object.keys(user);
      let objKeys = Object.keys(obj);
      let bool = true;
      objKeys.forEach(objKey => {
        if(userKeys.indexOf(objKey) !== -1){
          bool = bool && (user[objKey] === obj[objKey]);
        }
      });
      if(bool){
        result.push(user);
      }
    } else {
      let userKeys = Object.keys(user);
      if(userKeys.indexOf(obj) !== -1){
        result.push(user);
      }
    }
  })
  return result;
}

// let res = customFind(users, function(o) { return !o.active; })
// console.log('res',res);
console.log(customFilter(users_2, function(o) { return o.active; }));

console.log(customFilter(users_2, ['active', false]));

console.log(customFilter(users_2, 'active'));
console.log(customFilter(users_2, { 'age': 30, 'active': false }));