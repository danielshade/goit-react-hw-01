import css from "./TransactionHistory.module.css"
import user from "/src/userData.json"

function TransactionHistory({ items }) {

    return (
        <>
            <p className={css.title}>Transaction of { user.username}</p>
            <table className={css.table}>
                <thead >
                    <tr className={css.head}>
                        <th >Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => {
                        let lalala = item.type[0].toUpperCase() + item.type.slice(1);
                        return <tr key={item.id} className={css.item}>
                            <td>{lalala}</td>
                            <td>{item.amount}</td>
                            <td>{item.currency}</td>
                        </tr>
                })}
                </tbody>
            </table>
        </>
    )
}

export default TransactionHistory

/* <td>{item.type}</td>
<td>{item.amount}</td>
<td>{item.currency}</td> */