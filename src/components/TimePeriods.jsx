
const timingPeriods =[
    { title:'This month' , id: 'This-month' }, 
    { title:'Last month' , id: 'Last-month' }, 
    { title:'This year' , id: 'This-year' }, 
    { title:'Last 12 months' , id: 'Last-12-months' }, 
    
]

function TimePeriods() {
    return (
        <div className="w-fit py-4 ">
             <ul className="flex border border-border rounded-md overflow-hidden divide-x ">
                    {timingPeriods.map((time) => (
                        <li
                        key={time.id}
                        className="p-2 cursor-pointer font-bold text-text-muted hover:bg-primary-light hover:text-primary text-center"
                        >
                        {time.title}
                        </li>
                    ))}
                    </ul>
        </div>
    )
}

export default TimePeriods
