const Table = ({ inputList}) => {
  return (
    <div className="list-table">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>From</th>
            <th>To</th>
            <th>Purpose</th>
            <th>Amount</th>
            <th>Verified</th>
          </tr>
        </thead>
        <tbody>
          {
            inputList.map((input,index) =>{
              return (
                <tr key={index}>
                  <td>{input.date}</td>
                  <td>{input.from}</td>
                  <td>{input.to}</td>
                  <td>{input.purpose}</td>
                  <td>{input.Amount}</td>
                  <td>{input.verified}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
};
export default Table;
