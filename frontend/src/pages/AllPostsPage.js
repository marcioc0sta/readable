import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header/Header';
import PostList from '../components/PostList/PostList';
import CategoriesList from '../components/CategoriesList/CategoriesList';

const AllPostsPage = props => {
  const { postList } = props;

  return (
    <Fragment>
      <Header title="Readable app" />
      <CategoriesList />
      <PostList listTitle="All Posts" postList={postList} />
    </Fragment>
  )
}

const mapStateToProps = ({ posts }) => {
  const postList = [].concat(Object.values(posts));
  return {
    postList,
  }
}

export default  connect(mapStateToProps)(AllPostsPage);
