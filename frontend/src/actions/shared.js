import { getAllPosts } from '../api/ReadableApi';
import { receivePosts } from '../actions/posts';

export function handleInitialData () {
  return dispatch => {
    return getAllPosts()
      .then((posts) => {
        dispatch(receivePosts(posts));
      })
  }
}
