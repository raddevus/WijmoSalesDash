import React, { Component } from 'react';
import './App.css';

import 'wijmo/styles/wijmo.css';
import { CollectionView } from 'wijmo/wijmo';
import { FlexGrid } from 'wijmo/wijmo.react.grid';

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
			authors: getAuthors()
		};
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
		return dto;//new CollectionView(dto);
	}
	
	render() {
		return (
			<div >
				<div id="adjustL">
				<BookGrid  books={this.state.dto} />
				</div>
				<div id="adjustR">
				<AuthorGrid authors={this.state.authors} />
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

class AuthorGrid extends React.Component {
  render() {
    return (
			<FlexGrid
				itemsSource={this.props.authors}
			/>
    );
  }
}


export default App;
