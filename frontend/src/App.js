import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData, handleGetAllCategories } from './actions/shared'
import Header from './components/Header/Header';
import PostList from './components/PostList/PostList';

class App extends Component {
  componentDidMount () {
    const { dispatch } = this.props;
    dispatch(handleInitialData()) ;
    dispatch(handleGetAllCategories());
  }
  render() {
    return (
      <div className="App">
        <Header title="Readable app" />
        <PostList />
      </div>
    );
  }
}

export default connect()(App);
