import { AgCharts } from "ag-charts-react";
import { ModuleRegistry } from "ag-charts-community";
import { AllCommunityModule } from "ag-charts-community";
ModuleRegistry.registerModules([
  AllCommunityModule
]);
import { expenses } from "../data/expenses";

const numFormatter = new Intl.NumberFormat("en-GB");
const total = expenses.reduce(
  (sum, item)=> sum + item.amount,
  0
);


const options = {

  data: expenses,
   title: {
      text: "Expenses by category",
    },

series:[
  {
   type:"donut",
   angleKey:"amount",
   legendItemKey:"asset",

   innerLabels:[
    {
     text:numFormatter.format(total),
     fontSize:24
    },
    {
     text:"Total Expenses",
     spacing:10
    }
   ]
   
  }
  
 ]
}
function DonutChart(){

return (
 <div className="w-96  border rounded-2xl overflow-hidden  border-gray-200 ">
   <AgCharts options={options}/>
 </div>
)

}

export default DonutChart;
