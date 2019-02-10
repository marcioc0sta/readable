import React, { Fragment } from 'react'

import Header from '../components/Header/Header';
import AddPostForm from '../components/AddPostForm/AddPostForm';

const AddPostPage = () => {
  return(
    <Fragment>
      <Header title="Readable app" />
      <AddPostForm />
    </Fragment>
  )
}

export default AddPostPage;
