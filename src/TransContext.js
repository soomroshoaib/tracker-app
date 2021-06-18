import React, {createContext, useReducer} from "react"
import TransactionReducer from "./TransactionReducer"
const hello = [
    {amount: 500, desc: "cash", button: <button>+</button> },
    {amount: -50, desc: "Cold Drink"},
    {amount: -140, desc: "Desposit"},
    {amount: 600, desc: "utitlystore"}
]

 export const  transactionContext = createContext(hello); 
 export const TransactionProvider=({children})=>{
    let [state, dispatch] = useReducer(TransactionReducer, hello)
    function adtransaction(transObj){
        dispatch({
            type : "Add_Transactions",
            payload:{
                amount: transObj.amount,
                desc: transObj.desc
            }
        })

    }
    return(
        <transactionContext.Provider value={{
            transactions: state,
            adtransaction
        }}>
            {children}
        </transactionContext.Provider>
    )

 }
