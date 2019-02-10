import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';

import { handleGetPostComments, handleCommentVote } from '../../actions/post';

import Modal from '../Modal/Modal';
import AddCommentForm from '../AddCommentForm/AddCommentForm';
import AddCommentButton from '../AddCommentButton/AddCommentButton';
import NoItems from '../NoItems/NoItems';
import CommentListItem from '../CommentListItem/CommentListItem';

import * as Styled from './CommentsLIst.styles'

class CommentsLIst extends Component {
  state = {
    open: false,
  };

  handleDialogOpen = () => {
    this.setState({ open: true });
  }

  handleDialogClose = () => {
    this.setState({ open: false });
  }

  renderDialog = () => {
    const { post } = this.props;
    return (
      <Modal
        title="Add Comment"
        open={this.state.open}
        handleClose={this.handleClose}
      >  
        <AddCommentForm 
          parentId={post.id}
          handleDialogClose={this.handleDialogClose}
        />
      </Modal>
    )
  }

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
        <Fragment>
          <NoItems>There are no comments :(</NoItems>
          <AddCommentButton handleDialogOpen={this.handleDialogOpen} />
          {this.renderDialog()}
        </Fragment>
      )
    }

    return (
      <Styled.CommentsList>
        {commentsList.map(comment => (
          <li key={comment.id} >
            <CommentListItem commentVote={this.commentVote} comment={comment} />
          </li>
        ))}
        <AddCommentButton handleDialogOpen={this.handleDialogOpen} />
        {this.renderDialog()}
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
