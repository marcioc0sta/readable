import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';

import { handleGetPostComments } from '../../actions/post';

import CommentListItem from '../CommentListItem/CommentListItem';

import * as Styled from './CommentsLIst.styles'

class CommentsLIst extends Component {
  componentDidMount() {
    const { dispatch, postId } = this.props;

    dispatch(handleGetPostComments(postId));
  }
  render() {
    const { post } = this.props
    const commentsList = get(post, 'comments', []);

    return (
      <Styled.CommentsList>
        {commentsList.map(comment => (
          <li key={comment.id} >
            <CommentListItem comment={comment} />
          </li>
        ))}
      </Styled.CommentsList>
    )
  }
}

const mapStateToProps = ({ post }) => {
  return {
    post
  }
}

export default connect(mapStateToProps)(CommentsLIst);
