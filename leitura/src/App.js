import React, { Component } from 'react';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import AllPostsPage from './pages/AllPostsPage';
import PostsFromCategory from './pages/PostsFromCategory';
import PostDetail from './pages/PostDetail';
import EditPost from './pages/EditPost'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={AllPostsPage} />
          <Route path="/category/:catName" component={PostsFromCategory} />
          <Route path="/post/:title" component={PostDetail} />
          <Route path="/edit-post/:title" component={EditPost} />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
