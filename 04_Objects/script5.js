function printNestedObj(obj) {
  let listProperties = '';
  for (const key in obj) {
    let value = obj[key];
    if (value && typeof value === 'object') {
      listProperties += key + ':' + '\n';
      listProperties += printObject(value);
    } else {
      listProperties += key + ':' + value + '\n';
    }
  }
  return listProperties;
}
function printObject(obj) {
  let nestedProperties = '';
  for (const key in obj) {
    nestedProperties += key + ':' + obj[key] + '\n';
  }
  return nestedProperties;
}
let book = {
  isbn: 123456789,
  title: 'JavaScript',
  author: {
    firstname: 'Umaporn',
    lastname: 'Sup'
  }
};

console.log(printNestedObj(book));
