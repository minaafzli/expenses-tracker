
const timingPeriods = [
  { title:'This month', id:'thisMonth' },
  { title:'Last month', id:'lastMonth' },
  { title:'This year', id:'thisYear' },
  { title:'Last 12 months', id:'last12Months' },
]


function TimePeriods({selectedPeriod, setSelectedPeriod}) {


return (

<ul className="flex border border-border rounded-md overflow-hidden divide-x">
{
timingPeriods.map((time)=>(<li
        key={time.id}
        onClick={()=>setSelectedPeriod(time.id)}
        className={`
        p-2 cursor-pointer font-bold text-text-muted hover:text-primary text-center ${
        selectedPeriod === time.id 
        ? `bg-blue-100 text-primary `
        :""
            }
            `}
>

    {time.title}
</li>

))

}

</ul>

)

}

export default TimePeriods