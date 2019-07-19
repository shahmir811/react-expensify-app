////////////////////////////// Object destructuring //////////////////////////////

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };
//
// const { name: publisherName = "Self-Published"} = book.publisher;
// console.log(publisherName);

////////////////////////////// Array destructuring //////////////////////////////

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [type, , mediumPrice] = item;

console.log(`A medium ${type} costs ${mediumPrice}`);
