import React, { Component, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import voteTypes from '../../helpers/voteTypes';

import { handleDeletePost, handlePostVote } from '../../actions/posts';
import { handleInitialData } from '../../actions/shared';

import CommentsLIst from '../CommentsLIst/CommentsLIst';

import * as Styled from './Post.styles';

const DATE_FORMAT = 'MMM Do YY';

class Post extends Component {
  state = {
    showConfirmDeleteButton: false,
    showActionButtons: false,
  }

  handleActionButtons = () => {
    this.setState({
      showActionButtons: !this.state.showActionButtons,
      showConfirmDeleteButton: false,
    })
  }

  handleConfirmDelete = () => {
    this.setState({
      showConfirmDeleteButton: !this.state.showConfirmDeleteButton,
    })
  }

  handlePostDelete = () => {
    const { dispatch, id, history } = this.props;
    dispatch(handleDeletePost(id))
    dispatch(handleInitialData()).then(history.push('/'));
  }

  goToPostEdit = (history, post) => (
    history.push({
      pathname: `/edit-post/${post.id}`,
      state: { post },
    })
  );

  postVote = (id, vote) => {
    const { dispatch } = this.props;
    return dispatch(handlePostVote(id, vote));
  }

  render() {
    const { showActionButtons, showConfirmDeleteButton } = this.state;
    const { classes, id, history } = this.props;
    const {
      title,
      category,
      author,
      voteScore,
      body,
      timestamp,
      commentCount,
    } = this.props.postDetail;
    const { upvote, downvote } = voteTypes;
    const date = moment(timestamp).format(DATE_FORMAT);

    return (
      <Styled.Container>
        <Typography color="textSecondary" gutterBottom>
          in: {category}
        </Typography>
        <Typography className={classes.postTitle} variant="h3" gutterBottom>
          {title}
        </Typography>
        <hr />
        <Typography color="textSecondary" gutterBottom>
          by: {author} / vote score: {voteScore} / Post date: {date}
        </Typography>
        <br />
        <Typography className={classes.postText} variant="body1" gutterBottom>
          {body}
        </Typography>
        <br />
        <Styled.CommentsContainer>
        <Badge color="primary" badgeContent={commentCount} >
          <Typography className={classes.padding} variant="h6" gutterBottom>
            Comments
          </Typography>
        </Badge>

          <Styled.CommentLine />
          <CommentsLIst postId={id} />
        </Styled.CommentsContainer>
        <Styled.PostActionsContainer>
          {showActionButtons &&
            <Fragment>
              <Fab
                title="UpVote"
                className={classes.actionButtom}
                onClick={() => this.postVote(id, upvote)}
                size="small"
                color="default"
              >
                <i className="fa fa-thumbs-up"></i>
              </Fab>
              <Fab
                title="DownVote"
                className={classes.actionButtom}
                onClick={() => this.postVote(id, downvote)}
                size="small"
                color="default"
              >
                <i className="fa fa-thumbs-down"></i>
              </Fab>
              <Fab
                title="Edit Post"
                className={classes.actionButtom}
                onClick={() => this.goToPostEdit(history, this.props.postDetail)}
                size="small"
                color="default"
              >
                <i className="fa fa-pencil-alt"></i>
              </Fab>
              {!showConfirmDeleteButton &&
                <Fab
                  title="Delete Post"
                  className={classes.actionButtom}
                  onClick={this.handleConfirmDelete}
                  size="small"
                  color="secondary"
                >
                  <i className="fa fa-trash"></i>
                </Fab>
              }
              {showConfirmDeleteButton &&
                <Fab
                  title="Delete Post"
                  className={classes.actionButtom}
                  onClick={() => this.handlePostDelete()}
                  size="small"
                  color="secondary"
                  variant="extended"
                >
                  <i className="fa fa-trash"></i>
                  <span className={classes.deleteConfirm}>Are you sure?</span>
                </Fab>
              }
            </Fragment>
          }
          <Fab
            className={showActionButtons ? classes.showActionButtons : ''}
            onClick={this.handleActionButtons}
            size="medium"
            color="default"
          >
            <i className="fa fa-plus"></i>
          </Fab>
        </Styled.PostActionsContainer>
      </Styled.Container>
    )
  }
}

export default withRouter(connect()(withStyles(Styled.styles)(Post)));
