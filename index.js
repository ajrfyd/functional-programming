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

const obj = {
  id: 1,
  name: 'Mr.Kim',
  age: 32,
  height: 180,
  weight: 70,
};

console.clear();

function _each(list, iter) {
  for(let i = 0; i < list.length; i++) {
    iter(list[i]);
  }
  return list;
};

function _map(list, mapper) {
  const newArr = [];
  _each(list, value => newArr.push(mapper(value)));
  return newArr;
};

function _filter(list, iter) {
  const newArr = [];
  _each(list, v => iter(v) ? newArr.push(v) : null);

  return newArr;
};

function _curry(fn) {
  return (...args) => args.length === 2 ? fn(args[0], args[1]) : b => fn(args[0], b);
};

function _curryR(fn) {
  return (...args) => args.length === 2 ? 
    fn(args[0], args[1]) : 
    (b) => fn(b, args[0]);
};

const add = _curry((a, b) => a + b);
const sub = _curryR((a, b) => b - a);

// console.log(add(10, 12));
// console.log(add(10)(12));
// console.log(sub(10)(20));
// console.log(sub(10, 20));

const _mapR = _curryR(_map);
const _filterR = _curryR(_filter);

function _get(obj, key) {
  return obj === null ? undefined : obj[key];
};

const { slice } = Array.prototype;

function _rest(list, num) {
  return slice.call(list, num || 1);
};

function _reduce(list, iter, memo) {
  if(arguments.length === 2) {
    memo = list[0];
    list = _rest(list);
  }
  _each(list, (value) => {
    memo = iter(memo, value);
  });

  return memo;
};

_get = _curryR(_get);

const _length = _get('length');

function _is_object(obj) {
  return typeof obj === 'object' && !!obj;
};

function _keys(obj) {
  return _is_object(obj) ? Object.keys(obj) : [];
};

function _pipe() {
  const fns = arguments;
  // return function(arg) {
  //   return _reduce(fns, function(arg, fn) {
  //     return fn(arg);
  //   }, arg)
  // };
  return (arg) => _reduce(fns, (arg, fn) => fn(arg), arg);
};

const f1 = _pipe(
  a => a * a,
  a => a ** a,
  console.log
);

function _go(arg) {
  const fns = _rest(arguments);
return _pipe.apply(null, fns)(arg);
};