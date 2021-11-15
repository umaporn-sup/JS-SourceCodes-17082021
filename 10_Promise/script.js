let promise = new Promise((resolve, reject) => {
  // Code to perform the promised task
  let task_performed = false;
  if (task_performed) {
    resolve('performed successfully');
  } else {
    reject('not performed');
  }
});
promise.then((res) => console.log(res)).catch((rej) => console.log(rej));
