import { Profile } from "./Profile/Profile";
import user from "../user.json"
import data from '../data.json'
import friends from '../friends.json'
import transactions from '../transactions.json'

import { Statistics } from "./Statistics/Statistics";
import { GlobalStyle } from "GlobalStyle";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <div>
      <Profile usr={user} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle/>
    </div>
  );
};
