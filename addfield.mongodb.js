db.studentsData.aggregate([
    {
        $addFields: { // This can Also change the existing data e.g: if we pass _id on the place of fullName
          fullName: {$concat: ["$firstName", " ", "$lastName"]}
        }
    }
])

db.studentsData.aggregate([
    {
        $addFields: {
          fullName: {$concat: ["$firstName", " ", "$lastName"]},
          lastName: "$$REMOVE" // This is will remove the lastName from the Data
        }
    },
])

db.studentsData.aggregate([
    {
        $project: {
            fullName: {$concat: ["$firstName", " ", "$lastName"]}
        }
    }
])

db.studentsData.aggregate([
    {
        $addFields: {
          fullName: {$concat: ["$firstName", " ", "$lastName"]},
          lastName: "$$REMOVE" // This is will remove the lastName from the Data
        }
    },
])

db.studentsData.aggregate([
    {
        $addFields: {
          fullName: {$concat: ["$firstName", " ", "$lastName"]},
          lastName: "$$REMOVE", // This is will remove the lastName from the Data
          city: {
            $cond:{
                if: {$eq: ["$city", "Delhi"]},
                then: "$$REMOVE",
                else: "$city"
            }
          }
        }   
    },
])

db.studentsData.aggregate([
    {
        $addFields: {
          fullName: {$concat: ["$firstName", " ", "$lastName"]},
          lastNName: "$$REMOVE",
          "profile.age" : 30,
        }
    }
])

db.studentsData.aggregate([
    {
        $match: {
            _id: 1
        }
    },
    {
        $addFields: {
          fullName: {$concat: ["$firstName", " ", "$lastName"]},
          lastName: "$$REMOVE",
          "profile.age" : 25,
        }
    }
])


db.studentsData.aggregate([
    {
        $match: {
            _id: 1
        }
    },
    {
        $addFields: {
          fullName: {$concat: ["$firstName", " ", "$lastName"]},
          lastName: "$$REMOVE",
          "profile.age" : 25,
          totalMarks: {$sum: "$marks"},
          averageMarks: {$avg: "$marks"}
        }
    }
])