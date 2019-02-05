import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

import { handleAddComment } from '../../actions/post';

import { styles } from './AddCommentForm.styles';

class AddCommentForm extends Component {
  state = {
    timestamp: Date.now(),
    body: '',
    author: '',
  };

  handleChange = fieldValue => event => {
    this.setState({
      [fieldValue]: event.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { dispatch, handleDialogClose, parentId } = this.props;
    const comment = this.state;

    dispatch(handleAddComment(parentId, comment)).then(handleDialogClose());
  }

  render() {
    const { classes, handleDialogClose } = this.props;
    const { body, author } = this.state
    return (
      <form
        className={classes.container} 
        onSubmit={e => this.handleSubmit(e)}
        autoComplete="off"
      >
        <TextField
          required
          id="Comment-body"
          label="Your Message"
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
          label="By:"
          className={classes.textField}
          value={author}
          onChange={this.handleChange('author')}
          margin="normal"
        />
        <div className={classes.buttonWrapper}>
          <Button className={classes.button} onClick={handleDialogClose} >
            Close
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Add comment
          </Button>
        </div>
      </form>
    )
  }
}

export default connect()(withStyles(styles)(AddCommentForm));
