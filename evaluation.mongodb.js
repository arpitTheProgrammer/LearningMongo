// $regex

// Pattern
// {field: {$regex: /pattern/ <option>}}  "^S" start with "S" digits or "an$" and with an digits

db.newStudents.find({name: {$regex: "^S"}})
//$expr


//mod expression
db.newStudents.find({age: {$mod: [2,0]}})