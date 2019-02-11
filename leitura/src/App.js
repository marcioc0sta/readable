import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import getCategoryName from './helpers/getCategoryName';
import categoriesArr from './helpers/categoriesArr';

import AllPostsPage from './pages/AllPostsPage';
import PostsFromCategory from './pages/PostsFromCategory';
import PostDetail from './pages/PostDetail';
import EditPost from './pages/EditPost'
import AddPostPage from './pages/AddPostPage';
import Page404 from './pages/Page404'

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={AllPostsPage} />
          <Route path="/add-post" component={AddPostPage} />
          <Route path="/post/:id" component={PostDetail} />
          <Route path="/edit-post/:id" component={EditPost} />
          <Route path="/:category" render={props => {
            const activeCategory = getCategoryName(props.location.pathname);
            const { categories } = this.props;
            if(!categories.includes(activeCategory)) return <Page404 />
            return <PostsFromCategory {...props} />
          }} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = ({ categories }) => {
  return {
    categories: categoriesArr(categories),
  }
}


export default connect(mapStateToProps)(App);
