import React from 'react';

import * as Styled from './NoItems.styles';

const NoItems = ({ children }) => {
  return (
    <Styled.NoItemsTextWrapper>
      <Styled.NoItemsText>
        {children}
      </Styled.NoItemsText>
    </Styled.NoItemsTextWrapper>
  )
}

export default NoItems;
