import React, { Component } from 'react';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

import getCategoryName from '../../helpers/getCategoryName';
import categoriesArr from '../../helpers/categoriesArr';

import { handleGetAllCategories } from '../../actions/shared';
import { handlePostsFromCategory } from '../../actions/categories';

import * as Styled from './CategoriesList.styles';

class CategoriesList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleGetAllCategories());
  }

  handleClick = name => {
    const { history, dispatch } = this.props

    dispatch(handlePostsFromCategory(name))
      .then(history.push(`/${name}`))
  }

  render() {
    const { categories, classes, location } = this.props;
    const activeCategory = getCategoryName(location.pathname);

    return (
      <Styled.Container>
        <Typography variant="h6" gutterBottom>
          Categories:
      </Typography>
        {
          categories.map(category => {
            return (
              <Chip
                key={category}
                color="primary"
                className={classes.chip}
                label={category}
                onClick={() => this.handleClick(category)}
                variant={category === activeCategory ? 'default' : 'outlined'}
              />
            )
          })
        }
      </Styled.Container>
    )
  }
}

const mapStateToProps = ({ categories }) => {
  return {
    categories: categoriesArr(categories),
  }
}

export default withRouter(
  connect(mapStateToProps)(withStyles(Styled.styles)(CategoriesList))
);
