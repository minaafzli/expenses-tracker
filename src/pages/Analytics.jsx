import BarChart from "../components/BarChart"
import Cards from "../components/Cards"
import DonutChart from "../components/DonutChart"
import ExpensesTable from "../components/RecentTransactions"
import TimePeriods from "../components/TimePeriods"

function AnalyticsPage() {
    return (<div className="md:px-12 px-4">
        <div className="flex lg:justify-end justify-center">
            <TimePeriods/>
        </div>

        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4
                place-items-center">
            <Cards title={'Highest spending category'} amount={'229,23'}/>
            <Cards title={'Most expending day'} amount={'2026/15/05'}/>
            <Cards title={'Highest income'} amount={'344,3'}/>
            <Cards title={'Highest expense'} amount={'333,32'}/>
        </div>

            <div className="flex lg:flex-row md:justify-around md:items-center flex-col gap-4 items-center justify-center py-4">
                <DonutChart/>
                <ExpensesTable limit={'100'} title={'Expenses Table'}/>
            </div>

        <div className="py-4">
            <BarChart/>
        </div>
     
    </div>

    )
}

export default AnalyticsPage
