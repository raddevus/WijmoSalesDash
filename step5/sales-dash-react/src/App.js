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
	  var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
      data = [];
		for (var i = 0; i < countries.length; i++) {
			data.push({
			  country: countries[i],
			  downloads: Math.round(Math.random() * 20000),
			  sales: Math.random() * 10000,
			  expenses: Math.random() * 5000
			});
		}
		return data;
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
				bindingX={'country'}
				series={[
					{ binding: 'sales', name: 'Sales' },
				  { binding: 'expenses', name: 'Expenses' },
				  { binding: 'downloads', name: 'Downloads' }
				]}
			  
			
			/>
    );
  }
}


export default App;
