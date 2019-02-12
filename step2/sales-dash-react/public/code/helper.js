// helper.js
// Helper methods to get data


function selectItems(propertyName, arrayOfItems, propertyValue){
	// #### Get the object(s) 
	// #### from the arrayOfItems
	// #### where value of propertyName is equal to the propertyValue
	// #### Returns an array of 0 or more values
	var outItems = [];
	for (var x = 0; x < arrayOfItems.length; x++){
		//console.log("arrayOfItems[x][idPropertyName] : " + arrayOfItems[x][idPropertyName]);
		if (arrayOfItems[x][propertyName] == propertyValue){
			//console.log(arrayOfItems[x][propertyName]);
			outValues.push(arrayOfItems[x]);
		}
	}
	return outItems;
}


function selectItemValuesById(propertyName, arrayOfItems, idPropertyName, id){
	// #### Get the value of the item (propertyName) 
	// #### from the arrayOfItems
	// #### where idPropertyName value is equal to the id value
	// #### Returns an array of 0 or more values
	var outValues = [];
	for (var x = 0; x < arrayOfItems.length; x++){
		//console.log("arrayOfItems[x][idPropertyName] : " + arrayOfItems[x][idPropertyName]);
		if (arrayOfItems[x][idPropertyName] == id){
			console.log(arrayOfItems[x][propertyName]);
			outValues.push(arrayOfItems[x][propertyName]);
		}
	}
	return outValues;
}

function selectItemsById(arrayOfItems, idPropertyName, id){
	// #### Get the object 
	// #### from the arrayOfItems
	// #### where idPropertyName value is equal to the id value
	// #### Returns an array of 0 or more objects
	var outItems =[];
	for (var x = 0; x < arrayOfItems.length; x++){
		//console.log("arrayOfItems[x][idPropertyName] : " + arrayOfItems[x][idPropertyName]);
		if (arrayOfItems[x][idPropertyName] == id){
			console.log(arrayOfItems[x]);
			outItems.push(arrayOfItems[x]);
		}
	}
	return outItems;
}

