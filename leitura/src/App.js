import React, { Component } from 'react';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import AllPostsPage from './pages/AllPostsPage';
import PostsFromCategory from './pages/PostsFromCategory';
import PostDetail from './pages/PostDetail';
import EditPost from './pages/EditPost'
import AddPostPage from './pages/AddPostPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={AllPostsPage} />
          <Route path="/category/:catName" component={PostsFromCategory} />
          <Route path="/post/:title" component={PostDetail} />
          <Route path="/edit-post/:title" component={EditPost} />
          <Route path="/add-post" component={AddPostPage} />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
