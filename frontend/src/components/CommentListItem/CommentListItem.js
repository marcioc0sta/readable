import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './CommentListItem.styles';

const CommentListItem = props => {
  const { comment, classes } = props;
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
      <CardActions disableActionSpacing>
        card actions
      </CardActions>
    </Card>
  )
}

export default withStyles(styles)(CommentListItem);
