import React, { Component, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import urlString from '../../helpers/urlString';

import { handleDeletePost } from '../../actions/posts';
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
      pathname: `/edit-post/${urlString(post.title)}`,
      state: {post},
    })
  );

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
    } = this.props.postDetail;

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
          by: {author} / voteScore: {voteScore} / Post date: {date}
        </Typography>
        <br />
        <Typography className={classes.postText} variant="body1" gutterBottom>
          {body}
        </Typography>
        <br />
        <Styled.CommentsContainer>
          <Typography className={classes.padding} variant="h6" gutterBottom>
            Comments
          </Typography>
          <Styled.CommentLine />
          <CommentsLIst postId={id} />
        </Styled.CommentsContainer>
        <Styled.PostActionsContainer>
          {showActionButtons &&
            <Fragment>
              <Fab
                className={classes.actionButtom}
                onClick={() => this.goToPostEdit(history, this.props.postDetail)}
                size="small"
                color="default"
              >
                <i className="fa fa-pencil-alt"></i>
              </Fab>
              {!showConfirmDeleteButton &&
                <Fab
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
