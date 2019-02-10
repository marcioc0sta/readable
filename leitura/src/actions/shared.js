import { getAllPosts, getAllCategories } from '../api/ReadableApi';
import { receivePosts, orderPostsByvote } from '../actions/posts';
import { getAllCategoriesPosts } from '../actions/categories';

export function handleInitialData () {
  return dispatch => {
    return getAllPosts()
      .then((posts) => {
        dispatch(receivePosts(posts));
        dispatch(orderPostsByvote(posts));
      })
  }
}

export function handleGetAllCategories () {
  return dispatch => {
    return getAllCategories()
      .then((result) => {
        dispatch(getAllCategoriesPosts(result.categories));
      })
  }
}
