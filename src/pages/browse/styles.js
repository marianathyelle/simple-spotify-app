import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Spinner } from '../../components/Loading/styles';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 110px;
`;

export const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;

  ${Spinner} {
    height: 24px;
  }
`;

export const List = styled.div`
  display: flex;
`;

export const Playlist = styled(Link)`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 250px;
  text-decoration: none;
  color: #FFF;

  &:first-child {
    margin: 0;
  }

  &:hover img {
    opacity: 0.4;
  }

  img {
    height: 250px;
    margin-bottom: 10px;
  }

  strong {
    font-size: 13px;
    margin-bottom: 5px;
  }

  p {
    line-height: 22px;
    font-size: 13px;
    color: #b3b3b3;
  }
`;