import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { orderPostsByTime, orderPostsByvote } from '../../actions/posts';
import PostListItem from '../PostListItem/PostListItem';
import { handlePostVote } from '../../actions/posts';

import * as Styled from './PostList.styles';

// TODO: tratamento para postlist vazio

class PostList extends Component {
  postVote = (id, vote) => {
    const { dispatch } = this.props;
    return dispatch(handlePostVote(id, vote));
  }

  render() {
    const { dispatch, postList, postsOrdering, listTitle } = this.props;

    return (
      <Styled.Container>
        <Styled.TitleContainer>
          <Typography variant="h6" gutterBottom>
            {listTitle}
          </Typography>
          <Styled.OrderByWrapper>
            <Typography color="textSecondary">orderBy:</Typography>
              <Styled.OrderByButtons 
                active={postsOrdering.orderBy === 'date'}
                title="date"
                onClick={() => dispatch(orderPostsByTime(postList))} 
                className="fas fa-calendar"
              />
              <Styled.OrderByButtons 
                active={postsOrdering.orderBy === 'votescore'}
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

const mapStateToProps = ({ postsOrdering }) => {
  return {
    postsOrdering,
  }
}

export default connect(mapStateToProps)(PostList);
