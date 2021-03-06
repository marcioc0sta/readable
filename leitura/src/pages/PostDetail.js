import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { handleGetPostDetail } from '../actions/post';

import Header from '../components/Header/Header';
import Post from '../components/Post/Post';

import Page404 from './Page404'

class PostDetail extends Component {
  componentDidMount() {
    const { dispatch, location } = this.props;
    dispatch(handleGetPostDetail(location.state.id));
  }

  render() {
    const { post, location } = this.props;
    return (
      <Fragment>
        {post.deleted || post.id === undefined
          ? <Page404 />
          : <Fragment>
              <Header title="Readable app" />
              <Post id={location.state.id} postDetail={post} />
            </Fragment>
        }
      </Fragment>
    )
  }
}

const mapStateToProps = ({ post }) => {
  return {
    post,
  }
}


export default withRouter(connect(mapStateToProps)(PostDetail));
