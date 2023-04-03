import React from 'react'
import styled from 'styled-components'
import { corPrimary, letter } from '../../global/variables/variables'

const Footer = styled.footer`
    background:${corPrimary};
    color:${letter};
    text-align:center;
    position:absolute;
    bottom: 0px;
    width:100%;
    padding:10px;
`
export default() => {
  return (
    <Footer>Isaías Ramos</Footer>
  )
}
