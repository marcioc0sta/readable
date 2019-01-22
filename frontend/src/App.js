import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared'
import Header from './components/Header/Header';

class App extends Component {
  componentDidMount () {
    const { dispatch } = this.props;
    dispatch(handleInitialData()) ;
  }
  render() {
    return (
      <div className="App">
        <Header title="Readable app" />
      </div>
    );
  }
}

export default connect()(App);
