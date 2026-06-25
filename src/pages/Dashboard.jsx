import Cards from "../components/Cards";
import DonutChart from "../components/DonutChart";
import ExpensesTable from "../components/ExpensesTable";
import TimePeriods from "../components/TimePeriods";

const cartsValues=[
    {title:'Balance' , amount:'$5,502.45' , amountColor:'primary',key:'Balane'}  ,
    {title:'Incomes' , amount:'$5,502.45',amountColor:'' ,key:'Incomes'} ,
    {title:'Expenses' , amount:'$5,502.45',amountColor:'' , key:'Expenses'} ,
]
function DashboardPage() {
    
    return (
        <div className="md:px-12 px-4 bg-background h-100% ">
            <div className="flex justify-between items-center mb-4 gap-4 ">
                <h1 className="text-3xl font-bold  my-4">
                    Hi, Mina!
                </h1>
                    <TimePeriods/>
            </div>
            <div className=" grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4
place-items-center">
                {
                    cartsValues.map((value)=>(<Cards key={value.key} title={value.title}  amount={value.amount} amountColor={value.amountColor} />))
                }
            </div>
            
              <div className=" xl:grid-cols-[1fr_400px] mt-8 grid grid-cols-1 place-items-center gap-6 ">
                    <ExpensesTable/>
                    <DonutChart/>
  </div>
        </div>
    )
    
}

export default DashboardPage;