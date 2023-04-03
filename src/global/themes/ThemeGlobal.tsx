import styled, { createGlobalStyle } from "styled-components";
import { letter } from "../variables/variables";

export const StyledGlobal = createGlobalStyle`
*{
        
        list-style:none;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        padding:0px;
        margin:0px;
        box-sizing:border-box:
        
        
}
body{
        
        overflow-x:hidden;
        position:relative;
}
button{
        cursor: pointer;
}

h1, p{
        text-align:center;
        margin-bottom:30px;
}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 50%;
  div {
    margin-bottom: 25px;
  }
  label {
    display: block;
  }
  input,
  select {
    min-width: 300px;
    padding: 10px 5px;
    border-radius: 5px;
    border: 1px solid;
  }
  input[type="submit"] {
    cursor: pointer;
    padding: 10px 10px;
    background: rgb(39, 39, 40);
    border: none;
    border-radius: 5px;
    font-weight: 600;
    color: ${letter};
    &:hover {
      background: rgb(54, 52, 52);
    }
  }
`;