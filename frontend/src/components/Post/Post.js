import React from 'react';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

import * as Styled from './Post.styles';

const DATE_FORMAT = 'MMM Do YY'

const Post = props => {
  const { title, category, author, voteScore, body, timestamp } = props.postDetail;

  const date = moment(timestamp).format(DATE_FORMAT);
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
      <br/>
      <Typography variant="body1" gutterBottom>
        {body}
      </Typography>
    </Styled.Container>
  )
}

export default Post;
