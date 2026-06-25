
import { AgCharts } from "ag-charts-react";
import groupExpensesByDate from "./GroupExpensesByDate";
import { expenses } from "../data/expenses";

// const chartData = groupExpensesByDate(expenses);
const chartData = groupExpensesByDate(expenses).map(item => ({
    ...item,
    date: new Date(item.date).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
    })
}));

function BarChart() {
    
    const options = {
        data: chartData,

  theme: "ag-default",

  title: {

    text: "Daily Expenses",

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

        text: "Total Expenses",

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
