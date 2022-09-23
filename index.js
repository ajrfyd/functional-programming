const arr = [
  {
    id: 1,
    name: 'ajrfyd',
    age: 23
  },
  {
    id: 2,
    name: 'jun',
    age: 40
  },
  {
    id: 3,
    name: 'july',
    age: 32,
  },
  {
    id: 4,
    name: 'kile',
    age: 33,
  },
  {
    id: 5,
    name: 'kite',
    age: 29
  },
  {
    id: 6,
    name: 'noty',
    age: 30
  }
];

function _each(list, itter) {
  for(let i = 0; i < list.length; i++) {
    itter(list[i]);
  }
  return list;
};

function _map(list, mapper) {
  const newArr = [];
  _each(list, value => newArr.push(mapper(value)));
  return newArr;
};

function _filter(list, itter) {
  const newArr = [];
  _each(list, v => itter(v) ? newArr.push(v) : null);

  return newArr;
};

function _curry(fn) {
  return (a, b) => a && b ? fn(a, b) : b => fn(a, b);
};

function _curryR(fn) {
  return (a, b) => (a && b) ? fn(a, b) : b => fn(b, a);
};

const add = _curry((a, b) => a + b);
const sub = _curryR((a, b) => b - a);

console.log(add(10, 12));
console.log(add(10)(12));
console.log(sub(10)(20));
console.log(sub(10, 20));

const _mapR = _curryR(_map);

console.log(_map(arr, v => v.name));

console.log(_mapR(v => v.name)(arr));


console.log(test(v => v)(1)(2));