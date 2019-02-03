import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { handleGetPostComments, handleCommentVote } from '../../actions/post';

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
    return (
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Add a new post"}</DialogTitle>
        <DialogContent>
          add post form passando id do post para o parentID
        </DialogContent>
      </Dialog>
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
        <Styled.ButtonWrapper>
          <Button
            variant="contained"
            onClick={this.handleDialogOpen}
            color="primary"
          >
            Add Comment
          </Button>
        </Styled.ButtonWrapper>
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
