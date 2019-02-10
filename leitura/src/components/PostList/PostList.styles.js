import styled from 'styled-components';
import blue from '@material-ui/core/colors/blue';

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
  color: ${({active}) => active ? blue[500] : '#ccc'};
  margin-left: 20px;
  &:hover {
    color: ${blue[500]};
    cursor: pointer;
  }
`

export {
  Container,
  TitleContainer,
  OrderByWrapper,
  OrderByButtons,
}
