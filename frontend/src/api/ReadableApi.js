const api = 'http://localhost:3001';

let token = localStorage.token
if (!token) token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
  'Content-Type': 'application/json',
}

//  Get all of the categories available for the app.
export const getAllCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err))

// Get all of the posts for a particular category
export const getCategoryPosts = category => 
  fetch(`${api}/${category}/posts`, { headers })
  .then(res => res.json())
  .then(data => data)
  .catch(err => console.log(err))

// Get all of the posts. Useful for the main page when no category is selected.
export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err))

// Add a new post
export const addPost = async (post) => {
  const rawResponse = await fetch(`${api}/posts`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      id: post.id,
      timestamp: post.timestamp,
      title: post.title,
      body: post.body,
      author: post.author,
      category: post.category,
    })
  })
  const content = await rawResponse.json();
  return content;
}

// Get the details of a single post
export const getPostDetail = id => 
  fetch(`${api}/posts/${id}`, { headers })
  .then(res => res.json())
  .then(data => data)
  .catch(err => console.log(err))

// Used for voting on a post
export const votePost = async (id, vote) => {
  const rawResponse = await fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      option: vote,
    })
  })
  const content = await rawResponse.json();
  return content;
}

// Edit the details of an existing post
export const editPost = async (id, editOptions) => {
  const rawResponse = await fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({
      title: editOptions.title,
      body: editOptions.body,
    })
  })
  const content = await rawResponse.json();
  return content;
}

// Delete a post
export const deletePost = id => 
  fetch(`${api}/posts/${id}`, { method: 'DELETE', headers, })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err))

// Get all the comments for a single post
export const getPostComments = id => 
  fetch(`${api}/posts/${id}/comments`, { headers })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err))

// Add a comment to a post
export const addComment = async (parentId, postComment) => {
  const rawResponse = await fetch(`${api}/comments`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      id: postComment.id,
      timestamp: postComment.timestamp,
      body: postComment.body,
      author: postComment.author,
      parentId,
    })
  })
  const content = await rawResponse.json();
  return content;
}

// Get the details for a single comment
export const getCommentById = id => 
  fetch(`${api}/comments/${id}`, { headers })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err))

// Used for voting on a comment.
export const voteComment = async (id, vote) => {
  const rawResponse = await fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      option: vote,
    })
  })
  const content = await rawResponse.json();
  return content;
}

// Edit the details of an existing comment
export const editComment = async (id, editOptions) => {
  const rawResponse = await fetch(`${api}/comments/${id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({
      timestamp: editOptions.timestamp,
      body: editOptions.body,
    })
  })
  const content = await rawResponse.json();
  return content;
}

// Delete a post
export const deleteComment = id => 
  fetch(`${api}/comments/${id}`, { method: 'DELETE', headers, })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err))
