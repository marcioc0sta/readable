import React, { Fragment } from 'react'

import Header from '../components/Header/Header';
import NoItems from '../components/NoItems/NoItems'

const Page404 = () => {
  return(
    <Fragment>
      <Header title="Readable app" />
      <NoItems>
        This page doesn't exists
      </NoItems>
    </Fragment>
  )
}

export default Page404;
