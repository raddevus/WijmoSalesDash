//invoiceLineItem
// {id:,saleDate:,quantity:,salePriceEach:,salesRepId:,bookstoreId:,bookId:,warehouseId:}
export function getLineItems(){
	var allLineItems = [
		{id:1,saleDate:"2018-05-01",quantity:300,salePriceEach:2.50,salesRepId:1,bookstoreId:1,bookId:1,warehouseId:1},
		{id:2,saleDate:"2018-05-01",quantity:370,salePriceEach:3.25,salesRepId:1,bookstoreId:1,bookId:1,warehouseId:2},
		{id:3,saleDate:"2018-05-01",quantity:480,salePriceEach:1.75,salesRepId:1,bookstoreId:2,bookId:1,warehouseId:3},
		{id:4,saleDate:"2018-05-02",quantity:220,salePriceEach:2.21,salesRepId:1,bookstoreId:3,bookId:1,warehouseId:3},
		{id:5,saleDate:"2018-05-01",quantity:250,salePriceEach:1.75,salesRepId:1,bookstoreId:3,bookId:1,warehouseId:4}
	];
	return allLineItems;
}