import css from "./TransactionHistory.module.css";
const TransactionHistory = ({ items }) => {
    return(
    <table className={css.table}>
  <thead >
    <tr className={css.header}>
      <th className={css.headertext}>Type</th>
      <th className={css.headertext}>Amount</th>
      <th className={css.headertext}>Currency</th>
    </tr>
  </thead>
  <tbody>
    {items.map(item => (
    <tr className ={css.tr} key ={item.id}>
      <td className={css.td}>{item.type}</td>
      <td className={css.td}>{item.amount}</td>
      <td className={css.td}>{item.currency}</td>
    </tr>      
    ))}
    </tbody>
        </table>
    )
 }
export default TransactionHistory;