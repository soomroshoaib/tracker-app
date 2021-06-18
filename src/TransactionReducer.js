const TransactionReducer=((state, action)=>{
    switch(action.type){
        case "Add_Transactions":{
            return [action.payload, ...state]
        }
    }
})

export default TransactionReducer;