import { getAllPosts } from '../api/ReadableApi';
import { receivePosts, orderPostsByvote } from '../actions/posts';

export function handleInitialData () {
  return dispatch => {
    return getAllPosts()
      .then((posts) => {
        dispatch(receivePosts(posts));
        dispatch(orderPostsByvote(posts));
      })
  }
}
