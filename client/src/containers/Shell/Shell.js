import React, { memo } from 'react';
import { Container, Header } from 'components';

const Shell = ({ children }) => {
  return (
    <>
      <Header />
      <Container style={{ gridArea: 'main' }}>{children}</Container>
    </>
  );
};

export default memo(Shell);
