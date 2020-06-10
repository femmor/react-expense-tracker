import React, {useState} from 'react';

const AddTransaction = () => {

    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState(0)

    const submitHandler = (e) => {
        e.preventDefault()
        
    }

    return (
        <>
            <h3>Add new transaction</h3>  
            <form onSubmit={submitHandler}>
                <div className="form-control">
                    <label htmlFor="text">Transaction</label>
                    <input type="text" value={title} placeholder="Enter transaction title..." onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" value={amount} placeholder="Enter amount..." onChange={(e) => setAmount(e.target.value)}/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    );
};

export default AddTransaction;