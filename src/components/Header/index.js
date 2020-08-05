import React from 'react';

import { Container, Search, User } from './styles';

export default function Header() {
  return(
    <Container>
    <Search>
      <input placeholder=" Search" />
    </Search>

    <User>
      <img src="https://avatars1.githubusercontent.com/u/48716406?s=460&v=4" alt="Avatar" />
      Guilherme Girardi
    </User>
  </Container>
  )
}
