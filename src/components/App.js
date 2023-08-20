import user from './Data/user.json';
import friends from './Data/friends.json';
import transactions from "./Data/transactions.json";
import data from './Data/data.json';
import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { Friends } from './FriendList';
import { TransHistory } from './TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile items={user} />
      <Statistics title="Upload stats" stats={data} />
      <Friends friends={friends} />
      <TransHistory transactions={transactions} />
    </div>
  );
};
