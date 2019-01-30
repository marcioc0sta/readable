import React from 'react';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import categoriesArr from '../../helpers/categoriesArr';

import * as Styled  from './CategoriesList.styles';

const CategoriesList = props => {
  // todo: ao clicar, ir para a respectiva categoria
  const handleClick = name => {
    alert(`clicked on the ${name}`)
  }

  const { categories, classes } = props;

  return (
    <Styled.Container>
      <Typography variant="h6" gutterBottom>
        Categories:
      </Typography>
      {
        categories.map(category => {
          return (
            <Chip
              color="primary"
              key={category}
              className={classes.chip}
              label={category}
              onClick={() => handleClick(category)}
              variant="outlined"
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

export default connect(mapStateToProps)(withStyles(Styled.styles)(CategoriesList));
