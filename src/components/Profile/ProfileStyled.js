import styled from 'styled-components';

export const ProfileContainer = styled.div`
  min-width: 300px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 4px 7px,
   rgba(0, 0, 0, 0.23) 0px 4px 7px;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 24px;
`;

export const ProfileAvatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.3);
  background-color: beige;
  margin-bottom: 30px;
`;

export const ProfileName = styled.p`
  font-size: 30px;
  font-weight: bold;
`;

export const ProfileTag = styled.p`
  font-size: 20px;
  font-weight: medium;
  color: grey;
  font-style: italic;
`;

export const ProfileLocation = styled.p`
  font-size: 20px;
  font-weight: medium;
  color: grey;
  font-style: italic;
`;

export const StatList = styled.ul`
display: flex;
box-shadow: rgba(0, 0, 0, 0.16) 0px 4px 7px, 
rgba(0, 0, 0, 0.23) 0px 4px 7px;
`;

export const StatItem = styled.li`
display: flex;
  flex-basis: 100%;
  flex-direction: column;
  padding: 12px;
  background-color: #dcdcdc;
  gap: 12px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 4px 7px,
   rgba(0, 0, 0, 0.23) 0px 4px 7px;
`;

export const StatNumber = styled.span`
 font-weight: bold;
  font-size: 20px;
`;

