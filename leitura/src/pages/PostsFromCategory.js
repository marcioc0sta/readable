import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import getCategoryName from '../helpers/getCategoryName';
import { handlePostsFromCategory } from '..//actions/categories';
import Header from '../components/Header/Header';
import PostList from '../components/PostList/PostList';
import CategoriesList from '../components/CategoriesList/CategoriesList';
import NoItems from '../components/NoItems/NoItems';

class PostsFromCategory extends Component {
  componentDidMount() {
    const { dispatch, location } = this.props;
    dispatch(handlePostsFromCategory(getCategoryName(location.pathname)))
  }

  handlePostList = () => {
    const { postList, location } = this.props;
    
    if (isEmpty(postList)) {
      return (<NoItems>No posts on this category :(</NoItems>);
    }

    const activeCategory = getCategoryName(location.pathname);

    return (
      <PostList
        listTitle={`All posts in: ${activeCategory}`}
        postList={postList}
      />
    )
  }

  render() {
    return (
      <Fragment>
        <Header title="Readable app" />
        <CategoriesList />
        {this.handlePostList()}
      </Fragment>
    )
  }
}

const mapStateToProps = ({ postsFromCategory }) => {
  const postList = [].concat(Object.values(postsFromCategory));
  return {
    postList,
  }
}


export default connect(mapStateToProps)(PostsFromCategory);
