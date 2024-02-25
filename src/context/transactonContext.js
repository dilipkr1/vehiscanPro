import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios"

const TransactionContext = createContext();
const TransactionProvider = ({ children }) => {
    const [transactionData, setTransactionData] = useState();
    useEffect(() => {
        fetchTransactionData().then(data => {
            setTransactionData(data);
        });
    }, []);

    const fetchTransactionData = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/wallet/transactions");
            return response.data
        } catch (error) {
            console.error("Error fetching transaction data:", error);
            console.log("something goin wrong")
        }
    }


    return (
        <TransactionContext.Provider value={{ transactionData, setTransactionData }}>
            {children}
        </TransactionContext.Provider>
    )
}

export { TransactionContext, TransactionProvider }
// export const useTransactionData = () => useContext(TransactionDataContext)