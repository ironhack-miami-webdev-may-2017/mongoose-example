const mongoose = require('mongoose');

                               //   Name of database
                               //        |
mongoose.connect('mongodb://localhost/snapcat');
                               //        |
                               // use snapcat


const Cat = mongoose.model(
  'Cat',            // 1st argument -> Name of the model
  { name: String }  // 2nd argument -> Schema object of the model
);


// Collection name from the model name
// 'Cat'  ->  'cats'  ->  db.cats.find()


// CRUD operations (mongoose version) ------------------------------------------

// C of CRUD (create)

// db.cats.insertOne({ name: 'Armani '})
const myKitty = new Cat({ name: 'Armani' });
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
Cat.create({ name: 'Nala' }, (theError) => {
  // this CALLBACK is called when the save is finished!

  if (theError) {
    console.log('SHIT! Could not save Nala (not a life or death thing).');
  }

  else {
    console.log('YES! Saved Nala.');
  }
});
