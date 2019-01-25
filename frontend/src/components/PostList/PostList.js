import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { orderPostsByTime, orderPostsByvote } from '../../actions/posts';
import PostListItem from '../PostListItem/PostListItem';
import { handlePostVote } from '../../actions/posts';

import * as Styled from './PostList.styles';

class PostList extends Component {
  postVote = (id, vote) => {
    const { dispatch } = this.props;
    return dispatch(handlePostVote(id, vote));
  }

  render() {
    const { dispatch, postList } = this.props;
    return (
      <Styled.Container>
        <Styled.TitleContainer>
          <Typography variant="h6" gutterBottom>
            All Posts
          </Typography>
          <Styled.OrderByWrapper>
            <Typography color="textSecondary">orderBy:</Typography>
              <Styled.OrderByButtons 
                title="date"
                onClick={() => dispatch(orderPostsByTime(postList))} 
                className="fas fa-calendar"
              />
              <Styled.OrderByButtons 
                title="votescore" 
                onClick={() => dispatch(orderPostsByvote(postList))} 
                className="fas fa-thumbs-up"
              />
          </Styled.OrderByWrapper>
        </Styled.TitleContainer>
        <hr />

        <ul>
          {postList.map(post => (
            <PostListItem 
              postVote={this.postVote} 
              post={post} 
              key={post.id} 
            />
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
