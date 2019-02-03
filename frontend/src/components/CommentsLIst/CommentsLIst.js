import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';

import { handleGetPostComments, handleCommentVote } from '../../actions/post';

import NoItems from '../NoItems/NoItems';
import CommentListItem from '../CommentListItem/CommentListItem';

import * as Styled from './CommentsLIst.styles'

class CommentsLIst extends Component {
  componentDidMount() {
    const { dispatch, postId } = this.props;
    dispatch(handleGetPostComments(postId));
  }

  commentVote = (id, vote) => {
    const { dispatch } = this.props;
    return dispatch(handleCommentVote(id, vote));
  }

  handleList = () => {
    const { post } = this.props;
    const commentsList = get(post, 'comments', []);

    if (commentsList.length === 0) {
      return (
        <NoItems>There are no comments :(</NoItems>
      )
    }

    return (
      <Styled.CommentsList>
        {commentsList.map(comment => (
          <li key={comment.id} >
            <CommentListItem commentVote={this.commentVote} comment={comment} />
          </li>
        ))}
      </Styled.CommentsList>
    )
  }

  render() {
    return this.handleList();
  }
}

const mapStateToProps = ({ post }) => {
  return {
    post,
  };
}

export default connect(mapStateToProps)(CommentsLIst);
