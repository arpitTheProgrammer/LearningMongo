db.newStudents.aggregate([
    {
        $match: {
          course: "BTech"
        }
    },
    {
        $out: "Btech_Students" // It Creates a New Document Of all Btech Students
    }
])

db.newStudents.aggregate([
    {
        $group: {
          _id: "$course",
          Students: {$push: "$name"} 
        }
    },
    {
        $out: "class_Data"
    }
])

db.studentsData.aggregate([
    {
        $merge: { // It use To Merge Data with another Data
            into: "Info_Students",
            on: "_id",
            whenMatched: "merge",
            whenNotMatched: "insert"
        }
    }
])