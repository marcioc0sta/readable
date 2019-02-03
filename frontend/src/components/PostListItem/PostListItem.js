import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

import { styles } from'./PostListItem.styles';

import voteTypes from '../../helpers/voteTypes';
import urlString from '../../helpers/urlString';

const goToPostDetail = (history, title) => (
  history.push(`/post/${urlString(title)}`)
);

const PostListItem = props => {
  const { classes, post, postVote, history } = props;
  const { upvote, downvote } = voteTypes;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          in: {post.category}
        </Typography>
        <Typography variant="h5" component="h2">
          {post.title}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          author: {post.author} / voteScore: {post.voteScore}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions} disableActionSpacing>
        <Button 
          onClick={() => postVote(post.id, upvote)} 
          className={classes.upVote} 
          variant="outlined"
        >
          <i className="fas fa-thumbs-up"></i>
        </Button>
        <Button 
          onClick={() => postVote(post.id, downvote)} 
          variant="outlined"
        >
          <i className="fas fa-thumbs-down"></i>
        </Button>
        {/* todo: onlclick vai para rota do post */}
        <Button
          onClick={() => goToPostDetail(history, post.title)}
          className={classes.read}
          size="small"
          color="primary"
        >
          Read Post
        </Button>
      </CardActions>
    </Card>
  )
}

export default withRouter(withStyles(styles)(PostListItem));
