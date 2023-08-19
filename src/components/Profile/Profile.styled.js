import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  height: 350px;
  margin: 0 auto;
  padding: 25px 0 0 0;
  box-sizing: border-box;
`;

export const Description = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 50%;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 0;
  margin-top: 10px;
`;

export const Tag = styled.p`
  margin-bottom: 0;
  margin-top: 10px;
  color: #b4afaf;
`;

export const Location = styled.p`
  margin-bottom: 0;
  margin-top: 10px;
  color: #b4afaf;
`;
