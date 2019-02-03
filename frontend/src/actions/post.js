import { getPostDetail, getPostComments } from '../api/ReadableApi';

export const GET_POST_DETAIL = 'GET_POST_DETAIL';
export const GET_POST_COMMENTS = 'GET_POST_COMMENTS';

function postDetail(post) {
  return {
    type: GET_POST_DETAIL,
    post,
  }
}

function postComments(comments) {
  return {
    type: GET_POST_COMMENTS,
    comments,
  }
}

export function handleGetPostComments(id) {
  return dispatch => {
    return getPostComments(id)
      .then(result => {
        dispatch(postComments(result));
      })
      .catch(e => {
        console.warn('Error in getPostComments: ', e);
      });
  }
}

export function handleGetPostDetail(id) {
  return dispatch => {
    return getPostDetail(id)
      .then(result => {
        dispatch(postDetail(result));
      })
      .catch(e => {
        console.warn('Error in getPostDetail: ', e);
      });
  }
}
