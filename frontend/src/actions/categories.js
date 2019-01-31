export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';

export function getAllCategoriesPosts(categories) {
  return {
    type: GET_ALL_CATEGORIES,
    categories,
  }
}
