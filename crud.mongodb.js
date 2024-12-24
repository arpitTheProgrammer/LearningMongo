use("crudDb")
// console.log(db)

//Create Collection
db.createCollection("courses")

//insert 
db.courses.insertOne({name: "Arpit Web Dev free course",
    price: 0,
    assignment: 12,
    projects: 20
})

const doc0 = db.courses.insertMany(
    [
        {
          "name": "Arpit Web Dev free course",
          "price": 0,
          "assignment": 12,
          "projects": 20
        },
        {
          "name": "JavaScript Essentials",
          "price": 0,
          "assignment": 10,
          "projects": 15
        },
        {
          "name": "Python Programming for Beginners",
          "price": 0,
          "assignment": 8,
          "projects": 12
        },
        {
          "name": "React Development Bootcamp",
          "price": 0,
          "assignment": 15,
          "projects": 25
        },
        {
          "name": "Web Development Basics",
          "price": 0,
          "assignment": 5,
          "projects": 8
        },
        {
          "name": "Full Stack JavaScript",
          "price": 0,
          "assignment": 18,
          "projects": 22
        },
        {
          "name": "Introduction to CSS and HTML",
          "price": 0,
          "assignment": 6,
          "projects": 10
        },
        {
          "name": "Node.js for Beginners",
          "price": 0,
          "assignment": 12,
          "projects": 18
        },
        {
          "name": "Angular Fundamentals",
          "price": 0,
          "assignment": 10,
          "projects": 15
        },
        {
          "name": "Machine Learning with Python",
          "price": 0,
          "assignment": 14,
          "projects": 20
        },
        {
          "name": "Intro to Data Science",
          "price": 0,
          "assignment": 8,
          "projects": 12
        }
      ]      
)

let doc = db.courses.findOne({price: 0})
// console.log(doc)

//Update Documents

db.courses.updateOne({price:0}, {$set:{price:100}})

db.courses.updateMany({price:0}, {$set:{price:150}})
//Delete 

// db.courses.deleteOne({price:100})


// db.courses.find().skip(1)
// db.courses.find().sort({projects: -1}) //Decreasing order by number of projects

let doc1 =  db.courses.find().skip(2)

// console.log(doc1.count())
// console.log(doc0.count())

// db.courses.find().limit(2)

// db.courses.find({projects: {$gt: 10}})
db.courses.find({projects: {$in: [10, 8]}})

db.courses.deleteOne({name: "Salman Khan"})