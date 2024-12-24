
use('SigmaDatabase');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany([
    {
      "name": "Java",
      "Price": 20000,
      "Instructor": "Arpit"
    },
    {
      "name": "Python",
      "Price": 15000,
      "Instructor": "Priya"
    },
    {
      "name": "Data Science",
      "Price": 25000,
      "Instructor": "Ravi"
    },
    {
      "name": "Web Development",
      "Price": 18000,
      "Instructor": "Sonia"
    },
    {
      "name": "Machine Learning",
      "Price": 30000,
      "Instructor": "Amit"
    },
    {
      "name": "Android Development",
      "Price": 22000,
      "Instructor": "Neha"
    }
  ]
  );

console.log('Done Inserting Data');
