const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is my resolved data");
  }, 3000);
  // resolve("This is my resolved data");
  // reject("Oops! something went wrong, please try again");
});

promise
        .then((data) => console.log(data))
        .catch(error => console.log(error));
