const TransactionsTable = ({ list, selectTransaction }) => {
  return (
    <div className="list-table">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Bill No</th>
            <th>From</th>
            <th>Items</th>
            <th>By</th>
            <th>Bank details</th>
            <th>Last Edit</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          {list.length > 0 && list.map((input,index) => {
            return (
              <tr className="selectedRow" key={index} onClick={()=>selectTransaction(input.transactionId)}>
                <td>{input.transactionDate}</td>
                <td>{input.transactionBillNo}</td>
                <td>{input.person}</td>
                <td>{input.transactionItems.map((item, index)=><p key={index}>{item.accountHeadName + " : " + item.amount + " ( " + item.details + " )"}</p>)}</td>
                <td>{input.transactionBy}</td>
                <td>{input.transactionBankDetails}</td>
                <td>{input.savedTimeStamp}</td>
                <td>{input.user}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default TransactionsTable;
