import React from 'react';
// import { useSelector } from 'react-redux';

import { Container } from './styles';
import CloseIcon from '../../assets/images/close.svg';

export default function ErrorBox() {

  return (

      <Container>
      <p>message</p>
      <button >
        <img src={CloseIcon} alt="Close" />
      </button>
    </Container>

  )
}
