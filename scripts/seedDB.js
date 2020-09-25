const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
    process.env.MONGODB_URI ||
    'mongodb://localhost/resourcelist'
  );

const resourceSeed = [
     {
        link: 'https://www.youtube.com/playlist?list=PLj__9coPa5w_Yya7zbT9YebxQyBfy0w3b',
        category: 'Java',
        experience: 'Beginner'
     },
     {
        link: 'https://www.youtube.com/watch?v=hcbfF8I9zCob',
        category: 'Python',
        experience: 'Beginner'
     },
     {
        link: 'https://www.youtube.com/watch?v=GPFDsBImjiE',
        category: 'JavaScript',
        experience: 'Beginner'
     },
     {
        link: 'https://www.youtube.com/watch?v=gfkTfcpWqAY',
        category: 'C#',
        experience: 'Beginner'
     },
     {
        link: 'https://www.youtube.com/watch?v=Dji9ALCgfpM',
        category: 'Ruby',
        experience: 'Beginner'
     },
     {
        link: 'https://www.youtube.com/watch?v=kMT54MPz9oE',
        category: 'HTML',
        experience: 'Beginner'
     },
     {
        link: 'https://www.youtube.com/watch?v=NxS_0vR-PPg',
        category: 'C++',
        experience: 'Beginner'
     },
     {
        link: 'https://www.youtube.com/watch?v=CF9S4QZuV30',
        category: 'Golang',
        experience: 'Beginner'
     },

];

db.Resource
  .remove({})
  .then(() => db.Resource.collection.insertMany(resourceSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
