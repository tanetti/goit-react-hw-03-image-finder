import styled from 'styled-components';

export const StyledInput = styled.input`
  display: inline-block;

  width: 100%;
  height: 100%;
  padding-left: 10px;
  padding-right: 4px;

  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
