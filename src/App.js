import "./App.css";

// import { ProductList } from "./components/Product-list/Product.jsx";    PRACTIC

import user from "./data/user.json";
import data from "./data/statistics.json";
import friends from "./data/friends.json";
import transactions from "./data/transaction.json";

import { Profile } from "./components/Profile/Profile.jsx";
import { Statistics } from "./components/Statistics/Statistics.jsx";
import { FriendList } from "./components/FriendList/FriendList.jsx";
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory.jsx";

function App() {
  return (
    <div className="App">
      {/* <ProductList /> PRACTIC */}
      {/* 1 */}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* 2 */}
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      {/* 3 */}
      <FriendList friends={friends} />
      {/* 4 */}
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
