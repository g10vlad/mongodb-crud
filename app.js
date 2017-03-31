var MongoClient = require('mongodb').MongoClient

var url = "mongodb://localhost/colegio"

var Operaciones = require('./crud.js')

MongoClient.connect(url, function(err, db){
	if (err)console.log(err)
	console.log("Connection successful")
	Operaciones.insertRegistro(db, (error, result) =>{
		if(error)console.log("Error trying to insert: " + error)
	})
})
