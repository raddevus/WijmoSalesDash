import React, { Component } from 'react';
import './App.css';

import 'wijmo/styles/wijmo.css';
import { CollectionView } from 'wijmo/wijmo';
import { FlexGrid } from 'wijmo/wijmo.react.grid';
import { FlexChart } from 'wijmo/wijmo.react.chart';

import { helper } from './code/helper';
import { getAuthors } from './data/author';
import { getBooks } from './data/book';
import { getBookStores } from './data/bookstore'
import { getInventory } from './data/inventory'
import { getLineItems } from './data/invoiceLineItem'
import { getSalesReps } from './data/salesrep'
import { getWarehouses } from './data/warehouse'

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dto: this.buildDTO(),
			authors: this.buildDTO(),
			data:this.getChartData()
		};
		window.chartData = this.getChartData();	
	}
	
	buildDTO() {
		var books = getBooks();
		var authors = getAuthors();
		var dto = [];
		for (var i = 0; i < books.length; i++) {
		  dto.push({
			title: books[i].title,
			authorName: new helper().selectItemValuesById("name", authors, "id",books[i].authorId)[0],
			genre: books[i].genre,
			printCost: books[i].printCost,
		  });
		}
		console.log(dto);
		return dto;
	}
	
	getChartData(){
	  var h = new helper();
	  var bookstores = h.selectItems("name",getBookStores());
      var data = [];
		for (var i = 0; i < bookstores.length; i++) {
			data.push({
			  bookstore: bookstores[i].name + "("+ bookstores[i].location + ")",
			  sales: this.calculateSalesAndQuantityByStore(h,bookstores[i].id)[0],
			  quantity: this.calculateSalesAndQuantityByStore(h,bookstores[i].id)[1],
			  expenses: this.calculateCostOfGoodsSold(h,bookstores[i].id),
			  salesRepDollars : this.calculateSalesBySalesRep(h,bookstores[i].id,1)
			});
		}
		return data;
	}
	
	calculateCostOfGoodsSold(helper,storeId){
		var lineItems = helper.selectItemsById(getLineItems(), "bookstoreId", storeId);
		var bookCost = 0;
		for (var itemCount = 0; itemCount < lineItems.length;itemCount++){
			bookCost += helper.selectItemValuesById("printCost", getBooks(), "id", lineItems[itemCount].bookId) * lineItems[itemCount].quantity;
		}
		return bookCost;
	}
	
	calculateSalesAndQuantityByStore(helper,storeId){
		// returns array of two values 
		// [0] is totalSales
		// [1] is quantity sold
		console.log(storeId);
		var lineItems = helper.selectItemsById(getLineItems(), "bookstoreId", storeId);
		console.log(lineItems);
		var totalStoreSales = 0;
		var totalStoreQuantity = 0;
		for (var itemCount = 0; itemCount < lineItems.length;itemCount++){
			totalStoreSales += lineItems[itemCount].quantity * lineItems[itemCount].salePriceEach;
			totalStoreQuantity += lineItems[itemCount].quantity;
		}
		var salesAndQuantity = [];
		salesAndQuantity.push(totalStoreSales);
		salesAndQuantity.push(totalStoreQuantity);
		return salesAndQuantity;
	}
	
	calculateSalesBySalesRep(helper,storeId,salesRepId){
		var lineItems = helper.selectItemsById(getLineItems(), "bookstoreId", storeId);
		var repSales = 0;
		for (var itemCount = 0; itemCount < lineItems.length;itemCount++){
			if (lineItems[itemCount].salesRepId == salesRepId){
				repSales += lineItems[itemCount].salePriceEach * lineItems[itemCount].quantity;
				console.log("repSales : " + repSales);
			}
		}
		return repSales;
	}
	
	render() {
		return (
			<div >
				<div id="adjustL">
				<BookGrid  books={this.state.dto} />
				</div>
				<div id="adjustR">
				<SalesChart data={this.state.data} />
				</div>
			</div>
		);
	}
}

class BookGrid extends React.Component {
  render() {
    return (
			<FlexGrid
				itemsSource={this.props.books}
			/>
    );
  }
}

class SalesChart extends React.Component {
  render() {
    return (
			<FlexChart
				itemsSource={this.props.data}
				bindingX={'bookstore'}
				series={[
					{ binding: 'sales', name: 'Sales' },
				  { binding: 'expenses', name: 'Cost of Goods' },
				  { binding: 'quantity', name: 'Books Sold' },
				  { binding: 'salesRepDollars', name: 'SalesRep1 Dollars', chartType:'LineSymbols' }
				]}
			/>
    );
  }
}


export default App;
