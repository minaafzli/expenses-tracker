
import { AgCharts } from "ag-charts-react";
import groupTransactionsByDate from "./groupTransactionsByDate";
import { expenses } from "../data/expenses";
import { incomes } from "../data/incomes";


const dataMap = {
  expenses,
  incomes
}


function BarChart({type='expenses'}) {
const transactions = dataMap[type] ?? expenses;

const chartData = groupTransactionsByDate(transactions)
  .map(item=>({
    ...item,
    date:new Date(item.date)
    .toLocaleDateString("en-GB",{
       day:"2-digit",
       month:"2-digit"
    })
  }));
  


    const options = {
        data:chartData,

  theme: "ag-default",

  title: {

    text: `Daily ${type}`,

    fontFamily: "Inter, system-ui, -apple-system, sans-serif",

  },

  series: [

    {

      type: "bar",

      xKey: "date",

      yKey: 'total',

      cornerRadius: 4,

      strokeWidth: 1,

      label: {

        enabled: true,

        placement: "inside-center",

        color:"#000000",

        fontSize:14,

        fontWeight:"bold"
      },

    },

  ],

  axes: {

    x: {

      type: "category",

      label: {

        autoRotate: false,

      },

      bandHighlight: {

        enabled: true,

      },

    },

    y: {

      type: 'number',

      title: {

        text: `total ${type}`,

      },

      gridLine: {

        style: [

          {

            lineDash: [2, 3],

            strokeWidth: 1,

          },

          {

            strokeWidth: 0,

          },

        ],

      },

    },

  },
  animation: {

    enabled: true,
    duration: 800,

  },

};

    return (
        <div className="border border-gray-200 rounded-2xl overflow-hidden text-center">
           <AgCharts options={options}/>
        </div>
    )
}

export default BarChart
