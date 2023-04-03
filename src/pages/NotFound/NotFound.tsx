import React from 'react'
import styled from 'styled-components';

const Not = styled.h1`
  font-size:40px;
`
const NotFound = () => {
  return (
    <div>
      <Not>404</Not>
    </div>
  );
}

export default NotFound;