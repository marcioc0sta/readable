import React from 'react';
import Button from '@material-ui/core/Button';

import * as Styled from './AddCommentButton.styles';

const AddCommentButton = ({ handleDialogOpen }) => {
  return (
    <Styled.ButtonWrapper>
      <Button
        variant="contained"
        onClick={handleDialogOpen}
        color="primary"
      >
        Add Comment
          </Button>
    </Styled.ButtonWrapper>
  )
}

export default AddCommentButton;
