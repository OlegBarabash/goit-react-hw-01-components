import styled from 'styled-components';

export const StatisticsSection = styled.section`
  margin: 0 auto;
  padding-top: 30px;
  width: 300px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  color: #b4afaf;
`;

export const StatList = styled.ul`
  padding: 0;
  display: flex;
  justify-content: center;
  list-style: none;
`;

export const ListItem = styled.li`
  height: 50px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme || 'transparent'};
  color: white;
`;

export const Percentage = styled.span`
  font-size: 24px;
`;
