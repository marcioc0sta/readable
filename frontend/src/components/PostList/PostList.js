import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { orderPostsByTime, orderPostsByvote } from '../../actions/posts';

import * as Styled from './PostList.styles';

class PostList extends Component {
  render() {
    const { dispatch, postList } = this.props;
    return (
      <Styled.Container>
        <Typography variant="h6" gutterBottom>
          All Posts
        </Typography>
        <hr />
        <button  onClick={() => dispatch(orderPostsByTime(postList))}>
          order by date
        </button>
        <button onClick={() => dispatch(orderPostsByvote(postList))}>
          order by vote
        </button>
        <ul>
          {postList.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </Styled.Container>
    )
  }
}

const mapStateToProps = ({ posts }) => {
  const postList = [].concat(Object.values(posts));
  return {
    postList
  }
}

export default connect(mapStateToProps)(PostList);
