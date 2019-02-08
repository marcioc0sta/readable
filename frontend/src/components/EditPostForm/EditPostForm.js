import React, { Component, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import { styles } from './EditPostForm.styles';

class EditPostForm extends Component {
  state = {
    timestamp: Date.now(),
    title: '',
    body: '',
  };

  handleChange = fieldValue => event => {
    this.setState({
      [fieldValue]: event.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { dispatch, post } = this.props;


  }

  render() {
    const { classes, post } = this.props;

    return (
      <div className={classes.container}>
        <Typography variant="h6" gutterBottom>
          {`Editing post: ${post.title}`}
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
            defaultValue={post.title}
            onChange={this.handleChange('title')}
            margin="normal"
          />
          <TextField
            required
            id="post-body"
            label="Body"
            multiline
            rows="4"
            defaultValue={post.body}
            onChange={this.handleChange('body')}
            className={classes.textField}
            margin="normal"
          />
          <div className={classes.buttonWrapper}>
            <Button type="submit" variant="contained" color="primary">
              Edit post
          </Button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect()(withStyles(styles)(EditPostForm));
