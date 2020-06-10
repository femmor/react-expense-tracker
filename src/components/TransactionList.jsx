import React, {useContext} from 'react';
import { GlobalContext } from "../context/globalState"
import Transaction from './Transaction';

const TransactionList = () => {
    const {transactions} = useContext(GlobalContext)

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {
                    transactions.map(transaction => (
                    <Transaction 
                        key={transaction.id} 
                        title={transaction.title} 
                        amount={transaction.amount}
                    />
                    ))
                }
            </ul>
        </>
    );
};

export default TransactionList;