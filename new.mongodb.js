db.createCollection("Course", {validator: {$jsonSchema: {title: "Courses Object validation", required: ["name", "price", "Instructor"], properties: {name: {bsonType: "string", description: "Name Must Be String"}, price: {bsonType: "int",description: "Price Must Be Integer"}, Instructor: {bsonType: "string", description: "Instructor Must be String" }}}}})

db.runCommand({
    collMod: 'courses',
    validator: {
        $jsonSchema: {
            title: "Validation Error", 
            required: ["name", "Price", "Instructor"],
            properties : {
                name: {
                    bsonType: "string",
                    description: "Name Must be String"
                },
                Price: {
                    bsonType: "int",
                    description: "Price Must be Integer"
                },
                Instructor: {
                    bsonType: "string",
                    description: "Instructor Must be String"  
                }
            }
        }
    }
})

db.runCommand({
    collMod: 'courses',
    validator:{
        $jsonSchema:{
            required: ["name", "price", "Instructor"],
            properties: {
                name: {
                    bsonType: "string",
                    description: "Instructor Must be String"
                },
                price: {
                    bsonType: "int",
                    description: "Price should be in integer"
                }, 
                Instructor: {
                    bsonType: "string",
                    description: "Instructor should be in String"
                }
            }
        }
    }
})

db.runCommand({
    collMod: 'students',
    validator: {
        $jsonSchema:{
            required:["name", "Fee", "course"],
            properties: {
                name: {
                    bsonType: "string",
                    description: "Name should be String"
                },
                Fee: {
                    bsonType: "int",
                    description: "Fee should be in integer"
                },
                course: {
                    bsonType: "string",
                    description: "Course should be in String"
                }
            }
        }
    }
})

    db.runCommand({
        collMod: "newStudents",
        validator: {
            $jsonSchema: {
                required: ["name", "age", "Fees", "course"],
                properties: {
                name: {
                    bsonType: "string",
                    description: "Name should be String"
                },
                age: {
                    bsonType: "int",
                    description: "Age should be int"
                },
                Fees: {
                    bsonType: "int",
                    description: "Fees should be Integer"
                },
                course: {
                    bsonType: "string",
                    description: "Course should be String"
                }
            }
            }
        }
    })

