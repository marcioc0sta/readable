import { votePost } from '../api/ReadableApi';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const ORDER_POSTS_BY_DATE = 'ORDER_POSTS_BY_DATE';
export const ORDER_POSTS_BY_VOTESCORE = 'ORDER_POSTS_BY_VOTESCORE';
export const POSTVOTE = 'POSTVOTE';

export function receivePosts (posts) {
  return {
    type: RECEIVE_POSTS,
    posts,
  }
}

export function orderPostsByTime (posts) {
  return {
    type: ORDER_POSTS_BY_DATE,
    posts,
  }
}

export function orderPostsByvote (posts) {
  return {
    type: ORDER_POSTS_BY_VOTESCORE,
    posts,
  }
}

function postVote (post) {
  return {
    type: POSTVOTE,
    post,
  }
}

export function handlePostVote (id, vote) {
  return dispatch => {
    return votePost(id, vote)
      .then(result => {
        dispatch(postVote(result));
      })
      .catch(e => {
        console.warn('Error in votePost: ', e);
      });
  };
};
