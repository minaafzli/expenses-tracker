import Cards from "../components/Cards";
import DonutChart from "../components/DonutChart";
import ExpensesTable from "../components/ExpensesTable";
import TimePeriods from "../components/TimePeriods";


function DashboardPage() {
    
    return (
        <div className="px-28 bg-background h-100% ">
            <div className="flex justify-between items-center mb-4 ">
                <h1 className="text-3xl font-bold  my-4">
                    Hi, Mina!
                </h1>
                    <TimePeriods/>
            </div>
            <div className="flex justify-between gap-8">
                <Cards title={'Balance'} amount={'$5,502.45'} amountColor={'primary'}/>
                <Cards title={'Incomes'} amount={'$5,502.45'}/>
                <Cards title={'Expenses'} amount={'$5,502.45'} />
            </div>
            <div className="mt-8 flex justify-between items-center">
                <ExpensesTable/>
                <DonutChart/>

            </div>
        </div>
    )
    
}

export default DashboardPage;