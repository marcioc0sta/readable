import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

import { handleEditComment } from '../../actions/post';

import { styles } from './EditCommentForm.styles';

class EditCommentForm extends Component {
  state = {
    timestamp: Date.now(),
    body: '',
  };

  handleChange = fieldValue => event => {
    this.setState({
      [fieldValue]: event.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { dispatch, handleDialogClose, comment } = this.props;
    const editedComment = this.state;

    dispatch(handleEditComment(comment.id, editedComment)).then(handleDialogClose());
  }

  render() {
    const { classes, handleDialogClose, comment } = this.props;
    const { body } = this.state
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
          defaultValue={comment.body}
          onChange={this.handleChange('body')}
          className={classes.textField}
          margin="normal"
        />
        <div className={classes.buttonWrapper}>
          <Button className={classes.button} onClick={handleDialogClose} >
            Close
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Edit comment
          </Button>
        </div>
      </form>
    )
  }
}

export default connect()(withStyles(styles)(EditCommentForm));
