import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 75%;
  border-collapse: collapse;
  border: 2px solid rgba(0, 0, 0, 0.3);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 4px 7px,
   rgba(0, 0, 0, 0.23) 0px 4px 7px;
`;

export const TransactionTableHead = styled.thead`
  background-color: #34ebd8;
  text-transform: uppercase;
  color: #fff;
`;

export const TransactionHeader = styled.th`
  padding: 10px;
  font-size: 20px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  `;

export const TransactionRow = styled.tr`
  &:nth-child(even) {
    background-color: #fff;
    border: 2px solid rgba(0, 0, 0, 0.3);
  }
`;

export const TransactionCell = styled.td`
  padding: 10px;
  font-size: 20px;
  border: 1px solid #dcdcdc;
  color: darkslategray;
`;