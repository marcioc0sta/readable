import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import voteTypes from '../../helpers/voteTypes';

import Modal from '../Modal/Modal';
import EditCommentForm from '../EditCommentForm/EditCommentForm';

import { styles } from './CommentListItem.styles';

class CommentListItem extends Component {
  state = {
    open: false,
  };

  handleDialogOpen = () => {
    this.setState({ open: true });
  }

  handleDialogClose = () => {
    this.setState({ open: false });
  }

  renderDialog = comment => {
    return (
      <Modal
        title="Edit Comment"
        open={this.state.open}
        handleClose={this.handleClose}
      >  
        <EditCommentForm 
          comment={comment}
          handleDialogClose={this.handleDialogClose}
        />
      </Modal>
    )
  }

  render() {
    const { comment, classes, commentVote } = this.props;
    const { upvote, downvote } = voteTypes;

    return (
      <Card className={classes.commentCard}>
        <CardContent>
          <Typography className={classes.commentText} >
            {comment.body}
          </Typography>
          <Typography className={classes.textSecondary} color="textSecondary" gutterBottom>
            author: {comment.author} / voteScore: {comment.voteScore}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <div>
            <Button
              onClick={() => commentVote(comment.id, upvote)}
              className={classes.upVote}
              variant="outlined"
            >
              <i className="fas fa-thumbs-up"></i>
            </Button>
            <Button
              onClick={() => commentVote(comment.id, downvote)}
              variant="outlined"
            >
              <i className="fas fa-thumbs-down"></i>
            </Button>
          </div>
          <div>
            <Button
              title="Edit comment"
              onClick={() => this.handleDialogOpen()}
            >
              <i className="fas fa-pencil-alt"></i>
            </Button>
          </div>
        </CardActions>
        {this.renderDialog(comment)}
      </Card>
    )
  }
}

export default withStyles(styles)(CommentListItem);
