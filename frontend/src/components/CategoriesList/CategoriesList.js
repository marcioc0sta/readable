import React from 'react';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

import getCategoryName from '../../helpers/getCategoryName';
import { handlePostsFromCategory } from '../../actions/categories';
import categoriesArr from '../../helpers/categoriesArr';

import * as Styled from './CategoriesList.styles';

const CategoriesList = props => {
  const { categories, classes } = props;

  const handleClick = name => {
    const { history, dispatch } = props

    dispatch(handlePostsFromCategory(name))
      .then(history.push(`/category/${name}`))
  }

  const activeCategory = getCategoryName(props.location.pathname);

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
              onClick={() => handleClick(category)}
              variant={category === activeCategory ? 'default' : 'outlined'}
            />
          )
        })
      }
    </Styled.Container>
  )
}

const mapStateToProps = ({ categories }) => {
  return {
    categories: categoriesArr(categories),
  }
}

export default withRouter(
  connect(mapStateToProps)(withStyles(Styled.styles)(CategoriesList))
);
