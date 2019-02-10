import { getCategoryPosts } from '../api/ReadableApi';

export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
export const GET_POSTS_FROM_CATEGORY = 'GET_POSTS_FROM_CATEGORY';

export function getAllCategoriesPosts(categories) {
  return {
    type: GET_ALL_CATEGORIES,
    categories,
  }
}

function postsFromCategory(posts) {
  return {
    type: GET_POSTS_FROM_CATEGORY,
    posts,
  }
}

export function handlePostsFromCategory(categoryName) {
  return dispatch => {
    return getCategoryPosts(categoryName)
      .then(result => {
        dispatch(postsFromCategory(result));
      })
      .catch(e => {
        console.warn('Error in getCategoryPosts: ', e);
      });
  };
};
