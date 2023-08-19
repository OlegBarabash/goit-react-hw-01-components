import styled from 'styled-components';

export const List = styled.ul`
  height: 20%;
  width: 100%;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  gap: 15px;
  list-style: none;
  background-color: #f8f8f8;
  border: 1px solid black;
`;

export const ListItem = styled.li`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.span`
  color: #b4afaf;
`;

export const Quantity = styled.span`
  font-size: 16px;
  font-weight: 700;
`;
