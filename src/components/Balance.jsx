import React, {useContext} from 'react';
import { GlobalContext } from "../context/globalState"

const Balance = () => {
    // Get all transactions from context
    const {transactions} = useContext(GlobalContext)

    // Get each transaction amount
    const amounts = transactions.map(transaction => transaction.amount)

    // Get total of all transaction amounts
    const total = amounts.reduce((totalValue, currentValue) => (totalValue += currentValue), 0).toFixed(2)

    // Transaction sign
    const sign = total < 0 ? "-" : null

    return (
        <>
            <h4>Your Balance</h4>
            <h1 id="balance">{sign}${total}</h1>
        </>
    );
};

export default Balance;