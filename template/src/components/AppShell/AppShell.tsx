import React from 'react';
import { Container } from '@mui/material';
import { Header } from 'components/Header/Header';

interface Props {
  children: React.ReactNode;
}

export const AppShell = (props: Props) => {
  return (
    <>
      <Header />
      <Container sx={{ padding: 2 }} maxWidth="md">
        {props.children}
      </Container>
    </>
  );
};
