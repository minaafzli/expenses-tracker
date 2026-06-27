import { AgCharts } from "ag-charts-react";
import { ModuleRegistry } from "ag-charts-community";
import { AllCommunityModule } from "ag-charts-community";
ModuleRegistry.registerModules([
  AllCommunityModule
]);
import groupTransactionsByCategory from "./groupTransactionsByCategory";


function DonutChart({title='expenses' , data}){
  const numFormatter = new Intl.NumberFormat("en-GB");
  const total = data.reduce(
    (sum, item)=> sum + item.amount,
    0
  );
  const chartData = groupTransactionsByCategory(data);
  const options = {
  
    data: chartData,
     title: {
        text: `${title} by category`,
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
       text:`Total ${title}`,
       spacing:10
      }
     ]
     
    }
    
   ]
  }

return (
 <div className="md:w-96 w-86  border rounded-2xl overflow-hidden  my-4 border-gray-200 ">
   <AgCharts options={options}/>
 </div>
)

}

export default DonutChart;
