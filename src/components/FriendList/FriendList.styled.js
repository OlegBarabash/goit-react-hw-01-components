import styled from 'styled-components';

export const FriendsList = styled.ul`
  width: 300px;
  padding: 30px 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  margin: 15px;
  border-radius: 70px;
  display: flex;
  background-color: ${props => (props.$isOn ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
`;

export const Name = styled.p`
  margin-left: 15px;
`;
