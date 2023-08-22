import PropTypes from 'prop-types';
import {TransactionTable,
TransactionTableHead,
TransactionHeader,
TransactionRow,
TransactionCell} from './TransactionHistoryStyled';

export const TransHistory = ({ transactions }) => {
  return (
    <TransactionTable>
      <TransactionTableHead>
        <tr>
          <TransactionHeader>Type</TransactionHeader>
          <TransactionHeader>Amount</TransactionHeader>
          <TransactionHeader>Currency</TransactionHeader>
        </tr>
      </TransactionTableHead>

      <tbody>
      {transactions.map(({ id, type, amount, currency}) => (
           <TransactionRow key={id} >
           <TransactionCell>{type}</TransactionCell>
           <TransactionCell>{amount}</TransactionCell>
           <TransactionCell>{currency}</TransactionCell>
         </TransactionRow>
         ))}
       
       
      </tbody>
    </TransactionTable>
  );
};

TransHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};