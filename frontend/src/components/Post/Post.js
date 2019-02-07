import React, { Component, Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

import CommentsLIst from '../CommentsLIst/CommentsLIst';

import * as Styled from './Post.styles';

const DATE_FORMAT = 'MMM Do YY';

class Post extends Component {
  state = {
    showActionButtons: false,
  }

  handleActionButtons = () => {
    this.setState({
      showActionButtons: !this.state.showActionButtons,
    })
  }

  render() {
    const { showActionButtons } = this.state;
    const { classes, id } = this.props;
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
                onClick={() => {}}
                size="small"
                color="default"
              >
                <i className="fa fa-pencil-alt"></i>
              </Fab>
              <Fab
                className={classes.actionButtom}
                onClick={() => {}}
                size="small"
                color="secondary"
              >
                <i className="fa fa-trash"></i>
              </Fab>
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

export default withStyles(Styled.styles)(Post);
