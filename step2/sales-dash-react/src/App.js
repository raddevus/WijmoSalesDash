import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'wijmo/styles/wijmo.css';
import { CollectionView } from 'wijmo/wijmo';
import { FlexGrid } from 'wijmo/wijmo.react.grid';

class App extends Component {
  render() {
    return (
		<div className="App">
			Hello, Wijmo!
		</div>
    );
  }
}

export default App;
