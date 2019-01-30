import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

import { handleAddPost } from '../../actions/posts';

import { styles } from './AddPostForm.styles';

class AddPostForm extends Component {
  state = {
    timestamp: Date.now(),
    title: '',
    body: '',
    author: '',
    category: '',
  };

  handleChange = fieldValue => event => {
    this.setState({
      [fieldValue]: event.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { dispatch, handleDialogClose } = this.props;
    const post = this.state;

    dispatch(handleAddPost(post)).then(handleDialogClose());
  }

  render() {
    const { classes, handleDialogClose, categories } = this.props;
    const { title, body, author, category } = this.state

    return (
      <form
        className={classes.container} 
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
    )
  }
}

const mapStateToProps = ({ categories }) => {
  const categoriesArr = Object.values(categories).map(item => item.name);
  return {
    categories: categoriesArr,
  }
}


export default connect(mapStateToProps)(withStyles(styles)(AddPostForm));
