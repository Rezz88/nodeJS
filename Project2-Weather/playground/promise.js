var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") {
        resolve(a + b);
      } else {
        reject("Arguments must be numbers!");
      }
    }, 1500);
  });
};

asyncAdd(2, 8)
  .then(res => {
    console.log("Result: ", res);
    return asyncAdd(res, 10);
  })
  .then(res => {
    console.log("Should be 20: ", res);
  })
  .catch(errorMessage => {
    console.log(errorMessage);
  });

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Hey. It worked!");
//         reject("Unable to fulfill promise");
//     }, 1500);
// });

// somePromise.then((message) => {
//     console.log("Success: ", message);
// }, (erroMessage) => {
//     console.log("Error: ", erroMessage);
// });
