import styled from 'styled-components';

const Container = styled.div`padding: 24px;`;

const TitleContainer = styled.div`
  align-items: center;
  display: flex;
`;

const OrderByWrapper = styled.div`
  align-items: center;
  display: flex;
  margin-left: auto;
`;

const OrderByButtons = styled.i`
  color: #ccc;
  margin-left: 20px;
  &:hover {
    color: #ddd;
    cursor: pointer;
  }
`

export {
  Container,
  TitleContainer,
  OrderByWrapper,
  OrderByButtons,
}
