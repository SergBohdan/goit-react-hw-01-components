import { styled } from 'styled-components';

const generateRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
  };

export const StatsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 750px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 4px 7px,
   rgba(0, 0, 0, 0.23) 0px 4px 7px;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
`;

export const StatsTitle = styled.h2`
 text-transform: uppercase;
  padding: 30px;
  text-align: center;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => generateRandomColor()};
  width: 150px;
  gap: 10px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  padding: 12px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 7px,
   rgba(0, 0, 0, 0.23) 0px 4px 7px;
  
`;

export const StatsLabel = styled.span`
  color: #fff;
  font-size: 20px;
  margin-bottom: 5px;
`;

export const StatsPercentage = styled.span`
  color: #fff;
  font-size: 30px;
`;