import { useState } from "react";
import Cards from "../components/Cards";
import DonutChart from "../components/DonutChart";
import RecentTransactions from "../components/RecentTransactions";
import TimePeriods from "../components/TimePeriods";
import { expenses } from "../data/expenses";
import filterByPeriod from "../utils/filterByPeriod";
import { incomes } from "../data/incomes";
function DashboardPage() {
    const [selectedPeriod,setSelectedPeriod] = useState('thisMonth')
    
    
    const filteredExpenses = filterByPeriod(
        expenses,
        selectedPeriod
    );
    
     const filteredIncomes = filterByPeriod(
        incomes,
        selectedPeriod
     );
     
     const totalExpense =
    filteredExpenses.reduce(
    (sum,item)=>sum+item.amount,
    0
    );
    const totalIncome =
filteredIncomes.reduce(
(sum,item)=>sum+item.amount,
0
);
    
    const balance =
    totalIncome-totalExpense;

    const cartsValues=[
        {title:'Balance' , amount:balance , amountColor:'primary',id:'0'}  ,
        {title:'Incomes' , amount:totalIncome,amountColor:'' ,id:'1'} ,
        {title:'Expenses' , amount:totalExpense,amountColor:'' , id:'2'} ,
    ]

    return (
        <div className="md:px-12 px-4 h-full">
            <div className="flex justify-between items-center mb-4 gap-4 ">
                <h1 className="text-3xl font-bold  my-4">
                    Hi, Mina!
                </h1>
                    <TimePeriods selectedPeriod={selectedPeriod} setSelectedPeriod={setSelectedPeriod}/>
                  
            </div>
            <div className=" grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4
                place-items-center">
                {
                    cartsValues.map((value)=>(<Cards key={value.id} title={value.title}  amount={value.amount} amountColor={value.amountColor} />))
                }
            </div>
        
             <div className="flex lg:flex-row md:justify-around md:items-center flex-col gap-4 items-center justify-center py-4">
                    <RecentTransactions limit={5} title={'Recently expenses Table'} data={filteredExpenses}/>
                    <DonutChart data={filteredExpenses}/>  </div>
        </div>
    )
    
}

export default DashboardPage;