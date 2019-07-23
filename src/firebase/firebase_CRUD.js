import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();


// child_removed
database.ref('expenses').on('child_removed', snapshot => {
  console.log("REMOVED ",snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', snapshot => {
  console.log("Changed ", snapshot.key, snapshot.val());
})

// child_added
database.ref('expenses').on('child_added', snapshot => {
  console.log("Added ", snapshot.key, snapshot.val());
})

// database.ref('expenses').once('value')
//   .then(snapshot => {
//     const expenses = [];
//
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//
//     console.log(expenses);
//   })
//   .catch(error => console.log(error));

// database.ref('expenses').on('value', snapshot => {
//   const expenses = [];
//
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//
//   console.log(expenses);
//
// }, (error) => {
//     console.log('Error on fetching data ', error);
// });

// database.ref('expenses').push({
//   description: 'Bought 1L milk',
//   note: 'Needed milk for preparing tea',
//   amount: 120,
//   createdAt: 1654785
// });
//
// database.ref('expenses').push({
//   description: 'Supercard easyload',
//   note: 'Made easyload for ufone',
//   amount: 550,
//   createdAt: 1654895
// });
//
// database.ref('expenses').push({
//   description: 'Italian Mall grocery',
//   note: 'Bought monthky grocery',
//   amount: 25500,
//   createdAt: 1987456
// });


// const onFetchingRecords = database.ref().on('value', snapshot => {
//   const data = snapshot.val();
//   console.log(data);
//   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// }, (error) => {
//     console.log('Error on fetching data ', error);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// }, (error) => {
//     console.log('Error on fetching data ', error);
// });
//
//
// setTimeout(() => {
//   database.ref().off('value', onValueChange);
// }, 7000);
//
// setTimeout(() => {
//   database.ref('age').set(30);
// }, 9000);

// database.ref('location').once('value')
// .then((snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// })
// .catch(e => console.log("Error fetching data - ", e));

// database.ref().set({
//   name: "Shahmir Khan",
//   age: 27,
//   stressLevel: 6,
//   job: {
//     title: 'Software Engineer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Pennsylvania',
//     country: "United States"
//   }
// })
// .then(() => console.log("data is saved"))
// .catch(e => console.log("This failed - ", e));
//
// database.ref().update({
//   stressLevel: 6,
//   'job/company': 'Google',
//   'location/city': 'Pennsylvania'
// })
// .then(() => console.log("data is updated"))
// .catch(e => console.log("Updation failed - ", e));


// database.ref('isSingle').remove()
// .then(() => console.log("isSingle is removed."))
// .catch(e => console.log("Oops! something went wrong - ", e));
