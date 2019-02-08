import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  max-width: 740px;
  padding: 24px;
  position: relative;
`;

const CommentsContainer = styled.div`
  margin-top: 60px;
`;

const CommentLine = styled.hr`
  height: 1px;
  background-color: #ddd;
  border: none;
`;

const PostActionsContainer = styled.div`
  align-items: center;
  bottom: 30px;
  display: flex;
  flex-direction: column;
  right: 30px;
  position: fixed;
`

const styles = theme => ({
  postTitle: {
    fontFamily: 'Merriweather, serif',
    lineHeight: 1.5,
  },
  postText: {
    fontFamily: 'Merriweather, serif',
    fontSize: 20,
  },
  margin: {
    margin: `${theme.spacing.unit * 2} 0`,
  },
  padding: {
    lineHeight: 'normal',
    padding: `0 ${theme.spacing.unit * 2}px 0 0`,
  },
  actionButtom: {
    marginBottom: 20,
  },
  showActionButtons: {
    transition: 'all .3s ease-out',
    transform: 'rotate(45deg)',
  },
  deleteConfirm: {
    marginLeft: 5,
  }
});

export {
  Container,
  CommentsContainer,
  styles,
  CommentLine,
  PostActionsContainer,
}
