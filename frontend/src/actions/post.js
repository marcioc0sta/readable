import { getPostDetail } from '../api/ReadableApi';

export const GET_POST_DETAIL = 'GET_POST_DETAIL';

function postDetail(post) {
  return {
    type: GET_POST_DETAIL,
    post,
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
