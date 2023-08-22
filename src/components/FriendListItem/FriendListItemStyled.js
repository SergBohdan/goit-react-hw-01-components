import styled from '@emotion/styled';

export const FriendCard = styled.li`
display: flex;
  align-items: center;
  gap: 15px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  background-color: #fff;
  width: 300px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 4px 7px,
   rgba(0, 0, 0, 0.23) 0px 4px 7px;
  
`;

export const FriendIcon = styled.img`
  width: 75px;
  height: 75px;
  padding: 10px;
`;

export const FriendName = styled.p`
  font-size: 30px;
  font-weight: bold;
`;

export const FriendStatus = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;
