import styled from 'styled-components';
import { DropdownProps } from './BalanceHistory.models';

export const Dropdown = styled.ul<DropdownProps>`
  height: 70px;
  width: 100px;
  background: ${props => props.theme.colors.background};
  display: ${props => props.open ? 'block' : 'none'};
  position: absolute;
  z-index: 1000;
  padding-left: 0;
  left: 0;
`

export const DropdownOption = styled.button`
  background: transparent;
  border: none;
  color: ${props => props.theme.colors.text};
  width: 100%;
  height: 50%;
  cursor: pointer
`