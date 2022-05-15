// callback hell

// A promise is a proxy for a value that will eventually become available

// async functions uses promises behind the scenes

// Once a promise is called , it is first in pending state. This means calling function continues execution while the promise is waiting to be resolved. Created promise eventually end in a resolved or rejected state. We can call appropriate then and else parts on finishing.

// Write promise

const isCorrect = false;

const isItValidated = new Promise((resolve, reject) => {
  if (isCorrect) {
    const work_done = "Here is the thing you want";
    resolve(work_done);
  } else {
    const why = "Still working and not correct";
    reject(why);
  }
});

const checkValidity = () => {
  isItValidated
    .then((ok) => {
      console.log(ok);
    })
    .catch((error) => {
      console.error(error);
    });
};
checkValidity();
