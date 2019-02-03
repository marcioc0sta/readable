import { votePost, addPost } from '../api/ReadableApi';
import guid from '../helpers/generateUUID';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const ORDER_POSTS_BY_DATE = 'ORDER_POSTS_BY_DATE';
export const ORDER_POSTS_BY_VOTESCORE = 'ORDER_POSTS_BY_VOTESCORE';
export const POSTVOTE = 'POSTVOTE';
export const ADD_POST = 'ADD_POST';

export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts,
  }
}

export function orderPostsByTime(posts) {
  return {
    type: ORDER_POSTS_BY_DATE,
    posts,
  }
}

export function orderPostsByvote(posts) {
  return {
    type: ORDER_POSTS_BY_VOTESCORE,
    posts,
  }
}

function postVote(post) {
  return {
    type: POSTVOTE,
    post,
  }
}

export function handlePostVote(id, vote) {
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

function addPostAction(post) {
  return {
    type: ADD_POST,
    post,
  }
}

export function handleAddPost(postContent) {
  const post = {
    id: guid(),
    timestamp: postContent.timestamp,
    title: postContent.title,
    body: postContent.body,
    author: postContent.author,
    category: postContent.category,
  }
  return dispatch => {
    return addPost(post)
      .then(result => dispatch(addPostAction(result)))
      .catch(e => {
        console.warn('Error in addPost: ', e);
      });
  }
}
