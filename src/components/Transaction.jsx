import React, { useContext } from 'react';
import { GlobalContext } from "../context/globalState";

const Transaction = ({ id, title, amount }) => {
    const { deleteTransaction } = useContext(GlobalContext)
    const sign = amount < 0 ? "-" : "+"

    return (
        <li className={amount < 0 ? "minus" : "plus"} key={id}>
            {title} <span>{sign}${Math.abs(amount)}</span><button className="delete-btn" onClick={() => deleteTransaction(id)}>x</button>
        </li> 
    );
};

export default Transaction;