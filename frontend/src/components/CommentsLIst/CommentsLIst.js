import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';

import { handleGetPostComments } from '../../actions/post';

class CommentsLIst extends Component {
  componentDidMount() {
    const { dispatch, postId } = this.props;

    dispatch(handleGetPostComments(postId));
  }
  render() {
    const { post } = this.props
    const commentsList = get(post, 'comments', []);

    return (
      <ul>
        {commentsList.map(comment => (
          <li key={comment.id} >{comment.id}</li>
        ))}
      </ul>
    )
  }
}

const mapStateToProps = ({ post }) => {
  return {
    post
  }
}

export default connect(mapStateToProps)(CommentsLIst);
