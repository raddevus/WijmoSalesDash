import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';

import 'wijmo/styles/wijmo.css';
import { CollectionView } from 'wijmo/wijmo';
import { FlexGrid } from 'wijmo/wijmo.react.grid';

class App extends Component {
	constructor(props) {
		super(props);
		const bookGrid = document.getElementById('bookGrid');
		ReactDOM.render(<BookGrid />, bookGrid);
	}
	componentDidMount() {
		alert("argh!");
	}
	render(){
		return(null);
	}
}

class BookGrid extends React.Component {
  render() {
    return (
      <FlexGrid 
		  itemsSource={window.getBooks()}
		  loadedRows={function(s, e) { s.autoSizeColumns();}}
		  rowEditEnded={function(s, e) { s.autoSizeColumns();}}

	  />
    );
  }
}

export default App;
