import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { handleInitialData, handleGetAllCategories } from '../actions/shared';

import Header from '../components/Header/Header';
import PostList from '../components/PostList/PostList';
import CategoriesList from '../components/CategoriesList/CategoriesList';

class AllPostsPage extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
    dispatch(handleGetAllCategories());
  }
  
  render() {
    const { postList } = this.props;

    return (
      <Fragment>
        <Header title="Readable app" />
        <CategoriesList />
        <PostList listTitle="All Posts" postList={postList} />
      </Fragment>
    )
  }
}

const mapStateToProps = ({ posts }) => {
  const postList = [].concat(Object.values(posts));
  return {
    postList,
  }
}

export default  connect(mapStateToProps)(AllPostsPage);
