import React, { useContext, useState } from 'react'
import {transactionContext} from "./TransContext"
// import {TransactionReducer} from "./TransactionReducer"


function Child() {

   const {transactions, adtransaction}  = useContext(transactionContext); 
   const [newDesc, setDesc] = useState("")
   const [newamount, setamount] = useState()


   const handleAddition=(event)=>{ 
       event.preventDefault()
        console.log(newDesc, newamount)
       adtransaction({
           amount: Number(newamount),
           desc:newDesc
       })
   }
   const getincome = () => {
       let income = 0;
       for(var i = 0; 0 < transactions.length; i++){
       if(transactions[i].amount > 0)
       income = income + transactions[i].amount
    return income;
       }
       
   }
   const getexpence = ()=>{
       let expense = 0;
       for(var i = 0; i < transactions.length; i++){
        if(transactions[i].amount < 0){
            expense += transactions[i].amount
            return expense;   
        }
        
        
       }
   }



  
    return (
        <div className="moves">

            <h1 className="text">Expence Tracker</h1>

            <div>
                <h3>YOUR BALANCE <br/> { getincome() - getexpence() }</h3>
            </div>

            <div className="blue">
                <h3>INCOME <br/> <span> {getincome()} </span> </h3>
                {/* <h1 style={{color:'green'}}>|</h1> */}
                <h3>EXPENSE <br/> <span> {getexpence(0)}</span> </h3>
            </div>

            <h3>History</h3>


            <hr />

            <ul className="hello">
            {transactions.map((transObj, ind)=>{
                return(
                    <li key={ind}>
                <span>{transObj.desc}</span>
                <span>{transObj.amount}</span>
                
                </li>
                )
            })}
               

               
            </ul>

            <h3>Add a transaction </h3>
            <hr/> 

            <form className="transaction.form" onSubmit={handleAddition}>
                <label>
                    Enter your Description <br/>
                    <input type="text" required onChange={(ev)=>{setDesc(ev.target.value)}}/>
                </label> <br/>

                <label>
                    Enter your Amount <br/>
                    <input type="number" required onChange={(ev)=>{setamount(ev.target.value)}} />
                </label>
                <br/>
                <input type="submit" value="Add transction"/>
            </form>

            
        </div>
    )
}

export default Child;