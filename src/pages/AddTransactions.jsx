import { useState } from "react"
import Botton from "../components/Botton"
import TransactionForm from "../components/TransactionForm"

function AddTransactionsPage() {
    const [onOpenForm , setOnOpenForm] = useState(false)

    function onOpenFornHandler(){
        setOnOpenForm(!onOpenForm) 
    }
  
    return (<div className="md:px-12 px-4 flex gap-4 flex-col items-center justify-center">
         <div  className="p-4">
            <Botton title={'Add Transaction'} onclick={onOpenFornHandler}/>

         </div>


            {onOpenForm&&
            <TransactionForm  setOnOpenForm={setOnOpenForm}/>
            }   
    </div>
    )
}

export default AddTransactionsPage
