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
