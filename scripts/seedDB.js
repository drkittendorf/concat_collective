const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
   process.env.MONGODB_URI ||
   'mongodb://localhost/concat_collective'
);

const resourceSeed = [
   {
      title: 'Java 101',
      link: 'https://youtu.be/r59xYe3Vyks',
      category: 'Java',
      skill: 'Beginner',
      created: ''
   },
   {
      title: 'Python 101',
      link: 'https://youtu.be/_uQrJ0TkZlc',
      category: 'Python',
      skill: 'Beginner',
      created: ''
   },
   {
      title: 'JavaScript 101',
      link: 'https://youtu.be/GPFDsBImjiE',
      category: 'JavaScript',
      skill: 'Beginner',
      created: ''
   },
   {
      title: 'C# 101',
      link: 'https://youtu.be/gfkTfcpWqAY',
      category: 'C#',
      skill: 'Beginner',
      created: ''
   },
   {
      title: 'Ruby 101',
      link: 'https://youtu.be/Dji9ALCgfpM',
      category: 'Ruby',
      skill: 'Beginner',
      created: ''
   },
   {
      title: 'HTML & CSS 101',
      link: 'https://youtu.be/kMT54MPz9oE',
      category: 'HTML',
      skill: 'Beginner',
      created: ''
   },
   {
      title: 'C++ 101',
      link: 'https://youtu.be/NxS_0vR-PPg',
      category: 'C++',
      skill: 'Beginner',
      created: ''
   },
   {
      title: 'Golang 101',
      link: 'https://youtu.be/CF9S4QZuV30',
      category: 'Golang',
      skill: 'Beginner',
      created: ''
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


const snippetSeed = [
   {
      description: 'QuickSort Algorithm',
      language: 'Algorithm',
      created: '',
      snippet: `var unsorted = [];
      for (var index = 0, t = 400000; index < t; index++) {
        unsorted.push(Math.round(Math.random() * t));
      }
      
      function quickSort(array) {
        if (array.length <= 1) {
          return array;
        }
      
        // get random pivot element (and remove from array to add back in later)
        var pivot = array.splice(Math.floor(Math.random() * array.length), 1);
      
        // create left array (elements <= pivot), and right array (elements > pivot)
        var left = [];
        var right = [];
      
        // loop through array and create left/right
        array.forEach(function(el) {
          if (el <= pivot) {
            left.push(el);
          }
          else {
            right.push(el);
          }
        });
        return quickSort(left).concat(pivot, quickSort(right));
      }`
   },
   {
      description: 'Setting breakpoints for responsive design',
      language: 'JavaScript',
      created: '',
      snippet: `function isBreakPoint(bp) {
         // The breakpoints that you set in your css
         var bps = [320, 480, 768, 1024];
         var w = $(window).width();
         var min, max;
         for (var i = 0, l = bps.length; i < l; i++) {
           if (bps[i] === bp) {
             min = bps[i-1] || 0;
             max = bps[i];
             break;
           }
         }
         return w > min && w <= max;
       }`
   },
   {
      description: 'Counting clicks',
      language: 'JavaScript',
      created: '',
      snippet: `$(element)
      .data('counter', 0) // begin counter at zero
      .click(function() {
          var counter = $(this).data('counter'); // get
          $(this).data('counter', counter + 1); // set
          // do something else...
      });`
   },
   {
      description: 'Maximum width or height in a set of elements',
      language: 'JavaScript',
      created: '',
      snippet: `var getMaxHeight = function ($elms) {
         var maxHeight = 0;
         $elms.each(function () {
           // In some cases you may want to use outerHeight() instead
           var height = $(this).height();
           if (height > maxHeight) {
             maxHeight = height;
           }
         });
         return maxHeight;
       };`
   },
];

db.Snippet
   .remove({})
   .then(() => db.Snippet.collection.insertMany(snippetSeed))
   .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
   })
   .catch(err => {
      console.error(err);
      process.exit(1);
   });