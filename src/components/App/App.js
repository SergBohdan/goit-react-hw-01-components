import user from '../../data/user.json';
import friends from '../../data/friends.json';
import transactions from "../../data/transactions.json";
import data from '../../data/data.json';
import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { Friends } from '../FriendsList/FriendList';
import { TransHistory } from '../TransactionHistory/TransactionHistory';
import { GlobalStyle } from '../GlobalStyles';
import { Container } from './Appstyled';

export const App = () => {
  return (
    <Container>
      <Profile items={user} />
      <Statistics title="Upload stats" stats={data} />
      <Friends friends={friends} />
      <TransHistory transactions={transactions} />
      <GlobalStyle />
    </Container>
  );
};
