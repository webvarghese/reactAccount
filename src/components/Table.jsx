const Table = ({ inputList }) => {
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
          {inputList.map((input, index) => {
            const inputDate = new Date(input.date).toLocaleDateString("en-us", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric"
            });
            return (
              <tr key={index}>
                <td>{inputDate}</td>
                <td>{input.from}</td>
                <td>{input.to}</td>
                <td>{input.purpose}</td>
                <td>{input.amount}</td>
                <td>{input.verified ? "Verified" : "Not verified"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
