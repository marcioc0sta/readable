import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import moment from 'moment';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { withStyles } from '@material-ui/core/styles';

import { handleGetPostComments } from '../../actions/post'

import * as Styled from './Post.styles';

const DATE_FORMAT = 'MMM Do YY';

class Post extends Component {
  componentDidMount() {
    const { dispatch, id } = this.props;
    dispatch(handleGetPostComments(id));
  }

  render () {
    const { classes } = this.props;
    const { 
      title,
      category,
      author,
      voteScore,
      body,
      timestamp,
      commentCount,
    } = this.props.postDetail;

    const date = moment(timestamp).format(DATE_FORMAT);
    const commentsList = get(this.props.postDetail, 'comments', []);

    return (
      <Styled.Container>
        <Typography color="textSecondary" gutterBottom>
          in: {category}
        </Typography>
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
        <hr />
        <Typography color="textSecondary" gutterBottom>
          by: {author} / voteScore: {voteScore} / Post date: {date}
        </Typography>
        <br />
        <Typography variant="body1" gutterBottom>
          {body}
        </Typography>
        <br />
        <Styled.CommentsContainer>
          <Badge color="primary" className={classes.margin} badgeContent={commentCount}>
            <Typography  className={classes.padding} variant="h6" gutterBottom>
              Comments
            </Typography>
          </Badge>
          <Styled.CommentLine />
          <ul>
            {commentsList.map(item => (
              <li key={item.id} >{item.id}</li>
            ))}
          </ul>
        </Styled.CommentsContainer>
      </Styled.Container>
    )
  }
}

export default connect()(withStyles(Styled.styles)(Post));
