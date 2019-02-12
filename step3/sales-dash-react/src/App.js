import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'wijmo/styles/wijmo.css';
import { CollectionView } from 'wijmo/wijmo';
import { FlexGrid } from 'wijmo/wijmo.react.grid';

class App extends Component {
	constructor(props) {
    super(props);
	this.bookAndAuthor = { 
      data: this.getData()
    };
  const bookList = document.getElementById('bookList');
	ReactDOM.render(<BookGrid />, bookList);
}

class BookGrid extends React.Component {
  render() {
	return ( 
		  <FlexGrid id="flexBookGrid" 
		  itemsSource={window.getBooks()}
		  loadedRows={function(s, e) { s.autoSizeColumn();}}
		  />
	);
}

export default App;
