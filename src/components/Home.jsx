import AddTask from "./AddTask";
import RightPanel from "./RightPanel";

import { useState, useEffect } from "react";

const Home = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
    console.log(transactions);
  };

  return (
    <div className="container">
      <AddTask onAdd={addTransaction} />
      <RightPanel list={transactions} />
    </div>
  );
};
export default Home;
