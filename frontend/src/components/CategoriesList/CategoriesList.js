import React from 'react';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

import categoriesArr from '../../helpers/categoriesArr';

import * as Styled  from './CategoriesList.styles';

const CategoriesList = props => {
  const { categories, classes } = props;

  return (
    <Styled.Container>
      <Typography variant="h6" gutterBottom>
        Categories:
      </Typography>
      {
        categories.map(category => {
          return (
            <NavLink 
              key={category}
              style={{textDecoration: 'none'}}
              to={`/category/${category}`}
            >
              <Chip
                color="primary"
                className={classes.chip}
                label={category}
                onClick={() => {}}
                variant="outlined"
              />
            </NavLink>
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

export default connect(mapStateToProps)(withStyles(Styled.styles)(CategoriesList));
