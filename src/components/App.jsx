import user from './Profile/user.json';
import Profile from './Profile/Profile';

import data from './Statistics/data.json'
import Statistics from './Statistics/statistics';


import friends from './FriendList/friends.json'
import FriendList from './FriendList/FriendList'

import transactions from './TransactionHistory/transactions.json'
import TransactionHistory from './TransactionHistory/transactionhistory';




export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};