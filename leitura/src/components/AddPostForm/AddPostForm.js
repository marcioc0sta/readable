import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import categoriesArr from '../../helpers/categoriesArr';

import { handleAddPost } from '../../actions/posts';
import { handleGetAllCategories } from '../../actions/shared';

import { styles } from './AddPostForm.styles';

class AddPostForm extends Component {
  state = {
    timestamp: Date.now(),
    title: '',
    body: '',
    author: '',
    category: '',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleGetAllCategories());
  }

  handleChange = fieldValue => event => {
    this.setState({
      [fieldValue]: event.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { dispatch, history } = this.props;
    const post = this.state;
    dispatch(handleAddPost(post)).then(history.push('/'));
  }

  render() {
    const { classes, handleDialogClose, categories } = this.props;
    const { title, body, author, category } = this.state

    return (
      <div className={classes.container} >
        <Typography variant="h6" gutterBottom>
          Add a new post
        </Typography>
        <form
          className={classes.form}
          onSubmit={e => this.handleSubmit(e)}
          autoComplete="off"
        >
          <TextField
            required
            id="post-title"
            label="Title"
            className={classes.textField}
            value={title}
            onChange={this.handleChange('title')}
            margin="normal"
          />
          <TextField
            required
            id="post-body"
            label="Body"
            multiline
            rows="4"
            value={body}
            onChange={this.handleChange('body')}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            required  
            id="post-author"
            label="Author"
            className={classes.textField}
            value={author}
            onChange={this.handleChange('author')}
            margin="normal"
          />
          <TextField
            id="post-category"
            select
            label="Category"
            className={classes.textField}
            value={category}
            onChange={this.handleChange('category')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText="Please select one category"
            margin="normal"
          >
            {categories.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <div className={classes.buttonWrapper}>
            <Button className={classes.button} onClick={handleDialogClose} >
              Close
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Add post
            </Button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ categories }) => {
  return {
    categories: categoriesArr(categories),
  }
}


export default withRouter(
  connect(mapStateToProps)(withStyles(styles)(AddPostForm))
);
