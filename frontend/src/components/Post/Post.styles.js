import styled from 'styled-components';

const Container = styled.div`
  padding: 24px;
  margin: 0 auto;
  max-width: 740px;
`;

const CommentsContainer = styled.div`
  margin-top: 60px;
`;

const CommentLine = styled.hr`
  height: 1px;
  background-color: #ddd;
  border: none;
`

const styles = theme => ({
  margin: {
    margin: `${theme.spacing.unit * 2} 0`,
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px 0 0`,
  },
});

export {
  Container,
  CommentsContainer,
  styles,
  CommentLine,
}
