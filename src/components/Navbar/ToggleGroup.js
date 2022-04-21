import React, { useState } from 'react';
import styled from 'styled-components';
const Button = styled.button`
background-color: black;
color: white;
font-weight: bold;
font-size: 16px;
padding: 5px 20px;
border-radius: 5px;
margin: 10px;
cursor: pointer;
&:disabled {
  color: grey;
  opacity: 0.7;
  cursor: default;
}
`;
const ButtonToggle = styled(Button)`
  opacity: 0.6;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;
const types = ['Axiom', 'Axiom1'];
function ToggleGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <ButtonGroup>
      {types.map(type => (
        <ButtonToggle
          key={type}
          active={active === type}
          onClick={() => setActive(type)}
        >
          {type}
        </ButtonToggle>
      ))}
    </ButtonGroup>
  );
}

export default ToggleGroup;