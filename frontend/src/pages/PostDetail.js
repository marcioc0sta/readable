import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header/Header';
import CategoriesList from '../components/CategoriesList/CategoriesList';

class PostDetail extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
  }

  render() {
    return (
      <Fragment>
        <Header title="Readable app" />
        <CategoriesList />
        <div>postDetail</div>
      </Fragment>
    )
  }
}

const mapStateToProps = () => {
  return {}
}


export default connect()(PostDetail);
