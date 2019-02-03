import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import getCategoryName from '../helpers/getCategoryName';
import { handlePostsFromCategory } from '..//actions/categories';
import Header from '../components/Header/Header';
import PostList from '../components/PostList/PostList';
import CategoriesList from '../components/CategoriesList/CategoriesList';

class PostsFromCategory extends Component {
  componentDidMount() {
    const { dispatch, location } = this.props;
    dispatch(handlePostsFromCategory(getCategoryName(location.pathname)))
  }

  render() {
    const { postList, location } = this.props;
    const activeCategory = getCategoryName(location.pathname);

    return (
      <Fragment>
        <Header title="Readable app" />
        <CategoriesList />
        <PostList 
          listTitle={`All posts in: ${activeCategory}`} 
          postList={postList} 
        />
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
