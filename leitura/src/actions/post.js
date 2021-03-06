import { 
  getPostDetail,
  getPostComments,
  voteComment,
  addComment,
  editComment,
  deleteComment,
  editPost,
 } from '../api/ReadableApi';
 import guid from '../helpers/generateUUID';

export const GET_POST_DETAIL = 'GET_POST_DETAIL';
export const GET_POST_COMMENTS = 'GET_POST_COMMENTS';
export const ORDER_COMMENTS_BY_VOTESCORE = 'ORDER_COMMENTS_BY_VOTESCORE';
export const COMMENTVOTE = 'COMMENTVOTE';
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const EDIT_POST = 'EDIT_POST';

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

export function orderCommentsByvote(comments) {
  return {
    type: ORDER_COMMENTS_BY_VOTESCORE,
    comments,
  }
}

function commentVote(comment) {
  return {
    type: COMMENTVOTE,
    comment,
  }
}

function addCommentAction(comment) {
  return {
    type: ADD_COMMENT,
    comment,
  }
}

function editCommentAction(comment) {
  return {
    type: EDIT_COMMENT,
    comment,
  }
}

function deleteCommentAction(comment) {
  return {
    type: DELETE_COMMENT,
    comment,
  }
}

function editPostAction(post) {
  return {
    type: EDIT_POST,
    post,
  }
}

export function handleEditPost(id, editOptions){
  return dispatch => {
    return editPost(id, editOptions)
      .then(result => dispatch(editPostAction(result)))
      .catch(e => {
        console.warn('Error in editPost: ', e);
      });
  }
}

export function handleDeleteComment(id) {
  return dispatch => {
    return deleteComment(id)
    .then(result => dispatch(deleteCommentAction(result)))
    .catch(e => {
      console.warn('Error in deleteComment: ', e);
    });
  }
}

export function handleEditComment(id, editOptions) {
  return dispatch => {
    return editComment(id, editOptions)
      .then(result => dispatch(editCommentAction(result)))
      .catch(e => {
        console.warn('Error in editComment: ', e);
      });
  }
}

export function handleAddComment(parentId, commentContent) {
  const comment = {
    id: guid(),
    timestamp: commentContent.timestamp,
    body: commentContent.body,
    author: commentContent.author,
  }
  return dispatch => {
    return addComment(parentId, comment)
      .then(result => dispatch(addCommentAction(result)))
      .catch(e => {
        console.warn('Error in addComment: ', e);
      });
  }
}

export function handleCommentVote(id, vote) {
  return dispatch => {
    return voteComment(id, vote)
      .then(result => {
        dispatch(commentVote(result));
      })
      .catch(e => {
        console.warn('Error in voteComment: ', e);
      });
  };
};


export function handleGetPostComments(id) {
  return dispatch => {
    return getPostComments(id)
      .then(result => {
        dispatch(postComments(result));
        dispatch(orderCommentsByvote(result));
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
