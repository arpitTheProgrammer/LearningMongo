db.Orders.aggregate( [
    {
       $match:
       {
          "date": { $gte: new ISODate( "2020-01-30" ), $lt: new ISODate( "2022-01-30" ) }
       }
    },


    {
       $group:
       {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
          totalOrderValue: { $sum: { $multiply: [ "$price", "$quantity" ] } },
          averageOrderQuantity: {$avg: "quantity"}
       }
    },
 
    // Arrenge in Descending Order
    {
       $sort: { totalOrderValue: -1 }
    }
 
  ] )


  db.newStudents.aggregate([
   {
      $match:{
         course: "BTech"
      }
   }, 
   {
      $count: "students"
   }
  ])

  db.newStudents.aggregate([
   {
      $match: {
         age: {$gt: 20}
      }
   },
   {
      $sort: {
         age: 1, name: 1
      }
   }
  ])

   db.newStudents.aggregate([
      {
         $sort: {
            name: 1, age: 1
         }
      },
      {
         $project: {
         name: 1, Fees: 1, _id: 0, age: 1,
         isValidAge: {$gt: ["age", 20]}
         }
      }
   ])

   db.newStudents.aggregate([
      {
         $match: {
            age: {$gt: 20}
         }
      },
      {
         $sort: {
            age: 1,
            name: 1
         }
      },
      {
         $project: {
           name: 1, age: 1, course: 1, _id: 0
         }
      },
      {
         $skip: 3
      },
      {
         $limit: 2
      }
   ])

   db.newStudents.aggregate([
      {
         $match: {
            age: {$gt: 20}
         }
      },
      {
         $group: {
            _id: "course",
            Students: {$push: "$course"},
            count: {$sum: 1}
         }
      }
   ])

   db.newStudents.aggregate([
      {
         $match: {
            age: {$gt: 19}
         }
      },
      {
         $group: {
            _id: "$course",
            NumberrOfStudents: {$sum: 1}
         }
      }
   ])

   db.newStudents.aggregate([
      {
         $match: {
            age: {$gt :19}
         }
      },
      {
         $group:{
            _id: "$course",
            NumberOfStudents: {$push: "$name"}
         }
      }
   ])

   db.newStudents.aggregate([
      {
         $match: {
            age: {$gt :19}
         }
      },
      {
         $group:{
            _id: "$course",
            Students: {$push: "$$ROOT"}
         }
      }
   ])

   db.newStudents.aggregate([
      {
         $group: {
            _id: "$course",
            Median_Age: {$median: {
               input: "$age",
               method: 'approximate'
            }}
         }
      }
   ])

   db.newStudents.aggregate([
      {
         $group: {
            _id: "$course",
            First_Students: { $first: "$name"}
         }
      }
   ])