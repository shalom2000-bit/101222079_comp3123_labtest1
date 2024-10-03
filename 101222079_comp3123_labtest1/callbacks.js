function resolvedPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolved Promise!");
    }, 500);
  });
}

function rejectedPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Rejected Promise!");
    }, 500);
  });
}

resolvedPromise()
  .then(result => console.log(result))   
  .catch(error => console.log(error));

rejectedPromise()
  .then(result => console.log(result))
  .catch(error => console.log(error)); 
