import { useState } from "react"
import BarChart from "../components/BarChart"
import DonutChart from "../components/DonutChart"
import ExpensesTable from "../components/RecentTransactionsTable"
import TimePeriods from "../components/TimePeriods"
import { incomes } from "../data/incomes"
import { expenses } from "../data/expenses"
import filterByPeriod from "../utils/filterByPeriod"

function AnalyticsPage() {
     const [selectedPeriod,setSelectedPeriod] = useState('thisMonth')
     
         
     const filteredExpenses = filterByPeriod(
       expenses,
       selectedPeriod
     );
     
     
     const filteredIncomes = filterByPeriod(
       incomes,
       selectedPeriod
     );
    return (<div className="md:px-12 px-4">
        <div className="flex lg:justify-end my-4 justify-center">
            <TimePeriods selectedPeriod={selectedPeriod} setSelectedPeriod={setSelectedPeriod} />
        </div>


            <div className="flex lg:flex-row md:justify-around md:items-center flex-col gap-4 items-center justify-center py-4">
                <DonutChart title='Expenses' data={filteredExpenses}/>
                <DonutChart title="Incomes" data={filteredIncomes}/>
                <ExpensesTable limit={'100'} title={'Expenses Table'} data={filteredExpenses}/>
            </div>

        <div className="py-4 flex flex-col gap-4">
            <BarChart type="expenses" data={filteredExpenses}/>
            <BarChart type="incomes" data={filteredIncomes} />
        </div>
     
    </div>

    )
}

export default AnalyticsPage
