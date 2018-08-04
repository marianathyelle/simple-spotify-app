import React from 'react';

import { Container, Search, User } from './styles';
const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search..." />
    </Search>

    <User>
      <img src="https://scontent.fbsb8-2.fna.fbcdn.net/v/t1.0-9/28059015_1489060671193274_7813951443278225668_n.jpg?_nc_cat=0&oh=b5346647af45a1fdea793e3faab90bfe&oe=5C04FB94" alt="avatar"/>
      Maria Nathyelle
    </User>
  </Container>
)

export default Header;