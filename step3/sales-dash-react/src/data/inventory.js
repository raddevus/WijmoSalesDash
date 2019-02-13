//inventory.json
// {id:,warehouseId:,bookId:,quantity:}
export function getInventory(){
	var allInventory = [
		{id:1,warehouseId:1,bookId:1,quantity:330},
		{id:2,warehouseId:1,bookId:2,quantity:839},
		{id:3,warehouseId:1,bookId:3,quantity:400},
		{id:4,warehouseId:1,bookId:4,quantity:587},
		{id:5,warehouseId:2,bookId:1,quantity:578},
		{id:6,warehouseId:2,bookId:2,quantity:223},
		{id:7,warehouseId:2,bookId:3,quantity:348},
		{id:8,warehouseId:2,bookId:4,quantity:585},
		{id:9,warehouseId:3,bookId:1,quantity:236},
		{id:10,warehouseId:3,bookId:2,quantity:832},
		{id:11,warehouseId:3,bookId:3,quantity:386},
		{id:12,warehouseId:3,bookId:4,quantity:990}
	];
	return allInventory;
}