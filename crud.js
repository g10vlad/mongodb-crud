module.exports.insertRegistro = function(db, callback){
	let collection = db.collection("alumnos")

	collection.insertMany([
		{nombre: "David Haller", edad: 10},
		{nombre: "Jack Wayne", edad: 40},
		{nombre: "Cyndi", edad: 18}
		], (error, result) => {
			console.log("Insert result: " + result.toString())
		}
	)
}

module.exports.deleteRegistro = function(db, callback){
	let collection = db.collection("alumnos")
	try{
		collection.deleteOne({edad: 40})
		console.log("The value has been deleted successfully!")
	}catch(e){
		console.log("An error occurred: " + e)
	}
}

module.exports.requestAndUpdating = function(db, callback){
	let collection = db.collection("alumnos")

	collection.find().toArray((error, documents) =>{
		if(error)console.log(error)
		console.log(documents)
		callback()
	})

	try{
		collection.updateOne({nombre: "David Haller"}, {$set: {edad: 25}})
		console.log("The value has ben updated successfully!")
	}catch(e){
		console.log("Value update error: " + e)
	}

	collection.find().toArray((error, documents) =>{
		if(error)console.log(error)
		console.log(documents)
		callback()
	})

}