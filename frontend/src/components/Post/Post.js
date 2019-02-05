import React from 'react';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';

import CommentsLIst from '../CommentsLIst/CommentsLIst';

import * as Styled from './Post.styles';

const DATE_FORMAT = 'MMM Do YY';

const Post = props => {
  const { classes, id } = props;
  const {
    title,
    category,
    author,
    voteScore,
    body,
    timestamp,
    commentCount,
  } = props.postDetail;

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
    </Styled.Container>
  )
}

export default withStyles(Styled.styles)(Post);
