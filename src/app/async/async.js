console.log('Good Morning!!!');

//synchronous

// for (let index = 0; index < 47; index++) {
//   const element = index;
//   console.log('this is the element number:'+index);

// }

// console.log('done printing');


// asynchronus

setTimeout(() => {
  for (let index = 0; index < 4700; index++) {
      const element = index;
      console.log('this is the element number:'+index);

    }
}, 100);

console.log('done printing');
