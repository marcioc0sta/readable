import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom'

import urlString from '../../helpers/urlString';

import { handleEditPost } from '../../actions/post';

import { styles } from './EditPostForm.styles';

class EditPostForm extends Component {
  state = {
    timestamp: Date.now(),
    title: '',
    body: '',
  };

  componentDidMount() {
    const { post } = this.props;

    this.setState({
      title: post.title,
      body: post.body,
    })
  }

  handleChange = fieldValue => event => {
    this.setState({
      [fieldValue]: event.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { dispatch, post, history } = this.props;
    const editedPost = this.state;

    dispatch(handleEditPost(post.id, editedPost)).then(
      history.push({
        pathname: `/post/${urlString(editedPost.title)}`,
        state: { id: post.id },
      })
    )
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

export default withRouter(connect()(withStyles(styles)(EditPostForm)));
