db.studentsMarks.aggregate([
    {
        $bucket: {
          groupBy: "$percentage",
          boundaries: [ 60, 75, 80, 90, 100 ],
          default: "Avg Students",
          output: {
                count: {$sum: 1}
          }
        }
    }
])

db.studentsMarks.aggregate([
    {
        $bucketAuto: {
          groupBy: "$percentage",
          buckets: 3,
        }
    }
])

db.studentsMarks.aggregate([
    {
        $bucketAuto: {
          groupBy: "$percentage",
          buckets: 3,
          output: {
            count: {$sum: 1},
            avg_Percentage: {$avg: "$percentage"}
          }
        }
    }
])