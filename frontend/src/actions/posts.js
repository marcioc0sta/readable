export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const ORDER_POSTS_BY_DATE = 'ORDER_POSTS_BY_DATE';
export const ORDER_POSTS_BY_VOTESCORE = 'ORDER_POSTS_BY_VOTESCORE';

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
