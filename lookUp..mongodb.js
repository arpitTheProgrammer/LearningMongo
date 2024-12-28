db.library.aggregate([
    {
        $lookup: {
          from: "newStudents",
          localField: "student_id",
          foreignField: "_id",
          as: "studentsBook"
        }
    }
])

db.newStudents.aggregate([
    {
        $lookup: {
          from: "library",
          localField: "_id",
          foreignField: "student_id",
          as: "Book"
        }
    }
])

db.newStudents.aggregate([
    {
        $lookup: {
          from: "library",
          localField: "_id",
          foreignField: "student_id",
          as: "Book"
        }
    },
    {
        $unwind: "$Book"
    }
])

db.newStudents.aggregate([
    {
        $lookup: {
          from: "library",
          localField: "_id",
          foreignField: "student_id",
          as: "Book"
        }
    },
    {
        $replaceRoot: {
            newRoot: {
                $mergeObjects: [{
                    $arrayElemAt: ["$Book", 0]},
                    "$$ROOT"
                
                ]
            }
        }
    },
    {
        $project: {Book: 0}
    }
])