import Botton from "./Botton"
import close from '../assets/close.svg'


function TransactionForm({setOnOpenForm }) {



function handleSubmit(e){

e.preventDefault();


const formData =
new FormData(e.target);


const transaction = {

id:Date.now(),

...Object.fromEntries(
formData.entries()
),

date:new Date().toISOString()

}

console.log(transaction)
e.target.reset()

}

    return (
    <form onSubmit={handleSubmit} className="bg-primary-light border rounded-2xl p-2 border-border w-100 ">
        <div className="flex justify-end">
            <img src={close} alt="close" className="w-6  cursor-pointer" onClick={()=>setOnOpenForm(false)}/>
        </div>

        <div className="flex gap-2 my-2 items-center">
            <label htmlFor="type">Type:</label>
            <select name="type" className="cursor-pointer">
                <option value="expenses" >Expenses</option>
                <option value="incomes">Incomes</option>
            </select>
        </div>

        <div className="flex gap-2 my-2 items-center" >
            <label htmlFor="title">Title:</label>
            <input required type="text" name="title" className="bg-white border rounded-2xl p-2"/>
        </div>

        <div className="flex gap-2 my-2 items-center">
            <label htmlFor="category">Category:</label>
            <input  required type="text" name="category" className="bg-white border rounded-2xl p-2"/>
        </div>

        <div className="flex gap-2 my-2 items-center">
            <label htmlFor="amount">Amount:</label>
            <input required type="number" name="amount" className="bg-white border rounded-2xl p-2"/>
        </div>

        <div className="flex gap-2 my-2 items-center">
            <label htmlFor="describe">Any Discription:</label>
            <input type="text" name="describe" className="bg-white border rounded-2xl p-2"/>
        </div>

        <div className="flex gap-2 mt-4">
           <Botton  title={'Submit'} />
           <Botton  title={'Reset'} />  
        </div>
       {/* <button type="submit">
Save
</button>


<button type="reset">
Reset
</button> */}

    </form>
    )
}

export default TransactionForm
