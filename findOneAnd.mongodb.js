db.newStudents.findOneAndUpdate(
    {course: "BTECH"},
    {$set: {Fees: "BTech"}}
)

db.newStudents.findOneAndUpdate(
    {name: "Arpit"},
    {$set: {Fees: 120000}},
    {
        returnDocument: "after",
        projection: {name: 1, Fees: 1}
    }
)

