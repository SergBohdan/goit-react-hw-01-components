import user from '../Data/user.json';
import friends from '../Data/friends.json';
import transactions from "../Data/transactions.json";
import data from '../Data/data.json';
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
