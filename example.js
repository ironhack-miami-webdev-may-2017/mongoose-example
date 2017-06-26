const mongoose = require('mongoose');

                               //   Name of database
                               //        |
mongoose.connect('mongodb://localhost/snapcat');
                               //        |
                               // use snapcat


const Cat = mongoose.model(
  'Cat',            // 1st argument -> Name of the model
  {                 // 2nd argument -> Schema object of the model
    name: String,
    breed: String,
    age: Number
  }
);


// Collection name from the model name
// 'Cat'  ->  'cats'  ->  db.cats.find()


// CRUD operations (mongoose version) ------------------------------------------

// C of CRUD (create)

// db.cats.insertOne({ name: 'Armani '})
const myKitty = new Cat({
  name: 'Armani',
  breed: 'Tuxedo Cat',
  age: 14,

  // this field is ignored because it's not in the SCHEMA
  favoriteToy: 'Water Glass'
});
myKitty.save((theError) => {
  // this CALLBACK is called when the save is finished!

  if (theError) {
    console.log('SHIT! Could not save Armani (not a life or death thing).');
  }

  else {
    console.log('YES! Saved Armani.');
  }
});


// db.cats.insertOne({ name: 'Nala' })
Cat.create(
  {
    name: 'Nala',
    breed: 'Part Lion',
    age: 1,

    // this field is ignored because it's not in the SCHEMA
    personality: 'Sassy'
  },

  (theError) => {
    // this CALLBACK is called when the save is finished!

    if (theError) {
      console.log('SHIT! Could not save Nala (not a life or death thing).');
    }

    else {
      console.log('YES! Saved Nala.');
    }
  }
);



// R of CRUD (read or retrieve)

// db.cats.find()
Cat.find((err, catResults) => {
  if (err) {
    console.log('FIND ERROR! 😔');
  }

  else {
    console.log('All the cats!!');

    catResults.forEach((oneCat) => {
      console.log('--> cat: ' + oneCat.name);
    });
  }
});


// db.cats.find(
//   { name: 'Nala' },
//   { name: 1, _id: 0 }
// )
Cat.find(
  { name: 'Nala' },        // 1st argument -> criteria object

  { name: 1, _id: 0 },     // 2nd argument -> projection object

  (err, nalaResults) => {  // 3rd argument -> callback that runs when finished
    if (err) {
      console.log('Nala find error 😡');
    }

    else {
      console.log('All the NALAs');

      nalaResults.forEach((oneNala) => {
        console.log('➥ cat: ' + oneNala.name);
      });
    }
  }
);


// Cat.findById()            R of CRUD
// Cat.findByIdAndUpdate()   U of CRUD
// Cat.findByIdAndRemove()   D of CRUD
