function iterativeLog(array) {
  let i = -1;
  array.forEach(arra => {
    console.log(`${++i}: ${arra}`);
  })
}

function iterate(callback) {
  var array = [0, 1, 2, 3];
  array.forEach(callback);
  return array;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
