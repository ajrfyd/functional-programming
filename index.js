const _each = (list, iter) => {
  for(let i in list) {
    iter(list[i], i);
  }

  return list;
};

const _map = (list, mapper) => {
  const newArr = [];
  _each(list, (v, i) => {
    newArr.push(mapper(v, i));
  });

  return newArr;
};

const _filter = (list, predi) => {
  const newArr = [];
  _each(list, (value) => {
    if(predi(value)) newArr.push(value);
  });

  return newArr;
};

// 필요한 인자가 채워지면 함수수 본체를 실행하는 함수
const _curry = (fn) => {
  return (...args) => {
    return args.length === 2 
      ? fn(...args)
      : (b) => {
        return fn(args[0], b);
      }
  }
}

const add = _curry((a, b) => a + b);

console.log(add(15, 12));
console.log(add(11)(24));