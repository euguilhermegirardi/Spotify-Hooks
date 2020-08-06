import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';

export default function ErrorBox() {
  const error = useSelector(state => state.error);
  const visible = error.visible;

  return (
    visible && (
      <Container>
      <p>{error.message}</p>
    </Container>
    )
  )
}

