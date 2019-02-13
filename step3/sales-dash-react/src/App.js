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
			books: getBooks()
		};
	}
	
	render() {
		return (
			<div>
				<BookGrid books={this.state.books} />
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

export default App;
