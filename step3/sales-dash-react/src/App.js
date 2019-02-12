import React, { Component } from 'react';
import './App.css';

import 'wijmo/styles/wijmo.css';
import { CollectionView } from 'wijmo/wijmo';
import { FlexGrid } from 'wijmo/wijmo.react.grid';

import { getBooks } from './data/book';

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
			<>
				<FlexGrid
					itemsSource={this.props.books}
				/>
			</>
    );
  }
}

export default App;
