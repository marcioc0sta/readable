import React, { Fragment } from 'react'

import Header from '../components/Header/Header';
import EditPostForm from '../components/EditPostForm/EditPostForm'

const EditPost = props => {
  const { location } = props;
  return(
    <Fragment>
      <Header title="Readable app" />
      <EditPostForm post={location.state.post} />
    </Fragment>
  )
}

export default EditPost;
