import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import { connect } from 'react-redux';
import { get } from 'lodash';

import { handleGetPostComments } from '../../actions/post'

import * as Styled from './Post.styles';

const DATE_FORMAT = 'MMM Do YY'

class Post extends Component {
  componentDidMount() {
    const { dispatch, id } = this.props;
    dispatch(handleGetPostComments(id));
  }

  render () {
    const { title, category, author, voteScore, body, timestamp, } = this.props.postDetail;
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
        {commentsList.map(item => {
          return console.log(item)
        })}
      </Styled.Container>
    )
  }
}

export default connect()(Post);
