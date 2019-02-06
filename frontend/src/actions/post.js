import { 
  getPostDetail,
  getPostComments,
  voteComment,
  addComment,
  editComment,
 } from '../api/ReadableApi';
 import guid from '../helpers/generateUUID';

export const GET_POST_DETAIL = 'GET_POST_DETAIL';
export const GET_POST_COMMENTS = 'GET_POST_COMMENTS';
export const ORDER_COMMENTS_BY_VOTESCORE = 'ORDER_COMMENTS_BY_VOTESCORE';
export const COMMENTVOTE = 'COMMENTVOTE';
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';

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
