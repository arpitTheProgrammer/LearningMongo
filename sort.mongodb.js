db.employees.find().limit(1)
// limit shows only limited documents
db.employees.find().skip(1)
// Skip will skip the Document

db.employees.find().sort({Fee: 1})
// sort is use to sort the Document. 1 For Increasing,  -1 for Decreasing