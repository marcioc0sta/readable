import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData, handleGetAllCategories } from './actions/shared'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AllPostsPage from './pages/AllPostsPage';
import PostsFromCategory from './pages/PostsFromCategory';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
    dispatch(handleGetAllCategories());
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={AllPostsPage} />
          <Route path="/category/:catName" exact component={PostsFromCategory} />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
